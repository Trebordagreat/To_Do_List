import { todoList, todo } from ".";

export default function addTodoItem () {
    const task = prompt('task');
    const description = prompt('description');
    const dueDate = prompt('dueDate');
    const priority = prompt('priority');
    const project = prompt('project');

    let itemDetails = [];
    
    itemDetails[0] = task;
    itemDetails[1] = description;
    itemDetails[2] = dueDate;
    itemDetails[3] = priority;
    itemDetails[4] = project;

    const newTodo = todo(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3], todoList.length, "Inbox");
    todoList.push(newTodo);
    console.log(todoList);

    return itemDetails;
}

