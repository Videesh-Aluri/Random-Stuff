async function createArt() {
  let rows = Number(document.getElementById("row").value);
  let cols = Number(document.getElementById("col").value);
  const artboard = document.getElementById("art");
  artboard.style.gridTemplateRows = `repeat(${rows}px)`;
  artboard.style.gridTemplateColumns = `repeat(${cols}px)`;
  artboard.style.minWidth = `${rows}px`;
  artboard.style.minHeight = `${cols}px`;
  artboard.style.maxWidth = `${rows}px`;
  artboard.style.maxHeight = `${cols}px`;
  const art = document.getElementById("art");

  for (let col = 1; col <= cols; col++) {
    for (let row = 1; row <= rows; row++) {
      const spot = document.createElement("div");
      spot.style.gridColumn = col;
      spot.style.gridRow = row;
      spot.className = "artPX";
      let pixel = Math.floor(Math.random() * 16777215).toString(16);
      spot.style.backgroundColor = pixel;
      art.appendChild(spot);
      // small pause so pixels appear sequentially
      await sleep(0);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
