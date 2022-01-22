export default function displayProject (project, selector) {
    const page = document.querySelector(selector);

    const projectNode = document.createElement('button');
    
    const projectTitle = document.createElement('div');
    projectTitle.textContent = project;
    projectNode.appendChild(projectTitle);

    const projectTotal = document.createElement('div');
    projectTotal.textContent = "#";
    projectNode.appendChild(projectTotal);

    projectNode.classList.add('project')
    projectNode.setAttribute('data-project', project);

    page.appendChild(projectNode);
}