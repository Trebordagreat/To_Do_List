/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n\n#webpage {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.navbar {\n    background-color: lightseagreen;\n    display: flex;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.navbarsection {\n    display: flex;\n    gap: 30px;\n}\n\n.navbarsection button {\n    border: none;\n    font-size: 25px;\n    padding: 5px;\n    border-radius: 6%;\n    background-color:lightseagreen;\n    color: white;   \n}\n\n.navbarsection button:hover {\n    background-color: rgb(31, 212, 203);\n}\n\n.content {\n    height: 100%;\n    border: solid 1px black;\n    display: flex;\n}\n\n.projectsdiv {\n    background-color: rgb(240, 240, 240);\n    display: flex;\n    flex-direction: column;\n    flex-basis: 262px;\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 8px;\n}\n\n.defaultprojects {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px;\n}\n\n.customprojects {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsheading,\n.project {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(240, 240, 240);\n    border: none;\n    font-size: 20px;\n    align-items: center;\n    border-radius: 8%;\n}\n\n.project:hover,\n#addproject:hover {\n    background-color: rgb(220, 220, 220);\n}\n\n#addproject {\n    border-radius: 10%;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    font-size: 20px;\n}\n\n.active {\n    background-color: rgb(220, 220, 220);\n}\n\n.todosdiv {\n    display: flex;\n    flex-direction: column;\n    padding-left: 90px;\n    color: black;\n    flex: auto;\n    padding-top: 30px;\n    padding-right: 110px;\n}\n\n.todoitem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom:solid 1px rgb(240, 240, 240);\n}\n\n.todocheck {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    display: inline-block;\n    border: solid 1px;\n}\n\n.todoinfodiv {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 10px;\n    margin-top: 0px;\n}\n\n.taskname {\n    font-size: 16px;\n}\n\n.taskdescription {\n    font-size: 12px;\n    color: rgb(136, 136, 136)\n}\n\n.taskdate {\n    font-size: 12px;\n}\n\n.todo-buttons-div {\n    display: flex;\n}\n\n.detaildiv {\n    display: flex;\n    flex-direction: column;\n    border: solid 1px rgb(200, 200, 200);\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n}\n\n.detailstask {\n    font-size: 16px;\n    border: none;\n    border-bottom: solid 1px rgb(240, 240, 240);\n}\n\n.detailsdescription {\n    height: 60px;\n    flex: auto;\n    border:none;\n    resize: none;\n}\n\n.detailstask:focus, .detailsdescription:focus {\n    outline:none;\n}\n\n.detailsbottomdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.detailsbottomdiv button,\n.cancelbutton,\n.todo-buttons-div button {\n    border: 1px solid rgb(220, 220, 220);\n    border-radius: 10%;\n    background-color: white;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.detailsbottomdiv button:hover,\n.cancelbutton:hover,\n.todo-buttons-div button:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.detailbuttonsdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.confirm {\n    font-size: 14px;\n    color: white;\n    background-color: lightseagreen;\n    border-radius: 10%;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n\n.dropdown button {\n    width: 80px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;IAGI,oCAAoC;IACpC,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;;IAGI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB","sourcesContent":["body {\n    margin: 0;\n}\n\n#webpage {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.navbar {\n    background-color: lightseagreen;\n    display: flex;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.navbarsection {\n    display: flex;\n    gap: 30px;\n}\n\n.navbarsection button {\n    border: none;\n    font-size: 25px;\n    padding: 5px;\n    border-radius: 6%;\n    background-color:lightseagreen;\n    color: white;   \n}\n\n.navbarsection button:hover {\n    background-color: rgb(31, 212, 203);\n}\n\n.content {\n    height: 100%;\n    border: solid 1px black;\n    display: flex;\n}\n\n.projectsdiv {\n    background-color: rgb(240, 240, 240);\n    display: flex;\n    flex-direction: column;\n    flex-basis: 262px;\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 8px;\n}\n\n.defaultprojects {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px;\n}\n\n.customprojects {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsheading,\n.project {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(240, 240, 240);\n    border: none;\n    font-size: 20px;\n    align-items: center;\n    border-radius: 8%;\n}\n\n.project:hover,\n#addproject:hover {\n    background-color: rgb(220, 220, 220);\n}\n\n#addproject {\n    border-radius: 10%;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    font-size: 20px;\n}\n\n.active {\n    background-color: rgb(220, 220, 220);\n}\n\n.todosdiv {\n    display: flex;\n    flex-direction: column;\n    padding-left: 90px;\n    color: black;\n    flex: auto;\n    padding-top: 30px;\n    padding-right: 110px;\n}\n\n.todoitem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom:solid 1px rgb(240, 240, 240);\n}\n\n.todocheck {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    display: inline-block;\n    border: solid 1px;\n}\n\n.todoinfodiv {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 10px;\n    margin-top: 0px;\n}\n\n.taskname {\n    font-size: 16px;\n}\n\n.taskdescription {\n    font-size: 12px;\n    color: rgb(136, 136, 136)\n}\n\n.taskdate {\n    font-size: 12px;\n}\n\n.todo-buttons-div {\n    display: flex;\n}\n\n.detaildiv {\n    display: flex;\n    flex-direction: column;\n    border: solid 1px rgb(200, 200, 200);\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n}\n\n.detailstask {\n    font-size: 16px;\n    border: none;\n    border-bottom: solid 1px rgb(240, 240, 240);\n}\n\n.detailsdescription {\n    height: 60px;\n    flex: auto;\n    border:none;\n    resize: none;\n}\n\n.detailstask:focus, .detailsdescription:focus {\n    outline:none;\n}\n\n.detailsbottomdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.detailsbottomdiv button,\n.cancelbutton,\n.todo-buttons-div button {\n    border: 1px solid rgb(220, 220, 220);\n    border-radius: 10%;\n    background-color: white;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.detailsbottomdiv button:hover,\n.cancelbutton:hover,\n.todo-buttons-div button:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.detailbuttonsdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.confirm {\n    font-size: 14px;\n    color: white;\n    background-color: lightseagreen;\n    border-radius: 10%;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n\n.dropdown button {\n    width: 80px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayNavBar": () => (/* binding */ displayNavBar),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTodoSection": () => (/* binding */ displayTodoSection),
/* harmony export */   "clearContents": () => (/* binding */ clearContents)
/* harmony export */ });
/* harmony import */ var _buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonFunctions.js */ "./src/buttonFunctions.js");
/* harmony import */ var _projectsDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsDOM */ "./src/projectsDOM.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _taskDetailsDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDetailsDOM */ "./src/taskDetailsDOM.js");



function displayNavBar () {
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
    addTaskNode.classList.add('addtask');
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
};





function displayProjects () {
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

    (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_1__["default"])("Inbox", ".defaultprojects");
    (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_1__["default"])("All", ".defaultprojects");
    (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_1__["default"])("Today", ".defaultprojects");

    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
        (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(_index__WEBPACK_IMPORTED_MODULE_2__.projects[i], ".customprojects");
    }

    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectEvents)();
    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.addProjectEvent)();
}




