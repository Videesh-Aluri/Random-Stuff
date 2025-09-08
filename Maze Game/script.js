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
        spot.classList.add("hastobeEmpty");
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
        spot.classList.add("hastobeEmpty");
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
      // for (let q = 0; q <= 144; q++) {
      //   if (col === q && row === 144) {
      //     spot.classList.add("CloseToWall");
      //   }
      // }
      // for (let q = 0; q <= 144; q++) {
      //   if (col === 144 && row === q) {
      //     spot.classList.add("CloseToWall");
      //   }
      // }
      // for (let q = 0; q <= 144; q++) {
      //   if (col === q && row === 1) {
      //     spot.classList.add("CloseToWall");
      //   }
      // }
      // for (let q = 0; q <= 144; q++) {
      //   if (col === 1 && row === q) {
      //     spot.classList.add("CloseToWall");
      //   }
      // }
      maze.appendChild(spot);
    }
  }
});
let playerPosition = 0;

function generateMaze() {
  const Mazespaces = document.querySelectorAll("#mazeSpot");
  Mazespaces.forEach((element) => {
    element.classList.remove("wall");
    element.classList.remove("path");
  });

  Mazespaces.forEach((element) => {
    console.log(element);
    let num = Math.floor(Math.random() * 4);
    if (num === 1) {
      if (
        element.classList.contains("start") ||
        element.classList.contains("end") ||
        element.classList.contains("path") ||
        element.classList.contains("hastobeEmpty")
      ) {
        return;
      }
      console.log("wall added");
      element.classList.add("wall");
    }
  });

  Mazespaces.forEach((element1) => {
    if (
      element1.classList.contains("path") ||
      element1.classList.contains("wall")
    ) {
      return;
    }
    console.log("path added");
    element1.classList.add("path");
  });

  console.log("Maze generated");
  const board = document.getElementById("maze");
  if (document.querySelectorAll(".player").length === 0) {
    const playerElement = document.createElement("div");
    playerElement.classList.add("player");
    board.children[playerPosition].appendChild(playerElement);
  }

  playerPosition = 0;
  const playerElement = document.querySelector(".player");
  board.children[playerPosition].appendChild(playerElement);
}

document.addEventListener("keydown", (e) => {
  const board = document.getElementById("maze");
  const playerElement = document.querySelector(".player");
  let key = e.key;
  if (key === "w") {
    if (
      document
        .getElementById("maze")
        .children[playerPosition - 144].classList.contains("path")
    ) {
      playerPosition -= 144;
    }
  } else if (key === "a") {
    if (
      document
        .getElementById("maze")
        .children[playerPosition - 1].classList.contains("path")
    ) {
      if (
        document
          .getElementById("maze")
          .children[playerPosition - 1].classList.contains("CloseToWall")
      )
        playerPosition -= 1;
    }
  } else if (key === "s") {
    if (
      document
        .getElementById("maze")
        .children[playerPosition + 144].classList.contains("path")
    ) {
      playerPosition += 144;
    }
  } else if (key === "d") {
    if (
      document
        .getElementById("maze")
        .children[playerPosition + 1].classList.contains("path")
    ) {
      playerPosition += 1;
    }
  }
  board.children[playerPosition].appendChild(playerElement);
  if (
    document
      .getElementById("maze")
      .children[playerPosition].classList.contains("end")
  ) {
    alert("you beat the maze click Generate Maze to get new maze");
  }
});

function resetMaze() {
  const Mazespaces = Array.from(document.querySelectorAll("#mazeSpot"));
  Mazespaces.forEach((element) => {
    element.classList.remove("wall");
    element.classList.remove("intendedpath");
  });
}
