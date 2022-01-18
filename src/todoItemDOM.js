export default function displayTodoItem (task, description, dueDate, priority) {
    console.log(2);
    const page = document.querySelector('#webpage');

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
}