function displayTodoSection (taskList, index) {

    const todoSection = document.querySelector('.todosdiv');
    
    // Clear section
    todoSection.textContent = "";

    const currentProject = document.querySelector('.active');

    const headingNode = document.createElement('div');
    headingNode.classList.add("todoheading");
    headingNode.textContent = currentProject.dataset.project;

    todoSection.appendChild(headingNode);

    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_2__.todoList.length; i++) {
        _index__WEBPACK_IMPORTED_MODULE_2__.todoList[i].updateIndex(i);
    }

    // Important for edit button
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].index == index) {
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_3__.displayDetailInputs)('edit', taskList[i]);
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_3__.displayDetailSelections)('edit', taskList[i]);
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_3__.displayDetailButtons)('edit', index);
        }
        else {taskList[i].displayTodoItem()}
    }

    const addButton = document.createElement('button');
    addButton.classList.add('addtask');
    addButton.setAttribute('id', 'addbuttonpage');
    addButton.textContent = "Add task";
    todoSection.appendChild(addButton);

    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.addButtonEvent)();
    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.editButtonEvent)();
    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.removeButtonEvent)();

}; 

function clearContents () {
    const page = document.querySelector('#webpage');
    const content = document.querySelector('.content');

    page.removeChild(content);
}



/***/ }),

/***/ "./src/addTodoItem.js":
/*!****************************!*\
  !*** ./src/addTodoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoItem)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function addTodoItem () {
    const task = document.querySelector('.detailstask').value;
    const description = document.querySelector('.detailsdescription').value;
    const dueDate = document.querySelector('.detailsdate').textContent;
    const priority = document.querySelector('.detailspriority').textContent;
    const project = document.querySelector('.detailsproject').textContent;

    let itemDetails = [];
    
    itemDetails[0] = task;
    itemDetails[1] = description;
    itemDetails[2] = dueDate;
    itemDetails[3] = priority;
    itemDetails[4] = project;

    const newTodo = (0,___WEBPACK_IMPORTED_MODULE_0__.todo)(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3], ___WEBPACK_IMPORTED_MODULE_0__.todoList.length, itemDetails[4]);
    ___WEBPACK_IMPORTED_MODULE_0__.todoList.push(newTodo);

    return itemDetails;
}



/***/ }),

/***/ "./src/buttonFunctions.js":
/*!********************************!*\
  !*** ./src/buttonFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonEvent": () => (/* binding */ addButtonEvent),
/* harmony export */   "editButtonEvent": () => (/* binding */ editButtonEvent),
/* harmony export */   "removeButtonEvent": () => (/* binding */ removeButtonEvent),
/* harmony export */   "changeProjectEvents": () => (/* binding */ changeProjectEvents),
/* harmony export */   "addProjectEvent": () => (/* binding */ addProjectEvent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _addTodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTodoItem */ "./src/addTodoItem.js");
/* harmony import */ var _listLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listLogic */ "./src/listLogic.js");
/* harmony import */ var _projectsDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsDOM */ "./src/projectsDOM.js");
/* harmony import */ var _taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskDetailsDOM */ "./src/taskDetailsDOM.js");







function addButtonEvent () {
    const addButtons = document.querySelectorAll('.addtask');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', () => {
            // Testing  addTodoItem();
            const currentProject = document.querySelector('.active');
            const currentList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, currentProject.dataset.project)
            ;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(currentList);
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__.displayDetailInputs)('add');
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__.displayDetailSelections)();
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__.displayDetailButtons)("add");
        })
    })
}

function editButtonEvent() {
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentProject = document.querySelector('.active');
            const currentList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, currentProject.dataset.project);
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(currentList, button.dataset.index);
        })
    })
}

function removeButtonEvent () {
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            ___WEBPACK_IMPORTED_MODULE_0__.todoList.splice(button.dataset.index, 1);
            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.todoList.length; i++) {
                ___WEBPACK_IMPORTED_MODULE_0__.todoList[i].index = i;
            }
            const currentProject = document.querySelector('.active');
            const currentList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, currentProject.dataset.project)
            ;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(currentList);
        })
    })
}

function changeProjectEvents () {
    const projectButtons = document.querySelectorAll('.project');
    projectButtons.forEach(project => {
        project.addEventListener('click', () => {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearContents)()
            ;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
            const currentProject = document.querySelector('[data-project=' + project.dataset.project);
            currentProject.classList.add('active');
            let projectList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, project.dataset.project);
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(projectList);
        })
    })
}

function addProjectEvent () {
    const addProjectButton = document.querySelector('#addproject');
    addProjectButton.addEventListener('click', () => {
        const newProject = prompt("New Project Name?");
        ___WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearContents)();
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
        const currentProject = document.querySelector('[data-project=' + newProject + ']');
        currentProject.classList.add('active');
        let projectList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, currentProject.dataset.project);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(projectList);
    })
}




/***/ }),

/***/ "./src/editButtons.js":
/*!****************************!*\
  !*** ./src/editButtons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTaskDate": () => (/* binding */ changeTaskDate),
/* harmony export */   "changeTaskProject": () => (/* binding */ changeTaskProject),
/* harmony export */   "changeTaskPriority": () => (/* binding */ changeTaskPriority),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "cancel": () => (/* binding */ cancel)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _listLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listLogic */ "./src/listLogic.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _addTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodoItem */ "./src/addTodoItem.js");
/* harmony import */ var _editTodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTodoItem */ "./src/editTodoItem.js");








function changeTaskDate () {
    const dateButton = document.querySelector('.detailsdate');
    dateButton.addEventListener('click', () => {
        const newDate = prompt("Date?");
        dateButton.textContent = newDate;
    })
}

function changeTaskProject () {
    const projectButton = document.querySelector('.detailsproject');
    const projectOptions = document.querySelectorAll('.project-option');
    projectOptions.forEach(option => {
        option.addEventListener('click', () => {
            projectButton.textContent = option.textContent;
        })
    })
}

function changeTaskPriority () {
    const priorityButton = document.querySelector('.detailspriority');
    const priorityOptions = document.querySelectorAll('.priority-option');
    priorityOptions.forEach(option => {
        option.addEventListener('click', () => {
            priorityButton.textContent = option.textContent;
        })
    })
}

function addTask () {
    const addTaskButton = document.querySelector('.addconfirm');
    addTaskButton.addEventListener('click', () => {
        (0,_addTodoItem__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const currentProject = document.querySelector('.active');
        const resetList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_1__.generateList)(_index__WEBPACK_IMPORTED_MODULE_2__.todoList, currentProject.dataset.project);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTodoSection)(resetList);
    })
}

function editTask (index) {
    const editTaskButton = document.querySelector('.editconfirm');
    editTaskButton.addEventListener('click', () => {
        (0,_editTodoItem__WEBPACK_IMPORTED_MODULE_4__["default"])(index);
        const currentProject = document.querySelector('.active');
        const resetList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_1__.generateList)(_index__WEBPACK_IMPORTED_MODULE_2__.todoList, currentProject.dataset.project);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTodoSection)(resetList);
    })
}

function cancel () {
    const cancelButton = document.querySelector('.cancelbutton');
    cancelButton.addEventListener('click', () => {
        const currentProject = document.querySelector('.active');
        const resetList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_1__.generateList)(_index__WEBPACK_IMPORTED_MODULE_2__.todoList, currentProject.dataset.project);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayTodoSection)(resetList);
    })
}



