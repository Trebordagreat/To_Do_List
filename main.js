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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n\n#webpage {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.navbar {\n    background-color: lightseagreen;\n    display: flex;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.navbarsection {\n    display: flex;\n    gap: 30px;\n}\n\n.navbarsection button {\n    border: none;\n    font-size: 25px;\n    padding: 5px;\n    border-radius: 6%;\n    background-color:lightseagreen;\n    color: white;   \n}\n\n.navbarsection button:hover {\n    background-color: rgb(31, 212, 203);\n}\n\n.content {\n    height: 100%;\n    border: solid 1px black;\n    display: flex;\n}\n\n.projectsdiv {\n    background-color: rgb(240, 240, 240);\n    display: flex;\n    flex-direction: column;\n    flex-basis: 262px;\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 8px;\n}\n\n.defaultprojects {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px;\n}\n\n.customprojects {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsheading,\n.project {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(240, 240, 240);\n    border: none;\n    font-size: 20px;\n    align-items: center;\n    border-radius: 8%;\n}\n\n.project:hover,\n#addproject:hover {\n    background-color: rgb(220, 220, 220);\n}\n\n#addproject {\n    border-radius: 10%;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    font-size: 20px;\n}\n\n.active {\n    background-color: rgb(220, 220, 220);\n}\n\n.todosdiv {\n    display: flex;\n    flex-direction: column;\n    padding-left: 90px;\n    color: black;\n    flex: auto;\n    padding-top: 30px;\n    padding-right: 110px;\n}\n\n.heading-node {\n    display: flex;\n    justify-content: space-between;\n}\n\n.todoheading {\n    font-size: 30px;\n    text-decoration: underline;\n    font-weight: bold;\n}\n\n.todoitem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom:solid 1px rgb(240, 240, 240);\n}\n\n.todocheck {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    display: inline-block;\n    border: solid 3px;\n}\n\n.todoinfodiv {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 10px;\n    margin-top: 0px;\n}\n\n.Urgent {\n    border-color: red\n}\n\n.Urgent:hover {\n    background-color: rgb(255, 140, 140);\n}\n\n.Timely {\n    border-color: orange;\n}\n\n.Timely:hover {\n    background-color: rgb(255, 216, 140);\n}\n\n.Casual {\n    border-color: blue;\n}\n\n.Casual:hover {\n    background-color: rgb(140, 140, 250);\n}\n\n.Low:hover {\n    background-color: rgb(140, 140, 140);\n}\n\n.taskname {\n    font-size: 16px;\n}\n\n.taskdescription {\n    font-size: 12px;\n    color: rgb(136, 136, 136)\n}\n\n.taskdate {\n    font-size: 12px;\n}\n\n.todo-buttons-div {\n    display: flex;\n}\n\n#addbuttonpage {\n    margin-bottom: 20px;\n}\n\n.detaildiv {\n    display: flex;\n    flex-direction: column;\n    border: solid 1px rgb(200, 200, 200);\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n}\n\n.detailstask {\n    font-size: 16px;\n    border: none;\n    border-bottom: solid 1px rgb(240, 240, 240);\n}\n\n.detailsdescription {\n    height: 60px;\n    flex: auto;\n    border:none;\n    resize: none;\n}\n\n.detailstask:focus, .detailsdescription:focus {\n    outline:none;\n}\n\n.detailsbottomdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.detailsbottomdiv button,\n.cancelbutton,\n.todo-buttons-div button,\n.heading-node button {\n    border: 1px solid rgb(220, 220, 220);\n    border-radius: 10%;\n    background-color: white;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.detailsbottomdiv button:hover,\n.cancelbutton:hover,\n.todo-buttons-div button:hover,\n.heading-node button:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.detailbuttonsdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.confirm {\n    font-size: 14px;\n    color: white;\n    background-color: lightseagreen;\n    border-radius: 10%;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n\n.dropdown button {\n    width: 80px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;;IAII,oCAAoC;IACpC,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;;;IAII,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB","sourcesContent":["body {\n    margin: 0;\n}\n\n#webpage {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.navbar {\n    background-color: lightseagreen;\n    display: flex;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.navbarsection {\n    display: flex;\n    gap: 30px;\n}\n\n.navbarsection button {\n    border: none;\n    font-size: 25px;\n    padding: 5px;\n    border-radius: 6%;\n    background-color:lightseagreen;\n    color: white;   \n}\n\n.navbarsection button:hover {\n    background-color: rgb(31, 212, 203);\n}\n\n.content {\n    height: 100%;\n    border: solid 1px black;\n    display: flex;\n}\n\n.projectsdiv {\n    background-color: rgb(240, 240, 240);\n    display: flex;\n    flex-direction: column;\n    flex-basis: 262px;\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 8px;\n}\n\n.defaultprojects {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px;\n}\n\n.customprojects {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsheading,\n.project {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(240, 240, 240);\n    border: none;\n    font-size: 20px;\n    align-items: center;\n    border-radius: 8%;\n}\n\n.project:hover,\n#addproject:hover {\n    background-color: rgb(220, 220, 220);\n}\n\n#addproject {\n    border-radius: 10%;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    font-size: 20px;\n}\n\n.active {\n    background-color: rgb(220, 220, 220);\n}\n\n.todosdiv {\n    display: flex;\n    flex-direction: column;\n    padding-left: 90px;\n    color: black;\n    flex: auto;\n    padding-top: 30px;\n    padding-right: 110px;\n}\n\n.heading-node {\n    display: flex;\n    justify-content: space-between;\n}\n\n.todoheading {\n    font-size: 30px;\n    text-decoration: underline;\n    font-weight: bold;\n}\n\n.todoitem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom:solid 1px rgb(240, 240, 240);\n}\n\n.todocheck {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    display: inline-block;\n    border: solid 3px;\n}\n\n.todoinfodiv {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 10px;\n    margin-top: 0px;\n}\n\n.Urgent {\n    border-color: red\n}\n\n.Urgent:hover {\n    background-color: rgb(255, 140, 140);\n}\n\n.Timely {\n    border-color: orange;\n}\n\n.Timely:hover {\n    background-color: rgb(255, 216, 140);\n}\n\n.Casual {\n    border-color: blue;\n}\n\n.Casual:hover {\n    background-color: rgb(140, 140, 250);\n}\n\n.Low:hover {\n    background-color: rgb(140, 140, 140);\n}\n\n.taskname {\n    font-size: 16px;\n}\n\n.taskdescription {\n    font-size: 12px;\n    color: rgb(136, 136, 136)\n}\n\n.taskdate {\n    font-size: 12px;\n}\n\n.todo-buttons-div {\n    display: flex;\n}\n\n#addbuttonpage {\n    margin-bottom: 20px;\n}\n\n.detaildiv {\n    display: flex;\n    flex-direction: column;\n    border: solid 1px rgb(200, 200, 200);\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n}\n\n.detailstask {\n    font-size: 16px;\n    border: none;\n    border-bottom: solid 1px rgb(240, 240, 240);\n}\n\n.detailsdescription {\n    height: 60px;\n    flex: auto;\n    border:none;\n    resize: none;\n}\n\n.detailstask:focus, .detailsdescription:focus {\n    outline:none;\n}\n\n.detailsbottomdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.detailsbottomdiv button,\n.cancelbutton,\n.todo-buttons-div button,\n.heading-node button {\n    border: 1px solid rgb(220, 220, 220);\n    border-radius: 10%;\n    background-color: white;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.detailsbottomdiv button:hover,\n.cancelbutton:hover,\n.todo-buttons-div button:hover,\n.heading-node button:hover {\n    background-color: rgb(240, 240, 240);\n}\n\n.detailbuttonsdiv {\n    display: flex;\n    gap: 30px;\n}\n\n.confirm {\n    font-size: 14px;\n    color: white;\n    background-color: lightseagreen;\n    border-radius: 10%;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n\n.dropdown button {\n    width: 80px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}"],"sourceRoot":""}]);
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
        if (_index__WEBPACK_IMPORTED_MODULE_2__.projects[i] !== "Inbox") {
            (0,_projectsDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(_index__WEBPACK_IMPORTED_MODULE_2__.projects[i], ".customprojects");
        } 
    }

    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectEvents)();
    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.addProjectEvent)();
}




