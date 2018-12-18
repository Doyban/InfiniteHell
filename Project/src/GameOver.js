var InfiniteHell = InfiniteHell || {};

InfiniteHell.GameOver = function(){};

InfiniteHell.GameOver.prototype = {
    create: function() {
        // Difference between each button.
        this.difference = 74;
        
        // Buttons
        this.homeButton = this.game.add.button(this.game.width/2 - this.difference, this.game.world.centerY, 'home', this.menuStart, this);
        this.homeButton.anchor.setTo(0.5);
        
        this.shareButton = this.game.add.button(this.game.width/2 +  this.difference, this.game.world.centerY, 'share', this.shareStart, this);
        this.shareButton.anchor.setTo(0.5);
    },
    
    menuStart: function() {
        this.game.state.start('Menu');
    },
    
    shareStart: function() {
        
    }
};