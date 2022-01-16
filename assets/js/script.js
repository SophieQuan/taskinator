var formEl = document.querySelector("#task-form");
var taskToDoEL = document.querySelector("#tasks-to-do");

var createTaskHander = function(e){
    e.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    taskToDoEL.appendChild (listItemEl);
    console.log(e);
};

formEl.addEventListener("submit", createTaskHander);

