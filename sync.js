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
        codeDisplay.textContent = `Sync Your Bookmarks with: ${data.syncCode}`;
      } else {
        const newCode = generateRandomCode();
        browserAPI.storage.sync.set({ syncCode: newCode }, () => {
          codeDisplay.textContent = `Sync Your Bookmarks with: ${newCode}`;
        });
      }
    });
  }

  // Handle code display click to generate new code
  codeDisplay.addEventListener('click', () => {
    browserAPI.storage.sync.get('syncCode', (data) => {
        codeDisplay.textContent = `Your Bookmarks Are Synced With: ${data.syncCode}`;
    });
  });

  // Handle code submission
  submitCodeBtn.addEventListener('click', () => {
    const code = syncCodeInput.value.trim();
    if (!code || !/^\d{6}$/.test(code)) {
      alert('Please enter a valid 6-digit code');
      return;
    }
    // Placeholder for sync logic
    alert(`Submitted code: ${code}`);
    syncCodeInput.value = '';
  });

  // Initial load
  loadSyncCode();
});