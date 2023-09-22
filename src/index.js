let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskElement = document.createElement("li");
        taskElement.textContent = task.title;
        if (task.completed) {
            taskElement.classList.add("completed");
        }
        taskList.appendChild(taskElement);
    }
}

function addTask() {
    const input = document.getElementById("task");
    const title = input.value;
    if (!title) {
        alert("Please enter a task!");
        return;
    }
    const task = { title, completed: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
}

function highlightEven() {
    const taskList = document.getElementById("task-list");
    for (let i = 1; i < taskList.children.length; i += 2) {
        taskList.children[i].classList.toggle("highlighted");
    }
}

function highlightOdd() {
    const taskList = document.getElementById("task-list");
    for (let i = 0; i < taskList.children.length; i += 2) {
        taskList.children[i].classList.toggle("highlighted");
    }
}

function deleteLast() {
    tasks.pop();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteFirst() {
    tasks.shift();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function completeTask() {
    const taskList = document.getElementById("task-list");
    const selectedTask = taskList.querySelector(".selected");
    if (!selectedTask) {
        alert("Please select a task to complete!");
        return;
    }
    const index = Array.from(taskList.children).indexOf(selectedTask);
    tasks[index].completed = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteTask() {
    const taskList = document.getElementById("task-list");
    const selectedTask = taskList.querySelector(".selected");
    if (!selectedTask) {
        alert("Please select a task to delete!");
        return;
    }
    const index = Array.from(taskList.children).indexOf(selectedTask);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();

const buttonAdd = document.getElementById('add');
const buttonDeleteFirst = document.getElementById('deleteFirst');
const buttonDeleteLast = document.getElementById('deleteLast');
const buttonHighlightEven = document.getElementById('highlightEven');
const buttonHighlightOdd = document.getElementById('highlightOdd');
const buttonCompleteTask = document.getElementById('completeTask');
const buttonDeleteTask = document.getElementById('deleteTask');



buttonAdd.addEventListener('click', addTask);
buttonDeleteFirst.addEventListener('click', deleteFirst);
buttonDeleteLast.addEventListener('click', deleteLast);
buttonHighlightEven.addEventListener('click', highlightEven);
buttonHighlightOdd.addEventListener('click', highlightOdd);
buttonCompleteTask.addEventListener('click', completeTask);
buttonDeleteTask.addEventListener('click', deleteTask);