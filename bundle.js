/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__smooth__ = __webpack_require__(1);

const NAVBAR_OFFSET = 42;
/* harmony export (immutable) */ __webpack_exports__["NAVBAR_OFFSET"] = NAVBAR_OFFSET;

document.addEventListener('DOMContentLoaded', () => {
  const link1 = document.getElementById('link1');
  link1.addEventListener('click', (e) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__smooth__["a" /* scrollTo */])(e.target.name);
  });

  const link2 = document.getElementById('link2');
  link2.addEventListener('click', (e) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__smooth__["a" /* scrollTo */])(e.target.name);
  });

  const top = document.getElementById('top');
  top.addEventListener('click', __WEBPACK_IMPORTED_MODULE_0__smooth__["b" /* scrollToTop */]);




  // scroll bar change css
  const navBar = document.getElementById('navbar');
  window.onscroll = function () {
    // add the offset of the pixel height to change color a little earlier
    if ( (window.scrollY + NAVBAR_OFFSET ) >= window.innerHeight ) {
        navBar.classList.add("colored");
        navBar.classList.remove("transparent");
    }
    else {
        navBar.classList.add("transparent");
        navBar.classList.remove("colored");
    }
  };

});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entry__ = __webpack_require__(0);

// inspired from https://css-tricks.com/snippets/jquery/smooth-scrolling/

// scroll to top
const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = scrollToTop;


// Scroll to a certain element
const scrollTo = (element) => {
  console.log(`element is ${document}`);
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  // window.scrollBy(0, -1 * NAVBAR_OFFSET );
};
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollTo;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map