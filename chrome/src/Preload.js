var InfiniteHell = InfiniteHell || {};

// Loading the game assets.
InfiniteHell.Preload = function(){};

InfiniteHell.Preload.prototype = {
    preload: function() {
        // Show loading screen.
        this.preloadBar = this.add.sprite(0, this.game.world.centerY - 46, 'preloadbar');

        // Automatically animate sprite, full = game loaded.
        this.load.setPreloadSprite(this.preloadBar);
        
        // Loading game assets. The digit "2" calls how many frames are in the spritesheet.
        // Spritesheets.
        this.load.spritesheet('player', 'asset/images/player.png', 60, 78, 4);
        this.load.spritesheet('playerHit', 'asset/images/playerHit.png', 61, 78, 3);
        this.load.spritesheet('playerGrab', 'asset/images/playerGrab.png', 65, 78, 5);
        
        // Artifacts.
        this.load.image('armor', 'asset/images/armor.png');
        this.load.image('book', 'asset/images/book.png');
        this.load.image('gold', 'asset/images/gold.png');
        this.load.image('potion', 'asset/images/potion.png');
        this.load.image('ring', 'asset/images/ring.png');
        this.load.image('scroll', 'asset/images/scroll.png');
        
        // Enemies.
        this.load.image('manticore', 'asset/images/manticore.png');
        this.load.image('orc', 'asset/images/orc.png');
        this.load.image('troll', 'asset/images/troll.png');
        
        // Others.
        this.load.spritesheet('fire', 'asset/images/fire.png', 128, 128);
        this.load.image('ground', 'asset/images/ground.png');
        this.load.image('chest', 'asset/images/chest.png');
        this.load.image('background', 'asset/images/background.png');
        this.load.image('lives', 'asset/images/lives.png');
        
        // Buttons for menus.
        this.load.image('ads', 'asset/images/ads.png', 64, 64);
        this.load.image('start', 'asset/images/start.png', 64, 64);
        this.load.image('home', 'asset/images/home.png', 64, 64);
        this.load.image('invite', 'asset/images/invite.png', 64, 64);
        this.load.image('share', 'asset/images/share.png', 64, 64);
        this.load.image('shop', 'asset/images/shop.png', 64, 64);
        
        // Buttons for shop.
        this.load.image('5lives', 'asset/images/5lives.png', 140, 300);
        this.load.image('15lives', 'asset/images/15lives.png', 140, 300);
        this.load.image('40lives', 'asset/images/40lives.png', 140, 300);
        this.load.image('100lives', 'asset/images/100lives.png', 140, 300);
        this.load.image('200lives', 'asset/images/200lives.png', 140, 300);
        
        // Sounds.
        this.load.audio('die', [
            'asset/audio/die.ogg',
            'asset/audio/die.mp3',
            'asset/audio/die.wav']);
        this.load.audio('game', [
            'asset/audio/game.ogg',
            'asset/audio/game.mp3',
            'asset/audio/game.wav']);
        this.load.audio('game2', [
            'asset/audio/game2.ogg',
            'asset/audio/game2.mp3',
            'asset/audio/game2.wav']);
        this.load.audio('grab', [
            'asset/audio/grab.ogg',
            'asset/audio/grab.mp3', 'asset/audio/grab.wav']);
        this.load.audio('hit', [
            'asset/audio/hit.ogg',
            'asset/audio/hit.mp3',
            'asset/audio/hit.wav']); 
        this.load.audio('welcome', [
            'asset/audio/welcome.ogg',
            'asset/audio/welcome.mp3',
            'asset/audio/welcome.wav']); 
        
        this.welcomeSound = this.game.add.audio('welcome');
    },
    
    create: function() {
        this.state.start('Menu');
        // Play sound for beggining the game.
        this.welcomeSound.play();
    }
};