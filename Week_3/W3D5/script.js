// DOM Elements
const list = document.getElementById("list");
const taskField = document.getElementById("user-input");

// Creating tasks in DOM
const addTask = (task) => {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("id", task.id);
  taskDiv.setAttribute("class", "task")
  list.appendChild(taskDiv);
  let checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.name = 'finished';
  checkbox.setAttribute("class", `checkbox-task`)
  checkbox.setAttribute("onclick", `finishTask("${task.id}")`)
  taskDiv.appendChild(checkbox);
  let taskElement = document.createElement("H3");
  taskElement.innerHTML = task.description;
  taskElement.setAttribute("class", "unfinished")
  taskDiv.appendChild(taskElement);
  const trash = document.createElement("img");
  trash.setAttribute("src", "trash-delete-icon.jpg");
  trash.setAttribute('onclick', `deleteTask("${task.id}")`)
  taskDiv.appendChild(trash);
}

// Get all tasks from database and create list
const createTaskList = async () => {
  let data = await fetchTasks();
  await data.forEach((element) => {
    addTask(element);
  });
};

// Add task
const newTask = async () => {
  let newTaskDescription = taskField.value
  const addedTask = await postNewTask(newTaskDescription);
  addTask(addedTask);
};

// Delete taks
const deleteTask = async (id) => {
  let selectedTask = document.getElementById(`${id}`)
  selectedTask.remove();
  await deleteTaskDatabase(id)
}

// Finish Taks
const finishTask = (id) => {
  let selectedTask = document.getElementById(`${id}`)
  let taskTextCollection = selectedTask.getElementsByClassName('unfinished');
  let taskTextArray = Array.from(taskTextCollection)
  taskTextArray[0].setAttribute("class", "finished")
}

// Create initial tasklist on load
createTaskList()