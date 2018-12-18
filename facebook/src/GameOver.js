var InfiniteHell = InfiniteHell || {};

InfiniteHell.GameOver = function(){};

InfiniteHell.GameOver.prototype = {
    init: function(points) {
        // If no activity for extra lives then don't add any extra lives.
        if (points === undefined) {
            points = 0;
        }
        this.pointsToShare = points;
  },

    create: function() {
        // Difference between each button.
        this.difference = 74;
        
        // Buttons
        this.homeButton = this.game.add.button(this.game.width/2 - this.difference, this.game.world.centerY - 80, 'home', this.menuStart, this);
        this.homeButton.anchor.setTo(0.5);
        
        this.shareButton = this.game.add.button(this.game.width/2 +  this.difference, this.game.world.centerY - 80, 'share', this.shareStart, this);
        this.shareButton.anchor.setTo(0.5);
    },
    
    menuStart: function() {
        this.state.start('Menu');
    },
    
    shareStart: function() {
        // shareScore(this.pointsToShare);
        InfiniteHell.Facebook.prototype.shareScore(this.pointsToShare);
        // console.log(this.pointsToShare);
    }
};