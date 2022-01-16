var buttonEl = document.querySelector("#save-task");
var taskToDoEL = document.querySelector("#tasks-to-do");

var createTaskHander = function(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    taskToDoEL.appendChild (listItemEl);
};

buttonEl.addEventListener("click", createTaskHander);

