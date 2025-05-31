import { db } from './src/firebase.js';
import { collection, doc, setDoc, getDoc, getDocs, arrayUnion, deleteDoc } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', async () => {
  const bookmarkTitle = document.getElementById('bookmarkTitle');
  const sectionSelect = document.getElementById('sectionSelect');
  const newSectionInput = document.getElementById('newSection');
  const saveBookmarkBtn = document.getElementById('saveBookmark');
  const bookmarkList = document.getElementById('bookmarkList');
  const syncBtn = document.getElementById('syncBtn');
  const backArrow = document.getElementById('backArrow');
  const bookmarkContainer = document.getElementById('bookmarkContainer');
  const syncContainer = document.getElementById('syncContainer');
  const codeDisplay = document.getElementById('codeDisplay');
  const loader = document.getElementById('loader');
  const toast = document.getElementById('toast');

  let currentUrl = '';
  const browserAPI = window.browser || window.chrome;

  // Toast notification function
  function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);
  }

  // Toggle loading state
  function toggleLoading(isLoading) {
    loader.style.display = isLoading ? 'block' : 'none';
    bookmarkContainer.classList.toggle('loading', isLoading);
  }

  // Ensure sync code exists, generate if missing
  let usercode = '';
  try {
    toggleLoading(true);
    const data = await new Promise((resolve) => {
      browserAPI.storage.sync.get('syncCode', resolve);
    });

    if (data.syncCode) {
      usercode = data.syncCode;
      codeDisplay.textContent = `Synced to: ${usercode}`;
    } else {
      codeDisplay.textContent = 'Generating sync code...';
      let isUnique = false;
      while (!isUnique) {
        const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
        const userRef = doc(db, 'users', generatedCode);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          usercode = generatedCode;
          await new Promise((resolve) => {
            browserAPI.storage.sync.set({ syncCode: usercode }, resolve);
          });
          await createUserInFirebase(usercode);
          isUnique = true;
          codeDisplay.textContent = `Synced to: ${usercode}`;
          showToast('Sync code generated successfully!');
        }
      }
    }
  } catch (error) {
    console.error('Error handling sync code:', error);
    showToast('Failed to initialize sync code', 'error');
  } finally {
    toggleLoading(false);
  }

  // Fetch current tab URL and title
  browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0]) {
      currentUrl = tabs[0].url || '';
      const title = tabs[0].title || currentUrl || 'Untitled';
      bookmarkTitle.value = title;
      console.log('Fetched tab data:', { url: currentUrl, title: title });
    } else {
      console.error('Failed to fetch active tab data:', tabs);
      bookmarkTitle.value = 'Untitled';
      currentUrl = '';
      showToast('Failed to fetch tab data', 'error');
    }
  });

  async function createUserInFirebase(code) {
    try {
      const userRef = doc(db, 'users', code);
      await setDoc(userRef, {
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      }, { merge: true });
      console.log('User document created in Firebase:', code);
    } catch (error) {
      console.error('Error creating user in Firebase:', error);
      showToast('Failed to create user in Firebase', 'error');
      throw error;
    }
  }

  // Load sections and bookmarks from Firebase
  async function loadData() {
    try {
      toggleLoading(true);
      codeDisplay.textContent = `Synced to: ${usercode}`;
      const sectionsSnapshot = await getDocs(collection(db, 'users', usercode, 'topics'));
      const sections = [];
      sectionsSnapshot.forEach(doc => sections.push(doc.id));

      sectionSelect.innerHTML = '<option value="">Select Section</option><option value="new">New Section...</option>';
      sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section;
        option.textContent = section;
        sectionSelect.appendChild(option);
      });

      bookmarkList.innerHTML = '';
      for (const section of sections) {
        const sectionDoc = await getDoc(doc(db, 'users', usercode, 'topics', section));
        const bookmarks = sectionDoc.exists() ? sectionDoc.data().urls || [] : [];

        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = `<strong>${section}</strong>`;
        bookmarks.forEach((bookmark, index) => {
          if (!bookmark || !bookmark.url) {
            console.warn('Invalid bookmark data:', bookmark);
            return;
          }
          const title = bookmark.title || 'Untitled Bookmark';
          console.log('Rendering bookmark:', { section, index, title, url: bookmark.url });
          const bookmarkDiv = document.createElement('div');
          bookmarkDiv.className = 'bookmark-item';
          bookmarkDiv.innerHTML = `
            <a href="${bookmark.url}" target="_blank" title="${title}">${title}</a>
            <button class="delete-btn" data-section="${section}" data-index="${index}" aria-label="Delete ${title}">Delete</button>`;
          sectionDiv.appendChild(bookmarkDiv);
        });
        bookmarkList.appendChild(sectionDiv);
      }

      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const section = e.target.dataset.section;
          const index = parseInt(e.target.dataset.index);
          deleteBookmark(section, index);
        });
      });

      showToast('Bookmarks loaded successfully!');
    } catch (error) {
      console.error('Error loading data from Firebase:', error);
      showToast('Failed to load bookmarks', 'error');
    } finally {
      toggleLoading(false);
    }
  }

  // Delete a bookmark
  async function deleteBookmark(section, index) {
    try {
      toggleLoading(true);
      const sectionRef = doc(db, 'users', usercode, 'topics', section);
      const sectionDoc = await getDoc(sectionRef);
      if (sectionDoc.exists()) {
        const bookmarks = sectionDoc.data().urls || [];
        bookmarks.splice(index, 1);
        if (bookmarks.length === 0) {
          await deleteDoc(sectionRef);
          showToast(`Section "${section}" deleted successfully!`);
        } else {
          await setDoc(sectionRef, { urls: bookmarks }, { merge: true });
          showToast('Bookmark deleted successfully!');
        }
        await loadData();
      }
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      showToast('Failed to delete bookmark', 'error');
    } finally {
      toggleLoading(false);
    }
  }

  // Show/hide new section input
  sectionSelect.addEventListener('change', () => {
    newSectionInput.style.display = sectionSelect.value === 'new' ? 'block' : 'none';
  });

  // Save bookmark to Firebase
  async function saveBookmarkToFirebase(title, url, section) {
    try {
      toggleLoading(true);
      const sectionRef = doc(db, 'users', usercode, 'topics', section);
      await setDoc(
        sectionRef,
        {
          urls: arrayUnion({ title, url, date: new Date().toISOString() }),
        },
        { merge: true }
      );
      console.log('Bookmark saved successfully!');
      bookmarkTitle.value = '';
      sectionSelect.value = '';
      newSectionInput.value = '';
      newSectionInput.style.display = 'none';
      showToast('Bookmark saved successfully!');
      await loadData();
    } catch (error) {
      console.error('Error saving bookmark:', error);
      showToast('Failed to save bookmark', 'error');
    } finally {
      toggleLoading(false);
    }
  }

  // Save bookmark
  saveBookmarkBtn.addEventListener('click', async () => {
    const url = currentUrl;
    const title = bookmarkTitle.value.trim() || url || 'Untitled';
    let section = sectionSelect.value;

    if (!url || !section) {
      showToast('Please select a section', 'error');
      return;
    }

    if (section === 'new') {
      section = newSectionInput.value.trim();
      if (!section) {
        showToast('Please enter a section name', 'error');
        return;
      }
    }
    console.log("Created section: " + section);
    await saveBookmarkToFirebase(title, url, section);
  });

  // Toggle to sync interface
  syncBtn.addEventListener('click', () => {
    bookmarkContainer.style.display = 'none';
    syncContainer.style.display = 'block';
    syncBtn.style.display = 'none';
    backArrow.style.display = 'inline';
  });

  // Toggle back to bookmark interface
  backArrow.addEventListener('click', () => {
    syncContainer.style.display = 'none';
    bookmarkContainer.style.display = 'block';
    syncBtn.style.display = 'flex';
    backArrow.style.display = 'none';
  });

  // Initial load
  await loadData();
});




