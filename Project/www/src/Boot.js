var InfiniteHell = InfiniteHell || {};

InfiniteHell.Boot = function(){};

// Setting game configuration and loading the assets for the loading screen.
InfiniteHell.Boot.prototype = {
    preload: function() {
        // Image for loading screen.
        this.load.image('preloadbar', 'asset/images/preloadbar.png');
    },
    
    create: function() {
        // Image for loading screen.
        this.load.image('preloadbar', 'asset/images/preloadbar.png');
        
        // Sky of the game.
        this.game.stage.backgroundColor = '#5555FF';
        
        // Scalling options.
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        // Have the game centered.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        // Screen size will be set automatically.
        this.scale.setScreenSize(true);
        
        // Physics system.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.state.start('Preload');
    }
};