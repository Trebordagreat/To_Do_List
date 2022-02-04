import { todoList, todo, addMethods } from ".";
import { format } from "date-fns";

export default function addTodoItem () {
    const task = document.querySelector('.detailstask').value;
    const description = document.querySelector('.detailsdescription').value;
    const date = new Date(document.querySelector('.detailsdate').value);
    let dueDate;
    if (isNaN(date)) {
        dueDate = "";
    }
    else {
        dueDate = format(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()), 'MMMdo', 'UTC');
    }
    const priority = document.querySelector('.detailspriority').textContent;
    const project = document.querySelector('.detailsproject').textContent;

    let itemDetails = [];
    
    itemDetails[0] = task;
    itemDetails[1] = description;
    itemDetails[2] = dueDate;
    itemDetails[3] = priority;
    itemDetails[4] = project;

    const newTodo = todo(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3], todoList.length, itemDetails[4]);
    todoList.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todoList));

    return itemDetails;
}
