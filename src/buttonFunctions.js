import { todoList, todo, activeList, projects } from ".";
import { displayProjects, displayTodoSection, clearContents } from "./DOM";
import addTodoItem from "./addTodoItem";
import { generateList } from "./listLogic";
import displayProject from "./projectsDOM";
import {displayDetailInputs, displayDetailSelections, displayDetailButtons} from "./taskDetailsDOM";

function addButtonEvent () {
    const addButtons = document.querySelectorAll('.addtask');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', () => {
            // Testing  addTodoItem();

            displayDetailInputs('add');
            displayDetailSelections();
            displayDetailButtons("add");
        })
    })
}

function completeTask () {
    const checkboxes = document.querySelectorAll('.todocheck');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const index = checkbox.dataset.index;
            const message = "Congratulations, you have completed the task " + todoList[index].task;
            todoList.splice(index, 1);
            const currentProject = document.querySelector('.active');
            const currentList = generateList(todoList, currentProject.dataset.project)
            displayTodoSection(currentList);
            const todoSection = document.querySelector('.todosdiv');
            const messageDiv = document.createElement('div')
            messageDiv.textContent = message;
            todoSection.appendChild(messageDiv);
        })
    })
}

function editButtonEvent() {
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentProject = document.querySelector('.active');
            const currentList = generateList(todoList, currentProject.dataset.project);
            displayTodoSection(currentList, button.dataset.index);
        })
    })
}

function removeButtonEvent () {
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            todoList.splice(button.dataset.index, 1);
            for (let i = 0; i < todoList.length; i++) {
                todoList[i].index = i;
            }
            const currentProject = document.querySelector('.active');
            const currentList = generateList(todoList, currentProject.dataset.project)
            clearContents();
            displayProjects();
            const sameProject = document.querySelector('[data-project=' + currentProject.dataset.project);
            sameProject.classList.add('active');
            displayTodoSection(currentList);
        })
    })
}

function changeProjectEvents () {
    const projectButtons = document.querySelectorAll('.project');
    projectButtons.forEach(project => {
        project.addEventListener('click', () => {
            clearContents()
            displayProjects();
            const currentProject = document.querySelector('[data-project=' + project.dataset.project);
            currentProject.classList.add('active');
            let projectList = generateList(todoList, project.dataset.project);
            displayTodoSection(projectList);
        })
    })
}

function addProjectEvent () {
    const addProjectButton = document.querySelector('#addproject');
    addProjectButton.addEventListener('click', () => {
        const newProject = prompt("New Project Name?");
        projects.push(newProject);
        clearContents();
        displayProjects();
        const currentProject = document.querySelector('[data-project=' + newProject + ']');
        currentProject.classList.add('active');
        let projectList = generateList(todoList, currentProject.dataset.project);
        displayTodoSection(projectList);
    })
}

function editProjectEvent () {
    const editProject = document.querySelector('.project-edit-button');
    editProject.addEventListener('click', () => {
        const newName = prompt("What would you like to rename this project to?");
        for (let i = 0; i < projects.length; i++) {
            if (editProject.dataset.project === projects[i]) {
                projects[i] = newName
            }
        }
        // Changes projects for all the applicable todos
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].project === editProject.dataset.project) {
                todoList[i].project = newName;
            }
        }
        clearContents();
        displayProjects();
        const renamedProject = document.querySelector('[data-project=' + newName + ']');
        renamedProject.classList.add('active');
        const renamedList = generateList(todoList, newName);
        displayTodoSection(renamedList);
    })
}

function removeProjectEvent () {
    const removeProject = document.querySelector('.project-remove-button');
    const project = removeProject.dataset.project;
    removeProject.addEventListener('click', () => {
        const message = "Are you sure you would like to remove the " + project + 
        " project? All of the related tasks will be deleted as well.";
        if (confirm(message) === true) {
            for (let i = 0; i < projects.length; i++) {
                if (projects[i] === project) {
                    projects.splice(i, 1);
                }
            }
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].project === project) {
                    todoList.splice(i, 1);
                }
            }
            clearContents();
            displayProjects();
            const allProject = document.querySelector('[data-project=All]');
            allProject.classList.add('active');
            displayTodoSection(todoList);
        }
    })
}

export {addButtonEvent, editButtonEvent, removeButtonEvent, changeProjectEvents, addProjectEvent, completeTask};
export {editProjectEvent, removeProjectEvent};
