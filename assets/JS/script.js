const addBtn = document.getElementById("add-task-btn");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const errorMessage = document.getElementById("error-message");

addBtn.addEventListener("click", function() {
    const taskText = input.value;

    if (taskText.trim() === "") {
        errorMessage.textContent = "Il campo è vuoto";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";


    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
});

//CLICK SU AGGIUNGI CON INVIO TASIERA//
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});