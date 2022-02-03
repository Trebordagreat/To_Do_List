import { todoList, todo } from ".";
import {format} from 'date-fns';

export default function editTodoItem (index) {
    const task = document.querySelector('.detailstask').value;
    const description = document.querySelector('.detailsdescription').value;
    const date = new Date(document.querySelector('.detailsdate').value);
    let dueDate;
    if (!date) {
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

    const newTodo = todo(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3], index, itemDetails[4]);
    todoList.splice(index, 1, newTodo);
}