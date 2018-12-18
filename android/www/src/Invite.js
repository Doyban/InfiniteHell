var inviteFriends = function () {
    facebookConnectPlugin.showDialog({
        method: 'apprequests',
        message: 'Play InfiniteHell with me!'
    },
    function(response) {console.log(response)},
    function(response) {console.log(response)}
)};
