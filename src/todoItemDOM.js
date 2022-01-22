export default function displayTodoItem (task, description, dueDate, priority, index) {

    const page = document.querySelector('.todosdiv');

    const taskNode = document.createElement('h3');
    const descriptionNode = document.createElement('p');
    const dueDateNode = document.createElement('p');
    const priorityNode = document.createElement('h3');

    taskNode.textContent = task;
    descriptionNode.textContent = description;
    dueDateNode.textContent = dueDate;
    priorityNode.textContent = priority;

    page.appendChild(taskNode);
    page.appendChild(descriptionNode);
    page.appendChild(dueDateNode);
    page.appendChild(priorityNode);

    //Index for testing
    const indexNode = document.createElement('p');
    indexNode.textContent = index;
    page.appendChild(indexNode);

    //Remove button
    const removeItem = document.createElement('button');
    removeItem.textContent = "REMOVE";
    removeItem.setAttribute('data-index', index);
    removeItem.classList.add('remove');
    page.appendChild(removeItem);
}