// import { db } from './src/firebase.js'; // Import Firebase configuration
// import { collection, doc, setDoc, getDoc, getDocs, arrayUnion, deleteDoc } from 'firebase/firestore';

// document.addEventListener('DOMContentLoaded', async() => {
//   const bookmarkTitle = document.getElementById('bookmarkTitle');
//   const sectionSelect = document.getElementById('sectionSelect');
//   const newSectionInput = document.getElementById('newSection');
//   const saveBookmarkBtn = document.getElementById('saveBookmark');
//   const bookmarkList = document.getElementById('bookmarkList');
//   const syncBtn = document.getElementById('syncBtn');
//   const backArrow = document.getElementById('backArrow');
//   const bookmarkContainer = document.getElementById('bookmarkContainer');
//   const syncContainer = document.getElementById('syncContainer');
//     const codeDisplay = document.getElementById('codeDisplay');

//   let currentUrl = '';

//   const browserAPI = window.browser || window.chrome;

//  // Ensure sync code exists, generate if missing
// let usercode = '';
// try {
//   const data = await new Promise((resolve) => {
//     browserAPI.storage.sync.get('syncCode', resolve);
//   });

//   if (data.syncCode) {
//     usercode = data.syncCode;
//     console.log('Usercode already exists:', usercode);

