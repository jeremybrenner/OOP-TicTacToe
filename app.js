// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
  function Game() {
  
      this.turns = 0
      this.player1 = new Player('X');
      this.player2 = new Player('O');  
  }
  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function(currentCell) {
    console.log("turns works")
    this.turns ++;
    console.log(currentCell);
    if(this.turns%2 !== 0){
      console.log("player 1")
      currentCell.css("background-color", "blue");
    } else {
      console.log("player 2")
      currentCell.css("background-color", "red");
    }
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
      // this.$cells = $('.box')
      console.log("this worked")
      this.board = new Board();
  };

  // A starter Player constructor.
  function Player(team) {
    this.team = team;
  };

  // A starter Board constructor.
  function Board() {
    this.$cells = $('.box')   
    //Store any other properties that board may have below, such as a reset option
  };

   Board.prototype.makeMove = function(){
    this.$cells.click(function(){
        game.nextPlayer(this.$cells);
      }
    });

  // Start the game!
  var game = new Game();
  game.init();
