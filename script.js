const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");
const clearCompleted = document.getElementById("clearCompleted");

let tasks = [];

function addTask() {
const text = taskInput.value.trim();

if (text === "") {
    alert("Please enter a task!");
    return;
}

const li = document.createElement("li");
li.className = "task";

li.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${text}</span>
    <button class="delete-btn">Delete</button>
`;

const checkbox = li.querySelector(".task-checkbox");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
    updateCount();
});

deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCount();
    showEmptyMessage();
});

taskList.appendChild(li);

taskInput.value = "";

updateCount();
showEmptyMessage();

}

function updateCount() {
const allTasks = taskList.querySelectorAll(".task");
const remainingTasks = taskList.querySelectorAll(
".task:not(.completed)"
);

```
taskCount.textContent =
    remainingTasks.length + " tasks remaining";
```

}

function showEmptyMessage() {
const tasks = taskList.querySelectorAll(".task");

```
if (tasks.length === 0) {
    emptyMessage.style.display = "block";
} else {
    emptyMessage.style.display = "none";
}
```

}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
addTask();
}
});

clearCompleted.addEventListener("click", function () {
const completedTasks = taskList.querySelectorAll(".completed");

```
completedTasks.forEach(function (task) {
    task.remove();
});

updateCount();
showEmptyMessage();
```

});

showEmptyMessage();
updateCount();

console.log("JavaScript connected successfully!");
