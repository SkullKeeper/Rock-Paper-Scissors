let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) % 3;

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }

  return randomNumber;
}

function getHumanChoice() {
  const humanChoice = window.prompt(
    "Enter your choice (rock, paper or scissors):",
  );
  return humanChoice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Its tie. ${humanChoice} can't beat ${computerChoice}`);
    return;
  }
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
      break;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("human choice: " + humanSelection);
console.log("computer choice: " + computerSelection);

playRound(humanSelection, computerSelection);
