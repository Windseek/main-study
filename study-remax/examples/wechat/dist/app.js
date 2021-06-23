require('./runtime.js');
require('./remax-vendors.js');
require('./remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ hostComponents_Button; });
__webpack_require__.d(__webpack_exports__, "Form", function() { return /* reexport */ hostComponents_Form; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ hostComponents_Image; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ hostComponents_Input; });
__webpack_require__.d(__webpack_exports__, "Label", function() { return /* reexport */ hostComponents_Label; });
__webpack_require__.d(__webpack_exports__, "Navigator", function() { return /* reexport */ hostComponents_Navigator; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ hostComponents_Text; });
__webpack_require__.d(__webpack_exports__, "Textarea", function() { return /* reexport */ hostComponents_Textarea; });
__webpack_require__.d(__webpack_exports__, "View", function() { return /* reexport */ hostComponents_View; });
__webpack_require__.d(__webpack_exports__, "WebView", function() { return /* reexport */ hostComponents_WebView; });
__webpack_require__.d(__webpack_exports__, "navigateTo", function() { return /* reexport */ wechat_esm["j" /* navigateTo */]; });
__webpack_require__.d(__webpack_exports__, "navigateBack", function() { return /* reexport */ wechat_esm["i" /* navigateBack */]; });
__webpack_require__.d(__webpack_exports__, "redirectTo", function() { return /* reexport */ wechat_esm["l" /* redirectTo */]; });
__webpack_require__.d(__webpack_exports__, "reLaunch", function() { return /* reexport */ wechat_esm["k" /* reLaunch */]; });
__webpack_require__.d(__webpack_exports__, "switchTab", function() { return /* reexport */ wechat_esm["m" /* switchTab */]; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ Modal; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN=Number.isNaN||function ponyfill(value){return typeof value==='number'&&value!==value;};function isEqual(first,second){if(first===second){return true;}if(safeIsNaN(first)&&safeIsNaN(second)){return true;}return false;}function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length){return false;}for(var i=0;i<newInputs.length;i++){if(!isEqual(newInputs[i],lastInputs[i])){return false;}}return true;}function memoizeOne(resultFn,isEqual){if(isEqual===void 0){isEqual=areInputsEqual;}var lastThis;var lastArgs=[];var lastResult;var calledOnce=false;function memoized(){var newArgs=[];for(var _i=0;_i<arguments.length;_i++){newArgs[_i]=arguments[_i];}if(calledOnce&&lastThis===this&&isEqual(newArgs,lastArgs)){return lastResult;}lastResult=resultFn.apply(this,newArgs);calledOnce=true;lastThis=this;lastArgs=newArgs;return lastResult;}return memoized;}/* harmony default export */ var memoize_one_esm = (memoizeOne);
// EXTERNAL MODULE: ./node_modules/@remax/framework-shared/esm/index.js + 14 modules
var esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@remax/one/esm/createHostComponent.js
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};function createTarget(target,detail){return{id:target.id,offsetLeft:target.offsetLeft,offsetTop:target.offsetTop,dataset:target.targetDataset||target.dataset,value:detail===null||detail===void 0?void 0:detail.value};}function createCurrentTarget(currentTarget){return{id:currentTarget.id,offsetLeft:currentTarget.offsetLeft,offsetTop:currentTarget.offsetTop,dataset:currentTarget.dataset};}var createTapEvent=function createTapEvent(originalEvent){return{type:originalEvent.type,stopPropagation:originalEvent.stopPropagation,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};var createTouchEvent=function createTouchEvent(originalEvent){return{type:originalEvent.type,stopPropagation:originalEvent.stopPropagation,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),touches:originalEvent.touches,changedTouches:originalEvent.touches,originalEvent:originalEvent,nativeEvent:originalEvent};};var createImageEvent=function createImageEvent(originalEvent){return{type:originalEvent.type,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};function createCallback(fn,eventCreator){if(typeof fn!=='function'){return undefined;}return function(originalEvent){return fn(eventCreator(originalEvent));};}var createInputEvent=function createInputEvent(originalEvent){return{type:originalEvent.type,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};var createFormEvent=function createFormEvent(originalEvent){return{type:originalEvent.type,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};function assignDefaultProps(inputProps,defaultProps){if(defaultProps){Object.keys(defaultProps).forEach(function(key){var _a;inputProps[key]=(_a=inputProps[key])!==null&&_a!==void 0?_a:defaultProps[key];});}}function aliasProps(props,alias){var _a;if(!alias){return props;}var nextProps={};for(var key in props){nextProps[(_a=alias[key])!==null&&_a!==void 0?_a:key]=props[key];}return nextProps;}var createLongTapCallback=memoize_one_esm(createCallback);var createTapCallback=memoize_one_esm(createCallback);var createTouchStartCallback=memoize_one_esm(createCallback);var createTouchMoveCallback=memoize_one_esm(createCallback);var createTouchEndCallback=memoize_one_esm(createCallback);var createTouchCancelCallback=memoize_one_esm(createCallback);var createChangeCallback=memoize_one_esm(createCallback);var createInputCallback=memoize_one_esm(createCallback);var createConfirmCallback=memoize_one_esm(createCallback);var createFocusCallback=memoize_one_esm(createCallback);var createBlurCallback=memoize_one_esm(createCallback);var createSubmitCallback=memoize_one_esm(createCallback);var createResetCallback=memoize_one_esm(createCallback);var createImageLoadCallback=memoize_one_esm(createCallback);var createImageErrorCallback=memoize_one_esm(createCallback);function createHostComponent(name,alias,defaults){var Component=function Component(props,ref){var inputProps=__assign({},props);// 默认属性根据平台在这里设置
if(defaults){assignDefaultProps(inputProps,defaults);}if(props.onLongTap){inputProps.onLongTap=createLongTapCallback(inputProps.onLongTap,createTapEvent);}if(inputProps.onTap){inputProps.onTap=createTapCallback(inputProps.onTap,createTapEvent);}if(inputProps.onTouchStart){inputProps.onTouchStart=createTouchStartCallback(inputProps.onTouchStart,createTouchEvent);}if(inputProps.onTouchMove){inputProps.onTouchMove=createTouchMoveCallback(inputProps.onTouchMove,createTouchEvent);}if(inputProps.onTouchEnd){inputProps.onTouchEnd=createTouchEndCallback(inputProps.onTouchEnd,createTouchEvent);}if(inputProps.onTouchCancel){inputProps.onTouchCancel=createTouchCancelCallback(inputProps.onTouchCancel,createTouchEvent);}if(inputProps.onChange){inputProps.onChange=createChangeCallback(inputProps.onChange,createInputEvent);}if(inputProps.onInput){inputProps.onInput=createInputCallback(inputProps.onInput,createInputEvent);}if(inputProps.onConfirm){inputProps.onConfirm=createConfirmCallback(inputProps.onConfirm,createInputEvent);}if(inputProps.onFocus){inputProps.onFocus=createFocusCallback(inputProps.onFocus,createInputEvent);}if(inputProps.onBlur){inputProps.onBlur=createBlurCallback(inputProps.onBlur,createInputEvent);}if(inputProps.onSubmit){inputProps.onSubmit=createSubmitCallback(inputProps.onSubmit,createFormEvent);}if(inputProps.onReset){inputProps.onReset=createResetCallback(inputProps.onReset,createFormEvent);}if(name==='image'){if(inputProps.onLoad){inputProps.onLoad=createImageLoadCallback(props.onLoad,createImageEvent);}if(inputProps.onError){inputProps.onError=createImageErrorCallback(props.onError,createImageEvent);}}var nextProps=inputProps;if(alias){nextProps=aliasProps(inputProps,alias);}nextProps.ref=ref;return/*#__PURE__*/react["createElement"](name,nextProps);};if(false){}return/*#__PURE__*/react["forwardRef"](Component);}
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js
/* harmony default export */ var props_alias = ({type:'formType'});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.wechat.js
/* harmony default export */ var index_wechat = ({hoverClassName:'button-hover',hoverStartTime:20,hoverStayTime:70});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Button/index.js
var Button=createHostComponent('button',props_alias,index_wechat);/* harmony default export */ var hostComponents_Button = (Button);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.wechat.js
/* harmony default export */ var default_index_wechat = ({'wechat-report-submit':false,'wechat-report-submit-timeout':0});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Form/index.js
var Form=createHostComponent('form',null,default_index_wechat);/* harmony default export */ var hostComponents_Form = (Form);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.wechat.js
/* harmony default export */ var props_default_index_wechat = ({mode:'scaleToFill','wechat-webp':false,'wechat-lazyLoad':false,'wechat-show-menu-by-longpress':false});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Image/index.js
var Image=createHostComponent('image',null,props_default_index_wechat);/* harmony default export */ var hostComponents_Image = (Image);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js
/* harmony default export */ var Input_props_alias = ({maxLength:'maxlength'});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Input/index.js
var __extends=undefined&&undefined.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Input_assign=undefined&&undefined.__assign||function(){Input_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return Input_assign.apply(this,arguments);};var Input_createInputCallback=memoize_one_esm(createCallback);var Input_createConfirmCallback=memoize_one_esm(createCallback);var Input_createFocusCallback=memoize_one_esm(createCallback);var Input_createBlurCallback=memoize_one_esm(createCallback);var Input_Input=/** @class */function(_super){__extends(Input,_super);function Input(props){var _this=_super.call(this,props)||this;_this.state={value:'',// 阿里
controlled:false};_this.handleInput=function(e){var controlled=_this.state.controlled;if(typeof _this.props.onInput==='function'){return _this.props.onInput(e);}// 微信
// 注意，微信要对 input 受控，必须要在 onInput 方法返回值
return controlled?_this.props.value:undefined;};var controlled=props.value!==undefined;var value=controlled?props.value:props.defaultValue;_this.state={value:value,controlled:controlled};return _this;}Input.prototype.componentDidUpdate=function(){if(this.props.value!==undefined&&this.props.value!==this.state.value){this.setState({value:this.props.value});}};Input.prototype.render=function(){var _a,_b,_c,_d,_e,_f;var inputProps=Input_assign({},this.props);if(inputProps.onInput){inputProps.onInput=Input_createInputCallback(this.handleInput,createInputEvent);}if(inputProps.onConfirm){inputProps.onConfirm=Input_createConfirmCallback(this.props.onConfirm,createInputEvent);}if(inputProps.onFocus){inputProps.onFocus=Input_createFocusCallback(this.props.onFocus,createInputEvent);}if(inputProps.onBlur){inputProps.onBlur=Input_createBlurCallback(this.props.onBlur,createInputEvent);}// 通用属性的默认属性根据平台在这里设置
if(false){}if(true){inputProps.type=(_b=inputProps.type)!==null&&_b!==void 0?_b:'text';inputProps.password=(_c=inputProps.password)!==null&&_c!==void 0?_c:false;inputProps.disabled=(_d=inputProps.disabled)!==null&&_d!==void 0?_d:false;inputProps.focus=(_e=inputProps.focus)!==null&&_e!==void 0?_e:false;inputProps.maxLength=(_f=inputProps.maxLength)!==null&&_f!==void 0?_f:140;}var nextProps=aliasProps(Input_assign(Input_assign({},inputProps),this.state),Input_props_alias);return/*#__PURE__*/react["createElement"]('input',nextProps);};// 平台独有的属性默认值写在这
Input.defaultProps={'toutiao-selection-end':999,'toutiao-selection-start':999,'wechat-placeholder-class':'input-placeholder','wechat-cursor-spacing':0,'wechat-confirm-type':'done','wechat-confirm-hold':false,'wechat-selection-end':-1,'wechat-selection-start':-1,'wechat-adjust-position':true,'wechat-hold-keyboard':false};return Input;}(react["Component"]);/* harmony default export */ var hostComponents_Input = (Input_Input);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Label/index.js
var Label=createHostComponent('label',{htmlFor:'for'});/* harmony default export */ var hostComponents_Label = (Label);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.wechat.js
/* harmony default export */ var Navigator_props_default_index_wechat = ({'wechat-target':'self','wechat-open-type':'navigate','wechat-delta':1,hoverClassName:'navigator-hover','wechat-hover-stop-propagation':false,hoverStartTime:50,hoverStayTime:600});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Navigator/index.js
var Navigator=createHostComponent('navigator',null,Navigator_props_default_index_wechat);/* harmony default export */ var hostComponents_Navigator = (Navigator);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.wechat.js
/* harmony default export */ var Text_props_default_index_wechat = ({selectable:false,'wechat-decode':false});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Text/index.js
var Text=createHostComponent('text',null,Text_props_default_index_wechat);/* harmony default export */ var hostComponents_Text = (Text);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js
/* harmony default export */ var Textarea_props_alias = ({maxLength:'maxlength'});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/Textarea/index.js
var Textarea_extends=undefined&&undefined.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Textarea_assign=undefined&&undefined.__assign||function(){Textarea_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return Textarea_assign.apply(this,arguments);};var Textarea_Textarea=/** @class */function(_super){Textarea_extends(Textarea,_super);function Textarea(props){var _this=_super.call(this,props)||this;_this.state={value:'',// 阿里
controlled:false};_this.handleInput=function(e){var controlled=_this.state.controlled;if(!controlled){_this.setState({value:e.target.value});}if(typeof _this.props.onInput==='function'){return _this.props.onInput(e);}// 微信
// 注意，微信要对 input 受控，必须要在 onInput 方法返回值
return controlled?_this.props.value:e.target.value;};var controlled=props.value!==undefined;var value=controlled?props.value:props.defaultValue;_this.state={value:value,controlled:controlled};return _this;}Textarea.prototype.componentDidUpdate=function(){if(this.props.value!==undefined&&this.props.value!==this.state.value){this.setState({value:this.props.value});}};Textarea.prototype.render=function(){var _a,_b,_c,_d,_e;var inputProps=Textarea_assign(Textarea_assign({},this.props),{onInput:createCallback(this.handleInput,createInputEvent)});if(inputProps.onConfirm){inputProps.onConfirm=createCallback(this.props.onConfirm,createInputEvent);}if(inputProps.onFocus){inputProps.onFocus=createCallback(this.props.onFocus,createInputEvent);}if(inputProps.onBlur){inputProps.onBlur=createCallback(this.props.onBlur,createInputEvent);}if(false){}if(true){inputProps.maxLength=(_b=inputProps.maxLength)!==null&&_b!==void 0?_b:140;inputProps.disabled=(_c=inputProps.disabled)!==null&&_c!==void 0?_c:false;inputProps.focus=(_d=inputProps.focus)!==null&&_d!==void 0?_d:false;inputProps.autoHeight=(_e=inputProps.autoHeight)!==null&&_e!==void 0?_e:false;}var nextProps=aliasProps(Textarea_assign(Textarea_assign({},inputProps),this.state),Textarea_props_alias);return/*#__PURE__*/react["createElement"]('textarea',nextProps);};Textarea.defaultProps={'toutiao-selection-end':999,'toutiao-selection-start':999,'wechat-selection-end':-1,'wechat-selection-start':-1,'wechat-fixed':false,'wechat-placeholder-class':'textarea-placeholder','wechat-cursor-spacing':0,'wechat-cursor':-1,'wechat-show-confirm-bar':true,'wechat-adjust-position':true,'wechat-hold-keyboard':false,'wechat-disable-default-padding':false};return Textarea;}(react["Component"]);/* harmony default export */ var hostComponents_Textarea = (Textarea_Textarea);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/View/props/default/index.wechat.js
/* harmony default export */ var View_props_default_index_wechat = ({hoverClassName:'none','wechat-hover-stop-propagation':false,hoverStartTime:50,hoverStayTime:400});
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/View/index.js
var View=createHostComponent('view',null,View_props_default_index_wechat);/* harmony default export */ var hostComponents_View = (View);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/WebView/index.js
var WebView=createHostComponent('web-view',null);/* harmony default export */ var hostComponents_WebView = (WebView);
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/hostComponents/index.js

// EXTERNAL MODULE: ./node_modules/@remax/wechat/esm/index.js + 53 modules
var wechat_esm = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@remax/one/esm/api/index.wechat.js

// CONCATENATED MODULE: ./node_modules/@remax/one/esm/types/event.js

// CONCATENATED MODULE: ./node_modules/@remax/one/esm/types/index.js

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var runtime_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@remax/one/esm/components/Modal.js
function Modal(_a){var children=_a.children;var inst=Object(runtime_esm["g" /* usePageInstance */])();return Object(runtime_esm["f" /* createPortal */])(children,inst.modalContainer);}
// CONCATENATED MODULE: ./node_modules/@remax/one/esm/index.js

// CONCATENATED MODULE: ./node_modules/remax/one.js


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__(2));var one_1=__webpack_require__(14);var styles={screen:{height:'100vh',backgroundColor:'#fff',lineHeight:1.4,textAlign:'center'},text:{color:'#999',fontSize:'16PX'}};var ErrorScreen=function ErrorScreen(){return React.createElement(one_1.View,{style:styles.screen},React.createElement(one_1.View,{style:styles.text},"\u9875\u9762\u9047\u5230\u4E00\u4E9B\u95EE\u9898"));};exports.default=ErrorScreen;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__(2));var ErrorScreen=/*#__PURE__*/function(_React$Component){_inherits(ErrorScreen,_React$Component);var _super=_createSuper(ErrorScreen);function ErrorScreen(){var _this;_classCallCheck(this,ErrorScreen);_this=_super.apply(this,arguments);_this.state={error:null};return _this;}_createClass(ErrorScreen,[{key:"componentDidCatch",value:function componentDidCatch(error){console.error(error);}},{key:"render",value:function render(){var error=this.state.error;var errorScreen=this.props.errorScreen;if(error){return React.createElement(errorScreen,{error:error});}return this.props.children;}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(error){return{error:error};}}]);return ErrorScreen;}(React.Component);exports.default=ErrorScreen;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(26);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* harmony default export */ __webpack_exports__["default"] = ({onPageComponent:function onPageComponent(_ref){var component=_ref.component;function ErrorBoundaryWrap(props,ref){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default.a,{errorScreen:_Users_yanglongfei_Documents_main_study_remax_wechat_node_modules_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2___default.a},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component,_objectSpread(_objectSpread({},props),{},{ref:ref})));}ErrorBoundaryWrap.displayName='ErrorBoundary';return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(ErrorBoundaryWrap);}});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
__webpack_require__(11);App(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__[/* createAppConfig */ "c"])(_app_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]));

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/remax/runtime.js

// EXTERNAL MODULE: external "require('/__remax_runtime_options__')"
var _remax_runtime_options_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@remax/apply-runtime-options.js
var pluginDriver=new esm["a" /* PluginDriver */]([__webpack_require__(25)].map(function(p){return p.default||p;}));esm["b" /* RuntimeOptions */].apply({platform:"wechat",debug:false,pxToRpx:true,pluginDriver:pluginDriver,hostComponents:_remax_runtime_options_["hostComponents"],pageEvents:_remax_runtime_options_["pageEvents"],appEvents:_remax_runtime_options_["appEvents"]});

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require('/__remax_runtime_options__');

/***/ })

},[[18,2,1,0]]]);