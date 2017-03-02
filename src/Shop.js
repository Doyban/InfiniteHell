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
        var that = this;
        
        document.addEventListener('deviceready', initializeStore, false);
    
        function initializeStore() {
    //        store.verbosity = store.INFO;

            // Prepare product.
            store.register({
                id:    "5lives",
                alias: "5 Lives",
                type:  store.CONSUMABLE
            });

    //        alert(store.get("5lives"));
    //        store.ready(function() {
    //        alert("\\o/ STORE READY external function 5 lives");
    //        });

            // Purchase product.
            store.order("5lives");
            store.refresh();
            store.when("5lives").approved(function (order) {
                order.finish();
                store.refresh();
    //            alert("You got an 5 EXTRA LIFE! external function");
                // Add 5 extra lives and begin the game.
                this.extraLives = 5;
                that.game.state.start('Game', true, false, this.extraLives);
            });
        }
    },
    
    gameStart15Lives: function() {
        var that = this;
        
        document.addEventListener('deviceready', initializeStore, false);
    
        function initializeStore() {
            // Prepare product.
            store.register({
                id:    "15lives",
                alias: "15 Lives",
                type:  store.CONSUMABLE
            });

            // Purchase product.
            store.order("15lives");
            store.refresh();
            store.when("15lives").approved(function (order) {
                order.finish();
                store.refresh();
                // Add 15 extra lives and begin the game.
                this.extraLives = 15;
                that.game.state.start('Game', true, false, this.extraLives);
            });
        }
    },
    
    gameStart40Lives: function() {
        var that = this;
        
        document.addEventListener('deviceready', initializeStore, false);
    
        function initializeStore() {
            // Prepare product.
            store.register({
                id:    "40lives",
                alias: "40 Lives",
                type:  store.CONSUMABLE
            });

            // Purchase product.
            store.order("40lives");
            store.refresh();
            store.when("40lives").approved(function (order) {
                order.finish();
                store.refresh();
                // Add 40 extra lives and begin the game.
                this.extraLives = 40;
                that.game.state.start('Game', true, false, this.extraLives);
            });
        }
    },
    
    gameStart100Lives: function() {
        var that = this;
        
        document.addEventListener('deviceready', initializeStore, false);
    
        function initializeStore() {
            // Prepare product.
            store.register({
                id:    "100lives",
                alias: "100 Lives",
                type:  store.CONSUMABLE
            });

            // Purchase product.
            store.order("100lives");
            store.refresh();
            store.when("100lives").approved(function (order) {
                order.finish();
                store.refresh();
                // Add 100 extra lives and begin the game.
                this.extraLives = 100;
                that.game.state.start('Game', true, false, this.extraLives);
            });
        }
    },
    
    gameStart200Lives: function() {
        var that = this;
        
        document.addEventListener('deviceready', initializeStore, false);
    
        function initializeStore() {
            // Prepare product.
            store.register({
                id:    "200lives",
                alias: "200 Lives",
                type:  store.CONSUMABLE
            });

            // Purchase product.
            store.order("200lives");
            store.refresh();
            store.when("200lives").approved(function (order) {
                order.finish();
                store.refresh();
                // Add 200 extra lives and begin the game.
                this.extraLives = 200;
                that.game.state.start('Game', true, false, this.extraLives);
            });
        }
    },
    
    menuStart: function() {
        this.game.state.start('Menu');
    },
};