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

displayNavBar();
displayProjects();

//App starts with "All" project active
const allNode = document.querySelector('[data-project="All"]');
allNode.classList.add('active');

const test = todo('a', "b", "Jan", 1, 0, "Inbox");
const testp = todo('b', 'c', "Feb", 2, 1)

todoList[0] = test;
todoList[1] = testp;

activeList = generateList(todoList, "All");

console.log(todoList);
console.log(activeList);
displayTodoSection(activeList);


export {todoList, todo, activeList};