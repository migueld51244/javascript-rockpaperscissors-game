// Score keeping variables
let humanScore = 0;
let computerScore = 0;

function playGame(move) {
  
  // This functions determines the CPU's move
  function getComputerChoice () {
    let num = Math.random();
    
    if (num <= 0.33) {
      return "rock";
    }
    else if (num <= 0.66 && num > 0.33) {
      return "paper";
    }
    else {
      return "scissors";
    }
  }

  // Variable to store CPU's move
  let computerMove = getComputerChoice();

  // Compares the human move to the CPU's move
  if (move === computerMove) {
    console.log("Draw");
  } else if ((move === 'rock' && computerMove === 'paper') || (move === 'paper' && computerMove === 'scissors') || (move === 'scissors' && computerMove === 'rock')) {
    console.log(`You lose`);
    computerScore++;
  } else {
    console.log(`You win`);
    humanScore++;
  }
}