function displayTodoSection (taskList, index) {

    const todoSection = document.querySelector('.todosdiv');
    
    // Clear section
    todoSection.textContent = "";

    const currentProject = document.querySelector('.active');
    const projshort = currentProject.dataset.project;

    const headingNode = document.createElement('div');
    headingNode.classList.add('heading-node');
    const heading = document.createElement('div');
    heading.classList.add("todoheading");
    heading.textContent = projshort;
    headingNode.appendChild(heading);

    // Next part is for custom projects only
    if (projshort !== "Inbox" && projshort !== "All" && projshort !== 'Today') {
        const headingButtons = document.createElement('div');
        headingButtons.classList.add('heading-buttons');
        const editProject = document.createElement('button');
        editProject.textContent = "Edit Project";
        editProject.classList.add('project-edit-button');
        editProject.setAttribute('data-project', projshort);
        const removeProject = document.createElement('button');
        removeProject.textContent = "Remove Project";
        removeProject.classList.add('project-remove-button');
        removeProject.setAttribute('data-project', projshort);
        headingButtons.appendChild(editProject);
        headingButtons.appendChild(removeProject);
    
        headingNode.appendChild(headingButtons);
    }

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
    (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.completeTask)();
    if (projshort !== "Inbox" && projshort !== "All" && projshort !== 'Today') {
        (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.editProjectEvent)();
        (0,_buttonFunctions_js__WEBPACK_IMPORTED_MODULE_0__.removeProjectEvent)();
    }
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
/* harmony export */   "addProjectEvent": () => (/* binding */ addProjectEvent),
/* harmony export */   "completeTask": () => (/* binding */ completeTask),
/* harmony export */   "editProjectEvent": () => (/* binding */ editProjectEvent),
/* harmony export */   "removeProjectEvent": () => (/* binding */ removeProjectEvent)
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

            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__.displayDetailInputs)('add');
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__.displayDetailSelections)();
            (0,_taskDetailsDOM__WEBPACK_IMPORTED_MODULE_5__.displayDetailButtons)("add");
        })
    })
}

function completeTask () {
    const checkboxes = document.querySelectorAll('.todocheck');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const index = checkbox.dataset.index;
            const message = "Congratulations, you have completed the task " + ___WEBPACK_IMPORTED_MODULE_0__.todoList[index].task;
            ___WEBPACK_IMPORTED_MODULE_0__.todoList.splice(index, 1);
            const currentProject = document.querySelector('.active');
            const currentList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, currentProject.dataset.project)
            ;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(currentList);
            const todoSection = document.querySelector('.todosdiv');
            const messageDiv = document.createElement('div')
            messageDiv.textContent = message;
            todoSection.appendChild(messageDiv);
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

function editProjectEvent () {
    const editProject = document.querySelector('.project-edit-button');
    editProject.addEventListener('click', () => {
        const newName = prompt("What would you like to rename this project to?");
        for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
            if (editProject.dataset.project === ___WEBPACK_IMPORTED_MODULE_0__.projects[i]) {
                ___WEBPACK_IMPORTED_MODULE_0__.projects[i] = newName
            }
        }
        // Changes projects for all the applicable todos
        for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.todoList.length; i++) {
            if (___WEBPACK_IMPORTED_MODULE_0__.todoList[i].project === editProject.dataset.project) {
                ___WEBPACK_IMPORTED_MODULE_0__.todoList[i].project = newName;
            }
        }
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearContents)();
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
        const renamedProject = document.querySelector('[data-project=' + newName + ']');
        renamedProject.classList.add('active');
        const renamedList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_3__.generateList)(___WEBPACK_IMPORTED_MODULE_0__.todoList, newName);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(renamedList);
    })
}

