var InfiniteHell=InfiniteHell||{}
InfiniteHell.Menu=function(){},InfiniteHell.Menu.prototype={preload:function(){this.difference=74,this.startButton=this.game.add.button(this.game.width/2,this.game.world.centerY,"start",this.startGame,this),this.startButton.anchor.setTo(.5),this.gameSound=this.game.add.audio("game"),this.gameSound2=this.game.add.audio("game2"),this.style={font:"bold 42px Times New Roman",fill:"#FFFFFF"},this.style2={font:"bold 26px Times New Roman",fill:"#DDDDFF"},this.text=this.game.add.text(this.game.world.centerX,this.game.world.centerY-200,"How to play?",this.style),this.text.anchor.setTo(.5),this.text2=this.game.add.text(this.game.world.centerX,this.game.world.centerY-140,"ARROW UP - jump over enemies",this.style2),this.text2.anchor.setTo(.5),this.text3=this.game.add.text(this.game.world.centerX,this.game.world.centerY-100,"ARROW DOWN - open the chest",this.style2),this.text3.anchor.setTo(.5)},startGame:function(){this.gameSound.play("",0,.06,!0),this.gameSound2.play("",0,.1,!0),this.state.start("Game")},adsStart:function(){this.state.start("Ads")},shopStart:function(){this.state.start("Shop")},inviteStart:function(){this.state.start("Invite")}}