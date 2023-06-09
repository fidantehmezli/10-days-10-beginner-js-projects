// Selecting the input field and task list
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add task to the list
function addTask() {
  // Get the task value
  const taskValue = taskInput.value;

  // If task value is empty, don't add to the list
  if (taskValue === "") {
    return;
  }

  // Create a new list item and add task value to it
  const taskItem = document.createElement("li");
  taskItem.innerText = taskValue;

  // Create a delete button and add it to the list item
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function() {
    taskItem.remove();
  };
  taskItem.appendChild(deleteButton);

  // Add the list item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
}
// Adding tasks to the to-do list when the user clicks the 'Enter' button
taskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});
