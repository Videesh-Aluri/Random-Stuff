let currentPlayer = "X";
let gameState = Array(9);

function Game(playerChoice) {
  const cell = document.getElementById(playerChoice);

  const statusText = document.getElementById("status");

  if (cell.textContent === "") {
    if (currentPlayer === "X") {
      gameState[playerChoice] = "X";
      cell.textContent = "X";
      currentPlayer = "O";
      statusText.textContent = `Player 2's (${currentPlayer}) turn`;
    } else if (currentPlayer === "O") {
      cell.textContent = "O";
      gameState[playerChoice] = "O";
      currentPlayer = "X";
      statusText.textContent = `Player 1's (${currentPlayer}) turn`;
    }
  }

  console.log("before loop", gameState);
  var gameOver = true;
  var j = 0;
  for (let i = 0; i < gameState.length; i++) {
    if (!gameState.hasOwnProperty(i)) {
      console.log("empty");
      j++;

      gameOver = false;
    }
  }

  if (j < 5) {
    console.log("Evaluate winning combinations");
    evalute(currentPlayer);
  }

  if (gameOver) {
    alert("Game is Over");
    ResetGame(gameState);
  }
}

function evalute() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    part1 = gameState[winningCombinations[i][0]];
    part2 = gameState[winningCombinations[i][1]];
    part3 = gameState[winningCombinations[i][2]];
    console.log("inside evalute", part1, part2, part3);
    if (part1 === part2 && part2 === part3 && part3 === "X") {
      setTimeout(() => {
        alert("Winner is Player 1");
        ResetGame(gameState);
      }, 100);
    } else if (part1 === part2 && part2 === part3 && part3 === "O") {
      setTimeout(() => {
        alert("Winner is Player 2");
        ResetGame(gameState);
      }, 100);
    }
  }
}

function ResetGame(gameState) {
  console.log(gameState);
  for (let j = 0; j < 9; j++) {
    cell = document.getElementById(j);
    console.log("ResetGame loop", cell);
    cell.textContent = "";
    gameState[j] = "We have a Winner";
    console.log(gameState);
  }
  gameState.length = 0;
  console.log(gameState.length);
  gameState.length = 9;
  console.log("inside resetgame", gameState);
}
