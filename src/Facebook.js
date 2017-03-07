var InfiniteHell = InfiniteHell || {};

InfiniteHell.Facebook = function () {};

InfiniteHell.Facebook.prototype = {
  fbAsyncInit: function() {
    FB.init({
      appId      : '611658819003576',
      xfbml      : true,
      version    : 'v2.6'
    });
  },

  shareGame: function () {
    this.fbAsyncInit();

    FB.ui({
      method: "feed",
      link: "https://apps.facebook.com/infinitehell/",
      caption: "Play InfiniteHell!",
      name: "Try to beat neverending hell!",
      description: "I already played InfiniteHell, what are you waiting for?",
      picture: "https://doyban.com/facebook/infinitehell/asset/images/logo.png"
    }, function(response){});
  },

  shareScore: function (n) {
    this.fbAsyncInit();

    FB.ui({
      method: "feed",
      link: "https://apps.facebook.com/infinitehell/",
      caption: "Play InfiniteHell!",
      name: "My score in InfiniteHell is " + n + "!",
      description: "I scored " + n + " in InfiniteHell. Can you beat my score?",
      picture: "https://doyban.com/facebook/infinitehell/asset/images/logo.png"
    }, function(response){});
  },

  inviteFriends: function () {
    this.fbAsyncInit();

    FB.ui({
      method: 'apprequests',
      message: 'Play InfiniteHell with me!'
    }, function(response){
      console.log(response);
    });
  },

  showProducts: function () {
    this.fbAsyncInit();

    FB.api(
      '/app/products',
      'get',
      function(response) {
        console.log(response);
      }
    );
  },

  add5Lives: function () {
    this.fbAsyncInit();

    FB.ui(
      {
        method: 'pay',
        action: 'purchaseiap',
        product_id: '5lives'
      }, function (response) { // Callback function
        console.log(response)
      }
    );
  },

  add15Lives: function () {
    this.fbAsyncInit();

    FB.ui(
      {
        method: 'pay',
        action: 'purchaseiap',
        product_id: '15lives'
      }, function (response) { // Callback function
        console.log(response)
      }
    );
  },

  add40Lives: function () {
    this.fbAsyncInit();

    FB.ui(
      {
        method: 'pay',
        action: 'purchaseiap',
        product_id: '40lives'
      }, function (response) { // Callback function
        console.log(response)
      }
    );
  },

  add100Lives: function () {
    this.fbAsyncInit();

    FB.ui(
      {
        method: 'pay',
        action: 'purchaseiap',
        product_id: '100lives'
      }, function (response) { // Callback function
        console.log(response)
      }
    );
  },

  add200Lives: function () {
    this.fbAsyncInit();

    FB.ui(
      {
        method: 'pay',
        action: 'purchaseiap',
        product_id: '200lives'
      }, function (response) { // Callback function
        console.log(response)
      }
    );
  }
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));