//   } else {
//     // Generate new code
//     codeDisplay.textContent = 'No sync code set. Please wait...';
//     // usercode = Math.floor(100000 + Math.random() * 900000).toString();
//     // await new Promise((resolve) => {
//     //   browserAPI.storage.sync.set({ syncCode: usercode }, resolve);
//     // });
//     // console.log('Generated and saved new usercode:', usercode);
//     // // Create Firebase user
//     // await createUserInFirebase(usercode);
//     let isUnique = false;
//     while (!isUnique) {
//       // Step 1: Generate 6-digit random code
//       const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

//       // Step 2: Check if it exists in Firebase
//       const userRef = doc(db, 'users', generatedCode);
//       const userSnap = await getDoc(userRef);

//       if (!userSnap.exists()) {
//         // Step 3: Unique code found
//         usercode = generatedCode;

//         // Step 4: Save in browser storage
//         await new Promise((resolve) => {
//           browserAPI.storage.sync.set({ syncCode: usercode }, resolve);
//         });

//         // Step 5: Create user in Firebase
//         await createUserInFirebase(usercode);
//         isUnique = true;
//         console.log('Generated and saved new unique usercode:', usercode);
//       } else {
//         console.log('Generated code already exists, generating new one...');
//       }
//     }
//   }
//   // codeDisplay.textContent = `Your Bookmarks are synced to: ${data.syncCode}`;

// } catch (error) {
//   console.error('Error handling sync code:', error);
// }


//   // Fetch current tab URL and title
//   browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (tabs && tabs[0]) {
//       currentUrl = tabs[0].url || '';
//       const title = tabs[0].title || currentUrl || 'Untitled';
//       bookmarkTitle.value = title;
//       console.log('Fetched tab data:', { url: currentUrl, title: title });
//     } else {
//       console.error('Failed to fetch active tab data:', tabs);
//       bookmarkTitle.value = 'Untitled';
//       currentUrl = '';
//     }
//   });

//   async function createUserInFirebase(code) {
//   try {
//     const userRef = doc(db, 'users', code);
//     await setDoc(userRef, {
//       createdAt: new Date().toISOString(),
//       lastActive: new Date().toISOString()
//     }, { merge: true });
//     console.log('User document created in Firebase:', code);
//   } catch (error) {
//     console.error('Error creating user in Firebase:', error);
//   }
// }


//   // Load sections and bookmarks from Firebase
//   async function loadData() {
//     try {
//         codeDisplay.textContent = `Your Bookmarks are synced to: ${usercode}`;

//       // Fetch sections from Firebase
//       const sectionsSnapshot = await getDocs(collection(db, 'users', usercode, 'topics'));
//       const sections = [];
//       sectionsSnapshot.forEach(doc => sections.push(doc.id));

//       // Populate dropdown
//       sectionSelect.innerHTML = '<option value="">Select Section</option><option value="new">New Section...</option>';
//       sections.forEach(section => {
//         const option = document.createElement('option');
//         option.value = section;
//         option.textContent = section;
//         sectionSelect.appendChild(option);
//       });

//       // Fetch and display bookmarks
//       bookmarkList.innerHTML = '';
//       for (const section of sections) {
//         const sectionDoc = await getDoc(doc(db, 'users', usercode, 'topics', section));
//         const bookmarks = sectionDoc.exists() ? sectionDoc.data().urls || [] : [];

