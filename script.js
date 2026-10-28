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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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
  // ------------------- Round 1 -------------------
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  console.log("Round: 1");
  console.log("human choice: " + humanSelection);
  console.log("computer choice: " + computerSelection);

  playRound(humanSelection, computerSelection);

  // ------------------- Round 2 -------------------
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Round: 2");
  console.log("human choice: " + humanSelection);
  console.log("computer choice: " + computerSelection);

  playRound(humanSelection, computerSelection);

  // ------------------- Round 3 -------------------
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Round: 3");
  console.log("human choice: " + humanSelection);
  console.log("computer choice: " + computerSelection);

  playRound(humanSelection, computerSelection);

  // ------------------- Round 4 -------------------
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Round: 4");
  console.log("human choice: " + humanSelection);
  console.log("computer choice: " + computerSelection);

  playRound(humanSelection, computerSelection);

  // ------------------- Round 5 -------------------
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Round: 5");
  console.log("human choice: " + humanSelection);
  console.log("computer choice: " + computerSelection);

  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    console.log("Congratulation! You won the game.");
  } else if (humanScore < computerScore) {
    console.log("Sadly, you lose the game.");
  } else {
    console.log("Its tie.");
  }
}

playGame();
