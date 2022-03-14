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

/***/ "./src/createDivElements.js":
/*!**********************************!*\
  !*** ./src/createDivElements.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDivElements\": () => (/* binding */ createDivElements)\n/* harmony export */ });\nconst createDivElements = (data) => {\r\n\r\n    let className;\r\n    let htmlSymbol;\r\n\r\n    data.completed ?\r\n        (htmlSymbol = '&#9989', className = \"todo_completed\") :\r\n        (htmlSymbol = '&#9746', className = \"todo\")\r\n\r\n    return `        \r\n        <div class=${className}>\r\n            <span>Id: ${data.id}.</span>\r\n            <span>User Id: ${data.userId}.</span>\r\n            <span>Title: ${data.title}.</span>\r\n            <span>Completed: ${data.completed} ${htmlSymbol}</span>\r\n        </div>                      \r\n        `\r\n}\r\n\r\n\n\n//# sourceURL=webpack://probuywebpack/./src/createDivElements.js?");

/***/ }),

/***/ "./src/createHtmlDocument.js":
/*!***********************************!*\
  !*** ./src/createHtmlDocument.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlDocument\": () => (/* binding */ createHtmlDocument)\n/* harmony export */ });\n/* harmony import */ var _createDivElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDivElements */ \"./src/createDivElements.js\");\n\r\n\r\nconst createHtmlDocument = (json) => {\r\n    return json\r\n        .map(data => (0,_createDivElements__WEBPACK_IMPORTED_MODULE_0__.createDivElements)(data))\r\n        .join('')\r\n}\r\n\r\n\n\n//# sourceURL=webpack://probuywebpack/./src/createHtmlDocument.js?");

/***/ }),

/***/ "./src/getDataTodos.js":
/*!*****************************!*\
  !*** ./src/getDataTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataTodos\": () => (/* binding */ getDataTodos)\n/* harmony export */ });\nconst getDataTodos = async () => {\r\n    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')\r\n    if (res.status !== 200) {\r\n        throw new Error(`Response is not a 200, but ${res.status}`)\r\n    }\r\n    return await res.json()\r\n}\r\n\r\n\n\n//# sourceURL=webpack://probuywebpack/./src/getDataTodos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getDataTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataTodos */ \"./src/getDataTodos.js\");\n/* harmony import */ var _createHtmlDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHtmlDocument */ \"./src/createHtmlDocument.js\");\n/* harmony import */ var _setHiddenForTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setHiddenForTodos */ \"./src/setHiddenForTodos.js\");\n\r\n\r\n\r\n\r\n(0,_getDataTodos__WEBPACK_IMPORTED_MODULE_0__.getDataTodos)()\r\n    .then(json => document\r\n        .querySelector('#test')\r\n        .insertAdjacentHTML('afterbegin', (0,_createHtmlDocument__WEBPACK_IMPORTED_MODULE_1__.createHtmlDocument)(json))\r\n    )\r\n    .catch(error => console.log(error))\r\n\r\n;(0,_setHiddenForTodos__WEBPACK_IMPORTED_MODULE_2__.setHiddenForTodos)();\n\n//# sourceURL=webpack://probuywebpack/./src/index.js?");

/***/ }),

/***/ "./src/setHiddenForTodos.js":
/*!**********************************!*\
  !*** ./src/setHiddenForTodos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setHiddenForTodos\": () => (/* binding */ setHiddenForTodos)\n/* harmony export */ });\nconst setHiddenForTodos = () => {\r\n\r\n    let toggle = true;\r\n\r\n    document\r\n        .querySelector('.button')\r\n        .addEventListener('click', function (event) {\r\n            event.target.innerText = toggle ? 'Отобразить выполненные' : 'Скрыть выполненные'\r\n            toggle = !toggle;\r\n\r\n\r\n            document\r\n                .querySelectorAll('.todo_completed')\r\n                .forEach(hidden => hidden.hidden = !toggle)\r\n        })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://probuywebpack/./src/setHiddenForTodos.js?");

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