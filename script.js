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
  return humanChoice;
}

console.log(getHumanChoice());
