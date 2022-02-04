import todoItemDom from "./todoItemDOM.js";
import addTodoItem from "./addTodoItem.js";
import projectDOM from "./projectsDOM.js";
import {displayNavBar, displayProjects, displayTodoSection, clearContents} from "./DOM.js";
import {addButtonEvent, removeButtonEvent} from "./buttonFunctions.js";
import {generateList} from "./listLogic";

import './style.css';

const page = document.querySelector('#webpage')

const todo = (task, description, dueDate, priority, index, project) => {
    
    // Index is just for testing purposes
    const displayTodoItem = () => {
        todoItemDom(task, description, dueDate, priority, index);
    }

    // Needed to update todo for button functionality
    const updateIndex = (newIndex) => {
        index = newIndex;
    }

    return {
        displayTodoItem,
        updateIndex,
        task,
        description,
        dueDate,
        priority,
        project,
        index
    }
};

let todoList = [];
let activeList = [];
let projects = [];

if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todoList));
}
else {
    todoList = JSON.parse(localStorage.getItem('todos') || '[]');
}

function addMethods (object) {
    object.updateIndex = function (newIndex) {
        object.index = newIndex;
    }
    object.displayTodoItem = function () {
        todoItemDom(object.task, object.description, object.dueDate, object.priority, object.index);
    }
}

for (let i = 0; i < todoList.length; i++) {
    addMethods(todoList[i]);
}

if(!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify(projects));
}
else {
    projects = JSON.parse(localStorage.getItem('projects') || '[]');
}

activeList = generateList(todoList, "All");

displayNavBar();
displayProjects();

//App starts with "All" project active
const allNode = document.querySelector('[data-project="All"]');
allNode.classList.add('active');

displayTodoSection(activeList);


export {todoList, todo, activeList, projects, addMethods};