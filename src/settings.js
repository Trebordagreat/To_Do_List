import {home, projects, changeHome} from './index';

function settingsButtonEvent () {
    const settingButton = document.querySelector('#settings');
    settingButton.addEventListener('click', () => {
        const todoSection = document.querySelector('.todosdiv');
        todoSection.textContent = "";
 
        //Settings heading
        const headingNode = document.createElement('div');
        headingNode.classList.add('heading-node');
        const heading = document.createElement('div');
        heading.classList.add("todoheading");
        heading.textContent = "Settings";
        headingNode.appendChild(heading);
        todoSection.appendChild(headingNode);

        //Home Settings
        const homeChangeNode = document.createElement('div');
        homeChangeNode.classList.add('home-change-div');
        const homeMessage = document.createElement('div');
        homeMessage.textContent = "Select a project to be your Home project";
        homeChangeNode.appendChild(homeMessage);

        //Needed to create dropdown
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

        const homeChangeDiv = document.createElement('div');
        homeChangeDiv.classList.add('dropdown');
        const homeChangeButton = document.createElement('button');
        homeChangeButton.classList.add('dropbtn');
        homeChangeButton.textContent = home;
        homeChangeDiv.appendChild(homeChangeButton);

        let homeOptionsList = projects;
        if (homeOptionsList[0] !== 'Inbox' || homeOptionsList[1] !== 'All') {
            homeOptionsList.splice(0, 0, 'All');
            homeOptionsList.splice(0, 0, 'Inbox');
        }
        console.log(homeOptionsList);
        const homeDropdowns = createDropdown(homeOptionsList, 'home-options');
        homeChangeDiv.appendChild(homeDropdowns);
        homeChangeNode.appendChild(homeChangeDiv);

        todoSection.appendChild(homeChangeNode);

        const homeOptions = document.querySelectorAll('.home-options');
        homeOptions.forEach(option => {
            option.addEventListener('click', () => {
                homeChangeButton.textContent = option.textContent;
                localStorage.setItem('home', JSON.stringify(option.textContent));
                changeHome(option.textContent);
            })
        })
        
    })
}

export {settingsButtonEvent};