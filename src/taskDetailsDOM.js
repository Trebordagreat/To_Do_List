// This is going to be used for both add and edit task.  Todoist is inspiration here.
import { projects } from './index';
import { cancel, changeTaskDate, addTask } from './editButtons';

function displayDetailInputs () {

    const todoSection = document.querySelector('.todosdiv');

    //Remove Add task button
    const previousAddButton = document.querySelector('#addbuttonpage');
    todoSection.removeChild(previousAddButton);

    const detailsNode = document.createElement('div');
    detailsNode.classList.add('detaildiv');

    const taskInput = document.createElement('input');
    taskInput.classList.add('detailstask');
    taskInput.setAttribute('placeholder', 'Task name');
    taskInput.setAttribute('maxlength', '70');

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('detailsdescription');
    descriptionInput.setAttribute('placeholder', 'Description');
    descriptionInput.setAttribute('maxlength', '416');

    detailsNode.appendChild(taskInput);
    detailsNode.appendChild(descriptionInput);

    todoSection.appendChild(detailsNode);
}

function displayDetailSelections () {

    const detailsBottom = document.createElement('div');
    detailsBottom.classList.add('detailsbottomdiv');

    // Need for choosing specific priority or project
    function createDropdown (list) {
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown-content');
        for (let i = 0; i < list.length; i++) {
            const dropdownItem = document.createElement('button');
            dropdownItem.textContent = list[i];
            dropdown.appendChild(dropdownItem);
        }
        return dropdown;
    }

    const dateDiv = document.createElement('div');
    const dateButton = document.createElement('button');
    dateButton.classList.add('detailsdate');
    dateButton.textContent = "Schedule";
    
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('dropdown');
    const projectButton = document.createElement('button');
    projectButton.classList.add('detailsproject', 'dropbtn');
    projectButton.textContent= "Inbox";
    projectDiv.appendChild(projectButton);
    const projectDropdown = createDropdown(projects);
    projectDiv.appendChild(projectDropdown); 
    
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('dropdown');
    const priorityButton = document.createElement('button');
    priorityButton.classList.add('detailspriority', 'dropbtn');
    priorityButton.textContent = "Low";
    priorityDiv.appendChild(priorityButton);
    let priorities = ['Urgent', 'Timely', 'Casual', 'Low'];
    const priorityDropdown = createDropdown(priorities);
    priorityDiv.appendChild(priorityDropdown);

    const detailsNode = document.querySelector('.detaildiv');
    detailsBottom.appendChild(dateButton);
    detailsBottom.appendChild(projectDiv);
    detailsBottom.appendChild(priorityDiv);
    detailsNode.appendChild(detailsBottom);

    //Button Functionality
    changeTaskDate();
}

function displayDetailButtons (change) {
    const detailButtons = document.createElement('div');
    detailButtons.classList.add('detailbuttonsdiv');

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirm');

    if (change === "add") {
        confirmButton.classList.add('addconfirm');
        confirmButton.textContent = "Add Task";
    }
    else {
        confirmButton.classList.add('editconfirm');
        confirmButton.textContent = "Save";
    };

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancelbutton');
    cancelButton.textContent = "Cancel";

    detailButtons.appendChild(confirmButton);
    detailButtons.appendChild(cancelButton);

    const todoSection = document.querySelector('.todosdiv');
    todoSection.appendChild(detailButtons);

    //Button Functionality
    addTask();
    cancel();
}

export {displayDetailInputs, displayDetailSelections, displayDetailButtons};