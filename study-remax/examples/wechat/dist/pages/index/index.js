require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 31:
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

// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function toVal(mix){var k,y,str='';if(typeof mix==='string'||typeof mix==='number'){str+=mix;}else if(_typeof(mix)==='object'){if(Array.isArray(mix)){for(k=0;k<mix.length;k++){if(mix[k]){if(y=toVal(mix[k])){str&&(str+=' ');str+=y;}}}}else{for(k in mix){if(mix[k]){str&&(str+=' ');str+=k;}}}}return str;}/* harmony default export */ var clsx_m = (function(){var i=0,tmp,x,str='';while(i<arguments.length){if(tmp=arguments[i++]){if(x=toVal(tmp)){str&&(str+=' ');str+=x;}}}return str;});
// CONCATENATED MODULE: ./src/hooks/useUserInfo.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function useUserInfo(){var _React$useState=react["useState"](null),_React$useState2=_slicedToArray(_React$useState,2),userInfo=_React$useState2[0],setUserInfo=_React$useState2[1];function login(response){var userInfo=response.detail.userInfo;userInfo.avatar=userInfo.avatarUrl;setUserInfo(response.detail.userInfo);}return[userInfo,login];}
// EXTERNAL MODULE: ./src/components/AddButton/index.tsx
var AddButton = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/LoginButton/index.css
var components_LoginButton = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/LoginButton/index.js
var LoginButton_LoginButton=function LoginButton(_ref){var login=_ref.login,children=_ref.children;return/*#__PURE__*/react["createElement"](wechat["a" /* Button */],{className:"login-button",hoverClassName:"none",openType:"getUserInfo",onGetUserInfo:login},children);};/* harmony default export */ var src_components_LoginButton = (LoginButton_LoginButton);
// EXTERNAL MODULE: ./src/app.js
var app = __webpack_require__(6);

// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ var logo = (__webpack_require__.p + "60b8145b93c5ec6431f93a883b75932b.png");
// EXTERNAL MODULE: ./src/pages/index/index.css
var index = __webpack_require__(12);

// CONCATENATED MODULE: ./src/pages/index/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function index_slicedToArray(arr,i){return index_arrayWithHoles(arr)||index_iterableToArrayLimit(arr,i)||index_unsupportedIterableToArray(arr,i)||index_nonIterableRest();}function index_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function index_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return index_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_arrayLikeToArray(o,minLen);}function index_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function index_iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function index_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var pages_index = (function(){var _useUserInfo=useUserInfo(),_useUserInfo2=index_slicedToArray(_useUserInfo,2),user=_useUserInfo2[0],login=_useUserInfo2[1];var todo=react["useContext"](app["a" /* TodoContext */]);var handleAdd=function handleAdd(){Object(wechat["j" /* navigateTo */])({url:'../new/index'});};var handleComplete=function handleComplete(e){var checkedItems=e.detail.value;var items=todo.items.map(function(item){return _objectSpread(_objectSpread({},item),{},{completed:!!checkedItems.find(function(id){return item.id==id;})});});todo.setItems(items);};return/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"page-todos"},/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"user"},/*#__PURE__*/react["createElement"](src_components_LoginButton,{login:login},/*#__PURE__*/react["createElement"](wechat["d" /* Image */],{className:"avatar",src:user?user.avatar:logo})),/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"nickname"},user?user.nickName+"'s":'My'," Todo List",!user&&/*#__PURE__*/react["createElement"](wechat["g" /* Text */],{className:"login-tip"},"(Tap to login \u2191)"))),/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"todo-items"},/*#__PURE__*/react["createElement"](wechat["c" /* CheckboxGroup */],{className:"todo-items-group",onChange:handleComplete},todo.items.map(function(item){return/*#__PURE__*/react["createElement"](wechat["f" /* Label */],{key:item.id,className:clsx_m('todo-item',{checked:item.completed}),__key:item.id},/*#__PURE__*/react["createElement"](wechat["b" /* Checkbox */],{className:"todo-item-checkbox",value:item.id,checked:item.completed}),/*#__PURE__*/react["createElement"](wechat["g" /* Text */],{className:"todo-item-text"},item.text));}))),/*#__PURE__*/react["createElement"](wechat["h" /* View */],{className:"todo-footer"},/*#__PURE__*/react["createElement"](AddButton["a" /* default */],{text:"Add Todo",onClick:handleAdd})));});
// CONCATENATED MODULE: ./src/pages/index/index.entry.js
__webpack_require__(12);Page(Object(esm["e" /* createPageConfig */])(pages_index,'pages/index/index'));

/***/ })

},[[27,2,1,0]]]);