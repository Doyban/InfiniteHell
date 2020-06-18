var InfiniteHell = InfiniteHell || {};

InfiniteHell.Menu = function () {};

InfiniteHell.Menu.prototype = {
    create: function () {
        // Difference between each button.
        this.difference = 74;

        // Show button to start the game.
        this.startButton = this.game.add.button(this.game.width / 2, this.game.world.centerY, "start", this.startGame, this);
        // Center image.
        this.startButton.anchor.setTo(0.5);

        // Buttons.
        this.inviteButton = this.game.add.button(this.game.width / 2 - 5 * this.difference, this.game.world.centerY + 150, "invite", this.inviteStart, this);
        this.inviteButton.anchor.setTo(0.5);

        this.shopButton = this.game.add.button(this.game.width / 2 - 2.5 * this.difference, this.game.world.centerY + 150, 'shop', this.shopStart, this);
        this.shopButton.anchor.setTo(0.5);

        this.shareButton = this.game.add.button(this.game.width / 2 + 2.5 * this.difference, this.game.world.centerY + 150, 'share', this.shareStart, this);
        this.shareButton.anchor.setTo(0.5);

        this.exitButton = this.game.add.button(this.game.width / 2 + 5 * this.difference, this.game.world.centerY + 150, 'home', this.exitStart, this);
        this.exitButton.anchor.setTo(0.5);

        // Styles for texts.
        this.style = {
            font: "bold 42px Times New Roman",
            fill: "#FFFFFF"
        };
        this.style2 = {
            font: "bold 26px Times New Roman",
            fill: "#DDDDFF"
        };

        //  How to play text.
        this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 200, "How to play?", this.style);
        this.text.anchor.setTo(0.5);

        // Describing how to play texts.
        this.text2 = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 140, "SWIPE UP - jump over enemies", this.style2);
        this.text2.anchor.setTo(0.5);
        this.text3 = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "SWIPE DOWN - open the chest", this.style2);
        this.text3.anchor.setTo(0.5);

        initAds();
    },

    startGame: function () {
        this.state.start('Game');
    },

    shopStart: function () {
        this.state.start('Shop');
    },

    inviteStart: function () {
        inviteGame();
    },

    shareStart: function () {
        shareGame();
    },

    exitStart: function () {
        exitGame();
    }
};