import displayProject from './projectsDOM';

export default function setupPage () {
    const page = document.querySelector('#webpage');

    const content = document.createElement('div');
    content.classList.add('content');

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsdiv');

    // Add in mandatory projects (Inbox, All, Today, Filters & Labels)
    const defaults = document.createElement('div');
    defaults.classList.add('defaultprojects')
    projectsDiv.appendChild(defaults);

    // Add in custom projects
    const customs = document.createElement('div');
    customs.classList.add('customprojects');

    // Projects Heading with add project button
    const customsHeading = document.createElement('button');
    customsHeading.classList.add('projectsheading');
    
    const headingNode = document.createElement('div');
    headingNode.textContent = "Projects";
    customsHeading.appendChild(headingNode);

    const addProject = document.createElement('button')
    addProject.setAttribute('id', 'addproject');
    addProject.textContent = "+";
    customsHeading.appendChild(addProject);

    customs.appendChild(customsHeading);

    projectsDiv.appendChild(customs)

    const todosDiv = document.createElement('div');
    todosDiv.classList.add('todosdiv');

    content.appendChild(projectsDiv);
    content.appendChild(todosDiv);

    page.appendChild(content);

    displayProject("Inbox", ".defaultprojects");
    displayProject("All", ".defaultprojects");
    displayProject("Today", ".defaultprojects");
};