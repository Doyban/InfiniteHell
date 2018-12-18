// Create empty object if InfiniteHell is not already defined.
var InfiniteHell = InfiniteHell || {};

// WxH: 896x500, but will be automatically scaled. Phaser.CANVAS - debugging features, Phaser.AUTO - normally. 7 * 128 (fire spritesheet) = 896.
InfiniteHell.game = new Phaser.Game(896, 500, Phaser.AUTO, 'game');

// Add each state.
InfiniteHell.game.state.add('Boot', InfiniteHell.Boot);
InfiniteHell.game.state.add('Preload', InfiniteHell.Preload);
InfiniteHell.game.state.add('Menu', InfiniteHell.Menu);
InfiniteHell.game.state.add('Game', InfiniteHell.Game);

// Start game with Boot state.
InfiniteHell.game.state.start('Boot');
