import {displayTodoSection, clearContents, displayProjects} from './DOM';
import { generateList } from './listLogic';
import { todoList } from './index';
import addTodoItem from "./addTodoItem";
import editTodoItem from './editTodoItem';
import {format} from 'date-fns'



function changeTaskDate () {
    const dateButton = document.querySelector('.detailsdate');
    dateButton.addEventListener('click', () => {
        const newDate = prompt("Date?");
        newDate = format(newDate, 'MMM-do');
        dateButton.textContent = newDate;
    })
}

function changeTaskProject () {
    const projectButton = document.querySelector('.detailsproject');
    const projectOptions = document.querySelectorAll('.project-option');
    projectOptions.forEach(option => {
        option.addEventListener('click', () => {
            projectButton.textContent = option.textContent;
        })
    })
}

function changeTaskPriority () {
    const priorityButton = document.querySelector('.detailspriority');
    const priorityOptions = document.querySelectorAll('.priority-option');
    priorityOptions.forEach(option => {
        option.addEventListener('click', () => {
            priorityButton.textContent = option.textContent;
        })
    })
}

function addTask () {
    const addTaskButton = document.querySelector('.addconfirm');
    addTaskButton.addEventListener('click', () => {
        addTodoItem();
        const currentProject = document.querySelector('.active');
        const resetList = generateList(todoList, currentProject.dataset.project);
        clearContents();
        displayProjects();
        const sameProject = document.querySelector('[data-project=' + currentProject.dataset.project);
        sameProject.classList.add('active');
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

export {changeTaskDate, changeTaskProject, changeTaskPriority, addTask, editTask, cancel};