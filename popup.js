document.addEventListener('DOMContentLoaded', () => {
    const bookmarkTitle = document.getElementById('bookmarkTitle');
    const sectionSelect = document.getElementById('sectionSelect');
    const newSectionInput = document.getElementById('newSection');
    const saveBookmarkBtn = document.getElementById('saveBookmark');
    const bookmarkList = document.getElementById('bookmarkList');
    let currentUrl = '';
    let currentTitle = '';
  
    // Use chrome or browser for cross-browser compatibility
    const browserAPI = window.browser || window.chrome;

    // Fetch current tab URL
  // Fetch current tab URL
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
  
    // Load sections and bookmarks
    function loadData() {
      browserAPI.storage.sync.get('bookmarkData', (data) => {
        const bookmarkData = data.bookmarkData || { sections: {} };
        
        // Populate section dropdown
        sectionSelect.innerHTML = '<option value="">Select Section</option><option value="new">New Section...</option>';
        Object.keys(bookmarkData.sections).forEach(section => {
          const option = document.createElement('option');
          option.value = section;
          option.textContent = section;
          sectionSelect.appendChild(option);
        });
  
        // Display bookmarks
        bookmarkList.innerHTML = '';
        Object.entries(bookmarkData.sections).forEach(([section, bookmarks]) => {
          const sectionDiv = document.createElement('div');
          sectionDiv.innerHTML = `<strong>${section}</strong>`;
          bookmarks.forEach(bookmark => {
            const bookmarkDiv = document.createElement('div');
            bookmarkDiv.className = 'bookmark-item';
            bookmarkDiv.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
            sectionDiv.appendChild(bookmarkDiv);
          });
          bookmarkList.appendChild(sectionDiv);
        });
      });
    }
  
    // Show/hide new section input
    sectionSelect.addEventListener('change', () => {
      newSectionInput.style.display = sectionSelect.value === 'new' ? 'block' : 'none';
    });
  
    // Save bookmark
    saveBookmarkBtn.addEventListener('click', () => {
      const url =currentUrl;
      const title = bookmarkTitle.value.trim() || url;
      let section = sectionSelect.value;
  
      if (!url || !section) {
        alert('Please enter a URL and select a section');
        return;
      }
  
      if (section === 'new') {
        section = newSectionInput.value.trim();
        if (!section) {
          alert('Please enter a section name');
          return;
        }
      }
  
      browserAPI.storage.sync.get('bookmarkData', (data) => {
        const bookmarkData = data.bookmarkData || { sections: {} };
        
        if (!bookmarkData.sections[section]) {
          bookmarkData.sections[section] = [];
        }
        
        bookmarkData.sections[section].push({ url, title, date: new Date().toISOString() });
        
        browserAPI.storage.sync.set({ bookmarkData }, () => {
        //   bookmarkUrl.value = '';
          bookmarkTitle.value = '';
          sectionSelect.value = '';
          newSectionInput.value = '';
          newSectionInput.style.display = 'none';
          loadData();
        });
      });
    });
  
    // Initial load
    loadData();
  });