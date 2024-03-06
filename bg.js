chrome.action.onClicked.addListener(tab => {
    const hexEncode = str => {
        let hex, i;
        let result = '';
        for (i = 0; i < str.length; i++) {
            hex = str.charCodeAt(i).toString(16);
            result += ('000'+hex).slice(-4);
        }
        return result;
    }
    chrome.storage.sync.get(['host'], (items) => {
        if (items.host) {
            chrome.tabs.create({'url': items.host + '?ext=' + hexEncode(tab.url)}, function(tab) {});
        }
      });
  });

  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'host': 'https://snowdare.org'}, function() {

      });
  });