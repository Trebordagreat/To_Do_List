import todoItemDom from "./todoItemDOM.js";
import addTodoItem from "./addTodoItem.js";

const page = document.querySelector('#webpage')

const todo = (task, description, dueDate, priority, index) => {
    
    // Index is just for testing purposes
    const displayTodoItem = () => {
        todoItemDom(task, description, dueDate, priority, index);
    }


    return {
        displayTodoItem,
        task,
        description,
        dueDate,
        priority
    }
};

let todoList = [];

// Temporary button to ensure addTodoItem function works
function addButton () {
    const addButton = document.createElement('button');
    addButton.textContent = "Add";
    addButton.addEventListener('click', () => {
        const properties = addTodoItem();
        console.log(properties);
        const newTodo = todo(properties[0], properties[1], properties[2], properties[3], todoList.length);
        todoList.push(newTodo);
        page.textContent="";
        displayPage();
    });
    page.appendChild(addButton);
};

const test = todo('a', "b", "Jan", 1, 0);

todoList[0] = test;

function displayPage() {
    addButton();
    for (let i = 0; i < todoList.length; i++) {
        todoList[i].displayTodoItem();
        console.log(i);
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

console.log(todoList);

