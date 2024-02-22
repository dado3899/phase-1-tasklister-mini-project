document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // As a user, I should be able to type a task into the input field.
  // As a user, I should be able to click some form of a submit button.
  // addEventListener('submit',(e)=>{})
  const taskArray = []
  document.querySelector("#create-task-form").addEventListener('submit',handleSubmit)
  function handleSubmit(e){
    // As a user, I expect to see the task string that I provided appear 
    // in the DOM after the submit button has been activated.
    e.preventDefault()
    // console.log(e.target['priority'].value)
    let priority
    if(e.target['priority'].value ==="green"){
      priority = 1
    }
    else if(e.target['priority'].value ==="yellow"){
      priority = 2
    }
    else{
      priority = 3
    }
    const newTaskObj = {
      value :  e.target['new-task-description'].value,
      color : e.target['priority'].value,
      priorityNum : priority
    }
    renderTask(newTaskObj)
    taskArray.push(newTaskObj)
  }
  // console.log("In dom content loaded")
  // => red < yellow < green
  
  function renderTask(newTaskObj){
    const li = document.createElement('li')
    const tasks = document.querySelector("#tasks")
    li.className = newTaskObj.color
    li.textContent = newTaskObj.value
    tasks.append(li)
    
    const button = document.createElement("button")
    button.textContent = 'x'
    button.addEventListener('click', ()=>{
      li.remove()
    })
    li.append(button)
  }

  document.querySelector("#ad").addEventListener('change',(e)=>{
    console.log(e.target.value)
    //Clear out the list
    document.querySelector("#tasks").innerHTML = ""
    //change order of array
    if(e.target.value === "descending"){
      taskArray.sort(compareFndesc)
    }
    else{
      taskArray.sort(compareFnasc)
    }
    // console.log(taskArray)
    taskArray.forEach((task)=>{
      renderTask(task)
    })
    //rerender list
  })

  function compareFndesc(a, b) {
    if (a.priorityNum < b.priorityNum) {
      return -1;
    } else if (a.priorityNum > b.priorityNum) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  function compareFnasc(a, b) {
    if (a.priorityNum > b.priorityNum) {
      return -1;
    } else if (a.priorityNum < b.priorityNum) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }


});