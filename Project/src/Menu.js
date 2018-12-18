var InfiniteHell = InfiniteHell || {};

InfiniteHell.Menu = function(){};

InfiniteHell.Menu.prototype = {
    preload: function() {
        // Difference between each button.
        this.difference = 74;
        
        // Show button to start the game.
        this.startButton = this.game.add.button(this.game.width/2, this.game.world.centerY, "start", this.startGame, this);
        // Center image.
        this.startButton.anchor.setTo(0.5);
        
        // Buttons.
        this.inviteButton = this.game.add.button(this.game.width/2 - 3 * this.difference, this.game.world.centerY + 150, "invite", this.inviteStart, this);
        this.inviteButton.anchor.setTo(0.5);
        
        this.adsButton = this.game.add.button(this.game.width/2 - this.difference, this.game.world.centerY + 150, 'ads', this.adsStart, this);
        this.adsButton.anchor.setTo(0.5);
        
        this.shopButton = this.game.add.button(this.game.width/2 + this.difference, this.game.world.centerY + 150, 'shop', this.shopStart, this);
        this.shopButton.anchor.setTo(0.5);
        
        this.shareButton = this.game.add.button(this.game.width/2 + 3 * this.difference, this.game.world.centerY + 150, 'share', this.shareStart, this);
        this.shareButton.anchor.setTo(0.5);
        
        // Sounds for all the time during playing the game.
        this.gameSound = this.game.add.audio('game');
        this.gameSound2 = this.game.add.audio('game2');
        
        // Styles for texts.
        this.style = {font: "bold 42px Times New Roman", fill: "#FFFFFF"};
        this.style2 = {font: "bold 26px Times New Roman", fill: "#DDDDFF"};

        //  How to play text.
        this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 200, "How to play?", this.style);
        this.text.anchor.setTo(0.5);
        
        // Describing how to play texts.
        this.text2 = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 140, "ARROW UP - jump over enemies", this.style2);
        this.text2.anchor.setTo(0.5);
        this.text3 = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "ARROW DOWN - open the chest", this.style2);
        this.text3.anchor.setTo(0.5);
    },
    
    startGame: function() {
        // Play sounds for all the time during playing the game.
        this.gameSound.play('', 0, 0.06, true);
        this.gameSound2.play('', 0, 0.1, true);
        this.state.start('Game');
    },
    
    adsStart: function() {      
        initApp();
    },
    
    shopStart: function() {
        this.state.start('Shop');
    },
    
    inviteStart: function() {
        inviteFriends();
    },
    
    shareStart: function() {
        this.window.plugins.socialsharing.share('Play InfiniteHell!', 'Play InfiniteHell!', 'https://doyban.com/facebook/infinitehell/asset/images/logo.png', 'https://doyban.com/infinitehell/');
    }
};