function removeProjectEvent () {
    const removeProject = document.querySelector('.project-remove-button');
    const project = removeProject.dataset.project;
    removeProject.addEventListener('click', () => {
        const message = "Are you sure you would like to remove the " + project + 
        " project? All of the related tasks will be deleted as well.";
        if (confirm(message) === true) {
            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
                if (___WEBPACK_IMPORTED_MODULE_0__.projects[i] === project) {
                    ___WEBPACK_IMPORTED_MODULE_0__.projects.splice(i, 1);
                }
            }
            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.todoList.length; i++) {
                if (___WEBPACK_IMPORTED_MODULE_0__.todoList[i].project === project) {
                    ___WEBPACK_IMPORTED_MODULE_0__.todoList.splice(i, 1);
                }
            }
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearContents)();
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
            const allProject = document.querySelector('[data-project=All]');
            allProject.classList.add('active');
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayTodoSection)(___WEBPACK_IMPORTED_MODULE_0__.todoList);
        }
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
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.clearContents)();
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
        const sameProject = document.querySelector('[data-project=' + currentProject.dataset.project);
        sameProject.classList.add('active');
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





const test = todo('a', "b", "Jan", 'Timely', 0, "Inbox");
const testp = todo('b', 'c', "Feb", 'Urgent', 1);

todoList[0] = test;
todoList[1] = testp;

activeList = (0,_listLogic__WEBPACK_IMPORTED_MODULE_5__.generateList)(todoList, "All");

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayNavBar)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayProjects)();

//App starts with "All" project active
const allNode = document.querySelector('[data-project="All"]');
allNode.classList.add('active');

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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _listLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listLogic */ "./src/listLogic.js");