/***/ }),

/***/ "./src/editTodoItem.js":
/*!*****************************!*\
  !*** ./src/editTodoItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTodoItem)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function editTodoItem (index) {
    const task = document.querySelector('.detailstask').value;
    const description = document.querySelector('.detailsdescription').value;
    const dueDate = document.querySelector('.detailsdate').textContent;
    const priority = document.querySelector('.detailspriority').textContent;
    const project = document.querySelector('.detailsproject').textContent;

    let itemDetails = [];
    
    itemDetails[0] = task;
    itemDetails[1] = description;
    itemDetails[2] = dueDate;
    itemDetails[3] = priority;
    itemDetails[4] = project;

    const newTodo = (0,___WEBPACK_IMPORTED_MODULE_0__.todo)(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3], index, itemDetails[4]);
    ___WEBPACK_IMPORTED_MODULE_0__.todoList.splice(index, 1, newTodo);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "todo": () => (/* binding */ todo),
/* harmony export */   "activeList": () => (/* binding */ activeList),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemDOM.js */ "./src/todoItemDOM.js");
/* harmony import */ var _addTodoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoItem.js */ "./src/addTodoItem.js");
/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDOM.js */ "./src/projectsDOM.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _buttonFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttonFunctions.js */ "./src/buttonFunctions.js");
/* harmony import */ var _listLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listLogic */ "./src/listLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const page = document.querySelector('#webpage')

const todo = (task, description, dueDate, priority, index, project) => {
    
    // Index is just for testing purposes
    const displayTodoItem = () => {
        ;(0,_todoItemDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task, description, dueDate, priority, index);
    }

    // Needed to update todo for button functionality
    const updateIndex = (newIndex) => {
        index = newIndex;
    }


    return {
        displayTodoItem,
        updateIndex,
        task,
        description,
        dueDate,
        priority,
        project,
        index
    }
};

let todoList = [];
let activeList = [];
let projects = [];

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayNavBar)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayProjects)();

//App starts with "All" project active
const allNode = document.querySelector('[data-project="All"]');
allNode.classList.add('active');

const test = todo('a', "b", "Jan", 1, 0, "Inbox");
const testp = todo('b', 'c', "Feb", 2, 1)

todoList[0] = test;
todoList[1] = testp;

projects[0] = "Inbox";

activeList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_5__.generateList)(todoList, "All");

console.log(todoList);
console.log(activeList);
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayTodoSection)(activeList);




/***/ }),

/***/ "./src/listLogic.js":
/*!**************************!*\
  !*** ./src/listLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateList": () => (/* binding */ generateList)
/* harmony export */ });
function generateList (todoList, project) {
    let updatedList = [];
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === project || project === "All") {
            updatedList.push(todoList[i]);
        }
    }
    return updatedList;
}



/***/ }),

/***/ "./src/projectsDOM.js":
/*!****************************!*\
  !*** ./src/projectsDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProject)
/* harmony export */ });
function displayProject (project, selector) {
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

/***/ }),

/***/ "./src/taskDetailsDOM.js":
/*!*******************************!*\
  !*** ./src/taskDetailsDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayDetailInputs": () => (/* binding */ displayDetailInputs),
