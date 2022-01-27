import { todoList, todo } from ".";
import { displayTodoSection } from "./DOM";
import addTodoItem from "./addTodoItem";

function addButtonEvent () {
    const addButtons = document.querySelectorAll('.addtask');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', () => {
            addTodoItem();
            displayTodoSection(todoList);
        })
    })
}

function removeButtonEvent () {
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            todoList.splice(button.dataset.index, 1);
            console.log(todoList);
            for (let i = 0; i < todoList.length; i++) {
                todoList[i].index = i;
            }
            displayTodoSection(todoList);
            console.log(todoList);
        })
    })
}

export {addButtonEvent, removeButtonEvent};
