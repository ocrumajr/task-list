//constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");
//listner for enter key. Used to add new task
taskInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    createTask();
  }
});
//on-click add button
document.querySelector("#push").onclick = function () {
  createTask();
};
//function to create task
function createTask() {
  if (taskInput.value == "") {
    alert("The task field is blank. Enter a task and try again");
  } else {
    //creates task by inserting an HTML <div> tag
    taskSection.innerHTML += `<div class="task"> <label id="taskname">
     <input onclick="updateTask(this)" type="checkbox" id="check-task">
     <p>${document.querySelector("#newtask input").value}
     </p></label> <div class="delete"><i class="uil uil-trash"></i></div></div>`;
    var current_task = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    taskSection.offsetHeight >= 300
      ? taskSection.classList.add("overflow")
      : taskSection.classList.remove("overflow");
  }
}
function updateTask(task) {
  let taskItem = task.parentElement.lastElementChild;
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}
