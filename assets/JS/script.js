const addBtn = document.getElementById("add-task-btn");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const errorMessage = document.getElementById("error-message");
const taskCounter = document.getElementById("task-counter");

function updateCounter() {
    const totalTasks = taskList.children.length;
   
    const completedTasks = document.querySelectorAll(".completed").length;
    taskCounter.textContent = `${completedTasks} completate / ${totalTasks} totali`;
}

addBtn.addEventListener("click", function() {
    const taskText = input.value;


//CONTROLLO CAMPO VUOTO//
    if (taskText.trim() === "") {
        errorMessage.textContent = "Il campo è vuoto";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";


    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    //CHECKBOX//
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

//PULSANTE ELIMINA//
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    updateCounter();

    input.value = "";
});

//CLICK SU AGGIUNGI CON INVIO TASIERA//
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

//ELIMINARE VOCE AGGIUNTA//

taskList.addEventListener("click", function(event) {
   const target = event.target;

   if (target.classList.contains("delete-btn")) {
    target.parentElement.remove();
    updateCounter();
    }

    if (target.classList.contains("task-checkbox")) {
        target.parentElement.classList.toggle("completed");
        updateCounter();
    }
    }
);

