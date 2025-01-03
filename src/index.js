document.addEventListener("DOMContentLoaded", () => {
  //grabs all the necessary DOM elements.

  //set the newTaskForm to a variable.
  const newTaskForm = document.querySelector('form');

  //attach a submit event listener to newTaskForm.
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //create a variable called newToDo that holds the value of the targeted input.
    const newToDo = e.target.querySelector('#new-task-description').value

    //pass in the newToDo variable as an argument to buildToDo. 
    buildToDo(newToDo);

    //after buildToDo function runs, reset the newTaskForm so the input is empty
    newTaskForm.reset();
  })
});

  //when user submits, we pass in the targeted input into buildToDo function
  function buildToDo(newToDo){
    //first, the buildToDo function creates an li element and a button element. 
    const taskLi = document.createElement('li');
    const deleteButton = document.createElement('button');

    //next, we set the textContent of the btn element to 'x'.
    deleteButton.textContent = 'x';

    //after, we set the textContent of the li element to the todo parameter.
    //remember, when we submit, we are passing in targeted input into the parameters. 
    taskLi.textContent = newToDo;

    //next, we append the new btn to the li.
    taskLi.appendChild(deleteButton);

    //then, we add the li element to the ul element with id of tasks
    document.querySelector('#tasks').appendChild(taskLi);
  
  
    //finally, we attach a click event listener to the btn which invokes the handleDelete function
    deleteButton.addEventListener('click', handleDelete);
  }

  //when the button element with the textContent of 'x' is clicked, this function will run.
  function handleDelete(e){
    //this function targets the parent node of the button and removes it.
    //in this case, the parentNode of the button element is the li element, so the li is removed from the list.
    e.target.parentNode.remove();
  }