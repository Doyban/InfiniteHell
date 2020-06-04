cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-purchase.InAppPurchase",
      "file": "plugins/cordova-plugin-purchase/www/store-ios.js",
      "pluginId": "cordova-plugin-purchase",
      "clobbers": [
        "store"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-admob-simple.AdMob",
      "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
      "pluginId": "cordova-plugin-admob-simple",
      "clobbers": [
        "window.plugins.AdMob"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook4",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-purchase": "9.0.0",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-admob-sdklibs": "2.1.6",
    "cordova-plugin-admob-simple": "3.3.8",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.2",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-facebook4": "6.2.0"
  };
});