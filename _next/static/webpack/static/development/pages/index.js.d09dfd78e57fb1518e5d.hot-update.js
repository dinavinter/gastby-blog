webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faTwitter */ "./node_modules/@fortawesome/fontawesome-free-brands/faTwitter.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faTwitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faTwitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faFacebook */ "./node_modules/@fortawesome/fontawesome-free-brands/faFacebook.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faInstagram */ "./node_modules/@fortawesome/fontawesome-free-brands/faInstagram.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faGithub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faGithub */ "./node_modules/@fortawesome/fontawesome-free-brands/faGithub.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faGithub__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faGithub__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/groups */ "./components/post/groups.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-text-loop */ "./node_modules/react-text-loop/es/index.js");
/* harmony import */ var _post_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/about */ "./components/post/about.js");
/* harmony import */ var _post_idx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/idx */ "./components/post/idx.js");
/* harmony import */ var _post_oauth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/oauth */ "./components/post/oauth.js");
/* harmony import */ var _post_nss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/nss */ "./components/post/nss.js");
/* harmony import */ var _post_liteUI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/liteUI */ "./components/post/liteUI.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "D:\\dina\\demo\\blog-dimenssion\\components\\Main.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
















var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main() {
    _classCallCheck(this, Main);

    return _super.apply(this, arguments);
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this = this;

      var close = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "close",
        onClick: function onClick() {
          _this.props.onCloseArticle();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "main",
        style: this.props.timeout ? {
          display: 'flex'
        } : {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "intro",
        className: "".concat(this.props.article === 'about' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_post_about__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }), close), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "captcha",
        className: "".concat(this.props.article === 'captcha' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_post_about__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }), close), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "idx",
        className: "".concat(this.props.article === 'idx' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_post_idx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }), close), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "oauth",
        className: "".concat(this.props.article === 'groups' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_post_oauth__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }
      }), close), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "nss",
        className: "".concat(this.props.article === 'work' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_post_nss__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }), close), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "liteUi",
        className: "".concat(this.props.article === 'about' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_post_liteUI__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }), close), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        id: "gai",
        className: "".concat(this.props.article === 'contact' ? 'active' : '', " ").concat(this.props.articleTimeout ? 'timeout' : ''),
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GAI, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 20
        }
      }), close));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Main.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  article: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  articleTimeout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onCloseArticle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.d09dfd78e57fb1518e5d.hot-update.js.map