/* harmony export */   "displayDetailSelections": () => (/* binding */ displayDetailSelections),
/* harmony export */   "displayDetailButtons": () => (/* binding */ displayDetailButtons)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _editButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editButtons */ "./src/editButtons.js");
// This is going to be used for both add and edit task.  Todoist is inspiration here.



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

    // Need for choosing specific priority or project
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
    const dateButton = document.createElement('button');
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
    const projectDropdown = createDropdown(_index__WEBPACK_IMPORTED_MODULE_0__.projects, 'project-option');
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
        dateButton.textContent = todo.dueDate;
        projectButton.textContent = todo.project;
        priorityButton.textContent = todo.priority;
    }
    const detailsNode = document.querySelector('.detaildiv');
    detailsBottom.appendChild(dateButton);
    detailsBottom.appendChild(projectDiv);
    detailsBottom.appendChild(priorityDiv);
    detailsNode.appendChild(detailsBottom);

    //Button Functionality
    (0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.changeTaskDate)();
    (0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.changeTaskProject)();
    (0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.changeTaskPriority)();
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
        (0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.addTask)();
    }
    else {(0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.editTask)(index)}
    
    (0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.cancel)();
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

    const content = document.querySelector('.todosdiv');

    const todoNode = document.createElement('div');
    todoNode.classList.add('todoitem');

    const checkNode = document.createElement('button');
    checkNode.classList.add('todocheck');
    todoNode.appendChild(checkNode);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('todoinfodiv');
    
    // The following section is related to displaying properties
    const taskNode = document.createElement('div');
    const descriptionNode = document.createElement('div');
    const dueDateNode = document.createElement('div');
    const priorityNode = document.createElement('h3');

    taskNode.classList.add('taskname');
    descriptionNode.classList.add('taskdescription');
    dueDateNode.classList.add('taskdate');

    taskNode.textContent = task;
    descriptionNode.textContent = description;
    dueDateNode.textContent = dueDate;
    priorityNode.textContent = priority;

    infoDiv.appendChild(taskNode);
    infoDiv.appendChild(descriptionNode);
    infoDiv.appendChild(dueDateNode);
    
    todoNode.appendChild(priorityNode);
    todoNode.appendChild(infoDiv);

    //Index for testing
    const indexNode = document.createElement('p');
    indexNode.textContent = index;
    todoNode.appendChild(indexNode);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('todo-buttons-div');

    //Edit button
    const editItem = document.createElement('button');
    editItem.textContent = "Edit";
    editItem.setAttribute('data-index', index);
    editItem.classList.add('edit');
    buttonsDiv.appendChild(editItem);

    //Remove button
    const removeItem = document.createElement('button');
    removeItem.textContent = "REMOVE";
    removeItem.setAttribute('data-index', index);
    removeItem.classList.add('remove');
    buttonsDiv.appendChild(removeItem);

    todoNode.appendChild(buttonsDiv);

    content.appendChild(todoNode);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRyxhQUFhLHNDQUFzQyxvQkFBb0Isb0JBQW9CLHFDQUFxQyx5QkFBeUIsMEJBQTBCLEdBQUcsb0JBQW9CLG9CQUFvQixnQkFBZ0IsR0FBRywyQkFBMkIsbUJBQW1CLHNCQUFzQixtQkFBbUIsd0JBQXdCLHFDQUFxQyxzQkFBc0IsR0FBRyxpQ0FBaUMsMENBQTBDLEdBQUcsY0FBYyxtQkFBbUIsOEJBQThCLG9CQUFvQixHQUFHLGtCQUFrQiwyQ0FBMkMsb0JBQW9CLDZCQUE2Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixHQUFHLGlDQUFpQyxvQkFBb0IscUNBQXFDLDJDQUEyQyxtQkFBbUIsc0JBQXNCLDBCQUEwQix3QkFBd0IsR0FBRyx3Q0FBd0MsMkNBQTJDLEdBQUcsaUJBQWlCLHlCQUF5QixtQkFBbUIsMkNBQTJDLHNCQUFzQixHQUFHLGFBQWEsMkNBQTJDLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLHlCQUF5QixtQkFBbUIsaUJBQWlCLHdCQUF3QiwyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQixxQ0FBcUMsNEJBQTRCLGlEQUFpRCxHQUFHLGdCQUFnQixtQkFBbUIsa0JBQWtCLDhCQUE4Qix5QkFBeUIsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLGlCQUFpQixtQkFBbUIsc0JBQXNCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxlQUFlLHNCQUFzQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwyQ0FBMkMsb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyxrQkFBa0Isc0JBQXNCLG1CQUFtQixrREFBa0QsR0FBRyx5QkFBeUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsbURBQW1ELG1CQUFtQixHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLEdBQUcseUVBQXlFLDJDQUEyQyx5QkFBeUIsOEJBQThCLHNCQUFzQix5QkFBeUIsMEJBQTBCLHVCQUF1QiwwQkFBMEIsR0FBRywyRkFBMkYsMkNBQTJDLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsR0FBRyxjQUFjLHNCQUFzQixtQkFBbUIsc0NBQXNDLHlCQUF5Qix5QkFBeUIsMEJBQTBCLG1CQUFtQixHQUFHLGVBQWUseUJBQXlCLDRCQUE0QixHQUFHLHVCQUF1QixvQkFBb0IseUJBQXlCLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyx1Q0FBdUMscUJBQXFCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsZ0NBQWdDLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRyxhQUFhLHNDQUFzQyxvQkFBb0Isb0JBQW9CLHFDQUFxQyx5QkFBeUIsMEJBQTBCLEdBQUcsb0JBQW9CLG9CQUFvQixnQkFBZ0IsR0FBRywyQkFBMkIsbUJBQW1CLHNCQUFzQixtQkFBbUIsd0JBQXdCLHFDQUFxQyxzQkFBc0IsR0FBRyxpQ0FBaUMsMENBQTBDLEdBQUcsY0FBYyxtQkFBbUIsOEJBQThCLG9CQUFvQixHQUFHLGtCQUFrQiwyQ0FBMkMsb0JBQW9CLDZCQUE2Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixHQUFHLGlDQUFpQyxvQkFBb0IscUNBQXFDLDJDQUEyQyxtQkFBbUIsc0JBQXNCLDBCQUEwQix3QkFBd0IsR0FBRyx3Q0FBd0MsMkNBQTJDLEdBQUcsaUJBQWlCLHlCQUF5QixtQkFBbUIsMkNBQTJDLHNCQUFzQixHQUFHLGFBQWEsMkNBQTJDLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLHlCQUF5QixtQkFBbUIsaUJBQWlCLHdCQUF3QiwyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQixxQ0FBcUMsNEJBQTRCLGlEQUFpRCxHQUFHLGdCQUFnQixtQkFBbUIsa0JBQWtCLDhCQUE4Qix5QkFBeUIsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLGlCQUFpQixtQkFBbUIsc0JBQXNCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxzQkFBc0Isc0JBQXNCLGtDQUFrQyxlQUFlLHNCQUFzQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwyQ0FBMkMsb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyxrQkFBa0Isc0JBQXNCLG1CQUFtQixrREFBa0QsR0FBRyx5QkFBeUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsbURBQW1ELG1CQUFtQixHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLEdBQUcseUVBQXlFLDJDQUEyQyx5QkFBeUIsOEJBQThCLHNCQUFzQix5QkFBeUIsMEJBQTBCLHVCQUF1QiwwQkFBMEIsR0FBRywyRkFBMkYsMkNBQTJDLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsR0FBRyxjQUFjLHNCQUFzQixtQkFBbUIsc0NBQXNDLHlCQUF5Qix5QkFBeUIsMEJBQTBCLG1CQUFtQixHQUFHLGVBQWUseUJBQXlCLDRCQUE0QixHQUFHLHVCQUF1QixvQkFBb0IseUJBQXlCLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyx1Q0FBdUMscUJBQXFCLEdBQUcsbUJBQW1CO0FBQ3I2UztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0Y7OztBQUd4RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFMkM7QUFDaUM7QUFDNUM7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSx3REFBYztBQUNsQixJQUFJLHdEQUFjO0FBQ2xCLElBQUksd0RBQWM7O0FBRWxCLG9CQUFvQixJQUFJLG1EQUFlLEVBQUU7QUFDekMsUUFBUSx3REFBYyxDQUFDLDRDQUFRO0FBQy9COztBQUVBLElBQUksd0VBQW1CO0FBQ3ZCLElBQUksb0VBQWU7QUFDbkI7O0FBRW1DO0FBQ2tFOztBQUVyRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLElBQUksbURBQWUsRUFBRTtBQUN6QyxRQUFRLDRDQUFRO0FBQ2hCOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLFlBQVksb0VBQW1CO0FBQy9CLFlBQVksd0VBQXVCO0FBQ25DLFlBQVkscUVBQW9CO0FBQ2hDO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxtRUFBYztBQUNsQixJQUFJLG9FQUFlO0FBQ25CLElBQUksc0VBQWlCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Sm1DOztBQUVwQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVDQUFJLGlFQUFpRSw4Q0FBZTtBQUN4RyxJQUFJLDRDQUFhOztBQUVqQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCeUQ7QUFDa0I7QUFDbkM7QUFDRztBQUNBO0FBQ3lEOztBQUVwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0RBQVksQ0FBQyx1Q0FBUTtBQUNyRCxZQUFZLHlEQUFrQjtBQUM5QixZQUFZLG9FQUFtQjtBQUMvQixZQUFZLHdFQUF1QjtBQUNuQyxZQUFZLHFFQUFvQjtBQUNoQyxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0RBQVksQ0FBQyx1Q0FBUTtBQUNyRCxZQUFZLHdEQUFrQjtBQUM5QixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4Q0FBZTtBQUMzQiw0QkFBNEIsSUFBSSw4Q0FBZSxFQUFFO0FBQ2pELGdCQUFnQix1Q0FBUTtBQUN4QjtBQUNBO0FBQ0EsZ0NBQWdDLHdEQUFZLENBQUMsdUNBQVE7QUFDckQsWUFBWSx5REFBa0I7QUFDOUIsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQWE7QUFDekIsWUFBWSxzREFBZTtBQUMzQjtBQUNBO0FBQ0EsOEJBQThCLHdEQUFZLENBQUMsdUNBQVE7QUFDbkQsWUFBWSx3REFBa0I7QUFDOUIsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQWE7QUFDckIsUUFBUSxtREFBYTtBQUNyQixRQUFRLHFEQUFlO0FBQ3ZCO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQVksQ0FBQyx1Q0FBUTtBQUMvQyxRQUFRLHdEQUFrQjtBQUMxQixLQUFLO0FBQ0w7O0FBRWtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUV6RDtBQUNFO0FBQ1I7QUFDSztBQUNFOzs7O0FBSTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkI7QUFDQSwwQkFBMEIsd0RBQVksQ0FBQyw0Q0FBUTtBQUMvQyxRQUFRLHdEQUFrQjtBQUMxQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBLDBCQUEwQix3REFBWSxDQUFDLDRDQUFRO0FBQy9DLFFBQVEsd0RBQWtCO0FBQzFCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3REFBWSxDQUFDLDRDQUFRO0FBQy9DLFFBQVEsd0RBQWtCO0FBQzFCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRG1DOztBQUVwQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVDQUFJO0FBQ3hCLElBQUksOENBQWU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMkM7QUFDQTtBQUNEO0FBQ2lEO0FBQ3BCO0FBQzlCOztBQUVwQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiLHdEQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYSx3REFBWTs7QUFFekI7QUFDQTtBQUNBLDJEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRGxCO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDbUM7QUFDOEU7O0FBRWpIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDREQUFjO0FBQ2xCLElBQUksK0RBQWlCO0FBQ3JCLElBQUksZ0VBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBTztBQUNmO0FBQ0EsVUFBVSxzREFBUTtBQUNsQjtBQUNBLElBQUksb0RBQU07QUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQzFJZTs7QUFFZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGRUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9idXR0b25GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdFRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0c0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrRGV0YWlsc0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvSXRlbURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN3ZWJwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLm5hdmJhcnNlY3Rpb24gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRzZWFncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlOyAgIFxcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDIxMiwgMjAzKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdHNkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtYmFzaXM6IDI2MnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5kZWZhdWx0cHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uY3VzdG9tcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdHNoZWFkaW5nLFxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIsXFxuI2FkZHByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxufVxcblxcbiNhZGRwcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbn1cXG5cXG4udG9kb3NkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZmxleDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xcbn1cXG5cXG4udG9kb2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4udG9kb2NoZWNrIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuLnRvZG9pbmZvZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogYXV0bztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi50YXNrbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2tkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KVxcbn1cXG5cXG4udGFza2RhdGUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRldGFpbGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsc3Rhc2sge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLmRldGFpbHNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHN0YXNrOmZvY3VzLCAuZGV0YWlsc2Rlc2NyaXB0aW9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRldGFpbHNib3R0b21kaXYgYnV0dG9uLFxcbi5jYW5jZWxidXR0b24sXFxuLnRvZG8tYnV0dG9ucy1kaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmRldGFpbHNib3R0b21kaXYgYnV0dG9uOmhvdmVyLFxcbi5jYW5jZWxidXR0b246aG92ZXIsXFxuLnRvZG8tYnV0dG9ucy1kaXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uZGV0YWlsYnV0dG9uc2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmNvbmZpcm0ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN3ZWJwYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLm5hdmJhcnNlY3Rpb24gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRzZWFncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlOyAgIFxcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDIxMiwgMjAzKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdHNkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtYmFzaXM6IDI2MnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5kZWZhdWx0cHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uY3VzdG9tcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdHNoZWFkaW5nLFxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIsXFxuI2FkZHByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxufVxcblxcbiNhZGRwcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbn1cXG5cXG4udG9kb3NkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZmxleDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xcbn1cXG5cXG4udG9kb2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4udG9kb2NoZWNrIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuLnRvZG9pbmZvZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogYXV0bztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi50YXNrbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2tkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KVxcbn1cXG5cXG4udGFza2RhdGUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRldGFpbGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsc3Rhc2sge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLmRldGFpbHNkZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHN0YXNrOmZvY3VzLCAuZGV0YWlsc2Rlc2NyaXB0aW9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRldGFpbHNib3R0b21kaXYgYnV0dG9uLFxcbi5jYW5jZWxidXR0b24sXFxuLnRvZG8tYnV0dG9ucy1kaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmRldGFpbHNib3R0b21kaXYgYnV0dG9uOmhvdmVyLFxcbi5jYW5jZWxidXR0b246aG92ZXIsXFxuLnRvZG8tYnV0dG9ucy1kaXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uZGV0YWlsYnV0dG9uc2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmNvbmZpcm0ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7YWRkQnV0dG9uRXZlbnQsIGVkaXRCdXR0b25FdmVudCwgcmVtb3ZlQnV0dG9uRXZlbnR9IGZyb20gXCIuL2J1dHRvbkZ1bmN0aW9ucy5qc1wiO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlOYXZCYXIgKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VicGFnZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgY29uc3QgbGVmdE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnROYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyc2VjdGlvbicpO1xuXG4gICAgY29uc3QgbWVudU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51Tm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBtZW51Tm9kZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgY29uc3QgaG9tZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lTm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBob21lTm9kZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgbGVmdE5hdkJhci5hcHBlbmRDaGlsZChtZW51Tm9kZSk7XG4gICAgbGVmdE5hdkJhci5hcHBlbmRDaGlsZChob21lTm9kZSk7XG4gICAgXG5cbiAgICBjb25zdCByaWdodE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0TmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcnNlY3Rpb24nKTtcblxuICAgIGNvbnN0IGFkZFRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza05vZGUuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrJyk7XG4gICAgYWRkVGFza05vZGUuY2xhc3NMaXN0LmFkZCgnYWRkdGFzaycpO1xuICAgIGFkZFRhc2tOb2RlLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0dGluZ3NOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0dGluZ3MnKTtcbiAgICBzZXR0aW5nc05vZGUudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG4gICAgbWVudU5vZGUuY2xhc3NMaXN0LmFkZCgnbmF2b3B0aW9uJyk7XG5cbiAgICByaWdodE5hdkJhci5hcHBlbmRDaGlsZChhZGRUYXNrTm9kZSk7XG4gICAgcmlnaHROYXZCYXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NOb2RlKTtcblxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxlZnROYXZCYXIpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChyaWdodE5hdkJhcik7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKG5hdkJhcik7XG59O1xuXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RXZlbnRzLCBhZGRQcm9qZWN0RXZlbnQgfSBmcm9tIFwiLi9idXR0b25GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7cHJvamVjdHN9IGZyb20gXCIuL2luZGV4XCJcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzICgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnBhZ2UnKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNkaXYnKTtcblxuICAgIC8vIEFkZCBpbiBtYW5kYXRvcnkgcHJvamVjdHMgKEluYm94LCBBbGwsIFRvZGF5LCBGaWx0ZXJzICYgTGFiZWxzKVxuICAgIGNvbnN0IGRlZmF1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdHMuY2xhc3NMaXN0LmFkZCgnZGVmYXVsdHByb2plY3RzJylcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkZWZhdWx0cyk7XG5cbiAgICAvLyBBZGQgaW4gY3VzdG9tIHByb2plY3RzXG4gICAgY29uc3QgY3VzdG9tcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbXMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tcHJvamVjdHMnKTtcblxuICAgIC8vIFByb2plY3RzIEhlYWRpbmcgd2l0aCBhZGQgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBjdXN0b21zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN1c3RvbXNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzaGVhZGluZycpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgY3VzdG9tc0hlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ05vZGUpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgY3VzdG9tc0hlYWRpbmcuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBjdXN0b21zLmFwcGVuZENoaWxkKGN1c3RvbXNIZWFkaW5nKTtcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGN1c3RvbXMpXG5cbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9zZGl2Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9zRGl2KTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBkaXNwbGF5UHJvamVjdChcIkluYm94XCIsIFwiLmRlZmF1bHRwcm9qZWN0c1wiKTtcbiAgICBkaXNwbGF5UHJvamVjdChcIkFsbFwiLCBcIi5kZWZhdWx0cHJvamVjdHNcIik7XG4gICAgZGlzcGxheVByb2plY3QoXCJUb2RheVwiLCBcIi5kZWZhdWx0cHJvamVjdHNcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RzW2ldLCBcIi5jdXN0b21wcm9qZWN0c1wiKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQcm9qZWN0RXZlbnRzKCk7XG4gICAgYWRkUHJvamVjdEV2ZW50KCk7XG59XG5cbmltcG9ydCB7IHRvZG9MaXN0LCB0b2RvIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBkaXNwbGF5RGV0YWlsSW5wdXRzLCBkaXNwbGF5RGV0YWlsU2VsZWN0aW9ucywgZGlzcGxheURldGFpbEJ1dHRvbnN9IGZyb20gJy4vdGFza0RldGFpbHNET00nO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb1NlY3Rpb24gKHRhc2tMaXN0LCBpbmRleCkge1xuXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NkaXYnKTtcbiAgICBcbiAgICAvLyBDbGVhciBzZWN0aW9uXG4gICAgdG9kb1NlY3Rpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmdOb2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvaGVhZGluZ1wiKTtcbiAgICBoZWFkaW5nTm9kZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdDtcblxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmdOb2RlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG9kb0xpc3RbaV0udXBkYXRlSW5kZXgoaSk7XG4gICAgfVxuXG4gICAgLy8gSW1wb3J0YW50IGZvciBlZGl0IGJ1dHRvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2tMaXN0W2ldLmluZGV4ID09IGluZGV4KSB7XG4gICAgICAgICAgICBkaXNwbGF5RGV0YWlsSW5wdXRzKCdlZGl0JywgdGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbFNlbGVjdGlvbnMoJ2VkaXQnLCB0YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICBkaXNwbGF5RGV0YWlsQnV0dG9ucygnZWRpdCcsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHt0YXNrTGlzdFtpXS5kaXNwbGF5VG9kb0l0ZW0oKX1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkdGFzaycpO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZGJ1dHRvbnBhZ2UnKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgIGFkZEJ1dHRvbkV2ZW50KCk7XG4gICAgZWRpdEJ1dHRvbkV2ZW50KCk7XG4gICAgcmVtb3ZlQnV0dG9uRXZlbnQoKTtcblxufTsgXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMgKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VicGFnZScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgcGFnZS5yZW1vdmVDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IHtkaXNwbGF5TmF2QmFyLCBkaXNwbGF5UHJvamVjdHMsIGRpc3BsYXlUb2RvU2VjdGlvbiwgY2xlYXJDb250ZW50c307IiwiaW1wb3J0IHsgdG9kb0xpc3QsIHRvZG8gfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvSXRlbSAoKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzdGFzaycpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc2RhdGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzcHJpb3JpdHknKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcm9qZWN0JykudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgaXRlbURldGFpbHMgPSBbXTtcbiAgICBcbiAgICBpdGVtRGV0YWlsc1swXSA9IHRhc2s7XG4gICAgaXRlbURldGFpbHNbMV0gPSBkZXNjcmlwdGlvbjtcbiAgICBpdGVtRGV0YWlsc1syXSA9IGR1ZURhdGU7XG4gICAgaXRlbURldGFpbHNbM10gPSBwcmlvcml0eTtcbiAgICBpdGVtRGV0YWlsc1s0XSA9IHByb2plY3Q7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyhpdGVtRGV0YWlsc1swXSwgaXRlbURldGFpbHNbMV0sIGl0ZW1EZXRhaWxzWzJdLCBpdGVtRGV0YWlsc1szXSwgdG9kb0xpc3QubGVuZ3RoLCBpdGVtRGV0YWlsc1s0XSk7XG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcblxuICAgIHJldHVybiBpdGVtRGV0YWlscztcbn1cblxuIiwiaW1wb3J0IHsgdG9kb0xpc3QsIHRvZG8sIGFjdGl2ZUxpc3QsIHByb2plY3RzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRvZG9TZWN0aW9uLCBjbGVhckNvbnRlbnRzIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgYWRkVG9kb0l0ZW0gZnJvbSBcIi4vYWRkVG9kb0l0ZW1cIjtcbmltcG9ydCB7IGdlbmVyYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RMb2dpY1wiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzRE9NXCI7XG5pbXBvcnQge2Rpc3BsYXlEZXRhaWxJbnB1dHMsIGRpc3BsYXlEZXRhaWxTZWxlY3Rpb25zLCBkaXNwbGF5RGV0YWlsQnV0dG9uc30gZnJvbSBcIi4vdGFza0RldGFpbHNET01cIjtcblxuZnVuY3Rpb24gYWRkQnV0dG9uRXZlbnQgKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkdGFzaycpO1xuICAgIGFkZEJ1dHRvbnMuZm9yRWFjaChhZGRCdXR0b24gPT4ge1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUZXN0aW5nICBhZGRUb2RvSXRlbSgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0KVxuICAgICAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKGN1cnJlbnRMaXN0KTtcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxJbnB1dHMoJ2FkZCcpO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbFNlbGVjdGlvbnMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxCdXR0b25zKFwiYWRkXCIpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b25FdmVudCgpIHtcbiAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKGN1cnJlbnRMaXN0LCBidXR0b24uZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQnV0dG9uRXZlbnQgKCkge1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShidXR0b24uZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3RbaV0uaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0KVxuICAgICAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKGN1cnJlbnRMaXN0KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0RXZlbnRzICgpIHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyQ29udGVudHMoKVxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9JyArIHByb2plY3QuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBwcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24ocHJvamVjdExpc3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RFdmVudCAoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRwcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb21wdChcIk5ldyBQcm9qZWN0IE5hbWU/XCIpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9JyArIG5ld1Byb2plY3QgKyAnXScpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24ocHJvamVjdExpc3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7YWRkQnV0dG9uRXZlbnQsIGVkaXRCdXR0b25FdmVudCwgcmVtb3ZlQnV0dG9uRXZlbnQsIGNoYW5nZVByb2plY3RFdmVudHMsIGFkZFByb2plY3RFdmVudH07XG4iLCJpbXBvcnQge2Rpc3BsYXlUb2RvU2VjdGlvbn0gZnJvbSAnLi9ET00nO1xuaW1wb3J0IHsgZ2VuZXJhdGVMaXN0IH0gZnJvbSAnLi9saXN0TG9naWMnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBhZGRUb2RvSXRlbSBmcm9tIFwiLi9hZGRUb2RvSXRlbVwiO1xuaW1wb3J0IGVkaXRUb2RvSXRlbSBmcm9tICcuL2VkaXRUb2RvSXRlbSc7XG5cblxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrRGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzZGF0ZScpO1xuICAgIGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBwcm9tcHQoXCJEYXRlP1wiKTtcbiAgICAgICAgZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld0RhdGU7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza1Byb2plY3QgKCkge1xuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3Byb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICAgIHByb2plY3RPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrUHJpb3JpdHkgKCkge1xuICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1vcHRpb24nKTtcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrICgpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGNvbmZpcm0nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUb2RvSXRlbSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcmVzZXRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24ocmVzZXRMaXN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayAoaW5kZXgpIHtcbiAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Y29uZmlybScpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0VG9kb0l0ZW0oaW5kZXgpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcmVzZXRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24ocmVzZXRMaXN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjYW5jZWwgKCkge1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCByZXNldExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihyZXNldExpc3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7Y2hhbmdlVGFza0RhdGUsIGNoYW5nZVRhc2tQcm9qZWN0LCBjaGFuZ2VUYXNrUHJpb3JpdHksIGFkZFRhc2ssIGVkaXRUYXNrLCBjYW5jZWx9OyIsImltcG9ydCB7IHRvZG9MaXN0LCB0b2RvIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRvZG9JdGVtIChpbmRleCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3Rhc2snKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNkYXRlJykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3ByaW9yaXR5JykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzcHJvamVjdCcpLnRleHRDb250ZW50O1xuXG4gICAgbGV0IGl0ZW1EZXRhaWxzID0gW107XG4gICAgXG4gICAgaXRlbURldGFpbHNbMF0gPSB0YXNrO1xuICAgIGl0ZW1EZXRhaWxzWzFdID0gZGVzY3JpcHRpb247XG4gICAgaXRlbURldGFpbHNbMl0gPSBkdWVEYXRlO1xuICAgIGl0ZW1EZXRhaWxzWzNdID0gcHJpb3JpdHk7XG4gICAgaXRlbURldGFpbHNbNF0gPSBwcm9qZWN0O1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG8oaXRlbURldGFpbHNbMF0sIGl0ZW1EZXRhaWxzWzFdLCBpdGVtRGV0YWlsc1syXSwgaXRlbURldGFpbHNbM10sIGluZGV4LCBpdGVtRGV0YWlsc1s0XSk7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxLCBuZXdUb2RvKTtcbn0iLCJpbXBvcnQgdG9kb0l0ZW1Eb20gZnJvbSBcIi4vdG9kb0l0ZW1ET00uanNcIjtcbmltcG9ydCBhZGRUb2RvSXRlbSBmcm9tIFwiLi9hZGRUb2RvSXRlbS5qc1wiO1xuaW1wb3J0IHByb2plY3RET00gZnJvbSBcIi4vcHJvamVjdHNET00uanNcIjtcbmltcG9ydCB7ZGlzcGxheU5hdkJhciwgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5VG9kb1NlY3Rpb24sIGNsZWFyQ29udGVudHN9IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHthZGRCdXR0b25FdmVudCwgcmVtb3ZlQnV0dG9uRXZlbnR9IGZyb20gXCIuL2J1dHRvbkZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHtnZW5lcmF0ZUxpc3R9IGZyb20gXCIuL2xpc3RMb2dpY1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJwYWdlJylcblxuY29uc3QgdG9kbyA9ICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGluZGV4LCBwcm9qZWN0KSA9PiB7XG4gICAgXG4gICAgLy8gSW5kZXggaXMganVzdCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgIGNvbnN0IGRpc3BsYXlUb2RvSXRlbSA9ICgpID0+IHtcbiAgICAgICAgdG9kb0l0ZW1Eb20odGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbmRleCk7XG4gICAgfVxuXG4gICAgLy8gTmVlZGVkIHRvIHVwZGF0ZSB0b2RvIGZvciBidXR0b24gZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IHVwZGF0ZUluZGV4ID0gKG5ld0luZGV4KSA9PiB7XG4gICAgICAgIGluZGV4ID0gbmV3SW5kZXg7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5VG9kb0l0ZW0sXG4gICAgICAgIHVwZGF0ZUluZGV4LFxuICAgICAgICB0YXNrLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGluZGV4XG4gICAgfVxufTtcblxubGV0IHRvZG9MaXN0ID0gW107XG5sZXQgYWN0aXZlTGlzdCA9IFtdO1xubGV0IHByb2plY3RzID0gW107XG5cbmRpc3BsYXlOYXZCYXIoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuXG4vL0FwcCBzdGFydHMgd2l0aCBcIkFsbFwiIHByb2plY3QgYWN0aXZlXG5jb25zdCBhbGxOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD1cIkFsbFwiXScpO1xuYWxsTm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuY29uc3QgdGVzdCA9IHRvZG8oJ2EnLCBcImJcIiwgXCJKYW5cIiwgMSwgMCwgXCJJbmJveFwiKTtcbmNvbnN0IHRlc3RwID0gdG9kbygnYicsICdjJywgXCJGZWJcIiwgMiwgMSlcblxudG9kb0xpc3RbMF0gPSB0ZXN0O1xudG9kb0xpc3RbMV0gPSB0ZXN0cDtcblxucHJvamVjdHNbMF0gPSBcIkluYm94XCI7XG5cbmFjdGl2ZUxpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIFwiQWxsXCIpO1xuXG5jb25zb2xlLmxvZyh0b2RvTGlzdCk7XG5jb25zb2xlLmxvZyhhY3RpdmVMaXN0KTtcbmRpc3BsYXlUb2RvU2VjdGlvbihhY3RpdmVMaXN0KTtcblxuXG5leHBvcnQge3RvZG9MaXN0LCB0b2RvLCBhY3RpdmVMaXN0LCBwcm9qZWN0c307IiwiZnVuY3Rpb24gZ2VuZXJhdGVMaXN0ICh0b2RvTGlzdCwgcHJvamVjdCkge1xuICAgIGxldCB1cGRhdGVkTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9MaXN0W2ldLnByb2plY3QgPT09IHByb2plY3QgfHwgcHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgICAgICAgICAgdXBkYXRlZExpc3QucHVzaCh0b2RvTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZWRMaXN0O1xufVxuXG5leHBvcnQge2dlbmVyYXRlTGlzdH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QgKHByb2plY3QsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgY29uc3QgcHJvamVjdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgIHByb2plY3ROb2RlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VG90YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VG90YWwudGV4dENvbnRlbnQgPSBcIiNcIjtcbiAgICBwcm9qZWN0Tm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0VG90YWwpO1xuXG4gICAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgcHJvamVjdE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0KTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdE5vZGUpO1xufSIsIi8vIFRoaXMgaXMgZ29pbmcgdG8gYmUgdXNlZCBmb3IgYm90aCBhZGQgYW5kIGVkaXQgdGFzay4gIFRvZG9pc3QgaXMgaW5zcGlyYXRpb24gaGVyZS5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjYW5jZWwsIGNoYW5nZVRhc2tEYXRlLCBjaGFuZ2VUYXNrUHJvamVjdCwgYWRkVGFzaywgZWRpdFRhc2ssIGNoYW5nZVRhc2tQcmlvcml0eSB9IGZyb20gJy4vZWRpdEJ1dHRvbnMnO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGV0YWlsSW5wdXRzIChjaGFuZ2UsIHRvZG8pIHtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZGl2Jyk7XG5cbiAgICAvL1JlbW92ZSBBZGQgdGFzayBidXR0b25cbiAgICBpZiAoY2hhbmdlID09PSAnYWRkJykge1xuICAgICAgICBjb25zdCBwcmV2aW91c0FkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRidXR0b25wYWdlJyk7XG4gICAgICAgIHRvZG9TZWN0aW9uLnJlbW92ZUNoaWxkKHByZXZpb3VzQWRkQnV0dG9uKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGV0YWlsc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzTm9kZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxkaXYnKTtcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHN0YXNrJyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzcwJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNDE2Jyk7XG5cbiAgICBpZihjaGFuZ2UgPT09ICdlZGl0Jykge1xuICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSB0b2RvLnRhc2s7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGRldGFpbHNOb2RlLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gICAgZGV0YWlsc05vZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxzTm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxTZWxlY3Rpb25zIChjaGFuZ2UsIHRvZG8pIHtcblxuICAgIGNvbnN0IGRldGFpbHNCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNib3R0b21kaXYnKTtcblxuICAgIC8vIE5lZWQgZm9yIGNob29zaW5nIHNwZWNpZmljIHByaW9yaXR5IG9yIHByb2plY3RcbiAgICBmdW5jdGlvbiBjcmVhdGVEcm9wZG93biAobGlzdCwgdHlwZSkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkcm9wZG93bkl0ZW0uY2xhc3NMaXN0LmFkZCh0eXBlKTtcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbS50ZXh0Q29udGVudCA9IGxpc3RbaV07XG4gICAgICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bkl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcm9wZG93bjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc2RhdGUnKTtcbiAgICBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTY2hlZHVsZVwiO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJyk7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc3Byb2plY3QnLCAnZHJvcGJ0bicpO1xuICAgIC8vIERlcGVuZHMgb24gdGhlIHByb2plY3QgcGFnZVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9oZWFkaW5nJyk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRleHRDb250ZW50ICE9PSAnQWxsJykge1xuICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50PSBcIkluYm94XCI7XG4gICAgfVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgY29uc3QgcHJvamVjdERyb3Bkb3duID0gY3JlYXRlRHJvcGRvd24ocHJvamVjdHMsICdwcm9qZWN0LW9wdGlvbicpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERyb3Bkb3duKTsgXG4gICAgXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc3ByaW9yaXR5JywgJ2Ryb3BidG4nKTtcbiAgICBwcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pO1xuICAgIGxldCBwcmlvcml0aWVzID0gWydVcmdlbnQnLCAnVGltZWx5JywgJ0Nhc3VhbCcsICdMb3cnXTtcbiAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gY3JlYXRlRHJvcGRvd24ocHJpb3JpdGllcywgJ3ByaW9yaXR5LW9wdGlvbicpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pO1xuXG4gICAgLy9FZGl0IGRpc3BsYXlcbiAgICBpZiAoY2hhbmdlID09PSAnZWRpdCcpIHtcbiAgICAgICAgZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdDtcbiAgICAgICAgcHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgIH1cbiAgICBjb25zdCBkZXRhaWxzTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxkaXYnKTtcbiAgICBkZXRhaWxzQm90dG9tLmFwcGVuZENoaWxkKGRhdGVCdXR0b24pO1xuICAgIGRldGFpbHNCb3R0b20uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgZGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgZGV0YWlsc05vZGUuYXBwZW5kQ2hpbGQoZGV0YWlsc0JvdHRvbSk7XG5cbiAgICAvL0J1dHRvbiBGdW5jdGlvbmFsaXR5XG4gICAgY2hhbmdlVGFza0RhdGUoKTtcbiAgICBjaGFuZ2VUYXNrUHJvamVjdCgpO1xuICAgIGNoYW5nZVRhc2tQcmlvcml0eSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGV0YWlsQnV0dG9ucyAoY2hhbmdlLCBpbmRleCkge1xuICAgIGNvbnN0IGRldGFpbEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2RldGFpbGJ1dHRvbnNkaXYnKTtcblxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm0nKTtcblxuICAgIGlmIChjaGFuZ2UgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRjb25maXJtJyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRjb25maXJtJyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbGJ1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBkZXRhaWxCdXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgIGRldGFpbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQoZGV0YWlsQnV0dG9ucyk7XG5cbiAgICAvL0J1dHRvbiBGdW5jdGlvbmFsaXR5XG4gICAgaWYgKGNoYW5nZSA9PT0gJ2FkZCcpIHtcbiAgICAgICAgYWRkVGFzaygpO1xuICAgIH1cbiAgICBlbHNlIHtlZGl0VGFzayhpbmRleCl9XG4gICAgXG4gICAgY2FuY2VsKCk7XG59XG5cbmV4cG9ydCB7ZGlzcGxheURldGFpbElucHV0cywgZGlzcGxheURldGFpbFNlbGVjdGlvbnMsIGRpc3BsYXlEZXRhaWxCdXR0b25zfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VG9kb0l0ZW0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5kZXgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NkaXYnKTtcblxuICAgIGNvbnN0IHRvZG9Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb05vZGUuY2xhc3NMaXN0LmFkZCgndG9kb2l0ZW0nKTtcblxuICAgIGNvbnN0IGNoZWNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoZWNrTm9kZS5jbGFzc0xpc3QuYWRkKCd0b2RvY2hlY2snKTtcbiAgICB0b2RvTm9kZS5hcHBlbmRDaGlsZChjaGVja05vZGUpO1xuXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgndG9kb2luZm9kaXYnKTtcbiAgICBcbiAgICAvLyBUaGUgZm9sbG93aW5nIHNlY3Rpb24gaXMgcmVsYXRlZCB0byBkaXNwbGF5aW5nIHByb3BlcnRpZXNcbiAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZURhdGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxuICAgIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tuYW1lJyk7XG4gICAgZGVzY3JpcHRpb25Ob2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXNjcmlwdGlvbicpO1xuICAgIGR1ZURhdGVOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkYXRlJyk7XG5cbiAgICB0YXNrTm9kZS50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgZGVzY3JpcHRpb25Ob2RlLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZU5vZGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgIHByaW9yaXR5Tm9kZS50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0YXNrTm9kZSk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbk5vZGUpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZU5vZGUpO1xuICAgIFxuICAgIHRvZG9Ob2RlLmFwcGVuZENoaWxkKHByaW9yaXR5Tm9kZSk7XG4gICAgdG9kb05vZGUuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICAvL0luZGV4IGZvciB0ZXN0aW5nXG4gICAgY29uc3QgaW5kZXhOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZGV4Tm9kZS50ZXh0Q29udGVudCA9IGluZGV4O1xuICAgIHRvZG9Ob2RlLmFwcGVuZENoaWxkKGluZGV4Tm9kZSk7XG5cbiAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJ1dHRvbnMtZGl2Jyk7XG5cbiAgICAvL0VkaXQgYnV0dG9uXG4gICAgY29uc3QgZWRpdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0SXRlbS50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICBlZGl0SXRlbS5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0SXRlbSk7XG5cbiAgICAvL1JlbW92ZSBidXR0b25cbiAgICBjb25zdCByZW1vdmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlSXRlbS50ZXh0Q29udGVudCA9IFwiUkVNT1ZFXCI7XG4gICAgcmVtb3ZlSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgcmVtb3ZlSXRlbS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKHJlbW92ZUl0ZW0pO1xuXG4gICAgdG9kb05vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9Ob2RlKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=