//         const sectionDiv = document.createElement('div');
//         sectionDiv.innerHTML = `<strong>${section}</strong>`;
//         bookmarks.forEach((bookmark, index) => {
//           if (!bookmark || !bookmark.url) {
//             console.warn('Invalid bookmark data:', bookmark);
//             return;
//           }
//           const title = bookmark.title || 'Untitled Bookmark';
//           console.log('Rendering bookmark:', { section, index, title, url: bookmark.url });
//           const bookmarkDiv = document.createElement('div');
//           bookmarkDiv.className = 'bookmark-item';
//           bookmarkDiv.innerHTML = `
//             <a href="${bookmark.url}" target="_blank">${title}</a>
//             <button class="delete-btn" data-section="${section}" data-index="${index}">Delete</button>`;
//           sectionDiv.appendChild(bookmarkDiv);
//         });
//         bookmarkList.appendChild(sectionDiv);
//       }

//       // Bind delete buttons
//       document.querySelectorAll('.delete-btn').forEach(btn => {
//         btn.addEventListener('click', (e) => {
//           const section = e.target.dataset.section;
//           const index = parseInt(e.target.dataset.index);
//           deleteBookmark(section, index);
//         });
//       });
//     } catch (error) {
//       console.error('Error loading data from Firebase:', error);
//     }
//   }

//   // Delete a bookmark
//   async function deleteBookmark(section, index) {
//     try {
//       const sectionRef = doc(db, 'users', usercode, 'topics', section);
//       const sectionDoc = await getDoc(sectionRef);
//       if (sectionDoc.exists()) {
//         const bookmarks = sectionDoc.data().urls || [];
//         bookmarks.splice(index, 1);
//         if (bookmarks.length === 0) {
//           await deleteDoc(sectionRef); // Delete section if no bookmarks remain
//         } else {
//           await setDoc(sectionRef, { urls: bookmarks }, { merge: true });
//         }
//         loadData();
//       }
//     } catch (error) {
//       console.error('Error deleting bookmark:', error);
//     }
//   }

//   // Show/hide new section input
//   sectionSelect.addEventListener('change', () => {
//     newSectionInput.style.display = sectionSelect.value === 'new' ? 'block' : 'none';
//   });

//   // Save bookmark to Firebase
//   async function saveBookmarkToFirebase(title, url, section) {
//     try {
//       const sectionRef = doc(db, 'users', usercode, 'topics', section);
//       await setDoc(
//         sectionRef,
//         {
//           urls: arrayUnion({ title, url, date: new Date().toISOString() }),
//         },
//         { merge: true }
//       );
//       console.log('Bookmark saved successfully!');
//       bookmarkTitle.value = '';
//       sectionSelect.value = '';
//       newSectionInput.value = '';
//       newSectionInput.style.display = 'none';
//       loadData();
//     } catch (error) {
//       console.error('Error saving bookmark:', error);
//     }
//   }

//   // Save bookmark
//   saveBookmarkBtn.addEventListener('click', () => {
//     const url = currentUrl;
//     const title = bookmarkTitle.value.trim() || url || 'Untitled';
//     let section = sectionSelect.value;

//     if (!url || !section) {
//        console.log('Please select a section');
//       return;
//     }

//     if (section === 'new') {
//       section = newSectionInput.value.trim();
//       if (!section) {
//         console.log('Please enter a section name');
//         return;
//       }
//     }
//     console.log("created section: "+section);
//     saveBookmarkToFirebase(title, url, section);
//   });

//   // Toggle to sync interface
//   syncBtn.addEventListener('click', () => {
//     bookmarkContainer.style.display = 'none';
//     syncContainer.style.display = 'block';
//     syncBtn.style.display = 'none';
//     backArrow.style.display = 'inline';
//   });

//   // Toggle back to bookmark interface
//   backArrow.addEventListener('click', () => {
//     syncContainer.style.display = 'none';
//     bookmarkContainer.style.display = 'block';
//     syncBtn.style.display = 'flex';
//     backArrow.style.display = 'none';
//   });

//   // Initial load
//   loadData();
// });
