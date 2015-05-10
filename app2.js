// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`

  function Game() {

      this.turns = 1
      this.playerX = new Player('X');
      this.playerO = new Player('O'); 
      this.board = new Board();
  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
    //Switch players
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {

    $(this.board.$cells).click(function(event){
      $(event.target).text((game.turns%2 === 0)? "x" : "o")
    });
  };

  // A starter Player constructor.
  function Player(team) {
    this.team = team;
    //Is the player X or O?
    //this.team = ...
  };

  // A starter Board constructor.
  function Board() {
    //Tracks the cells of the board instance
    //this.$cells = ...
    this.$cells = $('.box') 
    //Store any other properties that board may have below, such as a reset option
  };

  Board.prototype.makeMove = function(player, $cell) {
    $cell.text(player);
  }

  // Start the game!
  var game = new Game();
  game.init();