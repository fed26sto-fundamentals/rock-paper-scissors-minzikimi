



alert("HELLO welcome to the game");

const choices = ["rock", "paper", "scissors"];


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const playerInput = prompt(
    "Type the number : \n1.Rock \n2.Paper \n3.Scissors"
  );
  if (playerInput === "1") {
    return choices[0];
  } else if (playerInput === "2") {
    return choices[1];
  } else if (playerInput === "3") {
    return choices[2];
  } else {
    console.log("Error! Invalid input.");
    return getHumanChoice(); // Ask again if input is invalid
  }
}


function playRound(playerChoice, computerChoice) {
  console.log("Game starts now");
  console.log("You chose " + playerChoice + ".");
  console.log("Computer chose " + computerChoice + ".");

  if (playerChoice === computerChoice) {
    console.log("It's a tie");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Human player won");
    humanScore++;
  } else {
    console.log("Computer won");
    computerScore++;
  }
  console.log("Human player score : " + humanScore);
  console.log("Computer score : " + computerScore);
  console.log("==================================");
}

function playgame() {
  for (let round = 1; round <= 5; round++) {
    const playerChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  }
  console.log("Total Score : \n" +
    "Human Player : " + humanScore + "\n" +
    "Computer : " + computerScore);
  if (humanScore>computerScore){
    console.log("Human Player won for this game!");
  }
  else if (computerScore>humanScore){
    console.log("Computer won for this game!")
  }
  else {
    console.log("This game ended as tie!");
  }
}

playgame();