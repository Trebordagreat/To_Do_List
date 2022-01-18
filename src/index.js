console.log(3);
import displayTodoItem from "./todoItemDOM.js";

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

const test = todo('a', "b", "Jan", 1);

test.displayTodoItem();