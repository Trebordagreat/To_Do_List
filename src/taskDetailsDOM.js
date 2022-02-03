// This is going to be used for both add and edit task.  Todoist is inspiration here.
import { projects } from './index';
import { cancel, changeTaskDate, changeTaskProject, addTask, editTask, changeTaskPriority } from './editButtons';
import _ from 'date-fns';

function displayDetailInputs (change, todo) {

    const todoSection = document.querySelector('.todosdiv');

    //Remove Add task button
    if (change === 'add') {
        const previousAddButton = document.querySelector('#addbuttonpage');
        todoSection.removeChild(previousAddButton);
    }
    
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

    if(change === 'edit') {
        taskInput.value = todo.task;
        descriptionInput.value = todo.description;
    }

    detailsNode.appendChild(taskInput);
    detailsNode.appendChild(descriptionInput);

    todoSection.appendChild(detailsNode);
}

function displayDetailSelections (change, todo) {

    const detailsBottom = document.createElement('div');
    detailsBottom.classList.add('detailsbottomdiv');

    // Needed for choosing specific priority or project
    function createDropdown (list, type) {
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown-content');
        for (let i = 0; i < list.length; i++) {
            const dropdownItem = document.createElement('button');
            dropdownItem.classList.add(type);
            dropdownItem.textContent = list[i];
            dropdown.appendChild(dropdownItem);
        }
        return dropdown;
    }

    const dateDiv = document.createElement('div');
    const dateButton = document.createElement('input');
    dateButton.setAttribute('type', 'date');
    dateButton.classList.add('detailsdate');
    dateButton.textContent = "Schedule";
    
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('dropdown');
    const projectButton = document.createElement('button');
    projectButton.classList.add('detailsproject', 'dropbtn');
    // Depends on the project page
    const currentProject = document.querySelector('.todoheading');
    if (currentProject.textContent !== 'All') {
        projectButton.textContent = currentProject.textContent;
    }
    else {
        projectButton.textContent= "Inbox";
    }
    projectDiv.appendChild(projectButton);
    let projectOptions = projects;
    if (projectOptions[0] !== 'Inbox') {
        projectOptions.splice(0, 0, 'Inbox')
    }
    const projectDropdown = createDropdown(projectOptions, 'project-option');
    projectDiv.appendChild(projectDropdown); 
    
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('dropdown');
    const priorityButton = document.createElement('button');
    priorityButton.classList.add('detailspriority', 'dropbtn');
    priorityButton.textContent = "Low";
    priorityDiv.appendChild(priorityButton);
    let priorities = ['Urgent', 'Timely', 'Casual', 'Low'];
    const priorityDropdown = createDropdown(priorities, 'priority-option');
    priorityDiv.appendChild(priorityDropdown);

    //Edit display
    if (change === 'edit') {
        dateButton.setAttribute('placeholder', todo.dueDate);
        projectButton.textContent = todo.project;
        priorityButton.textContent = todo.priority;
    }
    const detailsNode = document.querySelector('.detaildiv');
    detailsBottom.appendChild(dateButton);
    detailsBottom.appendChild(projectDiv);
    detailsBottom.appendChild(priorityDiv);
    detailsNode.appendChild(detailsBottom);

    //Button Functionality
    changeTaskProject();
    changeTaskPriority();
}

function displayDetailButtons (change, index) {
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
    if (change === 'add') {
        addTask();
    }
    else {editTask(index)}
    
    cancel();
}

export {displayDetailInputs, displayDetailSelections, displayDetailButtons};