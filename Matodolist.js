let taskList = document.getElementById("taskList");
let li = document.createElement("li");
let editButton = document.createElement("button");
let deleteButton = document.createElement("button");

li.innerHTML = taskText;
deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;
}
if (taskText === "") {
  return;
}

editButton.onclick = function () {
  editTask(li);
};
deleteButton.onclick = function () {
  deleteTask(li);
};
