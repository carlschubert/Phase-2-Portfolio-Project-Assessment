function Game() {
  this.playerScore = 0
  this.compScore = 0
  this.winner = null
}


Game.prototype.popScore = function() {
$(".player_score").text(this.playerScore)
$(".comp_score").text(this.compScore)
}

Game.prototype.setUserChoice = function(setChoice) {
  this.userChoice = setChoice
}

Game.prototype.draw = function() {
  var draw = ['win', 'lose']
  draw = draw[Math.floor(Math.random() * draw.length)]
  if (draw = 'win') {
    this.playerScore++
  } else {
    this.compScore++
  }
}

Game.prototype.setCompChoice = function() {
  var choices = ['railroad', 'bobble', 'pique', 'boomerang', 'giraffe']
  var compChoice = choices[Math.floor(Math.random() * choices.length)]
  return compChoice
}

Game.checkWin = function() {
  if (this.playerScore > 3) {
    this.winner = true
  } else if (this.compScore > 3) {
    this.winner = false
  }
}

Game.prototype.run = function(userChoice) {
  compChoice = this.setCompChoice()
  //refactor if time
  if(userChoice == 'railroad') {
      if (compChoice == 'railroad') {
        this.draw()
      } else if (compChoice == 'bobble' || compChoice == 'giraffe') {
        this.compScore++
      } else {
        this.playerScore++
      }
  } else if(userChoice == 'bobble') {
      if (compChoice == 'bobble') {
        this.draw()
      } else if (compChoice == 'pique' || compChoice == 'boomerang') {
        this.compScore++
      } else {
        this.playerScore++
      }
  } else if(userChoice == 'pique') {
      if (compChoice == 'pique') {
        this.draw()
      } else if (compChoice == 'railroad' || compChoice == 'giraffe') {
        this.compScore++
      } else {
        this.playerScore++
      }
  } else if(userChoice == 'boomerang') {
      if (compChoice == 'boomerang') {
        this.draw()
      } else if (compChoice == 'railroad' || compChoice == 'pique') {
        this.compScore++
      } else {
        this.playerScore++
      }
  } else if(userChoice == 'giraffe') {
      if (compChoice == 'giraffe') {
        this.draw()
      } else if (compChoice == 'bobble' || compChoice == 'boomerang') {
        this.compScore++
      } else {
        this.playerScore++
      }
  } else {
      return false
  }
}

