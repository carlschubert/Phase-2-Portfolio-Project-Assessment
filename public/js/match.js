function Match() {
  this.gamesArr = this.newGame()
  this.gameNum = 0
  this.playerWins = 0
  this.compWins = 0
}

Match.prototype.newGame = function() {
  var games = []
  for(var i = 0; i < 3; i++){
    games.push(new Game() )
  }
  return games
}

Match.prototype.popGames = function() {
$(".player_games_won").text(this.playerWins)
$(".comp_games_won").text(this.compWins)
$(".player_score").text( this.gamesArr[this.gameNum].playerScore)
$(".comp_score").text( this.gamesArr[this.gameNum].compScore)
}

Match.prototype.playGame = function(userChoice) {
  this.gamesArr[this.gameNum].run(userChoice)
}

Match.prototype.checkGameWinner = function() {
  this.gamesArr[this.gameNum].checkWin()
  console.log(this.gamesArr[this.gameNum].checkWin())
  if (this.gamesArr[this.gameNum].winner == true) {
    this.playerWins++
    this.gameNum++
  } else if (this.gamesArr[this.gameNum].winner == false) {
    this.compWins++
    this.gameNum++
  }
}

Match.prototype.checkMatchWinner = function() {
  if (this.playerWins > 1) {
    console.log('win')
  } else if (this.compWins > 1) {
    console.log('lose')
  }
}

