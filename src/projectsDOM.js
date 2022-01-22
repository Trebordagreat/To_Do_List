export default function displayProject (project) {
    const page = document.querySelector('#webpage');

    const projectNode = document.createElement('button');
    projectNode.textContent = project;
    projectNode.classList.add('project')
    projectNode.setAttribute('data-project', project);

    page.appendChild(projectNode);
}