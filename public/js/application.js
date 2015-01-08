$(document).ready(function() {

  var match = new Match()
  match.popGames()

  $('.choice').click(function() {
      userChoice = $(this).attr('id')
      //refactor into one wrapper method
      match.playGame(userChoice)
      match.checkGameWinner()
      match.checkMatchWinner()
      match.popGames()
    })


  $(".content").on("click", '#new_game_button', function(event){
     event.preventDefault()
     var $target = $(event.target)
     $.ajax({
       url: $target.attr('action'),
       type: 'POST',
     }).always(function(){
       match.resetMatch()
     }).done(function(response){
       $('.content').empty().append(response)
       match.popGames()
       $('.choice').click(function() {
          userChoice = $(this).attr('id')
          match.playGame(userChoice)
          match.checkGameWinner()
          match.checkMatchWinner()
          match.popGames()
        })

     }).fail(function(){
       console.log('failed')
     })

   })


})
