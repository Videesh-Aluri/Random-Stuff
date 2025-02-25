const tasks = new Map([]);

function addToTaskList() {
  const currentDate = new Date();
  const textBox = document.getElementById("textBox");
  let inputText = textBox.value.trim();
  if (tasks.has(inputText)) {
    alert("task already exist");
    textBox.value = "";
    return;
  }
  tasks.set(inputText, { createdDt: currentDate });
  if (inputText.trim() !== "") {
    taskRow = document.createElement("tr");
    const taskTextTd = document.createElement("td");
    document.getElementById("itemList").appendChild(taskRow);
    taskTextTd.textContent = inputText;
    taskRow.append(taskTextTd);
    textBox.value = "";

    const taskCreatedDt = document.createElement("td");
    taskCreatedDt.textContent = tasks.get(inputText).createdDt.toDateString();
    taskRow.append(taskCreatedDt);
    createDeleteCheckBox(taskRow);
    createPrioritySet(taskRow);
  } else {
    alert("Please enter something to add it to task list");
  }
}

//  creating a delete button that will be added to a table and attches the deleteTask function when the button is click
// This function takes table row html element as input, then adds Delete Button with onClick event to that.
function createDeleteCheckBox(tableRowElm) {
  console.log("got id in delete :", tableRowElm);
  buttonTd = document.createElement("td");
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "checkbox";
  buttonTd.append(deleteBtn);

  deleteBtn.textContent = "Delete";
  buttonTd.append(deleteBtn);
  taskRow.append(buttonTd);
}

function deleteTask(deleteBtn) {
  // var selected = document.querySelectorAll("#itemList input[type=checkbox]:checked");
  const selected = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log("got selected as:", selected);

  selected.forEach(function (checkbox) {
    row = checkbox.closest("tr");
    console.log("found row", row);
    ogTaskLine = row.querySelector("td").textContent;
    console.log("ogTaskLine: ", ogTaskLine);

    tasks.delete(ogTaskLine);
    row.remove();
  });
}
function createPrioritySet() {
  const listPriority = document.createElement("td");
  Priority = document.createElement("select");
  Priority.innerHTML =
    '<option></option> <option value="low">Low</option> <option value="medium">Medium</option> <option value="high">High</option>';
  Priority.id = "PriorityList";
  Priority.value = "PriorityValue";
  // Priority.setAttribute("onChange", "changePriorityBackGround(this)");

  listPriority.append(Priority);
  taskRow.append(listPriority);
  console.log("hello: ", Priority);
}

document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("itemList");
  table.addEventListener("change", function (event) {
    if (event.target && event.target.matches("select")) {
      var selectedValue = event.target.value;
      var cell = event.target.closest("td");
      var Bigcell = event.target.closest("tr");
      ogTaskLine = Bigcell.querySelector("td").textContent;
      var showPriority = tasks.get(ogTaskLine);

      // Change cell background color based on the selected value
      switch (selectedValue) {
        case "high":
          showPriority.Priority = "high";
          cell.style.backgroundColor = "red";
          break;
        case "medium":
          showPriority.Priority = "medium";
          cell.style.backgroundColor = "yellow";
          break;
        case "low":
          showPriority.Priority = "low";
          cell.style.backgroundColor = "green";
          break;
        default:
          showPriority.Priority = "None";
          cell.style.backgroundColor = "";
      }
    }
  });
});
