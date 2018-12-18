var InfiniteHell = InfiniteHell || {};

InfiniteHell.Invite = function(){};

InfiniteHell.Invite.prototype = {
    create : function () {
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '611658819003576',
              xfbml      : true,
              version    : 'v2.6'
            });

            FB.ui({method: 'apprequests',
                message: 'YOUR_MESSAGE_HERE'
                  }, function(response){
                            console.log(response);
                    });
        };
    }
};



