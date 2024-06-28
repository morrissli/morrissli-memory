document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTask = document.createElement("li");
            newTask.innerHTML = `${taskText} <button>Видалити</button>`;
            taskList.appendChild(newTask);
            taskInput.value = '';
        }
    });

    taskList.addEventListener("click", (e) => {
        if (e.target && e.target.nodeName === "BUTTON") {
            e.target.parentNode.remove();
        }
    })
})