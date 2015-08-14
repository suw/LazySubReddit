// Go to the subreddit the user entered
chrome.omnibox.onInputEntered.addListener(
  function(subreddit) {
      chrome.tabs.update({
          url: "http://www.reddit.com/r/" + subreddit
      });
  });
