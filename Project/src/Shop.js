var InfiniteHell = InfiniteHell || {};

InfiniteHell.Shop = function(){};

InfiniteHell.Shop.prototype = {
    create: function() {
        // Difference between each button.
        this.difference = 33;
        
        // Buttons.
        this.fiveLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + this.difference, this.game.world.centerY, '5lives', this.gameStart5Lives, this);
        this.fiveLivesButton.anchor.setTo(0.5);
        
        this.fifteenLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + this.game.cache.getImage('15lives').width + 2 * this.difference, this.game.world.centerY, '15lives', this.gameStart15Lives, this);
        this.fifteenLivesButton.anchor.setTo(0.5);
        
        this.fortyLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 2 * this.game.cache.getImage('40lives').width + 3 * this.difference, this.game.world.centerY, '40lives', this.gameStart40Lives, this);
        this.fortyLivesButton.anchor.setTo(0.5);
        
        this.oneHundredLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 3 *  this.game.cache.getImage('100lives').width + 4 * this.difference, this.game.world.centerY, '100lives', this.gameStart100Lives, this);
        this.oneHundredLivesButton.anchor.setTo(0.5);
        
        this.twoHundredLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 4 *  this.game.cache.getImage('200lives').width + 5 * this.difference, this.game.world.centerY, '200lives', this.gameStart200Lives, this);
        this.twoHundredLivesButton.anchor.setTo(0.5);
        
        this.homeButton = this.game.add.button(this.game.width/2, this.game.height - 1.5 * this.difference, 'home', this.menuStart, this);
        this.homeButton.anchor.setTo(0.5);
    },
    
    gameStart5Lives: function() {
        this.extraLives = 5;
        this.game.state.start('Game', true, false, this.extraLives);
    },
    
    gameStart15Lives: function() {
        this.extraLives = 15;
        this.game.state.start('Game', true, false, this.extraLives);
    },
    
    gameStart40Lives: function() {
        this.extraLives = 40;
        this.game.state.start('Game', true, false, this.extraLives);
    },
    
    gameStart100Lives: function() {
        this.extraLives = 100;
        this.game.state.start('Game', true, false, this.extraLives);
    },
    
    gameStart200Lives: function() {
        this.extraLives = 200;
        this.game.state.start('Game', true, false, this.extraLives);
    },
    
    menuStart: function() {
        this.game.state.start('Menu');
    },
};