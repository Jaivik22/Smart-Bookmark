// import { db } from './src/firebase.js'; // Import from bundled file
// import { collection, doc, setDoc, arrayUnion } from 'firebase/firestore'; // Import modular Firestore functionsconsole.log('Firebase DB:', db);

// document.addEventListener('DOMContentLoaded', () => {
//   const bookmarkTitle = document.getElementById('bookmarkTitle');
//   const sectionSelect = document.getElementById('sectionSelect');
//   const newSectionInput = document.getElementById('newSection');
//   const saveBookmarkBtn = document.getElementById('saveBookmark');
//   const bookmarkList = document.getElementById('bookmarkList');
//   const syncBtn = document.getElementById('syncBtn');
//   const backArrow = document.getElementById('backArrow');
//   const bookmarkContainer = document.getElementById('bookmarkContainer');
//   const syncContainer = document.getElementById('syncContainer');
//   let currentUrl = '';

//   const browserAPI = window.browser || window.chrome;

//   // Helper: cross-browser storage.get
//   function getBookmarkData() {
//     return new Promise((resolve) => {
//       if (browserAPI.storage.sync.get.length === 1) {
//         browserAPI.storage.sync.get('bookmarkData').then((data) => {
//           resolve(data.bookmarkData || { sections: {} });
//         }).catch((err) => {
//           console.error('Error fetching bookmarkData:', err);
//           resolve({ sections: {} });
//         });
//       } else {
//         browserAPI.storage.sync.get('bookmarkData', (data) => {
//           resolve(data?.bookmarkData || { sections: {} });
//         });
//       }
//     });
//   }

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

//   // Load bookmarks into UI
//   async function loadData() {
//     const bookmarkData = await getBookmarkData();

//     sectionSelect.innerHTML = '<option value="">Select Section</option><option value="new">New Section...</option>';
//     Object.keys(bookmarkData.sections).forEach(section => {
//       const option = document.createElement('option');
//       option.value = section;
//       option.textContent = section;
//       sectionSelect.appendChild(option);
//     });

//     bookmarkList.innerHTML = '';
//     console.log('Bookmark data:', bookmarkData);
//     Object.entries(bookmarkData.sections).forEach(([section, bookmarks]) => {
//       const sectionDiv = document.createElement('div');
//       sectionDiv.innerHTML = `<strong>${section}</strong>`;
//       bookmarks.forEach((bookmark, index) => {
//         if (!bookmark || !bookmark.url) {
//           console.warn('Invalid bookmark data:', bookmark);
//           return;
//         }
//         const title = bookmark.title || 'Untitled Bookmark';
//         console.log('Rendering bookmark:', { section, index, title, url: bookmark.url });
//         const bookmarkDiv = document.createElement('div');
//         bookmarkDiv.className = 'bookmark-item';
//         bookmarkDiv.innerHTML = `
//           <a href="${bookmark.url}" target="_blank">${title}</a>
//           <button class="delete-btn" data-section="${section}" data-index="${index}">Delete</button>`;
//         sectionDiv.appendChild(bookmarkDiv);
//       });
//       bookmarkList.appendChild(sectionDiv);
//     });

//     // Bind delete buttons
//     document.querySelectorAll('.delete-btn').forEach(btn => {
//       btn.addEventListener('click', (e) => {
//         const section = e.target.dataset.section;
//         const index = parseInt(e.target.dataset.index);
//         deleteBookmark(section, index);
//       });
//     });
//   }

//   // Delete a bookmark
//   async function deleteBookmark(section, index) {
//     const bookmarkData = await getBookmarkData();
//     if (bookmarkData.sections[section]) {
//       bookmarkData.sections[section].splice(index, 1);
//       if (bookmarkData.sections[section].length === 0) {
//         delete bookmarkData.sections[section];
//       }
//       browserAPI.storage.sync.set({ bookmarkData }, () => {
//         loadData();
//       });
//     }
//   }

//   // Show/hide new section input
//   sectionSelect.addEventListener('change', () => {
//     newSectionInput.style.display = sectionSelect.value === 'new' ? 'block' : 'none';
//   });

//   // Save bookmark
//   saveBookmarkBtn.addEventListener('click', () => {
//     const url = currentUrl;
//     const title = bookmarkTitle.value.trim() || url || 'Untitled';
//     let section = sectionSelect.value;

//     if (!url || !section) {
//       alert('Please select a section');
//       return;
//     }

//     if (section === 'new') {
//       section = newSectionInput.value.trim();
//       if (!section) {
//         alert('Please enter a section name');
//         return;
//       }
//     }
//     saveBookmarkToFirebase(title, url, section);

//     // getBookmarkData().then((bookmarkData) => {
//     //   if (!bookmarkData.sections[section]) {
//     //     bookmarkData.sections[section] = [];
//     //   }

