window.addEventListener("DOMContentLoaded", function () {
  const maze = document.getElementById("maze");
  for (let row = 1; row <= 144; row++) {
    for (let col = 1; col <= 144; col++) {
      const spot = document.createElement("div");
      spot.id = "mazeSpot";
      spot.style.gridColumn = col;
      spot.style.gridRow = row;
      if (col === 1 && row === 1) {
        spot.classList.add("start");
      } else if (col === 2 && row === 1) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 2 && row === 2) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 3 && row === 3) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 3 && row === 1) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 1 && row === 2) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 1 && row === 3) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 144 && row === 144) {
        spot.classList.add("end");
      } else if (col === 143 && row === 144) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 142 && row === 144) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 141 && row === 144) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 144 && row === 143) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 144 && row === 142) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 144 && row === 141) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 142 && row === 142) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 143 && row === 143) {
        spot.classList.add("hastobeEmpty");
      } else if (col === 141 && row === 141) {
        spot.classList.add("hastobeEmpty");
      }
      maze.appendChild(spot);
    }
  }
});
playerPosition = 0;
function generateMaze() {
  const Mazespaces = Array.from(document.querySelectorAll("#mazeSpot"));
  Mazespaces.forEach((element) => {
    element.classList.remove("wall");
  });

  Mazespaces.forEach((element) => {
    console.log(element);
    let num = Math.floor(Math.random() * 4);
    if (num === 1) {
      if (
        element.classList.contains("start") ||
        element.classList.contains("end") ||
        element.classList.contains("hastobeEmpty")
      ) {
        return;
      }
      console.log("wall added");
      element.classList.add("wall");
    } else {
      console.log("path added");
    }
  });

  console.log("Maze generated");
  const board = document.getElementById("maze");
  if (document.querySelectorAll(".player").length === 0) {
    const playerElement = document.createElement("div");
    playerElement.classList.add("player");
    board.children[playerPosition].appendChild(playerElement);
  }
}

document.addEventListener("keydown", (e) => {
  const board = document.getElementById("maze");
  const playerElement = document.querySelector(".player");
  let key = e.key;
  if (key === "w") {
    playerPosition -= 64;
  } else if (key === "a") {
    playerPosition -= 1;
  } else if (key === "s") {
    playerPosition += 64;
  } else if (key === "d") {
    playerPosition += 1;
  }
  board.children[playerPosition].appendChild(playerElement);
});

function resetMaze() {
  const Mazespaces = Array.from(document.querySelectorAll("#mazeSpot"));
  Mazespaces.forEach((element) => {
    element.classList.remove("wall");
    element.classList.remove("intendedpath");
  });
}
