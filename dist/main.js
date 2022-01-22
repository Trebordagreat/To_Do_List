/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTodoItem.js":
/*!****************************!*\
  !*** ./src/addTodoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoItem)
/* harmony export */ });
function addTodoItem () {
    console.log(4);
    const task = prompt('task');
    const description = prompt('description');
    const dueDate = prompt('dueDate');
    const priority = prompt('priority');

    let itemDetails = [];
    
    itemDetails[0] = task;
    itemDetails[1] = description;
    itemDetails[2] = dueDate;
    itemDetails[3] = priority;

    return itemDetails;
}

/***/ }),

/***/ "./src/todoItemDOM.js":
/*!****************************!*\
  !*** ./src/todoItemDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodoItem)
/* harmony export */ });
function displayTodoItem (task, description, dueDate, priority, index) {
    const page = document.querySelector('#webpage');

    const taskNode = document.createElement('h3');
    const descriptionNode = document.createElement('p');
    const dueDateNode = document.createElement('p');
    const priorityNode = document.createElement('h3');

    taskNode.textContent = task;
    descriptionNode.textContent = description;
    dueDateNode.textContent = dueDate;
    priorityNode.textContent = priority;

    page.appendChild(taskNode);
    page.appendChild(descriptionNode);
    page.appendChild(dueDateNode);
    page.appendChild(priorityNode);

    //Index for testing
    const indexNode = document.createElement('p');
    indexNode.textContent = index;
    page.appendChild(indexNode);

    //Remove button
    const removeItem = document.createElement('button');
    removeItem.textContent = "REMOVE";
    removeItem.setAttribute('data-index', index);
    removeItem.classList.add('remove');
    page.appendChild(removeItem);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemDOM.js */ "./src/todoItemDOM.js");
/* harmony import */ var _addTodoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoItem.js */ "./src/addTodoItem.js");



const page = document.querySelector('#webpage')

const todo = (task, description, dueDate, priority, index) => {
    
    // Index is just for testing purposes
    const displayTodoItem = () => {
        ;(0,_todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task, description, dueDate, priority, index);
    }


    return {
        displayTodoItem,
        task,
        description,
        dueDate,
        priority
    }
};

let todoList = [];

// Temporary button to ensure addTodoItem function works
function addButton () {
    const addButton = document.createElement('button');
    addButton.textContent = "Add";
    addButton.addEventListener('click', () => {
        const properties = (0,_addTodoItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        console.log(properties);
        const newTodo = todo(properties[0], properties[1], properties[2], properties[3], todoList.length);
        todoList.push(newTodo);
        page.textContent="";
        displayPage();
    });
    page.appendChild(addButton);
};

const test = todo('a', "b", "Jan", 1, 0);

todoList[0] = test;

function displayPage() {
    addButton();
    for (let i = 0; i < todoList.length; i++) {
        todoList[i].displayTodoItem();
        console.log(i);
    }
    // Add delete functionality to each remove button
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            todoList.splice(button.dataset.index, 1);
            page.textContent = "";
            displayPage();
            console.log(todoList);
        })
    })
}

displayPage();

console.log(todoList);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDQTs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFXO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0l0ZW1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvSXRlbSAoKSB7XG4gICAgY29uc29sZS5sb2coNCk7XG4gICAgY29uc3QgdGFzayA9IHByb21wdCgndGFzaycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBwcm9tcHQoJ2R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHByb21wdCgncHJpb3JpdHknKTtcblxuICAgIGxldCBpdGVtRGV0YWlscyA9IFtdO1xuICAgIFxuICAgIGl0ZW1EZXRhaWxzWzBdID0gdGFzaztcbiAgICBpdGVtRGV0YWlsc1sxXSA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXRhaWxzWzJdID0gZHVlRGF0ZTtcbiAgICBpdGVtRGV0YWlsc1szXSA9IHByaW9yaXR5O1xuXG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvSXRlbSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbmRleCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VicGFnZScpO1xuXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVEYXRlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcmlvcml0eU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgdGFza05vZGUudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgIGRlc2NyaXB0aW9uTm9kZS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGVOb2RlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICBwcmlvcml0eU5vZGUudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ob2RlKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGR1ZURhdGVOb2RlKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHByaW9yaXR5Tm9kZSk7XG5cbiAgICAvL0luZGV4IGZvciB0ZXN0aW5nXG4gICAgY29uc3QgaW5kZXhOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZGV4Tm9kZS50ZXh0Q29udGVudCA9IGluZGV4O1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaW5kZXhOb2RlKTtcblxuICAgIC8vUmVtb3ZlIGJ1dHRvblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVJdGVtLnRleHRDb250ZW50ID0gXCJSRU1PVkVcIjtcbiAgICByZW1vdmVJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICByZW1vdmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9kb0l0ZW1Eb20gZnJvbSBcIi4vdG9kb0l0ZW1ET00uanNcIjtcbmltcG9ydCBhZGRUb2RvSXRlbSBmcm9tIFwiLi9hZGRUb2RvSXRlbS5qc1wiO1xuXG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnBhZ2UnKVxuXG5jb25zdCB0b2RvID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5kZXgpID0+IHtcbiAgICBcbiAgICAvLyBJbmRleCBpcyBqdXN0IGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgY29uc3QgZGlzcGxheVRvZG9JdGVtID0gKCkgPT4ge1xuICAgICAgICB0b2RvSXRlbURvbSh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGluZGV4KTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlUb2RvSXRlbSxcbiAgICAgICAgdGFzayxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgfVxufTtcblxubGV0IHRvZG9MaXN0ID0gW107XG5cbi8vIFRlbXBvcmFyeSBidXR0b24gdG8gZW5zdXJlIGFkZFRvZG9JdGVtIGZ1bmN0aW9uIHdvcmtzXG5mdW5jdGlvbiBhZGRCdXR0b24gKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gYWRkVG9kb0l0ZW0oKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcGVydGllcyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKHByb3BlcnRpZXNbMF0sIHByb3BlcnRpZXNbMV0sIHByb3BlcnRpZXNbMl0sIHByb3BlcnRpZXNbM10sIHRvZG9MaXN0Lmxlbmd0aCk7XG4gICAgICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgICAgIHBhZ2UudGV4dENvbnRlbnQ9XCJcIjtcbiAgICAgICAgZGlzcGxheVBhZ2UoKTtcbiAgICB9KTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG59O1xuXG5jb25zdCB0ZXN0ID0gdG9kbygnYScsIFwiYlwiLCBcIkphblwiLCAxLCAwKTtcblxudG9kb0xpc3RbMF0gPSB0ZXN0O1xuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZSgpIHtcbiAgICBhZGRCdXR0b24oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRvZG9MaXN0W2ldLmRpc3BsYXlUb2RvSXRlbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICB9XG4gICAgLy8gQWRkIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHRvIGVhY2ggcmVtb3ZlIGJ1dHRvblxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShidXR0b24uZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICAgICAgICBwYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXlQYWdlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZGlzcGxheVBhZ2UoKTtcblxuY29uc29sZS5sb2codG9kb0xpc3QpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=