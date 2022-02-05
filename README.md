I plan on mimicking the popular app ToDoist for this project. The reasons of this includes my familiary with the functionality, and I can see real usage with this app.  It is neat that I could recreate this app except I can also cater it to my needs and fix the issues I face with only having the free app.

I am going to begin the project by creating the general DOM structure of a single webpage.  I will check to ensure that I can add items to this page.  These ToDoList items will consist of factory functions, and I want to design this with scalability in mind.  Lets create my inbox.

The next part of this project will be allowing the user to add todos to the program.  This will have its own separate module.  The user interface for this will currently be quite weak.  After this, I will need to set up a system for keeping track of the toDos so that I can delete them as well.

There are still some improvements to make with the adding and deleting functionality.  They work, but I would like to move more code into separate modules rather than them staying on index.js.  This is because I want to see how my list creation module goes first.  I am going to create an organizer module that adjust the list that needs to be displayed based on what project we are looking at.  I am going to start by adding a project property to todo factory function.  I will create inbox and today projects.  Adding more project/filters after this should be a piece of cake.
I will have to create tabs to switch between these projects as well.

I have ran into issues testing out switching between projects.  Mainly, new elements are created each time I switch between the projects.  For this next phase, I am focusing on adding the DOM elements in different sections as a basis for my UI.  This will also allow me to properly create organizer code.  Once I have created a nav section, a project section, and a task section, I will clean up the current module organization on index.js.  Not making UI super clean just yet.

Great discovery that has helped me out immensely! Exporting my todolist array and changing it in another module affects the array for all of the modules.  This was the missing piece that was causing me so much confusion.

The nice part about Todoist is that the add and edit prompts look extremely similar.  I can use this to my advantage and create both displays using the same function.  One of the function's arguments can be the type of change being made which will display the details differently depending on the type of request.  I will have to input the ability for details to appear in the middle of the list in my DOM.js folder.

01/29/22
Just realized that I have been naming classes with a non-conventional format.  Apparently, most programmers place dashes between different words when they are creating classes for their HTML elements.

01/30/22
For editing the tasks, instead of editing the properties of the todo, I can just splice the old todo out of the array and insert a new edit todo in its place.  This will be much simpler than editing the properties of the current todo.  Hoping to finish this project by the end of day today.  To bring up the task details screen, I will need to add an index argument to the tododisplay function that displays the details of a task instead of the simplified display at this index.


02/02/22
Close to finishing TodoList project.  I need to configure the dates and local storage functions.  These both will provide me with practice with reading and implementing information from documentation.

02/04/22
The dates and local storage implements were easy to figure out when my head was clear the past two coding sessions.  I am happy to say it looks like I have a working todoList that mimics the look and behavior of the popular app Todoist.  I understand there are a few bugs I would like to work out (editing and dates), but overall. I could use this project.  Although this is a working piece of code, I can see some flaws in the way that I organized this project.  One day I will move back to this project and reorganize the modules and functions in a cleaner way so that others (and myself) can understand what I have done.  As well, this was my first big project with styling, and I can see the benefits of working with style classes rather than matching classes to different styles.  I am going to take a break from this project, but I am happy to say I now have a working todoList application.  Woohoo!