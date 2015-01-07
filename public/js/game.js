function Game() {
  this.playerScore = 0
  this.compScore = 0
  this.winner = null
}


Game.prototype.popScore = function() {
$(".player_score").text(this.playerScore)
$(".comp_score").text(this.compScore)
}