let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["0", "rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  let finalChoice = choices[randomIndex];
  console.log(finalChoice);
  return finalChoice;
}

function getHumanChoice() {
  return prompt("rock paper or scissors?");
}

function playRound(human, computer) {
  human = getComputerChoice();
  computer = getHumanChoice();
  if (human == "rock" && computer == "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else if (human == "paper" && computer == "rock") {
    console.log("You win! Paper beats Rock.");
    playerScore++;
  } else if (human == "rock" && computer == "scissors") {
    console.log("You win! Rock beats Scissors.");
    playerScore++;
  } else if (human == "scissors" && computer == "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  } else if (human == "scissors" && computer == "paper") {
    console.log("You win! Scissors beats Paper.");
    playerScore++;
  } else if (human == "paper" && computer == "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (human == computer) {
    console.log("You tie! No one wins this round.");
  } else {
    console.log("Invalid option, please type rock, paper, or scissors");
  }
}
console.log(playRound());
