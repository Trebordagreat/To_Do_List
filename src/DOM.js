import {addButtonEvent, editButtonEvent, removeButtonEvent} from "./buttonFunctions.js";


function displayNavBar () {
    const page = document.querySelector('#webpage');

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    const leftNavBar = document.createElement('div');
    leftNavBar.classList.add('navbarsection');

    const menuNode = document.createElement('button');
    menuNode.setAttribute('id', 'menu');
    menuNode.textContent = "Menu";
    menuNode.classList.add('navoption');

    const homeNode = document.createElement('button');
    homeNode.setAttribute('id', 'home');
    homeNode.textContent = "Home";
    menuNode.classList.add('navoption');

    leftNavBar.appendChild(menuNode);
    leftNavBar.appendChild(homeNode);
    

    const rightNavBar = document.createElement('div');
    rightNavBar.classList.add('navbarsection');

    const addTaskNode = document.createElement('button');
    addTaskNode.setAttribute('id', 'addTask');
    addTaskNode.classList.add('addtask');
    addTaskNode.textContent = "Add Task";
    menuNode.classList.add('navoption');

    const settingsNode = document.createElement('button');
    settingsNode.setAttribute('id', 'settings');
    settingsNode.textContent = "Settings";
    menuNode.classList.add('navoption');

    rightNavBar.appendChild(addTaskNode);
    rightNavBar.appendChild(settingsNode);


    navBar.appendChild(leftNavBar);
    navBar.appendChild(rightNavBar);

    page.appendChild(navBar);
};

import displayProject from './projectsDOM';
import { changeProjectEvents, addProjectEvent } from "./buttonFunctions.js";
import {projects} from "./index"

function displayProjects () {
    const page = document.querySelector('#webpage');

    const content = document.createElement('div');
    content.classList.add('content');

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsdiv');

    // Add in mandatory projects (Inbox, All, Today, Filters & Labels)
    const defaults = document.createElement('div');
    defaults.classList.add('defaultprojects')
    projectsDiv.appendChild(defaults);

    // Add in custom projects
    const customs = document.createElement('div');
    customs.classList.add('customprojects');

    // Projects Heading with add project button
    const customsHeading = document.createElement('button');
    customsHeading.classList.add('projectsheading');
    
    const headingNode = document.createElement('div');
    headingNode.textContent = "Projects";
    customsHeading.appendChild(headingNode);

    const addProject = document.createElement('button')
    addProject.setAttribute('id', 'addproject');
    addProject.textContent = "+";
    customsHeading.appendChild(addProject);

    customs.appendChild(customsHeading);

    projectsDiv.appendChild(customs)

    const todosDiv = document.createElement('div');
    todosDiv.classList.add('todosdiv');

    content.appendChild(projectsDiv);
    content.appendChild(todosDiv);

    page.appendChild(content);

    displayProject("Inbox", ".defaultprojects");
    displayProject("All", ".defaultprojects");
    displayProject("Today", ".defaultprojects");

    for (let i = 0; i < projects.length; i++) {
        displayProject(projects[i], ".customprojects");
    }

    changeProjectEvents();
    addProjectEvent();
}

import { todoList, todo } from '.';
import { displayDetailInputs, displayDetailSelections, displayDetailButtons} from './taskDetailsDOM';

function displayTodoSection (taskList, index) {

    const todoSection = document.querySelector('.todosdiv');
    
    // Clear section
    todoSection.textContent = "";

    const currentProject = document.querySelector('.active');

    const headingNode = document.createElement('div');
    headingNode.classList.add("todoheading");
    headingNode.textContent = currentProject.dataset.project;

    todoSection.appendChild(headingNode);

    for (let i = 0; i < todoList.length; i++) {
        todoList[i].updateIndex(i);
    }

    // Important for edit button
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].index == index) {
            displayDetailInputs('edit', taskList[i]);
            displayDetailSelections('edit', taskList[i]);
            displayDetailButtons('edit', index);
        }
        else {taskList[i].displayTodoItem()}
    }

    const addButton = document.createElement('button');
    addButton.classList.add('addtask');
    addButton.setAttribute('id', 'addbuttonpage');
    addButton.textContent = "Add task";
    todoSection.appendChild(addButton);

    addButtonEvent();
    editButtonEvent();
    removeButtonEvent();

}; 

function clearContents () {
    const page = document.querySelector('#webpage');
    const content = document.querySelector('.content');

    page.removeChild(content);
}

export {displayNavBar, displayProjects, displayTodoSection, clearContents};