var InfiniteHell = InfiniteHell || {};

InfiniteHell.Facebook = function () {};

InfiniteHell.Facebook.prototype = {
  // Init Facebook API.
  fbAsyncInit: function() {
    FB.init({
      appId      : '611658819003576',
      xfbml      : true,
      version    : 'v2.6'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
    this.getLoginStatus();
  },

  // Log user name if connected.
  onLogin: function (response) {
    if (response.status === 'connected') {
      FB.api('/me', function(data) {
        // console.log("This is " + data.name);
      });
    }
  },

  // Check user login status.
  getLoginStatus: function () {
    var that = this;

    FB.getLoginStatus(function(response) {
      // Check login status on load, and if the user is
      // already logged in, go directly to the welcome message.
      if (response.status == 'connected') {
        that.onLogin(response);
        // console.log("connected");
        // console.log("Access token: " + response.authResponse.accessToken);
      } else {
        // Otherwise, show Login dialog first.
        FB.login(function(response) {
          that.onLogin(response);
          // console.log("showing login dialog");
        }, {scope: 'user_friends, email'});
      }
    });
  },

  // Share game.
  shareGame: function () {
    FB.ui({
      method: "feed",
      link: "https://apps.facebook.com/infinitehell/",
      caption: "Play InfiniteHell!",
      name: "Try to beat neverending hell!",
      description: "I already played InfiniteHell, what are you waiting for?",
      picture: "https://doyban.com/logos/InfiniteHell.png"
    }, function(response){});
  },

  // Share game score.
  shareScore: function (n) {
    FB.ui({
      method: "feed",
      link: "https://apps.facebook.com/infinitehell/",
      caption: "Play InfiniteHell!",
      name: "My score in InfiniteHell is " + n + "!",
      description: "I scored " + n + " in InfiniteHell. Can you beat my score?",
      picture: "https://doyban.com/logos/InfiniteHell.png"
    }, function(response){});
  },

  // Invite Facebook friends.
  inviteFriends: function () {
    FB.ui({
      method: 'apprequests',
      message: 'Play InfiniteHell with me!'
    }, function(response){
      // console.log(response);
    });
  },

  // Show Facebook products to purchase in that game.
  showProducts: function () {
    FB.api(
      '/app/products',
      'get',
      function(response) {
        console.log(response);
      }
    );
  },

  // Show Facebook purchases in that game.
  showPurchases: function () {
    var that = this;

    FB.getLoginStatus(function (response) {
      console.log(response.authResponse.accessToken);
      that.token = response.authResponse.accessToken;
    });

    FB.api(
      '/app/purchases',
      'get',
      {access_token: that.token},      // user access token
      function(payload) {        // callback function
        console.log('purchases payload:');
        console.log(payload);
      }
    );
  },

  // Consume Facebook purchases in that game.
  consumePurchase: function (purchase_token, product_id) {
    var that = this;

    FB.getLoginStatus(function (response) {
      // console.log(response.authResponse.accessToken);
      that.token = response.authResponse.accessToken;
    });

    FB.api(
      '/' + purchase_token + '/consume',    // Replace the PURCHASE_TOKEN
      'post',
      {access_token: that.token},         // Replace with a user access token TODO: find access_token of user
      function (result) {
        // console.log('consuming product: ', product_id, 'with purchase token', purchase_token);
        // console.log('Result:');
        // console.log(result);
      }
    );
  }
};

// Load the SDK asynchronously
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));