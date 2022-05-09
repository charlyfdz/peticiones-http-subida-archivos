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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_upload_files_archivos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/upload_files/archivos-page */ \"./src/js/upload_files/archivos-page.js\");\n\r\n\r\n(0,_js_upload_files_archivos_page__WEBPACK_IMPORTED_MODULE_0__.init)()\n\n//# sourceURL=webpack://webpack-bable-js-initial-project/./src/index.js?");

/***/ }),

/***/ "./src/js/http-provider.js":
/*!*********************************!*\
  !*** ./src/js/http-provider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"obtenerChistes\": () => (/* binding */ obtenerChistes),\n/* harmony export */   \"obtenerUsuarios\": () => (/* binding */ obtenerUsuarios),\n/* harmony export */   \"subirImagen\": () => (/* binding */ subirImagen)\n/* harmony export */ });\nconst jokeURL = \"https://api.chucknorris.io/jokes/random\";\r\nconst urlUsuarios = \"https://reqres.in/api/users?page=2\";\r\n\r\nconst cloudPreset = 'wzqb37wg';\r\nconst cloudUrl = \"https://api.cloudinary.com/v1_1/jerasys/upload\";\r\n\r\nconst obtenerChistes = async() => {\r\n\r\n    try {\r\n        const resp = await fetch(jokeURL);\r\n        if (!resp.ok) return alert('No se pudo realizar la peticion')\r\n        const { icons_url, id, value } = await resp.json()\r\n        return { icons_url, id, value }\r\n    } catch (err) {\r\n        throw err;\r\n    }\r\n\r\n}\r\n\r\n\r\nconst obtenerUsuarios = async() => {\r\n    const resp = await fetch(urlUsuarios)\r\n    const { data: usuarios } = await resp.json()\r\n    return usuarios\r\n}\r\n\r\n\r\nconst subirImagen = async(archivo) => {\r\n    const formData = new FormData();\r\n    formData.append('upload_preset', cloudPreset)\r\n    formData.append('file', archivo)\r\n\r\n    try {\r\n        const resp = await fetch(cloudUrl, {\r\n            method: 'POST',\r\n            body: formData\r\n        })\r\n\r\n        if (resp.ok) {\r\n            const cloudResp = await resp.json();\r\n            return cloudResp.secure_url;\r\n        } else {\r\n            throw await resp.json();\r\n        }\r\n    } catch (err) {\r\n        throw err;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-bable-js-initial-project/./src/js/http-provider.js?");

/***/ }),

/***/ "./src/js/upload_files/archivos-page.js":
/*!**********************************************!*\
  !*** ./src/js/upload_files/archivos-page.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-provider */ \"./src/js/http-provider.js\");\n\r\n\r\nconst body = document.body;\r\nlet inputFile, imgFoto;\r\n\r\nconst crearInputFileHtml = () => {\r\n    const html = `\r\n    <h1 class=\"mt-5\">Subir Archivos</h1>\r\n    <hr>\r\n    <label>Selecciona una fotografía</label>\r\n    <input type=\"file\" accept=\"image/png, image/jpg\"/>\r\n    <br>\r\n    <img id=\"foto\" class=\"img-thumbnail\" src=\"\">\r\n    `;\r\n\r\n    const div = document.createElement('div')\r\n    div.innerHTML = html;\r\n    body.append(div);\r\n\r\n    inputFile = document.querySelector('input');\r\n    imgFoto = document.querySelector('#foto')\r\n}\r\n\r\n\r\nconst eventos = () => {\r\n    console.log(inputFile)\r\n    inputFile.addEventListener('change', (event) => {\r\n        const file = event.target.files[0]\r\n        ;(0,_http_provider__WEBPACK_IMPORTED_MODULE_0__.subirImagen)(file).then(url => {\r\n            imgFoto.src = url\r\n        })\r\n    })\r\n}\r\n\r\nconst init = () => {\r\n    crearInputFileHtml(),\r\n        eventos();\r\n}\n\n//# sourceURL=webpack://webpack-bable-js-initial-project/./src/js/upload_files/archivos-page.js?");

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