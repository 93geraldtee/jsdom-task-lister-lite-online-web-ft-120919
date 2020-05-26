// document.addEventListener("DOMContentLoaded", () => {
//   const createTaskForm = document.getElementById("create-task-form")
//   const newTaskDescription = document.getElementById("new-task-description")
//   const tasksList = document.getElementById("tasks")

// });

const createTaskForm = document.querySelector("#create-task-form")
const tasksList = document.querySelector("#tasks")

createTaskForm.addEventListener("submit", function(e) {
  e.preventDefault()

  // getting user input
  const newTask = document.querySelector("#new-task-description").value
  // newTask.value
  // slap it on the DOM
  // where?

  tasksList.innerHTML += `
  <li>${newTask}</li>
    <button data-action="delete"> Delete </button>
  `

  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask
  // tasksList.appendChild(taskItem)
  createTaskForm.reset()

})

tasksList.addEventListener("click", function(e) {
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})