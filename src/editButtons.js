import {displayTodoSection} from './DOM';
import { generateList } from './listLogic';
import { todoList } from './index';
import addTodoItem from "./addTodoItem";
import editTodoItem from './editTodoItem';



function changeTaskDate () {
    const dateButton = document.querySelector('.detailsdate');
    dateButton.addEventListener('click', () => {
        const newDate = prompt("Date?");
        dateButton.textContent = newDate;
    })
}

function changeTaskProject () {
    const projectButton = document.querySelector('.detailsproject');
    projectButton.addEventListener('click', () => {
        console.log(3)
    })
}

function addTask () {
    const addTaskButton = document.querySelector('.addconfirm');
    addTaskButton.addEventListener('click', () => {
        addTodoItem();
        const currentProject = document.querySelector('.active');
        const resetList = generateList(todoList, currentProject.dataset.project);
        displayTodoSection(resetList);
    })
}

function editTask (index) {
    const editTaskButton = document.querySelector('.editconfirm');
    editTaskButton.addEventListener('click', () => {
        editTodoItem(index);
        const currentProject = document.querySelector('.active');
        const resetList = generateList(todoList, currentProject.dataset.project);
        displayTodoSection(resetList);
    })
}

function cancel () {
    const cancelButton = document.querySelector('.cancelbutton');
    cancelButton.addEventListener('click', () => {
        const currentProject = document.querySelector('.active');
        const resetList = generateList(todoList, currentProject.dataset.project);
        displayTodoSection(resetList);
    })
}

export {changeTaskDate, addTask, editTask, cancel};