var InfiniteHell = InfiniteHell || {};

InfiniteHell.Invite = function(){};

InfiniteHell.Invite.prototype = {
    create : function () {
        this.onClick();
//        this.invite();
    },
    
    onClick : function () {
        window.open("http://phaser.io");
    },
    
    invite : function () {
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '611658819003576',
              xfbml      : true,
              version    : 'v2.6'
            }); 
        
            FB.ui({method: 'apprequests', message: 'Play with me in InfiniteHell!'
            }, function(response){
                console.log(response);
            });  
        };
        
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
};



