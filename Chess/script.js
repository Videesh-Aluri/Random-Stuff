let dragged;

document.getElementById(".cell").forEach((cell) => {
  cell.addEventListener("dragstart", (e) => {
    dragged = cell;
  });

  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  cell.addEventListener("drop", (e) => {
    e.preventDefault();
    if (dragged !== cell) {
      console.log("Hi");
      const temp = cell.innerHTML;
      cell.innerHTML = dragged.innerHTML;
      dragged.innerHTML = temp;
    }
  });
});
