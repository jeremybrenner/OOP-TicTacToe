// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`

  function Game() {

      this.playerX = new Player('X');
      this.playerO = new Player('O'); 
      this.board = new Board();
  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
  game.currentPlayer === game.playerX ? game.currentPlayer = game.playerO : game.currentPlayer = game.playerX;
  };

  // Game.prototype.checkWin = function() {
  // this will go in the nextPlayer function
  // }

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    this.currentPlayer = this.playerX
    $(this.board.$cells).click(function(event){
      $(event.target).text(game.currentPlayer.team);
      game.nextPlayer();
    });
  };

  // A starter Player constructor.
  function Player(team) {
    this.team = team;
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