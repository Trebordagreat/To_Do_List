export default function createNavBar () {
    const page = document.querySelector('#webpage');

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    const leftNavBar = document.createElement('div');
    leftNavBar.classList.add('navbarsection');

    const menuNode = document.createElement('button');
    menuNode.setAttribute('id', 'menu');
    menuNode.textContent = "Menu";
    menuNode.classList.add('navoption');

    const homeNode = document.createElement('button');
    homeNode.setAttribute('id', 'home');
    homeNode.textContent = "Home";
    menuNode.classList.add('navoption');

    leftNavBar.appendChild(menuNode);
    leftNavBar.appendChild(homeNode);
    

    const rightNavBar = document.createElement('div');
    rightNavBar.classList.add('navbarsection');

    const addTaskNode = document.createElement('button');
    addTaskNode.setAttribute('id', 'addTask');
    addTaskNode.textContent = "Add Task";
    menuNode.classList.add('navoption');

    const settingsNode = document.createElement('button');
    settingsNode.setAttribute('id', 'settings');
    settingsNode.textContent = "Settings";
    menuNode.classList.add('navoption');

    rightNavBar.appendChild(addTaskNode);
    rightNavBar.appendChild(settingsNode);


    navBar.appendChild(leftNavBar);
    navBar.appendChild(rightNavBar);

    page.appendChild(navBar);
}