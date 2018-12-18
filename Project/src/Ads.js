var InfiniteHell = InfiniteHell || {};

InfiniteHell.Ads = function(){};

InfiniteHell.Ads.prototype = {
    preload: function() {
        // 1 extra live per 1 ad.
        this.extraLives = 1;
    },
    
    create: function() {
        this.game.state.start('Game', true, false, this.extraLives);
    }
};