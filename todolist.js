let taskList = document.getElementById("taskList"); // Appel l'element taskList par une chaine de caractère "taskList" du doc html
console.log("fichier charge");
function addTask() {
  let taskInput = document.getElementById("taskInput"); //cela me crée la saisie de donnée
  let taskText = taskInput.value;

  if (taskText === "") {
    // si la chaine de caractere est vide...
    return; // ...ca retourne au debut de la fonction
  }

  let li = document.createElement("li"); // le .createElement crée un élément HTML par un tagname dans ce cas le tagname c'est li

  li.innerHTML = taskText; // retranscrit en language html

  let editButton = document.createElement("button");

  editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'; // retranscrit en language html le parametre

  editButton.onclick = function () {
    editTask(li);
  };

  let deleteButton = document.createElement("button");

  deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
  deleteButton.onclick = function () {
    deleteTask(li);
  };

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  taskInput.value = "";
}

function editTask(task) {
  let taskTextElement = task.firstChild;
  let taskText = taskTextElement.textContent;

  let newTaskText = prompt("Modifier la tâche :", taskText);

  if (newTaskText === null || newTaskText === "") {
    return;
  }

  taskTextElement.textContent = newTaskText;
}
function deleteTask(task) {
  taskList.removeChild(task);
}
// li permet de representer un element dans une liste
