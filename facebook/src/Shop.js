var InfiniteHell = InfiniteHell || {};

InfiniteHell.Shop = function(){};

InfiniteHell.Shop.prototype = {
    create: function() {
        // Difference between each button.
        this.difference = 33;
        
        // Buttons.
        this.fiveLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + this.difference, this.game.world.centerY - 80, '5lives', this.add5Lives, this);
        this.fiveLivesButton.anchor.setTo(0.5);
        
        this.fifteenLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + this.game.cache.getImage('15lives').width + 2 * this.difference, this.game.world.centerY - 80, '15lives', this.add15Lives, this);
        this.fifteenLivesButton.anchor.setTo(0.5);
        
        this.fortyLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 2 * this.game.cache.getImage('40lives').width + 3 * this.difference, this.game.world.centerY - 80, '40lives', this.add40Lives, this);
        this.fortyLivesButton.anchor.setTo(0.5);
        
        this.oneHundredLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 3 *  this.game.cache.getImage('100lives').width + 4 * this.difference, this.game.world.centerY - 80, '100lives', this.add100Lives, this);
        this.oneHundredLivesButton.anchor.setTo(0.5);
        
        this.twoHundredLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 4 *  this.game.cache.getImage('200lives').width + 5 * this.difference, this.game.world.centerY - 80, '200lives', this.add200Lives, this);
        this.twoHundredLivesButton.anchor.setTo(0.5);
        
        this.homeButton = this.game.add.button(this.game.width/2, this.game.height - 4 * this.difference, 'home', this.menuStart, this);
        this.homeButton.anchor.setTo(0.5);

        // InfiniteHell.Facebook.prototype.showProducts(); // Load show Facebook products.
      // InfiniteHell.Facebook.prototype.showPurchases(); // Load show Facebook purchases.
    },

    // Start game.
    gameStart: function (extraLives, response) {
      var that = this;

      if (response.hasOwnProperty("product_id")) {
        // Purchase has been done.
        that.game.state.start('Game', true, false, extraLives);
        InfiniteHell.Facebook.prototype.consumePurchase(response.purchase_token, response.product_id); // Consume purchase to make possibility to buy later on more product with the same ID.
      } else {
        // Purchase has not been done.
        that.state.start('Menu'); // Back to Menu.
      }
    },


    add5Lives: function() {
      var that = this;

      // Facebook API to purchase 5 lives.
      FB.ui(
        {
          method: 'pay',
          action: 'purchaseiap',
          product_id: '5lives'
        }, function (response) { // Callback function
          // console.log(response);
          this.extraLives = 5;
          that.gameStart(this.extraLives, response); // Start game with 5 extra lives.
        }
      );
    },
    
    add15Lives: function() {
      var that = this;

      // Facebook API to purchase 15 lives.
      FB.ui({
        method: 'pay',
        action: 'purchaseiap',
        product_id: '15lives'
      }, function (response) { // Callback function
        // console.log(response);
        this.extraLives = 15;
        that.gameStart(this.extraLives, response); // Start game with 15 extra lives.
      });
    },
    
    add40Lives: function() {
      var that = this;

      // Facebook API to purchase 40 lives.
      FB.ui(
        {
          method: 'pay',
          action: 'purchaseiap',
          product_id: '40lives'
        }, function (response) { // Callback function
          // console.log(response);
          this.extraLives = 40;
          that.gameStart(this.extraLives, response); // Start game with 40 extra lives.
        }
      );
    },
    
    add100Lives: function() {
      var that = this;

      // Facebook API to purchase 100 lives.
      FB.ui(
        {
          method: 'pay',
          action: 'purchaseiap',
          product_id: '100lives'
        }, function (response) { // Callback function
          // console.log(response);
          this.extraLives = 100;
          that.gameStart(this.extraLives, response); // Start game with 100 extra lives.
        }
      );
    },
    
    add200Lives: function() {
      var that = this;

      // Facebook API to purchase 200 lives.
      FB.ui(
        {
          method: 'pay',
          action: 'purchaseiap',
          product_id: '200lives'
        }, function (response) { // Callback function
          // console.log(response);
          this.extraLives = 200;
          that.gameStart(this.extraLives, response); // Start game with 200 extra lives.
        }
      );
    },

    // Start Menu.
    menuStart: function() {
        this.game.state.start('Menu');
    }
};