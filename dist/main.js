/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTodoItem.js":
/*!****************************!*\
  !*** ./src/addTodoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTodoItem)\n/* harmony export */ });\nfunction addTodoItem () {\n    console.log(4);\n    const task = prompt('task');\n    const description = prompt('description');\n    const dueDate = prompt('dueDate');\n    const priority = prompt('priority');\n\n    let itemDetails = [];\n    \n    itemDetails[0] = task;\n    itemDetails[1] = description;\n    itemDetails[2] = dueDate;\n    itemDetails[3] = priority;\n\n    return itemDetails;\n}\n\n//# sourceURL=webpack://todolist/./src/addTodoItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemDOM.js */ \"./src/todoItemDOM.js\");\n/* harmony import */ var _addTodoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoItem.js */ \"./src/addTodoItem.js\");\n\n\n\nconst page = document.querySelector('#webpage')\n\nconst todo = (task, description, dueDate, priority) => {\n    \n    ;(0,_todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task, description, dueDate, priority);\n    \n    return {\n        displayTodoItem: _todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        task,\n        description,\n        dueDate,\n        priority\n    }\n};\n\nlet todoList = [];\n\n// Temporary button to ensure addTodoItem function works\nconst addButton = document.createElement('button');\naddButton.textContent = \"Add\";\naddButton.addEventListener('click', () => {\n    const properties = (0,_addTodoItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    console.log(properties);\n    const newTodo = todo(properties[0], properties[1], properties[2], properties[3]);\n    todoList.push(newTodo);\n});\npage.appendChild(addButton);\n\nconst test = todo('a', \"b\", \"Jan\", 1);\n\ntodoList[0] = test;\n\nfor (let i = 0; i < todoList.length; i++) {\n    todoList[i].displayTodoItem();\n}\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/todoItemDOM.js":
/*!****************************!*\
  !*** ./src/todoItemDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTodoItem)\n/* harmony export */ });\nfunction displayTodoItem (task, description, dueDate, priority) {\n    console.log(2);\n    const page = document.querySelector('#webpage');\n\n    const taskNode = document.createElement('h3');\n    const descriptionNode = document.createElement('p');\n    const dueDateNode = document.createElement('p');\n    const priorityNode = document.createElement('h3');\n\n    taskNode.textContent = task;\n    descriptionNode.textContent = description;\n    dueDateNode.textContent = dueDate;\n    priorityNode.textContent = priority;\n\n    page.appendChild(taskNode);\n    page.appendChild(descriptionNode);\n    page.appendChild(dueDateNode);\n    page.appendChild(priorityNode);\n}\n\n//# sourceURL=webpack://todolist/./src/todoItemDOM.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;