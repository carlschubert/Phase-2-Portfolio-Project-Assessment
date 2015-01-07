$(document).ready(function() {

  var match = new Match()
  match.popGames()

  $('.choice').click(function() {
      userChoice = $(this).attr('id')
      match.playGame(userChoice)
      match.checkGameWinner()
      match.popGames()
    })
})
