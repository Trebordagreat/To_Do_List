import displayTodoItem from "./todoItemDOM.js";
import addTodoItem from "./addTodoItem.js";

const page = document.querySelector('#webpage')

const todo = (task, description, dueDate, priority) => {
    
    displayTodoItem(task, description, dueDate, priority);
    
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
const addButton = document.createElement('button');
addButton.textContent = "Add";
addButton.addEventListener('click', () => {
    const properties = addTodoItem();
    console.log(properties);
    const newTodo = todo(properties[0], properties[1], properties[2], properties[3]);
    todoList.push(newTodo);
});
page.appendChild(addButton);

const test = todo('a', "b", "Jan", 1);

todoList[0] = test;

for (let i = 0; i < todoList.length; i++) {
    todoList[i].displayTodoItem();
}
