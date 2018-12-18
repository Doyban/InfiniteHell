var InfiniteHell = InfiniteHell || {};

InfiniteHell.Game = function(){};

// TODO: Remove repeated sounds, check ads, and welcome sound.
InfiniteHell.Game.prototype = {
    preload: function() {
        this.game.time.advancedTiming = true;
    },
    
    init: function(extraLives) {
        // If no activity for extra lives then don't add any extra lives.
        if (extraLives === undefined) {
            extraLives = 0;
        }
        this.anotherLives = extraLives;
    },
    
    create: function() {
        // Set up background and ground layer. 28 * 128 (fire spritesheet) = 3584.
        this.game.world.setBounds(0, 0, 3584, this.game.height);
        this.ground = this.add.tileSprite(0, this.game.height - 88, this.game.world.width, 88, 'ground');
        this.background = this.game.add.tileSprite(0, -48, this.game.world.width, this.game.height, 'background');
        this.background.alpha = 0.4;
        
        // Variables for fire animation in background.
        this.fire = [];
        this.fireHelp = [];
        
        // Create fire animation in background.
        for (var i = 0; i < 29; i++) {
            this.fireHelp[i] = i;
        }
        for (var j = 0; j < this.fireHelp.length; j++) {
            this.fire = this.game.add.sprite(this.game.world.width - this.fireHelp[j] * 128, this .game.height - 200, 'fire');
            this.fire.animations.add('burn');
            // Play the burning animation.
            this.fire.animations.play('burn', 8, true);
        }
        
        // Create player and walk animation.
        this.player = this.game.add.sprite(this.game.width / 2, this.game.height - 88, 'player');
        this.player.animations.add('walk');
        
        // Create the enemies. 
        this.generateManticores();
        this.generateOrcs();
        this.generateTrolls();
        
        // Create the chests.
        this.generateChests();
        
        // Enable physics on the player and ground.
        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.ground);
        
        // Player gravity.
        this.player.body.gravity.y = 900;                    
        
        // Player can walk on ground.
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;
        
        // Properties when the player is grabbing, hitting and standing, so we can use in "update()".
        var playerGrabImg = this.game.cache.getImage('playerGrab');
        this.player.animations.add('grab');
        this.player.grabDimensions = {width: playerGrabImg.width, height: playerGrabImg.height};
        
        var playerHitImg = this.game.cache.getImage('playerHit');
        this.player.animations.add('hit');
        this.player.hitDimensions = {width: playerHitImg.width, height: playerHitImg.height};
        
        this.player.standDimensions = {width: this.player.width, height: this.player.height};
        this.player.anchor.setTo(0.5, 1);
        
        // The camera will follow the player in the world.
        this.game.camera.follow(this.player);
        
        // Play the walking animation.
        this.player.animations.play('walk', 5, true);
        
        // Move player with cursor keys.
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        // Move player by swiping.
        this.swipe = this.game.input.activePointer;
        
        // Sounds.
        this.grabSound = this.game.add.audio('grab');
        this.hitSound = this.game.add.audio('hit');
        this.dieSound = this.game.add.audio('die');
        
        // Needed variables in the game.
        this.scratches = 0;
        this.points = 0;
        this.wrapping = true;
        this.stopped = false;
        this.lives = 6;
        
        // Create an array of possible items that can be gathered from chests.
        // Game height property = - (ground [48 px] + sprite [xx px]).
        var armor = this.game.add.sprite(0, this.game.height - 148, 'armor');
        var book = this.game.add.sprite(0, this.game.height - 142, 'book');
        var gold = this.game.add.sprite(0, this.game.height - 142, 'gold');
        var potion = this.game.add.sprite(0, this.game.height - 142, 'potion');
        var ring = this.game.add.sprite(0, this.game.height - 148, 'ring');
        var scroll = this.game.add.sprite(0, this.game.height - 142, 'scroll');
        armor.visible = false;
        book.visible = false;
        gold.visible = false;
        potion.visible = false;
        ring.visible = false;
        scroll.visible = false;
        this.artifacts = [armor, book, gold, potion, ring, scroll];
        this.currentArtifact = gold;
        
        // Stats.
        var style1 = {font: "40px Times New Roman", fill: "#FFFFFF"};
        var score = this.game.add.text(20, 30, "Score:", style1);
        var lives = this.game.add.sprite(this.game.width - 130, 30, 'lives');
        score.fixedToCamera = true;
        lives.fixedToCamera = true;
        
        var style2 = {font: "40px Times New Roman", fill: "#FFFFFF"};
        this.pointsText = this.game.add.text(150, 30, "", style2);
        this.livesText = this.game.add.text(this.game.width - 80, 30, "", style2);
        this.refreshStats();
        this.pointsText.fixedToCamera = true;
        this.livesText.fixedToCamera = true;
        
        // Put everything in the correct order. Fire - decoration for the game. Chests must be above fire to be seen, but behind the ground.
        this.game.world.bringToTop(this.background);
        this.game.world.bringToTop(this.fire);
        this.game.world.bringToTop(this.chests);
        this.game.world.bringToTop(this.ground);
    },
    
    update: function() {
        // Collisions. The player will collide with ground and enemies, but will overlap chests.
        this.game.physics.arcade.collide(this.player, this.ground, this.playerHit, null, this);
        this.game.physics.arcade.collide(this.player, this.manticores, this.playerBit, null, this);
        this.game.physics.arcade.collide(this.player, this.orcs, this.playerBit, null, this);
        this.game.physics.arcade.collide(this.player, this.trolls, this.playerBit, null, this);
        this.game.physics.arcade.overlap(this.player, this.chests, this.collect, this.checkGrab, this);
        
        // Only respond to keys and keep the speed if the player is alive. Also don't do anything if the player is stopped for hitting or grabbing.
        if (this.player.alive && !this.stopped) {
            // Get the player moving.
            this.player.body.velocity.x = 350;
            
            // Determine whether the game world has wrapped arround. If so, destroy everything and regenerate, so the game will remain random.
            if (!this.wrapping && this.player.x < this.game.width) {  
                // Destroy and regenerate once per wrap.
                this.chests.destroy();
                this.generateChests();
                this.wrapping = true;
                this.manticores.destroy();
                this.generateManticores();
                this.orcs.destroy();
                this.generateOrcs();
                this.trolls.destroy();
                this.generateTrolls();
                
                // Put everything back in the proper order.
                this.game.world.bringToTop(this.background);
                this.game.world.bringToTop(this.fire);
                this.game.world.bringToTop(this.chests);
                this.game.world.bringToTop(this.ground);
            }
            else if (this.player.x >= this.game.width){
                this.wrapping = false;
            }
            
            // Take the appropriate action for swiping up or pressing up arrow on keyboard. It doesn't wait until the swipe is finished (this.swipe.isUp), because of latency problems (it takes too long to jump before hitting a enemy).
            if (this.swipe.isDown && (this.swipe.positionDown.y > this.swipe.position.y)) {
                this.playerJump();
            }
            else if (this.cursors.up.isDown) {
                this.playerJump();
            }
            
            // The game world is infinite in the x-direction, so it wrap arround. It subtract padding so the player will remain in the middle of the screen when wrapping, rather than going to the end of the screen first.
            this.game.world.wrap(this.player, -(this.game.width / 2), false, true, false);
        }
    },
    
    // Show updated stats values.
    refreshStats: function() {
        this.pointsText.text = this.points;
        this.livesText.text = this.lives - this.scratches + this.anotherLives;
    },
    
    // The player has just been bitten by a enemy.
    playerBit: function(player, enemy) {
        // Remove the enemy that bit player so it's no longer in the way.
        enemy.destroy();
        
        // Update stats.
        this.scratches++;
        this.refreshStats();
        
        // Change sprite time.
        this.player.loadTexture('playerHit');
        this.player.animations.play('hit', 10, true);
        
        // Play audio.
        this.hitSound.play();
        
        // Wait a couple of second for the grab animation to play before contuining.
        this.stopped = true;
        this.player.body.velocity.x = 0;
        this.game.time.events.add(Phaser.Timer.SECOND * 2, this.playerScratch, this);
    },
    
    // Collect artifacts from a chest.
    collect: function(player, chest) {
        
        // This is called continously while player is on chest, but needed is to be done only once.
        if (!this.stopped) {
            // Change image and update the body size for physics engine.
            this.player.loadTexture('playerGrab');
            this.player.animations.play('grab', 10, true);
            this.player.body.setSize(this.player.grabDimensions.width, this.player.grabDimensions.height);
            
            // Artifact chest can't be removed until grabbing is finished, so a variable for the function called the timer (below) must be set.
            this.currentChest = chest;
            
            // Stop for a couple of second for the grab animation to play.
            this.stopped = true;
            this.player.body.velocity.x = 0;
            this.game.time.events.add(Phaser.Timer.SECOND * 2, this.playerGrab, this);
        }
    },
    
    gameOver: function() {
        showAds();
        this.game.state.start('GameOver', true, false, this.points);
    },
    
    checkGrab: function() {
        // Checking that either the down arrow key is being pressed or the user is swiping down while overlapped with a chest.
        if (this.cursors.down.isDown || (this.swipe.isDown && (this.swipe.position.y > this.swipe.positionDown.y))) {
            return true;
        }
        else {
            return false;
        }
    },
    
    playerJump: function() {
        // When the ground is a sprite, we need to test for "touching" instead of "blocking".
        if (this.player.body.touching.down) {
            this.player.body.velocity.y = -750;
        }
    },
    
    // Couple of seconds of grabbing.
    playerGrab: function() {
        // Play audio.
        this.grabSound.play();
        
        // Grab the location before destroy artifact, because of that after it there can be artifact showed.
        var x = this.currentChest.x;
        
        // Remove the chest sprite, now the artifact is collected.
        this.currentChest.destroy();
        
        // Randomly pull a artifact from the array.
        this.currentArtifact = this.artifacts[Math.floor(Math.random() * this.artifacts.length)];
        
        // Appropriate points for different artifacts.
        // Armor in chest.
        if (this.currentArtifact === this.artifacts[0]) {
            this.points += 100;
        }
        // Book in chets.
        else if (this.currentArtifact === this.artifacts[1]) {
            this.points += 60;
        }
        // Gold in chest.
        else if (this.currentArtifact === this.artifacts[2]) {
            this.points += 50;
        }
        // Potion in chest.
        else if (this.currentArtifact === this.artifacts[3]) {
            this.points += 70;
        }
        // Ring in chest.
        else if (this.currentArtifact === this.artifacts[4]) {
            this.points += 90;
        }
        // Scroll in chest.
        else if (this.currentArtifact === this.artifacts[5]) {
            this.points += 80;
        }
        
        // Refresh points in stats.
        this.refreshStats();
        
        // Make the artifact visible where the chest used to be.
        this.currentArtifact.visible = true;
        this.currentArtifact.x = x;
        
        // Make it disappear again after 1 second.
        this.game.time.events.add(Phaser.Timer.SECOND, this.currentArtifactInvisible, this);
        
        // Switch back to the standing version of the player.
        this.player.loadTexture('player');
        this.player.animations.play('walk', 3, true);
        this.player.body.setSize(this.player.standDimensions.width, this.player.standDimensions.height);
        this.stopped = false;
    },
    
    // Make artifact invisible.
    currentArtifactInvisible: function() {
        this.currentArtifact.visible = false;
    },
    
    playerScratch: function() {
        this.stopped = false;
        
        // If reached max scratches, then player is 'dead'.
        if (this.scratches >= 6 + this.anotherLives) {
            // Play the sound of dying.
            this.dieSound.play();
            // Set to dead (even though our player isn't actually dead in this game, just running to the begin of game). It doesn't affect rendering.
            this.player.alive = false;
            
            // Destroy everything before player runs away so there's nothing in the way.
            this.orcs.destroy();
            this.manticores.destroy();
            this.trolls.destroy();
            this.chests.destroy();
            
            // Switch back to the standing version of the player.
            this.player.loadTexture('player');
            this.player.animations.play('walk', 30, true); // Frame rate is faster for running.
            this.player.body.setSize(this.player.standDimensions.width, this.player.standDimensions.height);
            
            // Run to the begin of game.
            this.player.anchor.setTo(0.5, 1);
            this.player.scale.x = -1;
            this.player.body.velocity.x = -500;
            
            // Run off the screen.
            this.game.camera.unfollow();
            
            // Go to gameover after few miliseconds.
            this.game.time.events.add(2000, this.gameOver, this);
        }
        else {
            // Change image and update the body size for physics engine.
            this.player.loadTexture('player');
            this.player.animations.play('walk', 8, true);
            this.player.body.setSize(this.player.standDimensions.width, this.player.standDimensions.height);
        }
    },
    
    generateChests: function() {
        this.chests = this.game.add.group();
        
        // Enable physics in them.
        this.chests.enableBody = true;
        
        // Phaser's random number generator.
        var numChests = this.game.rnd.integerInRange(0, 3);
        var chest;
        
        for (var i = 0; i < numChests; i++) {
            // Add sprite within an area excluding the beginning and ending of the game world so items won't suddenly appear or disappear when wrapping.
            var x = this.game.rnd.integerInRange(this.game.width, this.game.world.width - this.game.width);
            chest = this.chests.create(x, this.game.height - 136, 'chest');
            chest.body.velocity.x = 0;
        }
    },
    
    generateManticores: function() {
        this.manticores = this.game.add.group();
        
        // Manticores physics in them.
        this.manticores.enableBody = true;
        
        // Phaser's random number generator.
        var numManticores = this.game.rnd.integerInRange(0, 2);
        var manticore;
        
        for(var i = 0; i < numManticores; i++) {
            // Add sprite within an area excluding the beginning and ending of the game world so items won't suddenly appear or disappear when wrapping.
            var x = this.game.rnd.integerInRange(this.game.width, this.game.world.width - this.game.width);
            manticore = this.manticores.create(x, this.game.height - 200, 'manticore');
            
            // Physics properties for manticore.
            manticore.body.velocity.x = this.game.rnd.integerInRange(-70, 0);
            
            manticore.body.immovable = true;
            manticore.body.collideWorldBouns = false;
        }
    },
    
    generateTrolls: function() {
        this.trolls = this.game.add.group();
        
        // trolls physics in them.
        this.trolls.enableBody = true;
        
        // Phaser's random number generator.
        var numTrolls = this.game.rnd.integerInRange(1, 4);
        var troll;
        
        for(var i = 0; i < numTrolls; i++) {
            // Add sprite within an area excluding the beginning and ending of the game world so items won't suddenly appear or disappear when wrapping.
            var x = this.game.rnd.integerInRange(this.game.width, this.game.world.width - this.game.width);
            // 152 (height) = 88 + 64
            troll = this.trolls.create(x, this.game.height - 152, 'troll');
            
            // Physics properties for troll.
            troll.body.velocity.x = this.game.rnd.integerInRange(-40, 0);
            
            troll.body.immovable = true;
            troll.body.collideWorldBouns = false;
        }
    },
    
    generateOrcs: function() {
        this.orcs = this.game.add.group();
        
        // Orcs physics in them.
        this.orcs.enableBody = true;
        
        // Phaser's random number generator.
        var numOrcs = this.game.rnd.integerInRange(0, 1);
        var orc;
        
        for(var i = 0; i < numOrcs; i++) {
            // Add sprite within an area excluding the beginning and ending of the game world so items won't suddenly appear or disappear when wrapping.
            var x = this.game.rnd.integerInRange(this.game.width, this.game.world.width - this.game.width);
            orc = this.orcs.create(x, this.game.height - 280, 'orc');
            
            // Physics properties for orc.
            orc.body.velocity.x = this.game.rnd.integerInRange(-80, 0);
            
            orc.body.immovable = true;
            orc.body.collideWorldBouns = false;
        }
    },

    // Display FPS during developing.
    render: function() {
//        this.game.debug.text(this.game.time.fps || '--', 20, 70, '#00FF00', '40px Courier');
    }
};