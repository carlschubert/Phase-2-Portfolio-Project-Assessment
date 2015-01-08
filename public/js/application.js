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


  $('#login_button').on('click', function (event) {
    event.preventDefault()
    var $target = $(event.target)
    $.ajax({
      url: '/login',
      type: 'GET',
    }).done(function (response) {
      $target.closest('button').replaceWith(response)
    })

  })

    $('#signup_button').on('click', function (event) {
    event.preventDefault()
    var $target = $(event.target)

    $.ajax({
      url: '/signup',
      type: 'GET',
    }).done(function (response) {
      console.log('hi')
      $target.closest('button').replaceWith(response)
    })
  })


})
