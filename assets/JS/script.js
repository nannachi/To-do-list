const addBtn = document.getElementById("add-task-btn");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function() {
    const taskText = input.value;

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.appendChild(li);

    input.value = "";
});