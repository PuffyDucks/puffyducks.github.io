/*global Phaser*/
/*global localStorage*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {};

game_state.play = function() {};
game_state.play.prototype = {

    preload: function() {
        game.load.image('player', 'assets/player.png');
        game.load.image('secretPlayer', 'assets/a.png');
        game.load.image('roll', 'assets/roll.png');
        game.load.image('vertical', 'assets/vertical.png');
        game.load.image('horizontal', 'assets/horizontal.png');
        game.load.image('stripes', 'stripes.png');
    },

    create: function() {
        // var sadjfklj = "ye";
        // localStorage.someVarName = sadjfklj;
        // console.log(localStorage.someVarName);
        this.level = localStorage.playingLevel;
        
        this.time= 0;
        this.wait = 0;
        this.deadTime = undefined;
        this.recorded = false;
        this.textSaid = false;
        
        this.levels = [
        [
        [[0],[2]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[0],[0],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[0],[ ],[0],[ ],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[0],[0],[ ],[0],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        ],
        /** Level 2 **/
        [
        [[0],[2]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[0],[0],[0]],
        [[ ],[ ],[ ],[0],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[0],[ ],[ ],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[0],[ ]],
        [[0],[0],[0],[0],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[0]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[0],[ ]],
        [[0],[0],[0],[0],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[ ]],
        [[0],[0],[0],[ ],[0]],
        [[0],[0],[0],[ ],[0]],
        [[0],[0],[ ],[ ],[0]],
        [[0],[0],[ ],[ ],[0]],
        [[0],[0],[ ],[ ],[0]],
        [[0],[0],[ ],[0],[0]],
        [[0],[0],[ ],[0],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        ],
        /** Level 3 **/
        [
        [[1],[2]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[0],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[ ],[ ],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[0],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[ ],[ ],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[0],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[ ],[ ],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[0],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[ ],[ ],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[0],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[0],[ ],[ ],[ ]],
        [[ ],[ ],[0],[ ],[ ]],
        [[ ],[ ],[ ],[0],[ ]],
        [[ ],[ ],[ ],[ ],[0]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        [[ ],[ ],[ ],[ ],[ ]],
        ],
        /** Level 4 **/
        [
        [[1],[2]],
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[0],[ ],[0],[ ]],    
        [[0],[0],[ ],[0],[0]],    
        [[ ],[0],[ ],[0],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[0],[0],[0],[ ],[0]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[0],[0],[0],[ ],[0]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[0],[0],[ ],[0],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[0],[ ],[0],[ ],[0]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[0],[ ],[0],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        ],
        /** Level 5 **/
        [
        [[2],[3]],
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[0],[0],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[0],[0],[0],[0],[ ]],    
        [[0],[0],[0],[ ],[ ]],    
        [[0],[0],[0],[ ],[ ]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[ ],[ ],[0],[0]],    
        [[0],[ ],[ ],[0],[0]],    
        [[0],[ ],[0],[0],[0]],    
        [[0],[ ],[0],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[0],[ ],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[0],[ ],[0],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[0],[ ],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[ ],[ ],[ ],[0],[0]],    
        [[0],[ ],[0],[0],[0]],    
        [[0],[ ],[0],[0],[0]],    
        [[0],[ ],[ ],[0],[0]],    
        [[0],[ ],[ ],[0],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[0],[ ],[0]],    
        [[0],[0],[0],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[0],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[0],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[0],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[ ],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[0],[0],[ ],[0],[0]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        [[ ],[ ],[ ],[ ],[ ]],    
        ],
        ];
        
        game.stage.backgroundColor = '#1cafff';
        if (localStorage.finished === "false") {
            localStorage.skinOn === "Off";
        }
        if (localStorage.skinOn === "On") {
            this.player = game.add.sprite(-300, 300, 'secretPlayer');
        } else {
            this.player = game.add.sprite(-300, 300, 'player');
        }
        game.physics.arcade.enable(this.player);
        this.player.enablebody = true;
        this.player.body.collideWorldBounds = true;
        this.player.disabled = false;
        
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        
        this.player.chickenSpeed = 300;
        
        this.walls = game.add.group();
        this.walls.enableBody = true;
        game.physics.arcade.enable(this.walls);
        
        this.rolls = game.add.group();
        this.rolls.enableBody = true;
        game.physics.arcade.enable(this.rolls);

        this.walls.create(0, 900, 'horizontal');
        
        if (this.level < 6) {
            this.difficulty = this.levels[this.level - 1][0][0][0];
            this.player.tile = this.levels[this.level - 1][0][1][0];
        }

        if (this.difficulty === 0) {
            this.speed = 500;
            this.parse = 19;
        }
        if (this.difficulty === 1) {
            this.speed = 700;
            this.parse = 13;
        }
        if (this.difficulty === 2) {
            this.speed = 1000;
            this.parse = 9;
        }
        this.Roll = function(RH) {
            this.createRoll = this.rolls.create(850, RH, 'roll');
            this.createRoll.body.velocity.x = -this.speed;
        };
        this.Fall = function(RL) {
            this.createRoll = this.rolls.create(RL*160, -160, 'roll');
            this.createRoll.body.velocity.y = this.speed;
        };
    },

    update: function() {
        if (this.level < 6) {
            if (this.time%this.parse === 0) {
                // if (this.level1.length = )
                if (this.levels[this.level - 1].length - 2 === this.time/this.parse) {
                    if (this.level + 1 > localStorage.level) {
                        localStorage.level++;
                        localStorage.playingLevel++;
                    } else {
                        localStorage.playingLevel++;
                    }
                    game.state.start('title2');
                }
                for(var i = 0; i < 5; i++) {
                    if(this.levels[this.level - 1][(this.levels[this.level - 1].length - 1) - (this.time/this.parse)][i][0] === 0) {
                        this.Fall(i);
                    }
                }
            }
        } else 
        if (this.level === "6" && this.textSaid === false) {
            this.text = game.add.text(10, 10, "Well, congratualations. You finished the demo! \nThe full version will come out soon with more \nlevels, better graphics, new features, and more! \n\n Thank you for playing my game! ヽ(‘ ∇‘ )ノ\n\nSpecial Skin Unlocked.\n Press enter to go back.", {font: "bold 32px Arial", fill: "#ffffff", align: "center" });
            this.textSaid = true;
            this.text.position.x = 400 - this.text.width / 2;
            this.text.position.y = 300 - this.text.height / 2;
            localStorage.finished = true;
        } else 
        if (this.textSaid === false) {
            game.stage.backgroundColor = '#ff0000';
            this.text = game.add.text(160, 450, "Cheater.", {font: "bold 32px Arial", fill: "#ffffff", align: "center" });
            this.textSaid = true;
            this.text.position.x = 400 - this.text.width / 2;
            this.text.position.y = 300 - this.text.height / 2; 
        }
        if (this.level === "6" && this.enter.isDown) {
            game.state.start('title');
        }
        if (this.player.disabled === false) {
            if (this.left.isDown) {
                if (this.player.leftWasDown === false) {
                    this.player.tile--;
                    this.player.leftWasDown = true;
                }
            }
            if (this.right.isDown) {
                if (this.player.rightWasDown === false) {
                    this.player.tile++;
                    this.player.rightWasDown = true;
                }
            }
            if (this.left.isUp) {
                this.player.leftWasDown = false;
            }
            if (this.right.isUp) {
                this.player.rightWasDown = false;
            }
        }
        if (this.player.tile > 4) {
            this.player.tile = 4;
        }
        if (this.player.tile < 0) {
            this.player.tile = 0;
        }
        this.player.body.position.x = this.player.tile * 160;
        
        game.physics.arcade.overlap(this.player, this.rolls, this.hit, null, this);
        game.physics.arcade.overlap(this.walls, this.rolls, this.OFB, null, this);
        this.time++;
        if (this.time > this.deadTime + 50) {
            game.state.start('title2');
        }
    },
    hit: function(player, tile) {
        game.stage.backgroundColor = '#ff0000';
        // this.text = game.add.text(this.player.tile * 160, 450, "You died", {font: "bold 32px Arial", fill: "#ffffff", align: "center" });
        this.player.disabled = true;
        // this.rolls.body.velocity.y = 0;
        if (this.recorded != true) {
            this.deadTime = this.time; 
            this.recorded = true;
        }
        player.kill();
    },
    OFB: function(wall, tile) {
        tile.kill();
    }
};
game.state.add('play', game_state.play);
game.state.start('play');