function displayProject (project, selector) {
    const page = document.querySelector(selector);

    const projectNode = document.createElement('button');
    
    const projectTitle = document.createElement('div');
    projectTitle.textContent = project;
    projectNode.appendChild(projectTitle);

    const projectTotal = document.createElement('div');
    projectTotal.textContent = (0,_listLogic__WEBPACK_IMPORTED_MODULE_1__.generateList)(_index__WEBPACK_IMPORTED_MODULE_0__.todoList, project).length;
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

    // Needed for choosing specific priority or project
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
    let projectOptions = _index__WEBPACK_IMPORTED_MODULE_0__.projects;
    if (projectOptions[0] !== 'Inbox') {
        projectOptions.splice(0, 0, 'Inbox')
    }
    const projectDropdown = createDropdown(projectOptions, 'project-option');
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
    checkNode.classList.add(priority);
    checkNode.setAttribute('data-index', index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLGdFQUFrQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEscURBQU87QUFDZjtBQUNBLFVBQVUsc0RBQVE7QUFDbEI7QUFDQSxJQUFJLG9EQUFNO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SWU7O0FBRWY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7O1VDL0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZFRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2J1dHRvbkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0QnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdExvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tEZXRhaWxzRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9JdGVtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3dlYnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNlYWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7ICAgXFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMjEyLCAyMDMpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c2RpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1iYXNpczogMjYycHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XFxuXFxuLmRlZmF1bHRwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5jdXN0b21wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0c2hlYWRpbmcsXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlcixcXG4jYWRkcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG59XFxuXFxuI2FkZHByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxufVxcblxcbi50b2Rvc2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XFxufVxcblxcbi5oZWFkaW5nLW5vZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kb2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4udG9kb2NoZWNrIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweDtcXG59XFxuXFxuLnRvZG9pbmZvZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogYXV0bztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5VcmdlbnQge1xcbiAgICBib3JkZXItY29sb3I6IHJlZFxcbn1cXG5cXG4uVXJnZW50OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQwLCAxNDApO1xcbn1cXG5cXG4uVGltZWx5IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5UaW1lbHk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTYsIDE0MCk7XFxufVxcblxcbi5DYXN1YWwge1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbi5DYXN1YWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxNDAsIDI1MCk7XFxufVxcblxcbi5Mb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxNDAsIDE0MCk7XFxufVxcblxcbi50YXNrbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2tkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KVxcbn1cXG5cXG4udGFza2RhdGUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2FkZGJ1dHRvbnBhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kZXRhaWxzdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uZGV0YWlsc2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGV0YWlsc3Rhc2s6Zm9jdXMsIC5kZXRhaWxzZGVzY3JpcHRpb246Zm9jdXMge1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbi5kZXRhaWxzYm90dG9tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiBidXR0b24sXFxuLmNhbmNlbGJ1dHRvbixcXG4udG9kby1idXR0b25zLWRpdiBidXR0b24sXFxuLmhlYWRpbmctbm9kZSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiBidXR0b246aG92ZXIsXFxuLmNhbmNlbGJ1dHRvbjpob3ZlcixcXG4udG9kby1idXR0b25zLWRpdiBidXR0b246aG92ZXIsXFxuLmhlYWRpbmctbm9kZSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5kZXRhaWxidXR0b25zZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93biBidXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7OztJQUlJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7SUFJSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3dlYnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2YmFyc2VjdGlvbiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNlYWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7ICAgXFxufVxcblxcbi5uYXZiYXJzZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMjEyLCAyMDMpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c2RpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1iYXNpczogMjYycHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XFxuXFxuLmRlZmF1bHRwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5jdXN0b21wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0c2hlYWRpbmcsXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlcixcXG4jYWRkcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG59XFxuXFxuI2FkZHByb2plY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxufVxcblxcbi50b2Rvc2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XFxufVxcblxcbi5oZWFkaW5nLW5vZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kb2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4udG9kb2NoZWNrIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweDtcXG59XFxuXFxuLnRvZG9pbmZvZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogYXV0bztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5VcmdlbnQge1xcbiAgICBib3JkZXItY29sb3I6IHJlZFxcbn1cXG5cXG4uVXJnZW50OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQwLCAxNDApO1xcbn1cXG5cXG4uVGltZWx5IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5UaW1lbHk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTYsIDE0MCk7XFxufVxcblxcbi5DYXN1YWwge1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbi5DYXN1YWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxNDAsIDI1MCk7XFxufVxcblxcbi5Mb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxNDAsIDE0MCk7XFxufVxcblxcbi50YXNrbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRhc2tkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KVxcbn1cXG5cXG4udGFza2RhdGUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2FkZGJ1dHRvbnBhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kZXRhaWxzdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uZGV0YWlsc2Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGV0YWlsc3Rhc2s6Zm9jdXMsIC5kZXRhaWxzZGVzY3JpcHRpb246Zm9jdXMge1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbi5kZXRhaWxzYm90dG9tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiBidXR0b24sXFxuLmNhbmNlbGJ1dHRvbixcXG4udG9kby1idXR0b25zLWRpdiBidXR0b24sXFxuLmhlYWRpbmctbm9kZSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGV0YWlsc2JvdHRvbWRpdiBidXR0b246aG92ZXIsXFxuLmNhbmNlbGJ1dHRvbjpob3ZlcixcXG4udG9kby1idXR0b25zLWRpdiBidXR0b246aG92ZXIsXFxuLmhlYWRpbmctbm9kZSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5kZXRhaWxidXR0b25zZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93biBidXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHthZGRCdXR0b25FdmVudCwgY29tcGxldGVUYXNrLCBlZGl0QnV0dG9uRXZlbnQsIGVkaXRQcm9qZWN0RXZlbnQsIHJlbW92ZUJ1dHRvbkV2ZW50LCByZW1vdmVQcm9qZWN0RXZlbnR9IGZyb20gXCIuL2J1dHRvbkZ1bmN0aW9ucy5qc1wiO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlOYXZCYXIgKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VicGFnZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgY29uc3QgbGVmdE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnROYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyc2VjdGlvbicpO1xuXG4gICAgY29uc3QgbWVudU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51Tm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBtZW51Tm9kZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgY29uc3QgaG9tZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lTm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBob21lTm9kZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgbGVmdE5hdkJhci5hcHBlbmRDaGlsZChtZW51Tm9kZSk7XG4gICAgbGVmdE5hdkJhci5hcHBlbmRDaGlsZChob21lTm9kZSk7XG4gICAgXG5cbiAgICBjb25zdCByaWdodE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0TmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcnNlY3Rpb24nKTtcblxuICAgIGNvbnN0IGFkZFRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza05vZGUuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrJyk7XG4gICAgYWRkVGFza05vZGUuY2xhc3NMaXN0LmFkZCgnYWRkdGFzaycpO1xuICAgIGFkZFRhc2tOb2RlLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIG1lbnVOb2RlLmNsYXNzTGlzdC5hZGQoJ25hdm9wdGlvbicpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2V0dGluZ3NOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0dGluZ3MnKTtcbiAgICBzZXR0aW5nc05vZGUudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG4gICAgbWVudU5vZGUuY2xhc3NMaXN0LmFkZCgnbmF2b3B0aW9uJyk7XG5cbiAgICByaWdodE5hdkJhci5hcHBlbmRDaGlsZChhZGRUYXNrTm9kZSk7XG4gICAgcmlnaHROYXZCYXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NOb2RlKTtcblxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxlZnROYXZCYXIpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChyaWdodE5hdkJhcik7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKG5hdkJhcik7XG59O1xuXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSAnLi9wcm9qZWN0c0RPTSc7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0RXZlbnRzLCBhZGRQcm9qZWN0RXZlbnQgfSBmcm9tIFwiLi9idXR0b25GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7cHJvamVjdHN9IGZyb20gXCIuL2luZGV4XCJcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzICgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnBhZ2UnKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNkaXYnKTtcblxuICAgIC8vIEFkZCBpbiBtYW5kYXRvcnkgcHJvamVjdHMgKEluYm94LCBBbGwsIFRvZGF5LCBGaWx0ZXJzICYgTGFiZWxzKVxuICAgIGNvbnN0IGRlZmF1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdHMuY2xhc3NMaXN0LmFkZCgnZGVmYXVsdHByb2plY3RzJylcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkZWZhdWx0cyk7XG5cbiAgICAvLyBBZGQgaW4gY3VzdG9tIHByb2plY3RzXG4gICAgY29uc3QgY3VzdG9tcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1c3RvbXMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tcHJvamVjdHMnKTtcblxuICAgIC8vIFByb2plY3RzIEhlYWRpbmcgd2l0aCBhZGQgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBjdXN0b21zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN1c3RvbXNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzaGVhZGluZycpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZ05vZGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgY3VzdG9tc0hlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ05vZGUpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgY3VzdG9tc0hlYWRpbmcuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBjdXN0b21zLmFwcGVuZENoaWxkKGN1c3RvbXNIZWFkaW5nKTtcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGN1c3RvbXMpXG5cbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9zZGl2Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9zRGl2KTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBkaXNwbGF5UHJvamVjdChcIkluYm94XCIsIFwiLmRlZmF1bHRwcm9qZWN0c1wiKTtcbiAgICBkaXNwbGF5UHJvamVjdChcIkFsbFwiLCBcIi5kZWZhdWx0cHJvamVjdHNcIik7XG4gICAgZGlzcGxheVByb2plY3QoXCJUb2RheVwiLCBcIi5kZWZhdWx0cHJvamVjdHNcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpXSAhPT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0c1tpXSwgXCIuY3VzdG9tcHJvamVjdHNcIik7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY2hhbmdlUHJvamVjdEV2ZW50cygpO1xuICAgIGFkZFByb2plY3RFdmVudCgpO1xufVxuXG5pbXBvcnQgeyB0b2RvTGlzdCwgdG9kbyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgZGlzcGxheURldGFpbElucHV0cywgZGlzcGxheURldGFpbFNlbGVjdGlvbnMsIGRpc3BsYXlEZXRhaWxCdXR0b25zfSBmcm9tICcuL3Rhc2tEZXRhaWxzRE9NJztcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9TZWN0aW9uICh0YXNrTGlzdCwgaW5kZXgpIHtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZGl2Jyk7XG4gICAgXG4gICAgLy8gQ2xlYXIgc2VjdGlvblxuICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgIGNvbnN0IHByb2pzaG9ydCA9IGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdDtcblxuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZ05vZGUuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1ub2RlJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInRvZG9oZWFkaW5nXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qc2hvcnQ7XG4gICAgaGVhZGluZ05vZGUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAvLyBOZXh0IHBhcnQgaXMgZm9yIGN1c3RvbSBwcm9qZWN0cyBvbmx5XG4gICAgaWYgKHByb2pzaG9ydCAhPT0gXCJJbmJveFwiICYmIHByb2pzaG9ydCAhPT0gXCJBbGxcIiAmJiBwcm9qc2hvcnQgIT09ICdUb2RheScpIHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGluZ0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1idXR0b25zJyk7XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcbiAgICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWJ1dHRvbicpO1xuICAgICAgICBlZGl0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2pzaG9ydCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUmVtb3ZlIFByb2plY3RcIjtcbiAgICAgICAgcmVtb3ZlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXJlbW92ZS1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2pzaG9ydCk7XG4gICAgICAgIGhlYWRpbmdCdXR0b25zLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KTtcbiAgICAgICAgaGVhZGluZ0J1dHRvbnMuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdCk7XG4gICAgXG4gICAgICAgIGhlYWRpbmdOb2RlLmFwcGVuZENoaWxkKGhlYWRpbmdCdXR0b25zKTtcbiAgICB9XG5cbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nTm9kZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRvZG9MaXN0W2ldLnVwZGF0ZUluZGV4KGkpO1xuICAgIH1cblxuICAgIC8vIEltcG9ydGFudCBmb3IgZWRpdCBidXR0b25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0YXNrTGlzdFtpXS5pbmRleCA9PSBpbmRleCkge1xuICAgICAgICAgICAgZGlzcGxheURldGFpbElucHV0cygnZWRpdCcsIHRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxTZWxlY3Rpb25zKCdlZGl0JywgdGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbEJ1dHRvbnMoJ2VkaXQnLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7dGFza0xpc3RbaV0uZGlzcGxheVRvZG9JdGVtKCl9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZHRhc2snKTtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRidXR0b25wYWdlJyk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICBhZGRCdXR0b25FdmVudCgpO1xuICAgIGVkaXRCdXR0b25FdmVudCgpO1xuICAgIHJlbW92ZUJ1dHRvbkV2ZW50KCk7XG4gICAgY29tcGxldGVUYXNrKCk7XG4gICAgaWYgKHByb2pzaG9ydCAhPT0gXCJJbmJveFwiICYmIHByb2pzaG9ydCAhPT0gXCJBbGxcIiAmJiBwcm9qc2hvcnQgIT09ICdUb2RheScpIHtcbiAgICAgICAgZWRpdFByb2plY3RFdmVudCgpO1xuICAgICAgICByZW1vdmVQcm9qZWN0RXZlbnQoKTtcbiAgICB9XG59OyBcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cyAoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJwYWdlJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBwYWdlLnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xufVxuXG5leHBvcnQge2Rpc3BsYXlOYXZCYXIsIGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRvZG9TZWN0aW9uLCBjbGVhckNvbnRlbnRzfTsiLCJpbXBvcnQgeyB0b2RvTGlzdCwgdG9kbyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG9JdGVtICgpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHN0YXNrJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzZGF0ZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcmlvcml0eScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3Byb2plY3QnKS50ZXh0Q29udGVudDtcblxuICAgIGxldCBpdGVtRGV0YWlscyA9IFtdO1xuICAgIFxuICAgIGl0ZW1EZXRhaWxzWzBdID0gdGFzaztcbiAgICBpdGVtRGV0YWlsc1sxXSA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXRhaWxzWzJdID0gZHVlRGF0ZTtcbiAgICBpdGVtRGV0YWlsc1szXSA9IHByaW9yaXR5O1xuICAgIGl0ZW1EZXRhaWxzWzRdID0gcHJvamVjdDtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKGl0ZW1EZXRhaWxzWzBdLCBpdGVtRGV0YWlsc1sxXSwgaXRlbURldGFpbHNbMl0sIGl0ZW1EZXRhaWxzWzNdLCB0b2RvTGlzdC5sZW5ndGgsIGl0ZW1EZXRhaWxzWzRdKTtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuXG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xufVxuXG4iLCJpbXBvcnQgeyB0b2RvTGlzdCwgdG9kbywgYWN0aXZlTGlzdCwgcHJvamVjdHMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5VG9kb1NlY3Rpb24sIGNsZWFyQ29udGVudHMgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBhZGRUb2RvSXRlbSBmcm9tIFwiLi9hZGRUb2RvSXRlbVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdExvZ2ljXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNET01cIjtcbmltcG9ydCB7ZGlzcGxheURldGFpbElucHV0cywgZGlzcGxheURldGFpbFNlbGVjdGlvbnMsIGRpc3BsYXlEZXRhaWxCdXR0b25zfSBmcm9tIFwiLi90YXNrRGV0YWlsc0RPTVwiO1xuXG5mdW5jdGlvbiBhZGRCdXR0b25FdmVudCAoKSB7XG4gICAgY29uc3QgYWRkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGR0YXNrJyk7XG4gICAgYWRkQnV0dG9ucy5mb3JFYWNoKGFkZEJ1dHRvbiA9PiB7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRlc3RpbmcgIGFkZFRvZG9JdGVtKCk7XG5cbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxJbnB1dHMoJ2FkZCcpO1xuICAgICAgICAgICAgZGlzcGxheURldGFpbFNlbGVjdGlvbnMoKTtcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxCdXR0b25zKFwiYWRkXCIpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvY2hlY2snKTtcbiAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2hlY2tib3guZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkNvbmdyYXR1bGF0aW9ucywgeW91IGhhdmUgY29tcGxldGVkIHRoZSB0YXNrIFwiICsgdG9kb0xpc3RbaW5kZXhdLnRhc2s7XG4gICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0KVxuICAgICAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKGN1cnJlbnRMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgICAgICAgICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdEJ1dHRvbkV2ZW50KCkge1xuICAgIGNvbnN0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBlZGl0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24oY3VycmVudExpc3QsIGJ1dHRvbi5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVCdXR0b25FdmVudCAoKSB7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICByZW1vdmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGJ1dHRvbi5kYXRhc2V0LmluZGV4LCAxKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdFtpXS5pbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpXG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24oY3VycmVudExpc3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3RFdmVudHMgKCkge1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJDb250ZW50cygpXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD0nICsgcHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIHByb2plY3QuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihwcm9qZWN0TGlzdCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEV2ZW50ICgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvbXB0KFwiTmV3IFByb2plY3QgTmFtZT9cIik7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD0nICsgbmV3UHJvamVjdCArICddJyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihwcm9qZWN0TGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3RFdmVudCAoKSB7XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0LWJ1dHRvbicpO1xuICAgIGVkaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZW5hbWUgdGhpcyBwcm9qZWN0IHRvP1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVkaXRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCA9PT0gcHJvamVjdHNbaV0pIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXSA9IG5ld05hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDaGFuZ2VzIHByb2plY3RzIGZvciBhbGwgdGhlIGFwcGxpY2FibGUgdG9kb3NcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvZG9MaXN0W2ldLnByb2plY3QgPT09IGVkaXRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0W2ldLnByb2plY3QgPSBuZXdOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGNvbnN0IHJlbmFtZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdD0nICsgbmV3TmFtZSArICddJyk7XG4gICAgICAgIHJlbmFtZWRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBjb25zdCByZW5hbWVkTGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgbmV3TmFtZSk7XG4gICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihyZW5hbWVkTGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEV2ZW50ICgpIHtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcmVtb3ZlLWJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3QgPSByZW1vdmVQcm9qZWN0LmRhdGFzZXQucHJvamVjdDtcbiAgICByZW1vdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gcmVtb3ZlIHRoZSBcIiArIHByb2plY3QgKyBcbiAgICAgICAgXCIgcHJvamVjdD8gQWxsIG9mIHRoZSByZWxhdGVkIHRhc2tzIHdpbGwgYmUgZGVsZXRlZCBhcyB3ZWxsLlwiO1xuICAgICAgICBpZiAoY29uZmlybShtZXNzYWdlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PUFsbF0nKTtcbiAgICAgICAgICAgIGFsbFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24odG9kb0xpc3QpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHthZGRCdXR0b25FdmVudCwgZWRpdEJ1dHRvbkV2ZW50LCByZW1vdmVCdXR0b25FdmVudCwgY2hhbmdlUHJvamVjdEV2ZW50cywgYWRkUHJvamVjdEV2ZW50LCBjb21wbGV0ZVRhc2t9O1xuZXhwb3J0IHtlZGl0UHJvamVjdEV2ZW50LCByZW1vdmVQcm9qZWN0RXZlbnR9O1xuIiwiaW1wb3J0IHtkaXNwbGF5VG9kb1NlY3Rpb24sIGNsZWFyQ29udGVudHMsIGRpc3BsYXlQcm9qZWN0c30gZnJvbSAnLi9ET00nO1xuaW1wb3J0IHsgZ2VuZXJhdGVMaXN0IH0gZnJvbSAnLi9saXN0TG9naWMnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBhZGRUb2RvSXRlbSBmcm9tIFwiLi9hZGRUb2RvSXRlbVwiO1xuaW1wb3J0IGVkaXRUb2RvSXRlbSBmcm9tICcuL2VkaXRUb2RvSXRlbSc7XG5cblxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrRGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzZGF0ZScpO1xuICAgIGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBwcm9tcHQoXCJEYXRlP1wiKTtcbiAgICAgICAgZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld0RhdGU7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza1Byb2plY3QgKCkge1xuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc3Byb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICAgIHByb2plY3RPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrUHJpb3JpdHkgKCkge1xuICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1vcHRpb24nKTtcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrICgpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGNvbmZpcm0nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUb2RvSXRlbSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcmVzZXRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBzYW1lUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3Q9JyArIGN1cnJlbnRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIHNhbWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkaXNwbGF5VG9kb1NlY3Rpb24ocmVzZXRMaXN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayAoaW5kZXgpIHtcbiAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Y29uZmlybScpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0VG9kb0l0ZW0oaW5kZXgpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcmVzZXRMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3QpO1xuXG4gICAgICAgIGRpc3BsYXlUb2RvU2VjdGlvbihyZXNldExpc3QpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbGJ1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHJlc2V0TGlzdCA9IGdlbmVyYXRlTGlzdCh0b2RvTGlzdCwgY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVRvZG9TZWN0aW9uKHJlc2V0TGlzdCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHtjaGFuZ2VUYXNrRGF0ZSwgY2hhbmdlVGFza1Byb2plY3QsIGNoYW5nZVRhc2tQcmlvcml0eSwgYWRkVGFzaywgZWRpdFRhc2ssIGNhbmNlbH07IiwiaW1wb3J0IHsgdG9kb0xpc3QsIHRvZG8gfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0VG9kb0l0ZW0gKGluZGV4KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzdGFzaycpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc2RhdGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzcHJpb3JpdHknKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNwcm9qZWN0JykudGV4dENvbnRlbnQ7XG5cbiAgICBsZXQgaXRlbURldGFpbHMgPSBbXTtcbiAgICBcbiAgICBpdGVtRGV0YWlsc1swXSA9IHRhc2s7XG4gICAgaXRlbURldGFpbHNbMV0gPSBkZXNjcmlwdGlvbjtcbiAgICBpdGVtRGV0YWlsc1syXSA9IGR1ZURhdGU7XG4gICAgaXRlbURldGFpbHNbM10gPSBwcmlvcml0eTtcbiAgICBpdGVtRGV0YWlsc1s0XSA9IHByb2plY3Q7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyhpdGVtRGV0YWlsc1swXSwgaXRlbURldGFpbHNbMV0sIGl0ZW1EZXRhaWxzWzJdLCBpdGVtRGV0YWlsc1szXSwgaW5kZXgsIGl0ZW1EZXRhaWxzWzRdKTtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEsIG5ld1RvZG8pO1xufSIsImltcG9ydCB0b2RvSXRlbURvbSBmcm9tIFwiLi90b2RvSXRlbURPTS5qc1wiO1xuaW1wb3J0IGFkZFRvZG9JdGVtIGZyb20gXCIuL2FkZFRvZG9JdGVtLmpzXCI7XG5pbXBvcnQgcHJvamVjdERPTSBmcm9tIFwiLi9wcm9qZWN0c0RPTS5qc1wiO1xuaW1wb3J0IHtkaXNwbGF5TmF2QmFyLCBkaXNwbGF5UHJvamVjdHMsIGRpc3BsYXlUb2RvU2VjdGlvbiwgY2xlYXJDb250ZW50c30gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQge2FkZEJ1dHRvbkV2ZW50LCByZW1vdmVCdXR0b25FdmVudH0gZnJvbSBcIi4vYnV0dG9uRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQge2dlbmVyYXRlTGlzdH0gZnJvbSBcIi4vbGlzdExvZ2ljXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnBhZ2UnKVxuXG5jb25zdCB0b2RvID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5kZXgsIHByb2plY3QpID0+IHtcbiAgICBcbiAgICAvLyBJbmRleCBpcyBqdXN0IGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgY29uc3QgZGlzcGxheVRvZG9JdGVtID0gKCkgPT4ge1xuICAgICAgICB0b2RvSXRlbURvbSh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBOZWVkZWQgdG8gdXBkYXRlIHRvZG8gZm9yIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgdXBkYXRlSW5kZXggPSAobmV3SW5kZXgpID0+IHtcbiAgICAgICAgaW5kZXggPSBuZXdJbmRleDtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlUb2RvSXRlbSxcbiAgICAgICAgdXBkYXRlSW5kZXgsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgaW5kZXhcbiAgICB9XG59O1xuXG5sZXQgdG9kb0xpc3QgPSBbXTtcbmxldCBhY3RpdmVMaXN0ID0gW107XG5sZXQgcHJvamVjdHMgPSBbXTtcblxuXG5cblxuXG5jb25zdCB0ZXN0ID0gdG9kbygnYScsIFwiYlwiLCBcIkphblwiLCAnVGltZWx5JywgMCwgXCJJbmJveFwiKTtcbmNvbnN0IHRlc3RwID0gdG9kbygnYicsICdjJywgXCJGZWJcIiwgJ1VyZ2VudCcsIDEpO1xuXG50b2RvTGlzdFswXSA9IHRlc3Q7XG50b2RvTGlzdFsxXSA9IHRlc3RwO1xuXG5hY3RpdmVMaXN0ID0gZ2VuZXJhdGVMaXN0KHRvZG9MaXN0LCBcIkFsbFwiKTtcblxuZGlzcGxheU5hdkJhcigpO1xuZGlzcGxheVByb2plY3RzKCk7XG5cbi8vQXBwIHN0YXJ0cyB3aXRoIFwiQWxsXCIgcHJvamVjdCBhY3RpdmVcbmNvbnN0IGFsbE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwiQWxsXCJdJyk7XG5hbGxOb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5jb25zb2xlLmxvZyh0b2RvTGlzdCk7XG5jb25zb2xlLmxvZyhhY3RpdmVMaXN0KTtcbmRpc3BsYXlUb2RvU2VjdGlvbihhY3RpdmVMaXN0KTtcblxuXG5leHBvcnQge3RvZG9MaXN0LCB0b2RvLCBhY3RpdmVMaXN0LCBwcm9qZWN0c307IiwiZnVuY3Rpb24gZ2VuZXJhdGVMaXN0ICh0b2RvTGlzdCwgcHJvamVjdCkge1xuICAgIGxldCB1cGRhdGVkTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9MaXN0W2ldLnByb2plY3QgPT09IHByb2plY3QgfHwgcHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgICAgICAgICAgdXBkYXRlZExpc3QucHVzaCh0b2RvTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZWRMaXN0O1xufVxuXG5leHBvcnQge2dlbmVyYXRlTGlzdH07IiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGdlbmVyYXRlTGlzdCB9IGZyb20gJy4vbGlzdExvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QgKHByb2plY3QsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgY29uc3QgcHJvamVjdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgIHByb2plY3ROb2RlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VG90YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VG90YWwudGV4dENvbnRlbnQgPSBnZW5lcmF0ZUxpc3QodG9kb0xpc3QsIHByb2plY3QpLmxlbmd0aDtcbiAgICBwcm9qZWN0Tm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0VG90YWwpO1xuXG4gICAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgcHJvamVjdE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0KTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdE5vZGUpO1xufSIsIi8vIFRoaXMgaXMgZ29pbmcgdG8gYmUgdXNlZCBmb3IgYm90aCBhZGQgYW5kIGVkaXQgdGFzay4gIFRvZG9pc3QgaXMgaW5zcGlyYXRpb24gaGVyZS5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjYW5jZWwsIGNoYW5nZVRhc2tEYXRlLCBjaGFuZ2VUYXNrUHJvamVjdCwgYWRkVGFzaywgZWRpdFRhc2ssIGNoYW5nZVRhc2tQcmlvcml0eSB9IGZyb20gJy4vZWRpdEJ1dHRvbnMnO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGV0YWlsSW5wdXRzIChjaGFuZ2UsIHRvZG8pIHtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZGl2Jyk7XG5cbiAgICAvL1JlbW92ZSBBZGQgdGFzayBidXR0b25cbiAgICBpZiAoY2hhbmdlID09PSAnYWRkJykge1xuICAgICAgICBjb25zdCBwcmV2aW91c0FkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRidXR0b25wYWdlJyk7XG4gICAgICAgIHRvZG9TZWN0aW9uLnJlbW92ZUNoaWxkKHByZXZpb3VzQWRkQnV0dG9uKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGV0YWlsc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzTm9kZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxkaXYnKTtcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHN0YXNrJyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzcwJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNDE2Jyk7XG5cbiAgICBpZihjaGFuZ2UgPT09ICdlZGl0Jykge1xuICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSB0b2RvLnRhc2s7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGRldGFpbHNOb2RlLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gICAgZGV0YWlsc05vZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICB0b2RvU2VjdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxzTm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxTZWxlY3Rpb25zIChjaGFuZ2UsIHRvZG8pIHtcblxuICAgIGNvbnN0IGRldGFpbHNCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNib3R0b21kaXYnKTtcblxuICAgIC8vIE5lZWRlZCBmb3IgY2hvb3Npbmcgc3BlY2lmaWMgcHJpb3JpdHkgb3IgcHJvamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duIChsaXN0LCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbS5jbGFzc0xpc3QuYWRkKHR5cGUpO1xuICAgICAgICAgICAgZHJvcGRvd25JdGVtLnRleHRDb250ZW50ID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzZGF0ZScpO1xuICAgIGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNjaGVkdWxlXCI7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzcHJvamVjdCcsICdkcm9wYnRuJyk7XG4gICAgLy8gRGVwZW5kcyBvbiB0aGUgcHJvamVjdCBwYWdlXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2hlYWRpbmcnKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QudGV4dENvbnRlbnQgIT09ICdBbGwnKSB7XG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQ9IFwiSW5ib3hcIjtcbiAgICB9XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBwcm9qZWN0cztcbiAgICBpZiAocHJvamVjdE9wdGlvbnNbMF0gIT09ICdJbmJveCcpIHtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuc3BsaWNlKDAsIDAsICdJbmJveCcpXG4gICAgfVxuICAgIGNvbnN0IHByb2plY3REcm9wZG93biA9IGNyZWF0ZURyb3Bkb3duKHByb2plY3RPcHRpb25zLCAncHJvamVjdC1vcHRpb24nKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bik7IFxuICAgIFxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgICBjb25zdCBwcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNwcmlvcml0eScsICdkcm9wYnRuJyk7XG4gICAgcHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9uKTtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFsnVXJnZW50JywgJ1RpbWVseScsICdDYXN1YWwnLCAnTG93J107XG4gICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGNyZWF0ZURyb3Bkb3duKHByaW9yaXRpZXMsICdwcmlvcml0eS1vcHRpb24nKTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eURyb3Bkb3duKTtcblxuICAgIC8vRWRpdCBkaXNwbGF5XG4gICAgaWYgKGNoYW5nZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3Q7XG4gICAgICAgIHByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICB9XG4gICAgY29uc3QgZGV0YWlsc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsZGl2Jyk7XG4gICAgZGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZChkYXRlQnV0dG9uKTtcbiAgICBkZXRhaWxzQm90dG9tLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIGRldGFpbHNCb3R0b20uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIGRldGFpbHNOb2RlLmFwcGVuZENoaWxkKGRldGFpbHNCb3R0b20pO1xuXG4gICAgLy9CdXR0b24gRnVuY3Rpb25hbGl0eVxuICAgIGNoYW5nZVRhc2tEYXRlKCk7XG4gICAgY2hhbmdlVGFza1Byb2plY3QoKTtcbiAgICBjaGFuZ2VUYXNrUHJpb3JpdHkoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURldGFpbEJ1dHRvbnMgKGNoYW5nZSwgaW5kZXgpIHtcbiAgICBjb25zdCBkZXRhaWxCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxidXR0b25zZGl2Jyk7XG5cbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb25maXJtJyk7XG5cbiAgICBpZiAoY2hhbmdlID09PSBcImFkZFwiKSB7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkY29uZmlybScpO1xuICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0Y29uZmlybScpO1xuICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgZGV0YWlsQnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICBkZXRhaWxCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc2RpdicpO1xuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGRldGFpbEJ1dHRvbnMpO1xuXG4gICAgLy9CdXR0b24gRnVuY3Rpb25hbGl0eVxuICAgIGlmIChjaGFuZ2UgPT09ICdhZGQnKSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICB9XG4gICAgZWxzZSB7ZWRpdFRhc2soaW5kZXgpfVxuICAgIFxuICAgIGNhbmNlbCgpO1xufVxuXG5leHBvcnQge2Rpc3BsYXlEZXRhaWxJbnB1dHMsIGRpc3BsYXlEZXRhaWxTZWxlY3Rpb25zLCBkaXNwbGF5RGV0YWlsQnV0dG9uc307IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRvZG9JdGVtICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGluZGV4KSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zZGl2Jyk7XG5cbiAgICBjb25zdCB0b2RvTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ob2RlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pdGVtJyk7XG5cbiAgICBjb25zdCBjaGVja05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGVja05vZGUuY2xhc3NMaXN0LmFkZCgndG9kb2NoZWNrJyk7XG4gICAgY2hlY2tOb2RlLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgIGNoZWNrTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgdG9kb05vZGUuYXBwZW5kQ2hpbGQoY2hlY2tOb2RlKTtcblxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvZGl2Jyk7XG4gICAgXG4gICAgLy8gVGhlIGZvbGxvd2luZyBzZWN0aW9uIGlzIHJlbGF0ZWQgdG8gZGlzcGxheWluZyBwcm9wZXJ0aWVzXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkdWVEYXRlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrbmFtZScpO1xuICAgIGRlc2NyaXB0aW9uTm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrZGVzY3JpcHRpb24nKTtcbiAgICBkdWVEYXRlTm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrZGF0ZScpO1xuXG4gICAgdGFza05vZGUudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgIGRlc2NyaXB0aW9uTm9kZS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGVOb2RlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICBwcmlvcml0eU5vZGUudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ob2RlKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVOb2RlKTtcbiAgICBcbiAgICB0b2RvTm9kZS5hcHBlbmRDaGlsZChwcmlvcml0eU5vZGUpO1xuICAgIHRvZG9Ob2RlLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgLy9JbmRleCBmb3IgdGVzdGluZ1xuICAgIGNvbnN0IGluZGV4Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmRleE5vZGUudGV4dENvbnRlbnQgPSBpbmRleDtcbiAgICB0b2RvTm9kZS5hcHBlbmRDaGlsZChpbmRleE5vZGUpO1xuXG4gICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1idXR0b25zLWRpdicpO1xuXG4gICAgLy9FZGl0IGJ1dHRvblxuICAgIGNvbnN0IGVkaXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEl0ZW0udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgZWRpdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEl0ZW0pO1xuXG4gICAgLy9SZW1vdmUgYnV0dG9uXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUl0ZW0udGV4dENvbnRlbnQgPSBcIlJFTU9WRVwiO1xuICAgIHJlbW92ZUl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgIHJlbW92ZUl0ZW0uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChyZW1vdmVJdGVtKTtcblxuICAgIHRvZG9Ob2RlLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvTm9kZSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9