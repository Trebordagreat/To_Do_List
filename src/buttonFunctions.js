import { todoList, todo, activeList } from ".";
import { displayProjects, displayTodoSection, clearContents } from "./DOM";
import addTodoItem from "./addTodoItem";
import { generateList } from "./listLogic";

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

function changeProjectEvents () {
    const projectButtons = document.querySelectorAll('.project');
    projectButtons.forEach(project => {
        project.addEventListener('click', () => {
            clearContents()
            displayProjects();
            const currentProject = document.querySelector('[data-project=' + project.dataset.project);
            currentProject.classList.add('active');
            let projectList = generateList(todoList, project.dataset.project);
            console.log(project.dataset.project);
            displayTodoSection(projectList);
        })
    })
}

export {addButtonEvent, removeButtonEvent, changeProjectEvents};
