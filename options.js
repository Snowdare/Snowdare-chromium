function save_options() {
    var input = document.getElementById("host");
    var value = input.value;
    chrome.storage.sync.set({'host': value}, function() {
        var status = document.getElementById("status");
        status.innerHTML = "Saved.";
        setTimeout(function() {
          status.innerHTML = "";
        }, 750);
      });
  }
  
  function restore_options() {
    chrome.storage.sync.get(['host'], function(items) {
        if (items.host) {
            var input = document.getElementById("host");
            input.value = items.host;
        }
      });
  }

  setTimeout(function() {
    restore_options();
  document.getElementById("save").addEventListener('click', save_options, false);
  }, 100);