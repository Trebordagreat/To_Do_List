import todoItemDom from "./todoItemDOM.js";
import addTodoItem from "./addTodoItem.js";
import projectDOM from "./projectsDOM.js";
import displayNavBar from "./navBarDOM.js";
import setupPage from "./pageSetUp.js";

import './style.css';

const page = document.querySelector('#webpage')

const todo = (task, description, dueDate, priority, index, project) => {
    
    // Index is just for testing purposes
    const displayTodoItem = () => {
        todoItemDom(task, description, dueDate, priority, index);
    }


    return {
        displayTodoItem,
        task,
        description,
        dueDate,
        priority,
        project
    }
};

let todoList = [];

displayNavBar();
setupPage();

// Temporary button to ensure addTodoItem function works
function addButton () {
    const addButton = document.createElement('button');
    addButton.textContent = "Add";
    addButton.addEventListener('click', () => {
        const properties = addTodoItem();
        const newTodo = todo(properties[0], properties[1], properties[2], properties[3], todoList.length, "Inbox");
        todoList.push(newTodo);
        page.textContent="";
        displayPage();
    });
    page.appendChild(addButton);
};

const test = todo('a', "b", "Jan", 1, 0, "Inbox");
const testp = todo('b', 'c', "Feb", 2, 1)

todoList[0] = test;
todoList[1] = testp;

//test
test.displayTodoItem();

//Test active
const allNode = document.querySelector('[data-project="All"]');
allNode.classList.add('active');

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

function displayPage() {
    addButton();
    for (let i = 0; i < todoList.length; i++) {
        todoList[i].displayTodoItem();
    }
    // Add delete functionality to each remove button
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            todoList.splice(button.dataset.index, 1);
            page.textContent = "";
            displayPage();
            console.log(todoList);
        })
    })
}

displayPage();

const projectNodes = document.querySelectorAll('.project');
projectNodes.forEach(project => {
    project.addEventListener('click', () => {
        const previousPage = document.querySelector('.active');
        previousPage.classList.remove('active');
        getNewTodoList(todoList);
        page.textContent = "";
        projectDOM("All");
        projectDOM("Inbox");
        displayPage()
    })
})

console.log(todoList);

