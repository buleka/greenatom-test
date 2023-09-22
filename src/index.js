let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskElement = document.createElement("li");
        const deleteButton = document.createElement("button");
        const completeButton = document.createElement("button");

        taskElement.textContent = task.title;
        taskElement.classList.add('list-group-item');
        deleteButton.textContent = 'Удалить элемент';
        completeButton.textContent = 'Complete';
        deleteButton.classList.add('btn');
        deleteButton.classList.add('btn-danger');
        completeButton.classList.add('btn');
        completeButton.classList.add('btn-success');

        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

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
    const selectedTask = this.parentNode;

    const index = Array.from(taskList.children).indexOf(selectedTask);
    tasks[index].completed = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}



function deleteTask() {

    const taskList = document.getElementById("task-list");
    const selectedTask = this.parentNode;

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
const buttonDeleteTask = document.querySelectorAll('.btn-danger');
const buttonCompleteTask = document.querySelectorAll('.btn-success');


buttonAdd.addEventListener('click', addTask);
buttonDeleteFirst.addEventListener('click', deleteFirst);
buttonDeleteLast.addEventListener('click', deleteLast);
buttonHighlightEven.addEventListener('click', highlightEven);
buttonHighlightOdd.addEventListener('click', highlightOdd);

buttonDeleteTask.forEach((button) => {
    button.addEventListener("click", deleteTask.bind(null, button));
});

buttonCompleteTask.forEach((button) => {
    button.addEventListener("click", completeTask);
});