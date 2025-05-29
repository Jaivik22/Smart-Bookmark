import { db } from './src/firebase.js'; // Import Firebase configuration
import { collection, doc, setDoc, getDoc, getDocs, arrayUnion, deleteDoc } from 'firebase/firestore';


document.addEventListener('DOMContentLoaded', () => {
  const syncCodeInput = document.getElementById('syncCode');
  const submitCodeBtn = document.getElementById('submitCode');
  const codeDisplay = document.getElementById('codeDisplay');

  const browserAPI = window.browser || window.chrome;

  // Generate random 6-digit code
  function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Load or generate sync code
  function loadSyncCode() {
    browserAPI.storage.sync.get('syncCode', (data) => {
      if (data.syncCode) {
        codeDisplay.textContent = `Your Bookmarksa are synced to: ${data.syncCode}`;
      } else {
        const newCode = generateRandomCode();
        browserAPI.storage.sync.set({ syncCode: newCode }, () => {
          codeDisplay.textContent = `Your Bookmarks are synced to: ${newCode}`;
        });
      }
    });
  }

  // Handle code submission
  submitCodeBtn.addEventListener('click', async() => {
    const code = syncCodeInput.value.trim();
    if (!code || !/^\d{6}$/.test(code)) {
      console.log('Please enter a valid 6-digit code');
      return;
    }
    // Store the submitted code as the sync code
    const userRef = doc(db, 'users', code);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      // Valid user, store and redirect
      browserAPI.storage.sync.set({ syncCode: code }, () => {
      console.log('Sync code updated to:', code);
      codeDisplay.textContent = `Your Bookmarks are synced to: ${code}`;
      // alert(`Bookmarks now synced with code: ${code}`);
      console.log('Bookmarks now synced with code: '+code);
      syncCodeInput.value = '';
      window.location.reload(); // will reload popup.js and load bookmarks
    });
    }
    else{
      console.log('Enter valid code');
    }
  });


  // Initial load
  loadSyncCode();
});

// import { db } from './src/firebase.js';
// import { doc, getDoc } from 'firebase/firestore';

// document.addEventListener('DOMContentLoaded', () => {
//   const syncCodeInput = document.getElementById('syncCode');
//   const submitCodeBtn = document.getElementById('submitCode');
//   const codeDisplay = document.getElementById('codeDisplay');
//   const browserAPI = window.browser || window.chrome;

//   // Load sync code
//   function loadSyncCode() {
//     browserAPI.storage.sync.get('syncCode', (data) => {
//       if (data.syncCode) {
//         codeDisplay.textContent = `Your Bookmarks are synced to: ${data.syncCode}`;
//       } else {
//         codeDisplay.textContent = 'No sync code set. Please wait...';
//       }
//     });
//   }

//   // Handle code submission
//   submitCodeBtn.addEventListener('click', async () => {
//     const code = syncCodeInput.value.trim();
//     if (!code || !/^\d{6}$/.test(code)) {
//       console.log('Invalid input: Please enter a valid 6-digit code');
//       alert('Please enter a valid 6-digit code');
//       return;
//     }

//     try {
//       console.log('Checking sync code:', code);
//       const userRef = doc(db, 'users', code);
//       const userSnap = await getDoc(userRef);

//       console.log('Firebase getDoc response:', {
//         exists: userSnap.exists(),
//         data: userSnap.data(),
//         id: userSnap.id
//       });

//       if (userSnap.exists()) {
//         // Valid user, store and redirect
//         await new Promise((resolve) => {
//           browserAPI.storage.sync.set({ syncCode: code }, resolve);
//         });
//         console.log('Sync code updated to:', code);
//         codeDisplay.textContent = `Your Bookmarks are synced to: ${code}`;
//         // alert(`Bookmarks now synced with code: ${code}`);
//         syncCodeInput.value = '';
//         window.location.reload(); // Reload popup.js to load bookmarks
//       } else {
//         console.log('No user document found for code:', code);
//         // alert('Invalid code. Please enter a valid sync code.');
//       }
//     } catch (error) {
//       console.error('Error checking sync code in Firebase:', error);
//       // alert('Error verifying sync code. Please try again or check your Firebase configuration.');
//     }
//   });

//   // Initial load
//   loadSyncCode();
// });