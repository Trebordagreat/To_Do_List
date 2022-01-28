import { todoList, todo, activeList, projects } from ".";
import { displayProjects, displayTodoSection, clearContents } from "./DOM";
import addTodoItem from "./addTodoItem";
import { generateList } from "./listLogic";
import displayProject from "./projectsDOM";

function addButtonEvent () {
    const addButtons = document.querySelectorAll('.addtask');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', () => {
            addTodoItem();
            const currentProject = document.querySelector('.active');
            const currentList = generateList(todoList, currentProject.dataset.project)
            displayTodoSection(currentList);
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

export {addButtonEvent, removeButtonEvent, changeProjectEvents, addProjectEvent};
