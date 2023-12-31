"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_render_js"],{

/***/ "./src/mod.js":
/*!********************!*\
  !*** ./src/mod.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Array: () => (/* binding */ Array),
/* harmony export */   Infinity: () => (/* binding */ Infinity),
/* harmony export */   NaN: () => (/* binding */ NaN),
/* harmony export */   Object: () => (/* binding */ Object),
/* harmony export */   globalThis: () => (/* binding */ globalThis),
/* harmony export */   undefined: () => (/* binding */ undefined)
/* harmony export */ });
function Infinity() {
  console.log('Infinity');
}

function NaN() {
  console.log('NaN');
}

function Object() {
  console.log('Object');
}

function Array() {
  console.log('Array');
}

function undefined() {
  console.log('undefined');
}

function globalThis() {
  console.log('globalThis');
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */ "./src/render.css");
/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mod */ "./src/mod.js");




function render() {
  (0,_mod__WEBPACK_IMPORTED_MODULE_1__.Array)();
  (0,_mod__WEBPACK_IMPORTED_MODULE_1__[Infinity])();
  (0,_mod__WEBPACK_IMPORTED_MODULE_1__[NaN])();
  (0,_mod__WEBPACK_IMPORTED_MODULE_1__.Object)();
  (0,_mod__WEBPACK_IMPORTED_MODULE_1__.globalThis)();
  _mod__WEBPACK_IMPORTED_MODULE_1__.undefined();

  const el = document.createElement('div');
  el.classList.add('text');
  document.getElementsByTagName('body')[0].appendChild(el);
  el.innerHTML = 'hello, world';
}


/***/ })

}]);