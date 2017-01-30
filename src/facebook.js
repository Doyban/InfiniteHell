window.fbAsyncInit = function() {
    FB.init({
        appId      : '611658819003576',
        xfbml      : true,
        version    : 'v2.6'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE

    function onLogin(response) {
        if (response.status == 'connected') {
            FB.api('/me?fields=first_name', function(data) {
                var welcomeBlock = document.getElementById('fb-welcome');
                welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
            });
        }
    }

    FB.getLoginStatus(function(response) {
        // Check login status on load, and if the user is
        // already logged in, go directly to the welcome message.
        if (response.status == 'connected') {
            onLogin(response);
        } else {
            // Otherwise, show Login dialog first.
            FB.login(function(response) {
                onLogin(response);
            }, {scope: 'user_friends, email'});
        }
    });
};

function shareGame(){
     FB.ui({
        method: "feed",
        link: "https://apps.facebook.com/infinitehell/",
        caption: "Play InfiniteHell!",
        name: "Try to beat neverending hell!",
        description: "I already played InfiniteHell, what are you waiting for?",
        picture: "https://doyban.com/facebook/infinitehell/asset/images/logo.png"
    }, function(response){});
}

function shareScore(n){
  FB.ui({
    method: "feed",
    link: "https://apps.facebook.com/infinitehell/",
    caption: "Play InfiniteHell!",
    name: "My score in InfiniteHell is " + n + "!",
    description: "I scored " + n + " in InfiniteHell. Can you beat my score?",
    picture: "https://doyban.com/facebook/infinitehell/asset/images/logo.png"
  }, function(response){});
}

function inviteFriends() {
    FB.ui({
        method: 'apprequests',
        message: 'Play InfiniteHell with me!'
    }, function(response){
        console.log(response);
    });
}

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));