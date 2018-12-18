var preloadedInterstitial = null;

// Initialize Messenger SDK.
(function initSDK() {
  // Required methods to open Messenger game.
  FBInstant.initializeAsync();
  FBInstant.setLoadingProgress(100);
  FBInstant.startGameAsync();
}());

// Initialize Messenger ads.
function initAds() {
  FBInstant.getInterstitialAdAsync(
    '204595297151775_204823407128964' // Your Ad Placement Id
  ).then(function(interstitial) {
    // Load the Ad asynchronously
    preloadedInterstitial = interstitial;
    return preloadedInterstitial.loadAsync();
  }).then(function() {
  }).catch(function(err){
  });
}

// Initialize code to display ads.
function showAds() {
  preloadedInterstitial.showAsync()
    .then(function() {
    })
    .catch(function(e) {
    });
}

// Quit game.
function exitGame() {
  FBInstant.quit();
}

// Invite friends.
function inviteGame() {
  FBInstant.shareAsync({
    intent: 'INVITE',
    image: 'https://doyban.com/logos/InfiniteHell.png',
    text: 'Play InfiniteHell on Messenger!',
    data: { myReplayData: '...' }
  }).then(function() {
  });
}

// Share game.
function shareGame() {
  FBInstant.shareAsync({
    intent: 'SHARE',
    image: 'https://doyban.com/logos/InfiniteHell.png',
    text: 'Play InfiniteHell on Messenger!',
    data: { myReplayData: '...' }
  }).then(function() {
  });
}

// Share score.
function shareScore(score) {
  FBInstant.shareAsync({
    intent: 'SHARE',
    image: 'https://doyban.com/logos/InfiniteHell.png',
    text: 'My score in InfiniteHell is ' + score + '.',
    data: { myReplayData: '...' }
  }).then(function() {
  });
}
