(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{14:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return f}),n.d(t,"b",function(){return d});var r=n(8),a=n(0),o=n.n(a);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.a.createContext();function s(e){var t=e.screenSet,n=e.startScreen,c=u(e,["screenSet","startScreen"]),i=Object(a.useContext)(l).container;return Object(r.g)(t,n,i,c)(),o.a.createElement(o.a.Fragment,null)}var f={Profile:{screenSet:"Default-ProfileUpdate",startScreen:"gigya-update-profile-screen"},Register:{screenSet:"Default-RegistrationLogin",startScreen:"gigya-register-screen"},Login:{screenSet:"Default-RegistrationLogin",startScreen:"gigya-login-screen"},Lite:{screenSet:"Default-LiteRegistration"}},d=function(e){var t=e.children,n=e.containerId,r=c(Object(a.useState)(n||"default-gigya-screen-container"),2),i=r[0],u=r[1];return o.a.createElement(l.Provider,{value:{container:i,setContainer:u}},o.a.createElement("div",null,t,o.a.createElement("div",{id:i})))}},2:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r,a=n(1),o=n.n(a);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var i="object"==typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof i))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var u=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"==typeof window||!window.document||window.document.createElement},234:function(e,t,n){__NEXT_REGISTER_PAGE("/blog",function(){return e.exports=n(235),{page:e.exports.default}})},235:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n(48),a=n.n(r),o=(n(8),n(29),n(248)),c=n(249),i=n(250),u=n(251),l=n(302),s=n(0),f=n.n(s);function d(){return f.a.createElement("main",null,f.a.createElement(a.a,null,f.a.createElement("title",null,"Home page")),f.a.createElement("h1",null,"List of posts"),f.a.createElement("section",null,f.a.createElement(o.a,{color:"light",light:!0,expand:"md"},f.a.createElement(c.a,{href:"/"}," Blog"),f.a.createElement(i.a,{className:"mr-auto",navbar:!0},f.a.createElement(u.a,null,f.a.createElement(l.a,{href:"/post/[groups]"},"Groups"))))))}},248:function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(0),c=n.n(o),i=n(1),u=n.n(i),l=n(7),s=n.n(l),f=n(2),d={light:u.a.bool,dark:u.a.bool,full:u.a.bool,fixed:u.a.string,sticky:u.a.string,color:u.a.string,role:u.a.string,tag:f.b,className:u.a.string,cssModule:u.a.object,expand:u.a.oneOfType([u.a.bool,u.a.string])},b=function(e){var t,n=e.expand,o=e.className,i=e.cssModule,u=e.light,l=e.dark,d=e.fixed,b=e.sticky,p=e.color,g=e.tag,v=Object(a.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),y=Object(f.a)(s()(o,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":u,"navbar-dark":l})["bg-"+p]=p,t["fixed-"+d]=d,t["sticky-"+b]=b,t)),i);return c.a.createElement(g,Object(r.a)({},v,{className:y}))};b.propTypes=d,b.defaultProps={tag:"nav",expand:!1},t.a=b},249:function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(0),c=n.n(o),i=n(1),u=n.n(i),l=n(7),s=n.n(l),f=n(2),d={tag:f.b,className:u.a.string,cssModule:u.a.object},b=function(e){var t=e.className,n=e.cssModule,o=e.tag,i=Object(a.a)(e,["className","cssModule","tag"]),u=Object(f.a)(s()(t,"navbar-brand"),n);return c.a.createElement(o,Object(r.a)({},i,{className:u}))};b.propTypes=d,b.defaultProps={tag:"a"},t.a=b},250:function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(0),c=n.n(o),i=n(1),u=n.n(i),l=n(7),s=n.n(l),f=n(2),d={tabs:u.a.bool,pills:u.a.bool,vertical:u.a.oneOfType([u.a.bool,u.a.string]),horizontal:u.a.string,justified:u.a.bool,fill:u.a.bool,navbar:u.a.bool,card:u.a.bool,tag:f.b,className:u.a.string,cssModule:u.a.object},b=function(e){var t=e.className,n=e.cssModule,o=e.tabs,i=e.pills,u=e.vertical,l=e.horizontal,d=e.justified,b=e.fill,p=e.navbar,g=e.card,v=e.tag,y=Object(a.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(f.a)(s()(t,p?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(u),{"nav-tabs":o,"card-header-tabs":g&&o,"nav-pills":i,"card-header-pills":g&&i,"nav-justified":d,"nav-fill":b}),n);return c.a.createElement(v,Object(r.a)({},y,{className:m}))};b.propTypes=d,b.defaultProps={tag:"ul",vertical:!1},t.a=b},251:function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(0),c=n.n(o),i=n(1),u=n.n(i),l=n(7),s=n.n(l),f=n(2),d={tag:f.b,active:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){var t=e.className,n=e.cssModule,o=e.active,i=e.tag,u=Object(a.a)(e,["className","cssModule","active","tag"]),l=Object(f.a)(s()(t,"nav-item",!!o&&"active"),n);return c.a.createElement(i,Object(r.a)({},u,{className:l}))};b.propTypes=d,b.defaultProps={tag:"li"},t.a=b},29:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(4);function a(){var e=Object(r.b)();return{isLoggedIn:e.isLoggedIn,setIsLoggedIn:e.setIsLoggedIn,logout:e.logout,account:e.account}}function o(){var e=Object(r.b)(),t=e.accounts,n=e.gigyaNotLoaded;return t?{login:function(e){return t.auth.fido.login({callback:console.log})},register:function(e){return t.auth.fido.register({callback:console.log})}}:{login:n,register:n}}},302:function(e,t,n){"use strict";var r=n(5),a=n(6);var o=n(0),c=n.n(o),i=n(1),u=n.n(i),l=n(7),s=n.n(l),f=n(2),d={tag:f.b,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},b=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},i.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.active,i=e.tag,u=e.innerRef,l=Object(a.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(f.a)(s()(t,"nav-link",{disabled:l.disabled,active:o}),n);return c.a.createElement(i,Object(r.a)({},l,{ref:u,onClick:this.onClick,className:d}))},o}(c.a.Component);b.propTypes=d,b.defaultProps={tag:"a"};t.a=b},4:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var r=n(0);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object(r.createContext)({isLoggedIn:!1});var o=Object(r.createContext)({isLoggedIn:!1});function c(){var e=Object(r.useContext)(o);return e&&e.socialize&&e.accounts?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},e,{socialize:e.socialize,accounts:e.accounts}):{isLoggedIn:!1,gigyaNotLoaded:function(){return console.log("gigya is not loaded")}}}},48:function(e,t,n){e.exports=n(91)},5:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return r})},6:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",function(){return r})},7:function(e,t,n){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}void 0!==e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8:function(e,t,n){"use strict";var r=n(4),a=n(0),o=n.n(a);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){var t=e.domain,n=e.apiKey,i=e.children,l=u(Object(a.useState)(!1),2),s=l[0],f=l[1],d=u(Object(a.useState)(),2),b=d[0],p=d[1],g=u(Object(a.useState)(!1),2),v=g[0],y=g[1],m=function(){window.gigya.accounts.getAccountInfo({callback:function(e){0===e.errorCode&&(y(e),f(!0)),p(window.gigya)}}),window.gigya.socialize.addEventHandlers({onLogin:O,onLogout:j})},O=function(){f(!0)},j=function(){f(!1)};return Object(a.useEffect)(function(){window.onGigyaServiceReady=m}),Object(a.useEffect)(function(){var e=document.createElement("script");return e.src="https://cdns.".concat(t,"/js/gigya.js?apikey=").concat(n),e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}},[t,n]),o.a.createElement(r.a.Provider,{value:c({},b,{isLoggedIn:s,setIsLoggedIn:f,account:v})},i)}var f=n(29);function d(e){var t=e.children,n=Object(f.b)().isLoggedIn;return o.a.createElement("div",null," ",n?o.a.createElement("div",null,t):o.a.createElement(o.a.Fragment,null))}function b(e){var t=e.children,n=Object(f.b)().isLoggedIn;return o.a.createElement("div",null," ",n?o.a.createElement(o.a.Fragment,null):o.a.createElement("div",null,t))}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,a){var o=Object(r.b)();return function(){o&&o.accounts&&o.accounts.showScreenSet(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}({screenSet:e,startScreen:t,containerID:n},a))}}var v=n(14);n.d(t,"b",function(){return s}),n.d(t,"f",function(){return f.b}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"g",function(){return g}),n.d(t,"d",function(){return v.b}),n.d(t,"e",function(){return v.c})}},[[234,1,0]]]);