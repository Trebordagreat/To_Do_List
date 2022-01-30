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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n\n#webpage {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.navbar {\n    background-color: lightseagreen;\n    display: flex;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.navbarsection {\n    display: flex;\n    gap: 30px;\n}\n\n.navbarsection button {\n    border: none;\n    font-size: 25px;\n    padding: 5px;\n    border-radius: 6%;\n    background-color:lightseagreen;\n    color: white;   \n}\n\n.navbarsection button:hover {\n    background-color: rgb(31, 212, 203);\n}\n\n.content {\n    height: 100%;\n    border: solid 1px black;\n    display: flex;\n}\n\n.projectsdiv {\n    background-color: rgb(240, 240, 240);\n    display: flex;\n    flex-direction: column;\n    flex-basis: 262px;\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 8px;\n}\n\n.defaultprojects {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px;\n}\n\n.customprojects {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsheading,\n.project {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(240, 240, 240);\n    border: none;\n    font-size: 20px;\n    align-items: center;\n    border-radius: 8%;\n}\n\n.project:hover,\n#addproject:hover {\n    background-color: rgb(220, 220, 220);\n}\n\n#addproject {\n    border-radius: 10%;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    font-size: 20px;\n}\n\n.active {\n    background-color: rgb(220, 220, 220);\n}\n\n.todosdiv {\n    display: flex;\n    flex-direction: column;\n    padding-left: 90px;\n    color: black;\n    flex: auto;\n    padding-top: 30px;\n    padding-right: 110px;\n}\n\n.todoitem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom:solid 1px rgb(240, 240, 240);\n}\n\n.todocheck {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    display: inline-block;\n    border: solid 1px;\n}\n\n.todoinfodiv {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 10px;\n    margin-top: 0px;\n}\n\n.todo-buttons-div {\n    display: flex;\n}\n\n.detaildiv {\n    display: flex;\n    flex-direction: column;\n    border: solid 1px rgb(200, 200, 200);\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n}\n\n.detailstask {\n    font-size: 16px;\n    border: none;\n    border-bottom: solid 1px rgb(240, 240, 240);\n}\n\n.detailsdescription {\n    height: 60px;\n    flex: auto;\n    border:none;\n    resize: none;\n}\n\n.detailstask:focus, .detailsdescription:focus {\n    outline:none;\n}\n\n.detailsbottomdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.detailsbottomdiv button,\n.cancelbutton,\n.todo-buttons-div button {\n    border: 1px solid rgb(220, 220, 220);\n    border-radius: 10%;\n    background-color: white;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.detailsbottomdiv button:hover,\n.cancelbutton:hover,\n.todo-buttons-div button:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.detailbuttonsdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.confirm {\n    font-size: 14px;\n    color: white;\n    background-color: lightseagreen;\n    border-radius: 10%;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n\n.dropdown button {\n    width: 80px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;IAGI,oCAAoC;IACpC,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;;IAGI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB","sourcesContent":["body {\n    margin: 0;\n}\n\n#webpage {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.navbar {\n    background-color: lightseagreen;\n    display: flex;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.navbarsection {\n    display: flex;\n    gap: 30px;\n}\n\n.navbarsection button {\n    border: none;\n    font-size: 25px;\n    padding: 5px;\n    border-radius: 6%;\n    background-color:lightseagreen;\n    color: white;   \n}\n\n.navbarsection button:hover {\n    background-color: rgb(31, 212, 203);\n}\n\n.content {\n    height: 100%;\n    border: solid 1px black;\n    display: flex;\n}\n\n.projectsdiv {\n    background-color: rgb(240, 240, 240);\n    display: flex;\n    flex-direction: column;\n    flex-basis: 262px;\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 8px;\n}\n\n.defaultprojects {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px;\n}\n\n.customprojects {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsheading,\n.project {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(240, 240, 240);\n    border: none;\n    font-size: 20px;\n    align-items: center;\n    border-radius: 8%;\n}\n\n.project:hover,\n#addproject:hover {\n    background-color: rgb(220, 220, 220);\n}\n\n#addproject {\n    border-radius: 10%;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    font-size: 20px;\n}\n\n.active {\n    background-color: rgb(220, 220, 220);\n}\n\n.todosdiv {\n    display: flex;\n    flex-direction: column;\n    padding-left: 90px;\n    color: black;\n    flex: auto;\n    padding-top: 30px;\n    padding-right: 110px;\n}\n\n.todoitem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom:solid 1px rgb(240, 240, 240);\n}\n\n.todocheck {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    display: inline-block;\n    border: solid 1px;\n}\n\n.todoinfodiv {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 10px;\n    margin-top: 0px;\n}\n\n.todo-buttons-div {\n    display: flex;\n}\n\n.detaildiv {\n    display: flex;\n    flex-direction: column;\n    border: solid 1px rgb(200, 200, 200);\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n}\n\n.detailstask {\n    font-size: 16px;\n    border: none;\n    border-bottom: solid 1px rgb(240, 240, 240);\n}\n\n.detailsdescription {\n    height: 60px;\n    flex: auto;\n    border:none;\n    resize: none;\n}\n\n.detailstask:focus, .detailsdescription:focus {\n    outline:none;\n}\n\n.detailsbottomdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.detailsbottomdiv button,\n.cancelbutton,\n.todo-buttons-div button {\n    border: 1px solid rgb(220, 220, 220);\n    border-radius: 10%;\n    background-color: white;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.detailsbottomdiv button:hover,\n.cancelbutton:hover,\n.todo-buttons-div button:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.detailbuttonsdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.confirm {\n    font-size: 14px;\n    color: white;\n    background-color: lightseagreen;\n    border-radius: 10%;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n\n.dropdown button {\n    width: 80px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}"],"sourceRoot":""}]);
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
    headingNode.classList.add(".todoheading");
    headingNode.textContent = currentProject.dataset.project;

    todoSection.appendChild(headingNode);

    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_2__.todoList.length; i++) {
        _index__WEBPACK_IMPORTED_MODULE_2__.todoList[i].updateIndex(i);
    }

    // Important for edit button
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].index == index) {
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_3__.displayDetailInputs)();
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_3__.displayDetailSelections)();
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
    projectButton.addEventListener('click', () => {
        console.log(3)
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



function displayDetailInputs (change) {

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

    detailsNode.appendChild(taskInput);
    detailsNode.appendChild(descriptionInput);

    todoSection.appendChild(detailsNode);
}

function displayDetailSelections () {

    const detailsBottom = document.createElement('div');
    detailsBottom.classList.add('detailsbottomdiv');

    // Need for choosing specific priority or project
    function createDropdown (list) {
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown-content');
        for (let i = 0; i < list.length; i++) {
            const dropdownItem = document.createElement('button');
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
    projectButton.textContent= "Inbox";
    projectDiv.appendChild(projectButton);
    const projectDropdown = createDropdown(_index__WEBPACK_IMPORTED_MODULE_0__.projects);
    projectDiv.appendChild(projectDropdown); 
    
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('dropdown');
    const priorityButton = document.createElement('button');
    priorityButton.classList.add('detailspriority', 'dropbtn');
    priorityButton.textContent = "Low";
    priorityDiv.appendChild(priorityButton);
    let priorities = ['Urgent', 'Timely', 'Casual', 'Low'];
    const priorityDropdown = createDropdown(priorities);
    priorityDiv.appendChild(priorityDropdown);

    const detailsNode = document.querySelector('.detaildiv');
    detailsBottom.appendChild(dateButton);
    detailsBottom.appendChild(projectDiv);
    detailsBottom.appendChild(priorityDiv);
    detailsNode.appendChild(detailsBottom);

    //Button Functionality
    (0,_editButtons__WEBPACK_IMPORTED_MODULE_1__.changeTaskDate)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHFEQUFPO0FBQ2Y7QUFDQSxVQUFVLHNEQUFRO0FBQ2xCO0FBQ0EsSUFBSSxvREFBTTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDckhlOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7O1VDN0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZFRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2J1dHRvbkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0QnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdExvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tEZXRhaWxzRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9JdGVtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3dlYnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNlYWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7ICAgXFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMjEyLCAyMDMpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c2RpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1iYXNpczogMjYycHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XFxuXFxuLmRlZmF1bHRwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5jdXN0b21wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0c2hlYWRpbmcsXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlcixcXG4jYWRkcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG59XFxuXFxuI2FkZHByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxufVxcblxcbi50b2Rvc2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XFxufVxcblxcbi50b2RvaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBib3JkZXItYm90dG9tOnNvbGlkIDFweCByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi50b2RvY2hlY2sge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcbn1cXG5cXG4udG9kb2luZm9kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLnRvZG8tYnV0dG9ucy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGV0YWlsZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kZXRhaWxzdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uZGV0YWlsc2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGV0YWlsc3Rhc2s6Zm9jdXMsIC5kZXRhaWxzZGVzY3JpcHRpb246Zm9jdXMge1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbi5kZXRhaWxzYm90dG9tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiBidXR0b24sXFxuLmNhbmNlbGJ1dHRvbixcXG4udG9kby1idXR0b25zLWRpdiBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiBidXR0b246aG92ZXIsXFxuLmNhbmNlbGJ1dHRvbjpob3ZlcixcXG4udG9kby1idXR0b25zLWRpdiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5kZXRhaWxidXR0b25zZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93biBidXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jd2VicGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdmJhcnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDYlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2VhZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTsgICBcXG59XFxuXFxuLm5hdmJhcnNlY3Rpb24gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyMTIsIDIwMyk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3RzZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWJhc2lzOiAyNjJweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xcbn1cXG5cXG4uZGVmYXVsdHByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmN1c3RvbXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RzaGVhZGluZyxcXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyLFxcbiNhZGRwcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbn1cXG5cXG4jYWRkcHJvamVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG59XFxuXFxuLnRvZG9zZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMTBweDtcXG59XFxuXFxuLnRvZG9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGJvcmRlci1ib3R0b206c29saWQgMXB4IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLnRvZG9jaGVjayB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxufVxcblxcbi50b2RvaW5mb2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b25zLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZXRhaWxkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRldGFpbHN0YXNrIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5kZXRhaWxzZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kZXRhaWxzdGFzazpmb2N1cywgLmRldGFpbHNkZXNjcmlwdGlvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XFxuXFxuLmRldGFpbHNib3R0b21kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5kZXRhaWxzYm90dG9tZGl2IGJ1dHRvbixcXG4uY2FuY2VsYnV0dG9uLFxcbi50b2RvLWJ1dHRvbnMtZGl2IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5kZXRhaWxzYm90dG9tZGl2IGJ1dHRvbjpob3ZlcixcXG4uY2FuY2VsYnV0dG9uOmhvdmVyLFxcbi50b2RvLWJ1dHRvbnMtZGl2IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLmRldGFpbGJ1dHRvbnNkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2FkZEJ1dHRvbkV2ZW50LCBlZGl0QnV0dG9uRXZlbnQsIHJlbW92ZUJ1dHRvbkV2ZW50fSBmcm9tIFwiLi9idXR0b25GdW5jdGlvbnMuanNcIjtcblxuXG5mdW5jdGlvbiBkaXNwbGF5TmF2QmFyICgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnBhZ2UnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgIGNvbnN0IGxlZnROYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0TmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcnNlY3Rpb24nKTtcblxuICAgIGNvbnN0IG1lbnVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudU5vZGUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgbWVudU5vZGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51Tm9kZS5jbGFzc0xpc3QuYWRkKCduYXZvcHRpb24nKTtcblxuICAgIGNvbnN0IGhvbWVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZU5vZGUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaG9tZU5vZGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBtZW51Tm9kZS5jbGFzc0xpc3QuYWRkKCduYXZvcHRpb24nKTtcblxuICAgIGxlZnROYXZCYXIuYXBwZW5kQ2hpbGQobWVudU5vZGUpO1xuICAgIGxlZnROYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZU5vZGUpO1xuICAgIFxuXG4gICAgY29uc3QgcmlnaHROYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodE5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXJzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBhZGRUYXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFzaycpO1xuICAgIGFkZFRhc2tOb2RlLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0dGluZ3NOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0dGluZ3MnKTtcbiAgICBzZXR0aW5nc05vZGUudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG4gICAgbWVudU5vZGUuY2xhc3NMaXN0LmFkZCgnbmF2b3B0aW9uJyk7XG5cbiAgICByaWdodE5hdkJhci5hcHBlbmRDaGlsZChhZGRUYXNrTm9kZSk7XG4gICAgcmlnaHROYXZCYXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NOb2RlKTtcblxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxlZnROYXZCYXIpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChyaWdodE5hdkJhcik7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKG5hdkJhcik7XG59O1xuXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RXZlbnRzLCBhZGRQcm9qZWN0RXZlbnQgfSBmcm9tIFwiLi9idXR0b25GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7cHJvamVjdHN9IGZyb20gXCIuL2luZGV4XCJcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzICgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnBhZ2UnKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNkaXYnKTtcblxuICAgIC8vIEFkZCBpbiBtYW5kYXRvcnkgcHJvamVjdHMgKEluYm94LCBBbGwsIFRvZGF5LCBGaWx0ZXJzICYgTGFiZWxzKVxuICAgIGNvbnN0IGRlZmF1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdHMuY2xhc3NMaXN0LmFkZCgnZGVmYXVsdHByb2plY3RzJylcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkZWZhdWx0cyk7XG5cbiAgICAvLyBBZGQgaW4gY3VzdG9tIHByb2plY3RzXG4gICAgY29uc3QgY3VzdG9tcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbXMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tcHJvamVjdHMnKTtcblxuICAgIC8vIFByb2plY3RzIEhlYWRpbmcgd2l0aCBhZGQgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBjdXN0b21zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN1c3RvbXNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzaGVhZGluZycpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgY3VzdG9tc0hlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ05vZGUpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgY3VzdG9tc0hlYWRpbmcuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBjdXN0b21zLmFwcGVuZENoaWxkKGN1c3RvbXNIZWFkaW5nKTtcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGN1c3RvbXMpXG5cbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9zZGl2Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9zRGl2KTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBkaXNwbGF5UHJvamVjdChcIkluYm94XCIsIFwiLmRlZmF1bHRwcm9qZWN0c1wiKTtcbiAgICBkaXNwbGF5UHJvamVjdChcIkFsbFwiLCBcIi5kZWZhdWx0cHJvamVjdHNcIik7XG4gICAgZGlzcGxheVByb2plY3QoXCJUb2RheVwiLCBcIi5kZWZhdWx0cHJvamVjdHNcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RzW2ldLCBcIi5jdXN0b21wcm9qZWN0c1wiKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQcm9qZWN0RXZlbnRzKCk7XG4gICAgYWRkUHJvamVjdEV2ZW50KCk7XG59XG5cbmltcG9ydCB7IHRvZG9MaXN0LCB0b2RvIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBkaXNwbGF5RGV0YWlsSW5wdXRzLCBkaXNwbGF5RGV0YWlsU2VsZWN0aW9ucywgZGlzcGxheURldGFpbEJ1dHRvbnN9IGZyb20gJy4vdGFza0RldGFpbHNET00nO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb1NlY3Rpb24gKHRhc2tMaXN0LCBpbmRleCkge1xuXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NkaXYnKTtcbiAgICBcbiAgICAvLyBDbGVhciBzZWN0aW9uXG4gICAgdG9kb1NlY3Rpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmdOb2RlLmNsYXNzTGlzdC5hZGQoXCIudG9kb2hlYWRpbmdcIik7XG4gICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3Q7XG5cbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nTm9kZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRvZG9MaXN0W2ldLnVwZGF0ZUluZGV4KGkpO1xuICAgIH1cblxuICAgIC8vIEltcG9ydGFudCBmb3IgZWRpdCBidXR0b25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0YXNrTGlzdFtpXS5pbmRleCA9PSBpbmRleCkge1xuICAgICAgICAgICAgZGlzcGxheURldGFpbElucHV0cygpO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbFNlbGVjdGlvbnMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxCdXR0b25zKCdlZGl0JywgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge3Rhc2tMaXN0W2ldLmRpc3BsYXlUb2RvSXRlbSgpfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrJyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkYnV0dG9ucGFnZScpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgYWRkQnV0dG9uRXZlbnQoKTtcbiAgICBlZGl0QnV0dG9uRXZlbnQoKTtcbiAgICByZW1vdmVCdXR0b25FdmVudCgpO1xuXG59OyBcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cyAoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJwYWdlJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBwYWdlLnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xufVxuXG5leHBvcnQge2Rpc3BsYXlOYXZCYXIsIGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRvZG9TZWN0aW9uLCBjbGVhckNvbnRlbnRzfTsiLCJpbXBvcnQgeyB0b2RvTGlzdCwgdG9kbyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG9JdGVtICgpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHN0YXNrJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzZGF0ZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcmlvcml0eScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3Byb2plY3QnKS50ZXh0Q29udGVudDtcblxuICAgIGxldCBpdGVtRGV0YWlscyA9IFtdO1xuICAgIFxuICAgIGl0ZW1EZXRhaWxzWzBdID0gdGFzaztcbiAgICBpdGVtRGV0YWlsc1sxXSA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXRhaWxzWzJdID0gZHVlRGF0ZTtcbiAgICBpdGVtRGV0YWlsc1szXSA9IHByaW9yaXR5O1xuICAgIGl0ZW1EZXRhaWxzWzRdID0gcHJvamVjdDtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKGl0ZW1EZXRhaWxzWzBdLCBpdGVtRGV0YWlsc1sxXSwgaXRlbURldGFpbHNbMl0sIGl0ZW1EZXRhaWxzWzNdLCB0b2RvTGlzdC5sZW5ndGgsIGl0ZW1EZXRhaWxzWzRdKTtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuXG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xufVxuXG4iLCJpbXBvcnQgeyB0b2RvTGlzdCwgdG9kbywgYWN0aXZlTGlzdCwgcHJvamVjdHMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5VG9kb1NlY3Rpb24sIGNsZWFyQ29udGVudHMgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBhZGRUb2RvSXRlbSBmcm9tIFwiLi9hZGRUb2RvSXRlbVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdExvZ2ljXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNET01cIjtcbmltcG9ydCB7ZGlzcGxheURldGFpbElucHV0cywgZGlzcGxheURldGFpbFNlbGVjdGlvbnMsIGRpc3BsYXlEZXRhaWxCdXR0b25zfSBmcm9tIFwiLi90YXNrRGV0YWlsc0RPTVwiO1xuXG5mdW5jdGlvbiBhZGRCdXR0b25FdmVudCAoKSB7XG4gICAgY29uc3QgYWRkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGR0YXNrJyk7XG4gICAgYWRkQnV0dG9ucy5mb3JFYWNoKGFkZEJ1dHRvbiA9PiB7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRlc3RpbmcgIGFkZFRvZG9JdGVtKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpXG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24oY3VycmVudExpc3QpO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbElucHV0cygnYWRkJyk7XG4gICAgICAgICAgICBkaXNwbGF5RGV0YWlsU2VsZWN0aW9ucygpO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbEJ1dHRvbnMoXCJhZGRcIik7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdEJ1dHRvbkV2ZW50KCkge1xuICAgIGNvbnN0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBlZGl0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24oY3VycmVudExpc3QsIGJ1dHRvbi5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVCdXR0b25FdmVudCAoKSB7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICByZW1vdmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGJ1dHRvbi5kYXRhc2V0LmluZGV4LCAxKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdFtpXS5pbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpXG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24oY3VycmVudExpc3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3RFdmVudHMgKCkge1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJDb250ZW50cygpXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD0nICsgcHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIHByb2plY3QuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihwcm9qZWN0TGlzdCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEV2ZW50ICgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvbXB0KFwiTmV3IFByb2plY3QgTmFtZT9cIik7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD0nICsgbmV3UHJvamVjdCArICddJyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihwcm9qZWN0TGlzdCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHthZGRCdXR0b25FdmVudCwgZWRpdEJ1dHRvbkV2ZW50LCByZW1vdmVCdXR0b25FdmVudCwgY2hhbmdlUHJvamVjdEV2ZW50cywgYWRkUHJvamVjdEV2ZW50fTtcbiIsImltcG9ydCB7ZGlzcGxheVRvZG9TZWN0aW9ufSBmcm9tICcuL0RPTSc7XG5pbXBvcnQgeyBnZW5lcmF0ZUxpc3QgfSBmcm9tICcuL2xpc3RMb2dpYyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IGFkZFRvZG9JdGVtIGZyb20gXCIuL2FkZFRvZG9JdGVtXCI7XG5pbXBvcnQgZWRpdFRvZG9JdGVtIGZyb20gJy4vZWRpdFRvZG9JdGVtJztcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tEYXRlICgpIHtcbiAgICBjb25zdCBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNkYXRlJyk7XG4gICAgZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHByb21wdChcIkRhdGU/XCIpO1xuICAgICAgICBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gbmV3RGF0ZTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrUHJvamVjdCAoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzcHJvamVjdCcpO1xuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKDMpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkVGFzayAoKSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRjb25maXJtJyk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVG9kb0l0ZW0oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHJlc2V0TGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKHJlc2V0TGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sgKGluZGV4KSB7XG4gICAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGNvbmZpcm0nKTtcbiAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdFRvZG9JdGVtKGluZGV4KTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHJlc2V0TGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKHJlc2V0TGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2FuY2VsICgpIHtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcmVzZXRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24ocmVzZXRMaXN0KTtcbiAgICB9KVxufVxuXG5leHBvcnQge2NoYW5nZVRhc2tEYXRlLCBhZGRUYXNrLCBlZGl0VGFzaywgY2FuY2VsfTsiLCJpbXBvcnQgeyB0b2RvTGlzdCwgdG9kbyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRUb2RvSXRlbSAoaW5kZXgpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHN0YXNrJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzZGF0ZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcmlvcml0eScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3Byb2plY3QnKS50ZXh0Q29udGVudDtcblxuICAgIGxldCBpdGVtRGV0YWlscyA9IFtdO1xuICAgIFxuICAgIGl0ZW1EZXRhaWxzWzBdID0gdGFzaztcbiAgICBpdGVtRGV0YWlsc1sxXSA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXRhaWxzWzJdID0gZHVlRGF0ZTtcbiAgICBpdGVtRGV0YWlsc1szXSA9IHByaW9yaXR5O1xuICAgIGl0ZW1EZXRhaWxzWzRdID0gcHJvamVjdDtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKGl0ZW1EZXRhaWxzWzBdLCBpdGVtRGV0YWlsc1sxXSwgaXRlbURldGFpbHNbMl0sIGl0ZW1EZXRhaWxzWzNdLCBpbmRleCwgaXRlbURldGFpbHNbNF0pO1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSwgbmV3VG9kbyk7XG59IiwiaW1wb3J0IHRvZG9JdGVtRG9tIGZyb20gXCIuL3RvZG9JdGVtRE9NLmpzXCI7XG5pbXBvcnQgYWRkVG9kb0l0ZW0gZnJvbSBcIi4vYWRkVG9kb0l0ZW0uanNcIjtcbmltcG9ydCBwcm9qZWN0RE9NIGZyb20gXCIuL3Byb2plY3RzRE9NLmpzXCI7XG5pbXBvcnQge2Rpc3BsYXlOYXZCYXIsIGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRvZG9TZWN0aW9uLCBjbGVhckNvbnRlbnRzfSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7YWRkQnV0dG9uRXZlbnQsIHJlbW92ZUJ1dHRvbkV2ZW50fSBmcm9tIFwiLi9idXR0b25GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7Z2VuZXJhdGVMaXN0fSBmcm9tIFwiLi9saXN0TG9naWNcIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VicGFnZScpXG5cbmNvbnN0IHRvZG8gPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbmRleCwgcHJvamVjdCkgPT4ge1xuICAgIFxuICAgIC8vIEluZGV4IGlzIGp1c3QgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICBjb25zdCBkaXNwbGF5VG9kb0l0ZW0gPSAoKSA9PiB7XG4gICAgICAgIHRvZG9JdGVtRG9tKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5kZXgpO1xuICAgIH1cblxuICAgIC8vIE5lZWRlZCB0byB1cGRhdGUgdG9kbyBmb3IgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCB1cGRhdGVJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgICAgICBpbmRleCA9IG5ld0luZGV4O1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheVRvZG9JdGVtLFxuICAgICAgICB1cGRhdGVJbmRleCxcbiAgICAgICAgdGFzayxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpbmRleFxuICAgIH1cbn07XG5cbmxldCB0b2RvTGlzdCA9IFtdO1xubGV0IGFjdGl2ZUxpc3QgPSBbXTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5kaXNwbGF5TmF2QmFyKCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcblxuLy9BcHAgc3RhcnRzIHdpdGggXCJBbGxcIiBwcm9qZWN0IGFjdGl2ZVxuY29uc3QgYWxsTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9XCJBbGxcIl0nKTtcbmFsbE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbmNvbnN0IHRlc3QgPSB0b2RvKCdhJywgXCJiXCIsIFwiSmFuXCIsIDEsIDAsIFwiSW5ib3hcIik7XG5jb25zdCB0ZXN0cCA9IHRvZG8oJ2InLCAnYycsIFwiRmViXCIsIDIsIDEpXG5cbnRvZG9MaXN0WzBdID0gdGVzdDtcbnRvZG9MaXN0WzFdID0gdGVzdHA7XG5cbnByb2plY3RzWzBdID0gXCJJbmJveFwiO1xuXG5hY3RpdmVMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBcIkFsbFwiKTtcblxuY29uc29sZS5sb2codG9kb0xpc3QpO1xuY29uc29sZS5sb2coYWN0aXZlTGlzdCk7XG5kaXNwbGF5VG9kb1NlY3Rpb24oYWN0aXZlTGlzdCk7XG5cblxuZXhwb3J0IHt0b2RvTGlzdCwgdG9kbywgYWN0aXZlTGlzdCwgcHJvamVjdHN9OyIsImZ1bmN0aW9uIGdlbmVyYXRlTGlzdCAodG9kb0xpc3QsIHByb2plY3QpIHtcbiAgICBsZXQgdXBkYXRlZExpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0IHx8IHByb2plY3QgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRMaXN0LnB1c2godG9kb0xpc3RbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGVkTGlzdDtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZUxpc3R9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGNvbnN0IHByb2plY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0Tm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdFRvdGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRvdGFsLnRleHRDb250ZW50ID0gXCIjXCI7XG4gICAgcHJvamVjdE5vZGUuYXBwZW5kQ2hpbGQocHJvamVjdFRvdGFsKTtcblxuICAgIHByb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgIHByb2plY3ROb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdCk7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcbn0iLCIvLyBUaGlzIGlzIGdvaW5nIHRvIGJlIHVzZWQgZm9yIGJvdGggYWRkIGFuZCBlZGl0IHRhc2suICBUb2RvaXN0IGlzIGluc3BpcmF0aW9uIGhlcmUuXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY2FuY2VsLCBjaGFuZ2VUYXNrRGF0ZSwgYWRkVGFzaywgZWRpdFRhc2sgfSBmcm9tICcuL2VkaXRCdXR0b25zJztcblxuZnVuY3Rpb24gZGlzcGxheURldGFpbElucHV0cyAoY2hhbmdlKSB7XG5cbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2RpdicpO1xuXG4gICAgLy9SZW1vdmUgQWRkIHRhc2sgYnV0dG9uXG4gICAgaWYgKGNoYW5nZSA9PT0gJ2FkZCcpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkYnV0dG9ucGFnZScpO1xuICAgICAgICB0b2RvU2VjdGlvbi5yZW1vdmVDaGlsZChwcmV2aW91c0FkZEJ1dHRvbik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRldGFpbHNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsc05vZGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsZGl2Jyk7XG5cbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzdGFzaycpO1xuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgbmFtZScpO1xuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc3MCcpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzQxNicpO1xuXG4gICAgZGV0YWlsc05vZGUuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgICBkZXRhaWxzTm9kZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGRldGFpbHNOb2RlKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURldGFpbFNlbGVjdGlvbnMgKCkge1xuXG4gICAgY29uc3QgZGV0YWlsc0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNCb3R0b20uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc2JvdHRvbWRpdicpO1xuXG4gICAgLy8gTmVlZCBmb3IgY2hvb3Npbmcgc3BlY2lmaWMgcHJpb3JpdHkgb3IgcHJvamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duIChsaXN0KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbS50ZXh0Q29udGVudCA9IGxpc3RbaV07XG4gICAgICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bkl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcm9wZG93bjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc2RhdGUnKTtcbiAgICBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTY2hlZHVsZVwiO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJyk7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc3Byb2plY3QnLCAnZHJvcGJ0bicpO1xuICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQ9IFwiSW5ib3hcIjtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuICAgIGNvbnN0IHByb2plY3REcm9wZG93biA9IGNyZWF0ZURyb3Bkb3duKHByb2plY3RzKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bik7IFxuICAgIFxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgICBjb25zdCBwcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNwcmlvcml0eScsICdkcm9wYnRuJyk7XG4gICAgcHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9uKTtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFsnVXJnZW50JywgJ1RpbWVseScsICdDYXN1YWwnLCAnTG93J107XG4gICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGNyZWF0ZURyb3Bkb3duKHByaW9yaXRpZXMpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pO1xuXG4gICAgY29uc3QgZGV0YWlsc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsZGl2Jyk7XG4gICAgZGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZChkYXRlQnV0dG9uKTtcbiAgICBkZXRhaWxzQm90dG9tLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIGRldGFpbHNCb3R0b20uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIGRldGFpbHNOb2RlLmFwcGVuZENoaWxkKGRldGFpbHNCb3R0b20pO1xuXG4gICAgLy9CdXR0b24gRnVuY3Rpb25hbGl0eVxuICAgIGNoYW5nZVRhc2tEYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxCdXR0b25zIChjaGFuZ2UsIGluZGV4KSB7XG4gICAgY29uc3QgZGV0YWlsQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZGV0YWlsYnV0dG9uc2RpdicpO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnY29uZmlybScpO1xuXG4gICAgaWYgKGNoYW5nZSA9PT0gXCJhZGRcIikge1xuICAgICAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZGNvbmZpcm0nKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdGNvbmZpcm0nKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgIGRldGFpbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG4gICAgZGV0YWlsQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3NkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxCdXR0b25zKTtcblxuICAgIC8vQnV0dG9uIEZ1bmN0aW9uYWxpdHlcbiAgICBpZiAoY2hhbmdlID09PSAnYWRkJykge1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgfVxuICAgIGVsc2Uge2VkaXRUYXNrKGluZGV4KX1cbiAgICBcbiAgICBjYW5jZWwoKTtcbn1cblxuZXhwb3J0IHtkaXNwbGF5RGV0YWlsSW5wdXRzLCBkaXNwbGF5RGV0YWlsU2VsZWN0aW9ucywgZGlzcGxheURldGFpbEJ1dHRvbnN9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvSXRlbSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbmRleCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2RpdicpO1xuXG4gICAgY29uc3QgdG9kb05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTm9kZS5jbGFzc0xpc3QuYWRkKCd0b2RvaXRlbScpO1xuXG4gICAgY29uc3QgY2hlY2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hlY2tOb2RlLmNsYXNzTGlzdC5hZGQoJ3RvZG9jaGVjaycpO1xuICAgIHRvZG9Ob2RlLmFwcGVuZENoaWxkKGNoZWNrTm9kZSk7XG5cbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mb2RpdicpO1xuICAgIFxuICAgIC8vIFRoZSBmb2xsb3dpbmcgc2VjdGlvbiBpcyByZWxhdGVkIHRvIGRpc3BsYXlpbmcgcHJvcGVydGllc1xuICAgIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHVlRGF0ZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmlvcml0eU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgdGFza05vZGUuY2xhc3NMaXN0LmFkZCgndGFza25hbWUnKTtcbiAgICBkZXNjcmlwdGlvbk5vZGUuY2xhc3NMaXN0LmFkZCgndGFza2Rlc2NyaXB0aW9uJyk7XG4gICAgZHVlRGF0ZU5vZGUuY2xhc3NMaXN0LmFkZCgndGFza2RhdGUnKTtcblxuICAgIHRhc2tOb2RlLnRleHRDb250ZW50ID0gdGFzaztcbiAgICBkZXNjcmlwdGlvbk5vZGUudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlTm9kZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgcHJpb3JpdHlOb2RlLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTm9kZSk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlTm9kZSk7XG4gICAgXG4gICAgdG9kb05vZGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlOb2RlKTtcbiAgICB0b2RvTm9kZS5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIC8vSW5kZXggZm9yIHRlc3RpbmdcbiAgICBjb25zdCBpbmRleE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5kZXhOb2RlLnRleHRDb250ZW50ID0gaW5kZXg7XG4gICAgdG9kb05vZGUuYXBwZW5kQ2hpbGQoaW5kZXhOb2RlKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYnV0dG9ucy1kaXYnKTtcblxuICAgIC8vRWRpdCBidXR0b25cbiAgICBjb25zdCBlZGl0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRJdGVtLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgIGVkaXRJdGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRJdGVtKTtcblxuICAgIC8vUmVtb3ZlIGJ1dHRvblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVJdGVtLnRleHRDb250ZW50ID0gXCJSRU1PVkVcIjtcbiAgICByZW1vdmVJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICByZW1vdmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbSk7XG5cbiAgICB0b2RvTm9kZS5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb05vZGUpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==