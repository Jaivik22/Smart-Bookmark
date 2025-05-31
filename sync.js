



import { db } from './src/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', () => {
  const syncCodeInput = document.getElementById('syncCode');
  const submitCodeBtn = document.getElementById('submitCode');
  const codeDisplay = document.getElementById('codeDisplay');
  const browserAPI = window.browser || window.chrome;

  // Load sync code
  function loadSyncCode() {
    browserAPI.storage.sync.get('syncCode', (data) => {
      if (data.syncCode) {
        codeDisplay.textContent = `Your Bookmarks are synced to: ${data.syncCode}`;
      } else {
        codeDisplay.textContent = 'No sync code set. Please wait...';
      }
    });
  }

  function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);
  }

  // Handle code submission
  submitCodeBtn.addEventListener('click', async () => {
    const code = syncCodeInput.value.trim();
    if (!code || !/^\d{6}$/.test(code)) {
      console.log('Invalid input: Please enter a valid 6-digit code');
      // alert('Please enter a valid 6-digit code');
      showToast('Please enter a valid 6-digit code','error')
      return;
    }

    try {
      console.log('Checking sync code:', code);
      const userRef = doc(db, 'users', code);
      const userSnap = await getDoc(userRef);

      console.log('Firebase getDoc response:', {
        exists: userSnap.exists(),
        data: userSnap.data(),
        id: userSnap.id
      });

      if (userSnap.exists()) {
        // Valid user, store and redirect
        await new Promise((resolve) => {
          browserAPI.storage.sync.set({ syncCode: code }, resolve);
        });
        console.log('Sync code updated to:', code);
        codeDisplay.textContent = `Your Bookmarks are synced to: ${code}`;
        // alert(`Bookmarks now synced with code: ${code}`);
        syncCodeInput.value = '';
        window.location.reload(); // Reload popup.js to load bookmarks
      } else {
        console.log('No user document found for code:', code);
        showToast('No user found with this code','error')
        // alert('Invalid code. Please enter a valid sync code.');
      }
    } catch (error) {
      console.error('Error checking sync code in Firebase:', error);
      // alert('Error verifying sync code. Please try again or check your Firebase configuration.');
    }
  });

  // Initial load
  // loadSyncCode();
});