import todoItemDom from "./todoItemDOM.js";
import addTodoItem from "./addTodoItem.js";
import projectDOM from "./projectsDOM.js";
import {displayNavBar, displayProjects, displayTodoSection} from "./DOM.js";
import {addButtonEvent, removeButtonEvent} from "./buttonFunctions.js";

import './style.css';

const page = document.querySelector('#webpage')
const projectsection = document.querySelector('.projectsdiv');


const todo = (task, description, dueDate, priority, index, project) => {
    
    // Index is just for testing purposes
    const displayTodoItem = () => {
        console.log(index);
        todoItemDom(task, description, dueDate, priority, index);
    }

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

displayNavBar();
displayProjects();

const test = todo('a', "b", "Jan", 1, 0, "Inbox");
const testp = todo('b', 'c', "Feb", 2, 1)

todoList[0] = test;
todoList[1] = testp;

//Test active
const allNode = document.querySelector('[data-project="All"]');
allNode.classList.add('active');


// Function has no purpose right now
function getNewTodoList (todoList) {
    let newTodoList = []
    const activeTab = document.querySelector('.active');
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === activeTab.dataset.project || activeTab.dataset.project === "All") {
            newTodoList.push(todoList[i]);
        }
    }
    return newTodoList;
}

//Test
displayTodoSection(todoList);

export {todoList, todo};