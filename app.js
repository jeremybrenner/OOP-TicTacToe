
  // Creates a new game instance, new board, and new players
  function Game() {

      this.playerX = new Player('X');
      this.playerO = new Player('O');
      this.board = new Board();
  }

  // This sets the turn without relying on an incrementing counter
  Game.prototype.nextPlayer = function() {
      game.currentPlayer === game.playerX ? game.currentPlayer = game.playerO : game.currentPlayer = game.playerX;
  };


  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    this.currentPlayer = this.playerX;
    $(game.board.$cells).click(function(event){
      game.board.makeMove();
    });
  };

  // Constructs a player object and assigns a team
  function Player(team) {
    this.team = team;
  }

  // Creates a new board object on game creation
  function Board() {   
    this.$cells = $('.box');
     $('#reset').click(function(event){
      game.board.resetBoard();
    });
   }

  // Sets a square to player 'team' and prevents square 
  // from reset with another move
  Board.prototype.makeMove = function() {
    if($(event.target).html() === '&nbsp;'){
      $(event.target).text(game.currentPlayer.team);
        game.nextPlayer();
          } else { 
            alert("This square is already taken!");
          }
  };

  // Generic function to reset the board to its initial state,
  // will be called by the button as a hard reset, and by the
  // winner check 
  Board.prototype.resetBoard = function() {
     game.board.$cells.html('&nbsp;');
  };

  // Start the game!
  var game = new Game();
  game.init();