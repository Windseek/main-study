require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[5],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/AddButton/index.tsx
var AddButton = __webpack_require__(8);

// EXTERNAL MODULE: ./src/app.js
var app = __webpack_require__(6);

// EXTERNAL MODULE: ./src/pages/new/index.css
var pages_new = __webpack_require__(13);

// CONCATENATED MODULE: ./src/pages/new/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var src_pages_new = (function(){var todo=react["useContext"](app["a" /* TodoContext */]);var _React$useState=react["useState"](''),_React$useState2=_slicedToArray(_React$useState,2),text=_React$useState2[0],setText=_React$useState2[1];var handleAdd=function handleAdd(){var items=todo.items.concat([{id:Date.now(),text:text,compeleted:false}]);todo.setItems(items);Object(wechat["i" /* navigateBack */])();};return/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"page-add-todo"},/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"add-todo"},/*#__PURE__*/react["createElement"](wechat["e" /* Input */],{className:"add-todo-input",placeholder:"What needs to be done?",onInput:function onInput(e){return setText(e.detail.value);},value:text})),/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"todo-footer"},/*#__PURE__*/react["createElement"](AddButton["a" /* default */],{text:"Add Todo",onClick:handleAdd})));});
// CONCATENATED MODULE: ./src/pages/new/index.entry.js
__webpack_require__(13);Page(Object(esm["e" /* createPageConfig */])(src_pages_new,'pages/new/index'));

/***/ })

},[[30,2,1,0]]]);