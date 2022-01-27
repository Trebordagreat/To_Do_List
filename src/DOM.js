import {addButtonEvent, removeButtonEvent} from "./buttonFunctions.js";


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
}

import { todoList, todo } from '.';
import displayTodoItem from './todoItemDOM';

function displayTodoSection (taskList) {

    const todoSection = document.querySelector('.todosdiv');
    
    // Clear section
    todoSection.textContent = "";

    const currentProject = document.querySelector('.active');

    const headingNode = document.createElement('div');
    headingNode.classList.add(".todoheading");
    headingNode.textContent = currentProject.dataset.project;

    todoSection.appendChild(headingNode);

    console.log(taskList);
    for (let i = 0; i < todoList.length; i++) {
        console.log(taskList[i].index);
        taskList[i].updateIndex(i);
        taskList[i].displayTodoItem();
    }

    const addButton = document.createElement('button');
    addButton.classList.add('addtask');
    addButton.textContent = "Add task";
    todoSection.appendChild(addButton);

    addButtonEvent();
    removeButtonEvent();
};

export {displayNavBar, displayProjects, displayTodoSection};