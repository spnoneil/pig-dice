// Business Logic
let rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player() {
  this.roll = 0;
  this.roundScore = 0;
  this.totalScore = 0;
}

//check if player rolled 1
Player.prototype.rollOne = function() { 
  if (this.roll === 1) {
  return this.roundScore = 0;
  } else {
  return this.roundScore += this.roll;
  }
}

//math for if the player holds
Player.prototype.hold = function () {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
}

//math for checking for winner
Player.prototype.checkWin = function() {
  if (this.totalScore >= 100) {
    alert("You won!")
  }
}


// UI Logic -----------------------------------------------------------
$(document).ready(function() {
  let player1 = new Player();
  let player2 = new Player();


  
  $("button#player1roll").click(function(event) {
    player1.roll = rollDice();
    $("#diceroll1").text(player1.roll);
    player1.rollOne()
    $("#roundscore1").text(player1.roundScore);

  });

  $("button#player1hold").click(function(event) {
    player1.hold();
    $("#totalscore1").text(player1.totalScore);
    $("#roundscore1").empty();
    $("#diceroll1").empty();
    player1.checkWin();
  })

  $("button#player2roll").click(function(event) {
    player2.roll = rollDice();
    $("#diceroll2").text(player2.roll);
    player2.rollOne()
    $("#roundscore2").text(player2.roundScore);

  });

  $("button#player2hold").click(function(event) {
    player2.hold();
    $("#totalscore2").text(player2.totalScore);
    $("#roundscore2").empty();
    $("#diceroll2").empty();
    player2.checkWin();
  })


});

















// $(document).ready(function() {
//   let dice = new Dice();
//   let currentPlayer = 1
//   let player1 = new Player("Player 1", 1);
//   let player2 = new Player("Player 2", 2);
//   let player1Round = 0;
//   let player2Round = 0;

//   $("#player1roll").click(function() {
//       if (currentPlayer === 1) {
//       let roll = dice.rollDice();
//       if (roll === false) {
//         if (currentPlayer === 1) {
//           currentPlayer = 2;
//         }
//         return "GAME OVER MAAAN"
//       } else {
//         $("#output1").text(player1.totalScore);
//         return player1.totalScore += roll;
//       }
      
//   } else {
//       let roll = dice.rollDice();
//       if (roll === false) {
//         if (currentPlayer === 2) {
//           currentPlayer = 1;
//         }
//         return "Round over man!"
//       } else {
//         $("#output2").text(player2.totalScore);
//         return player2.totalScore += roll;
//       }
//     }
//   });
//   $("player2roll").click(function() {
//       let roll = dice.rollDice();
//       if (roll === false) {
//         if (currentPlayer === 2) {
//           currentPlayer = 1;
//     }
//     return "Round Over Man!"
//   } else {
//     $("#output2").text(player2.totalScore);
//     return player2.totalScore += roll;
//   }

//   });

//   $("#hold").click(function() {
    
//   })
// });