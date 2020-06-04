//initialize the goodies
function initAds() {
  if (window.plugins && window.plugins.AdMob) {
    var ad_units = {
      ios: {
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-4865595196880143/9399577178'
      },
      android: {
        banner: 'ca-app-pub-4865595196880143/9897395315',
        interstitial: 'ca-app-pub-4865595196880143/7214485717'
      }
    };
    var admobid = (/(android)/i.test(navigator.userAgent)) ? ad_units.android : ad_units.ios;

    window.plugins.AdMob.setOptions({
      publisherId: admobid.banner,
      interstitialAdId: admobid.interstitial,
      adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER, //use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
      bannerAtTop: false, // set to true, to put banner at top
      overlap: true, // banner will overlap webview
      offsetTopBar: false, // set to true to avoid ios7 status bar overlap
      isTesting: false, // receiving test ad
      autoShow: false // auto show interstitial ad when loaded
    });

    window.plugins.AdMob.createInterstitialView(); //get the interstitials ready to be shown
    window.plugins.AdMob.requestInterstitialAd(); //get the next one ready only after the current one is closed

  } else {
    //alert( 'admob plugin not ready' );
  }
}

function showAds() {
  window.plugins.AdMob.showInterstitialAd();
}