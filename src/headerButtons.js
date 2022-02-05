import { home, todoList } from './index';
import {displayProjects, clearContents, displayTodoSection} from './DOM';
import {generateList} from './listLogic';

function menuButtonEvent () {
    const menuButton = document.querySelector('#menu');
    const projectsDiv = document.querySelector('.projectsdiv');
    menuButton.addEventListener('click', () => {
        if (projectsDiv.style.display === 'none') {
            projectsDiv.style.display = 'flex';
        }
        else {
            projectsDiv.style.display = 'none';
        }
    });   
}

function homeButtonEvent () {
    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', () => {
        clearContents()
        displayProjects();
        const renamedProject = document.querySelector('[data-project=' + home + ']');
        renamedProject.classList.add('active');
        const renamedList = generateList(todoList, home);
        displayTodoSection(renamedList);
    })
}

export {menuButtonEvent, homeButtonEvent};