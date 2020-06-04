var InfiniteHell = InfiniteHell || {};

InfiniteHell.GameOver = function () {};

InfiniteHell.GameOver.prototype = {
    init: function (points) {
        // If no activity for extra lives then don't add any extra lives.
        if (points === undefined) {
            points = 0;
        }
        this.pointsToShare = points;
    },

    create: function () {
        // Difference between each button.
        this.difference = 74;

        // Buttons
        this.homeButton = this.game.add.button(this.game.width / 2 - this.difference, this.game.world.centerY, 'home', this.menuStart, this);
        this.homeButton.anchor.setTo(0.5);

        this.shareButton = this.game.add.button(this.game.width / 2 + this.difference, this.game.world.centerY, 'share', this.shareStart, this);
        this.shareButton.anchor.setTo(0.5);
    },

    menuStart: function () {
        this.game.state.start('Menu', true, false);
    },

    shareStart: function () {
        // alert("Got " + this.pointsToShare + " points.");
        window.plugins.socialsharing.share('Play InfiniteHell!', 'My score in InfiniteHell is ' + this.pointsToShare + '!', 'https://doyban.com/facebook/infinitehell/asset/images/logo.png', 'https://doyban.com/infinitehell/');
    }
};