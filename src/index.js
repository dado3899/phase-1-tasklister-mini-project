document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // As a user, I should be able to type a task into the input field.
  // As a user, I should be able to click some form of a submit button.
  // As a user, I expect to see the task string that I provided appear in the 
  // DOM after the submit button has been activated.
  const form = document.querySelector("#create-task-form")

  const priority = document.createElement("select")
  const low = document.createElement("option")
  const medium = document.createElement("option")
  const high = document.createElement("option")
  priority.name = "priority"
  low.textContent = "Low"
  medium.textContent = "Medium"
  high.textContent = "High"
  low.value = "green"
  medium.value = "yellow"
  high.value = "red"
  priority.append(low,medium,high)

  form.append(priority)

  console.log(form)
  form.addEventListener("submit",(e)=>{
    e.preventDefault()   
    addTask(e)
  })

  function addTask(e){
    const taskList = document.querySelector("#tasks")
    console.log(taskList)
    const container = document.createElement("li")
    const newTask = document.createElement("p")
    const button = document.createElement("button")
    const editForm = document.createElement("form")
    const input = document.createElement("input")
    input.type = "text"
    input.name = "new-name"

    // <div> <p> <button> <div>
    newTask.textContent = e.target["new-task-description"].value
    newTask.className = e.target.priority.value
    button.textContent = "x"
    editForm.append(input)
    container.append(newTask, button,editForm)
    taskList.append(container)

    e.target["new-task-description"].value = ""
    button.addEventListener("click",()=>{
      container.remove()
    })

    editForm.addEventListener("submit", (e)=>{
      e.preventDefault()
      newTask.textContent = e.target["new-name"].value
    })
  }
});
