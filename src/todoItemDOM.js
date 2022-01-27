export default function displayTodoItem (task, description, dueDate, priority, index) {

    const content = document.querySelector('.todosdiv');

    const todoNode = document.createElement('div');
    todoNode.classList.add('todoitem');

    const checkNode = document.createElement('button');
    checkNode.classList.add('todocheck');
    todoNode.appendChild(checkNode);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('todoinfodiv');
    
    // The following section is related to displaying properties
    const taskNode = document.createElement('div');
    const descriptionNode = document.createElement('div');
    const dueDateNode = document.createElement('div');
    const priorityNode = document.createElement('h3');

    taskNode.classList.add('taskname');
    descriptionNode.classList.add('taskdescription');
    dueDateNode.classList.add('taskdate');

    taskNode.textContent = task;
    descriptionNode.textContent = description;
    dueDateNode.textContent = dueDate;
    priorityNode.textContent = priority;

    infoDiv.appendChild(taskNode);
    infoDiv.appendChild(descriptionNode);
    infoDiv.appendChild(dueDateNode);
    todoNode.appendChild(priorityNode);

    todoNode.appendChild(infoDiv);

    //Index for testing
    const indexNode = document.createElement('p');
    indexNode.textContent = index;
    todoNode.appendChild(indexNode);

    //Remove button
    const removeItem = document.createElement('button');
    removeItem.textContent = "REMOVE";
    removeItem.setAttribute('data-index', index);
    removeItem.classList.add('remove');
    todoNode.appendChild(removeItem);

    content.appendChild(todoNode);
}