//     //   const bookmark = { url, title, date: new Date().toISOString() };
//     //   console.log('Saving bookmark:', bookmark);
//     //   if (!bookmark.title) {
//     //     bookmark.title = 'Untitled';
//     //   }

//     //   bookmarkData.sections[section].push(bookmark);

//     //   browserAPI.storage.sync.set({ bookmarkData }, () => {
//     //     bookmarkTitle.value = '';
//     //     sectionSelect.value = '';
//     //     newSectionInput.value = '';
//     //     newSectionInput.style.display = 'none';
//     //     loadData();
//     //   });
//     // });
//   });

//   async function saveBookmarkToFirebase(title, url, section) {
//   try {
//     const topicRef = doc(collection(db, 'users'), usercode, section, section_name); // Use section instead of topic
//     // const topicRef = doc(collection(db, 'users'), '1234', 'section', "tech"); // Use section instead of topic
//     // Atomically add new URL entry to the `urls` array field
//     await setDoc(
//       topicRef,
//       {
//         urls: arrayUnion({ title, url }),
//       },
//       { merge: true }
//     );
//     console.log('Bookmark saved successfully!');
//   } catch (e) {
//     console.error('Error saving bookmark:', e);
//   }
// }

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


import { db } from './src/firebase.js'; // Import Firebase configuration
import { collection, doc, setDoc, getDoc, getDocs, arrayUnion, deleteDoc } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', () => {
  const bookmarkTitle = document.getElementById('bookmarkTitle');
  const sectionSelect = document.getElementById('sectionSelect');
  const newSectionInput = document.getElementById('newSection');
  const saveBookmarkBtn = document.getElementById('saveBookmark');
  const bookmarkList = document.getElementById('bookmarkList');
  const syncBtn = document.getElementById('syncBtn');
  const backArrow = document.getElementById('backArrow');
  const bookmarkContainer = document.getElementById('bookmarkContainer');
  const syncContainer = document.getElementById('syncContainer');
  let currentUrl = '';

  const browserAPI = window.browser || window.chrome;

  // Assume usercode is available (e.g., from Firebase Authentication)
  const usercode = '1234'; // Replace with actual user ID from authentication

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
    }
  });

  // Load sections and bookmarks from Firebase
  async function loadData() {
    try {
      // Fetch sections from Firebase
      const sectionsSnapshot = await getDocs(collection(db, 'users', usercode, 'topics'));
      const sections = [];
      sectionsSnapshot.forEach(doc => sections.push(doc.id));

      // Populate dropdown
      sectionSelect.innerHTML = '<option value="">Select Section</option><option value="new">New Section...</option>';
      sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section;
        option.textContent = section;
        sectionSelect.appendChild(option);
      });

      // Fetch and display bookmarks
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
            <a href="${bookmark.url}" target="_blank">${title}</a>
            <button class="delete-btn" data-section="${section}" data-index="${index}">Delete</button>`;
          sectionDiv.appendChild(bookmarkDiv);
        });
        bookmarkList.appendChild(sectionDiv);
      }

      // Bind delete buttons
      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const section = e.target.dataset.section;
          const index = parseInt(e.target.dataset.index);
          deleteBookmark(section, index);
        });
      });
    } catch (error) {
      console.error('Error loading data from Firebase:', error);
      alert('Failed to load bookmarks. Please try again.');
    }
  }

  // Delete a bookmark
  async function deleteBookmark(section, index) {
    try {
      const sectionRef = doc(db, 'users', usercode, 'topics', section);
      const sectionDoc = await getDoc(sectionRef);
      if (sectionDoc.exists()) {
        const bookmarks = sectionDoc.data().urls || [];
        bookmarks.splice(index, 1);
        if (bookmarks.length === 0) {
          await deleteDoc(sectionRef); // Delete section if no bookmarks remain
        } else {
          await setDoc(sectionRef, { urls: bookmarks }, { merge: true });
        }
        loadData();
      }
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      alert('Failed to delete bookmark. Please try again.');
    }
  }

  // Show/hide new section input
  sectionSelect.addEventListener('change', () => {
    newSectionInput.style.display = sectionSelect.value === 'new' ? 'block' : 'none';
  });

  // Save bookmark to Firebase
  async function saveBookmarkToFirebase(title, url, section) {
    try {
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
      loadData();
    } catch (error) {
      console.error('Error saving bookmark:', error);
      alert('Failed to save bookmark. Please try again.');
    }
  }

  // Save bookmark
  saveBookmarkBtn.addEventListener('click', () => {
    const url = currentUrl;
    const title = bookmarkTitle.value.trim() || url || 'Untitled';
    let section = sectionSelect.value;

    if (!url || !section) {
      alert('Please select a section');
      return;
    }

    if (section === 'new') {
      section = newSectionInput.value.trim();
      if (!section) {
        alert('Please enter a section name');
        return;
      }
    }
    console.log("created section: "+section);
    saveBookmarkToFirebase(title, url, section);
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
  loadData();
});