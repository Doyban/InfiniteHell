var InfiniteHell = InfiniteHell || {};

InfiniteHell.Shop = function () {};

InfiniteHell.Shop.prototype = {
    create: function () {
        // Difference between each button.
        this.difference = 33;

        // Buttons.
        this.fiveLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + this.difference, this.game.world.centerY, '5lives', this.gameStart5Lives, this);
        this.fiveLivesButton.anchor.setTo(0.5);

        this.fifteenLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + this.game.cache.getImage('15lives').width + 2 * this.difference, this.game.world.centerY, '15lives', this.gameStart15Lives, this);
        this.fifteenLivesButton.anchor.setTo(0.5);

        this.fortyLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 2 * this.game.cache.getImage('40lives').width + 3 * this.difference, this.game.world.centerY, '40lives', this.gameStart40Lives, this);
        this.fortyLivesButton.anchor.setTo(0.5);

        this.oneHundredLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 3 * this.game.cache.getImage('100lives').width + 4 * this.difference, this.game.world.centerY, '100lives', this.gameStart100Lives, this);
        this.oneHundredLivesButton.anchor.setTo(0.5);

        this.twoHundredLivesButton = this.game.add.button(this.game.cache.getImage('5lives').width / 2 + 4 * this.game.cache.getImage('200lives').width + 5 * this.difference, this.game.world.centerY, '200lives', this.gameStart200Lives, this);
        this.twoHundredLivesButton.anchor.setTo(0.5);

        this.homeButton = this.game.add.button(this.game.width / 2, this.game.height - 1.5 * this.difference, 'home', this.menuStart, this);
        this.homeButton.anchor.setTo(0.5);
    },

    gameStart5Lives: function () {
        var that = this; // Keep reference to the context on this level.

        FBInstant.payments.purchaseAsync({
            productID: '5lives'
        }).then(function (purchase) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart5Lives ran successfully. Purchase details: ', purchase); // Log "purchaseAsync" of "gameStart5Lives" information to Facebook Analytics.
            FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
                this.extraLives = 5; // Set appropriate quantity of extra lives.
                that.game.state.start('Game', true, false, this.extraLives);
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart5Lives ran successfully.'); // Log "consumePurchaseAsync" of "gameStart5Lives" information to Facebook Analytics.
            }).catch(function (error) {
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart5Lives error: ', error); // Log "consumePurchaseAsync" of "gameStart5Lives" error to Facebook Analytics.
            });
        }).catch(function (error) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart5Lives error: ', error); // Log "purchaseAsync" of "gameStart5Lives" error to Facebook Analytics.
        });
    },

    gameStart15Lives: function () {
        var that = this; // Keep reference to the context on this level.

        FBInstant.payments.purchaseAsync({
            productID: '15lives'
        }).then(function (purchase) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart15Lives ran successfully. Purchase details: ', purchase); // Log "purchaseAsync" of "gameStart15Lives" information to Facebook Analytics.
            FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
                this.extraLives = 15; // Set appropriate quantity of extra lives.
                that.game.state.start('Game', true, false, this.extraLives);
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart15Lives ran successfully.'); // Log "consumePurchaseAsync" of "gameStart15Lives" information to Facebook Analytics.
            }).catch(function (error) {
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart15Lives error: ', error); // Log "consumePurchaseAsync" of "gameStart15Lives" error to Facebook Analytics.
            });
        }).catch(function (error) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart15Lives error: ', error); // Log "purchaseAsync" of "gameStart15Lives" error to Facebook Analytics.
        });
    },

    gameStart40Lives: function () {
        var that = this; // Keep reference to the context on this level.

        FBInstant.payments.purchaseAsync({
            productID: '40lives'
        }).then(function (purchase) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart40Lives ran successfully. Purchase details: ', purchase); // Log "purchaseAsync" of "gameStart40Lives" information to Facebook Analytics.
            FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
                this.extraLives = 40; // Set appropriate quantity of extra lives.
                that.game.state.start('Game', true, false, this.extraLives);
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart40Lives ran successfully.'); // Log "consumePurchaseAsync" of "gameStart40Lives" information to Facebook Analytics.
            }).catch(function (error) {
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart40Lives error: ', error); // Log "consumePurchaseAsync" of "gameStart40Lives" error to Facebook Analytics.
            });
        }).catch(function (error) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart40Lives error: ', error); // Log "purchaseAsync" of "gameStart40Lives" error to Facebook Analytics.
        });
    },

    gameStart100Lives: function () {
        var that = this; // Keep reference to the context on this level.

        FBInstant.payments.purchaseAsync({
            productID: '100lives'
        }).then(function (purchase) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart100Lives ran successfully. Purchase details: ', purchase); // Log "purchaseAsync" of "gameStart100Lives" information to Facebook Analytics.
            FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
                this.extraLives = 100; // Set appropriate quantity of extra lives.
                that.game.state.start('Game', true, false, this.extraLives);
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart100Lives ran successfully.'); // Log "consumePurchaseAsync" of "gameStart100Lives" information to Facebook Analytics.
            }).catch(function (error) {
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart100Lives error: ', error); // Log "consumePurchaseAsync" of "gameStart100Lives" error to Facebook Analytics.
            });
        }).catch(function (error) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart100Lives error: ', error); // Log "purchaseAsync" of "gameStart100Lives" error to Facebook Analytics.
        });
    },

    gameStart200Lives: function () {
        var that = this; // Keep reference to the context on this level.
        this.extraLives = 200; // Set appropriate quantity of extra lives.
        that.game.state.start('Game', true, false, this.extraLives);
        FBInstant.payments.purchaseAsync({
            productID: '200lives'
        }).then(function (purchase) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart200Lives ran successfully. Purchase details: ', purchase); // Log "purchaseAsync" of "gameStart200Lives" information to Facebook Analytics.
            FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
                this.extraLives = 200; // Set appropriate quantity of extra lives.
                that.game.state.start('Game', true, false, this.extraLives);
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart200Lives ran successfully.'); // Log "consumePurchaseAsync" of "gameStart200Lives" information to Facebook Analytics.
            }).catch(function (error) {
                FBInstant.logEvent('Method consumePurchaseAsync of method gameStart200Lives error: ', error); // Log "consumePurchaseAsync" of "gameStart200Lives" error to Facebook Analytics.
            });
        }).catch(function (error) {
            FBInstant.logEvent('Method purchaseAsync of method gameStart200Lives error: ', error); // Log "purchaseAsync" of "gameStart200Lives" error to Facebook Analytics.
        });
    },

    menuStart: function () {
        this.game.state.start('Menu');
    },
};