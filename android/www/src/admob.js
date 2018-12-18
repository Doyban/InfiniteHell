var admobid = {};

if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-4865595196880143/9897395315',
        interstitial: 'ca-app-pub-4865595196880143/7214485717'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS, TODO: place own tag.
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone, TODO: place own tag.
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initAds() {
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: false,
        isTesting: true
    });
}

function showAds() {
    AdMob.showInterstitial();
}
