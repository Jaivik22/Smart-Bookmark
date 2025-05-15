// logic.js

// Use `chrome` or `browser` API depending on your setup
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

let currentSyncCode = null;

// Load bookmarks (from Firestore if synced)
async function loadData() {
  const syncCode = await getSyncCode();
  if (syncCode) {
    currentSyncCode = syncCode;
    const doc = await db.collection("bookmarks").doc(syncCode).get();
    const bookmarkData = doc.exists ? doc.data() : { sections: {} };
    renderBookmarks(bookmarkData);
  } else {
    const bookmarkData = await getBookmarkData();
    renderBookmarks(bookmarkData);
  }
}

// Save to Firestore if synced
async function saveBookmark(bookmark, section) {
  const syncCode = await getSyncCode();
  if (syncCode) {
    const docRef = db.collection("bookmarks").doc(syncCode);
    const docSnap = await docRef.get();
    let data = docSnap.exists ? docSnap.data() : { sections: {} };

    if (!data.sections[section]) data.sections[section] = [];
    data.sections[section].push(bookmark);

    await docRef.set(data);
    loadData();
  } else {
    const bookmarkData = await getBookmarkData();
    if (!bookmarkData.sections[section]) {
      bookmarkData.sections[section] = [];
    }
    bookmarkData.sections[section].push(bookmark);
    browserAPI.storage.sync.set({ bookmarkData }, loadData);
  }
}

// Util: Get Sync Code from local storage
function getSyncCode() {
  return new Promise((resolve) => {
    browserAPI.storage.sync.get('syncCode', (data) => {
      resolve(data.syncCode || null);
    });
  });
}

// Util: Get bookmark data (local fallback)
function getBookmarkData() {
  return new Promise((resolve) => {
    browserAPI.storage.sync.get('bookmarkData', (data) => {
      resolve(data.bookmarkData || { sections: {} });
    });
  });
}

// Called when a new bookmark is added
function addBookmark(url, title, section) {
  const bookmark = { url, title, date: new Date().toISOString() };
  saveBookmark(bookmark, section);
}

// Called when user enters sync code
function setupSyncButtonHandlers() {
  const submitCodeBtn = document.getElementById('submitCodeBtn');
  const syncCodeInput = document.getElementById('syncCodeInput');

  submitCodeBtn.addEventListener('click', () => {
    const code = syncCodeInput.value.trim();
    if (!code || !/^\d{6}$/.test(code)) {
      alert('Please enter a valid 6-digit code');
      return;
    }

    browserAPI.storage.sync.set({ syncCode: code }, () => {
      alert(`Bookmarks will now sync with code: ${code}`);
      location.reload(); // reload popup to show synced data
    });
  });
}
