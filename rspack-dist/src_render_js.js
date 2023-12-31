(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_render_js"], {
"./src/mod.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Array: function() { return Array; },
  Infinity: function() { return Infinity; },
  NaN: function() { return NaN; },
  Object: function() { return Object; },
  globalThis: function() { return globalThis; },
  undefined: function() { return undefined; }
});
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
}),
"./src/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */"./src/render.css");
/* harmony import */var _mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mod */"./src/mod.js");


 function render() {
    (0, _mod__WEBPACK_IMPORTED_MODULE_1__.Array)();
    Infinity();
    NaN();
    (0, _mod__WEBPACK_IMPORTED_MODULE_1__.Object)();
    (0, _mod__WEBPACK_IMPORTED_MODULE_1__.globalThis)();
    undefined();
    const el = document.createElement('div');
    el.classList.add('text');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.innerHTML = 'hello, world';
}
}),
"./src/render.css": (function (module, exports, __webpack_require__) {
"use strict";
}),

}]);