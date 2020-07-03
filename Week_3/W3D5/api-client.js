const apiUrl = "https://wincacademydatabase.firebaseio.com/kasper/tasks.json";

//Fetch tasks from database
const fetchTasks = async () => {
  const rawResponse = await fetch(apiUrl, {
    method: "GET"
  });
  const response = await rawResponse.json();
  let tasks = Object.keys(response).map((key) => ({
    id: key,
    description: response[key].description,
    done: response[key].done,
  }));
  return tasks;
};

//Push new task
const postNewTask = async (userInput) => {
  const fetchBody = JSON.stringify({ "description": userInput, "done": true });
  await fetch(apiUrl, {
    method: "post",
    body: fetchBody
  });
  const tasksArray = await fetchTasks()
  return tasksArray[tasksArray.length - 1];

  //createTaskList();
};

//Delete task
const deleteTaskDatabase = async (id) => {
  const idURL = `https://wincacademydatabase.firebaseio.com/kasper/tasks/${id}.json`
  await fetch(idURL, {
    method: "delete",
  });
}