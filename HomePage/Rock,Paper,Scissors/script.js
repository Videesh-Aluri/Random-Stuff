let playerScore = 0;
let computerScore = 0;

function Game(playerChoice) {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const resultDisplay = document.getElementById("resultDisplay");
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");

  const choices = ["Rock", "Paper", "Scissors"];

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const getResult = (playerChoice, computerChoice) =>
    playerChoice === computerChoice
      ? "It is a tie!"
      : (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Rock" && computerChoice === "Scissors")
      ? "You Win"
      : "You Lose";

  const result = getResult(playerChoice, computerChoice);
  resultDisplay.textContent = result;

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  if (result === "You Win") {
    playerScore++;
  } else if (result === "You Lose") {
    computerScore++;
  }
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  resultDisplay.style.backgroundColor =
    result === "It is a tie!" ? "blue" : result === "You Win" ? "green" : "red";

  resultDisplay.style.border = "2px solid transparent";
  resultDisplay.style.color = "white";
}
