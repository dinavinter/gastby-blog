webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-text-loop */ "./node_modules/react-text-loop/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player/lib/players/YouTube */ "./node_modules/react-player/lib/players/YouTube.js");
/* harmony import */ var react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\dina\\demo\\blog-dimenssion\\components\\Post.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Post(_ref) {
  var children = _ref.children,
      video = _ref.video,
      title = _ref.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('text'),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var goToVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "minimize",
    onClick: function onClick() {
      setActive('video');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  });
  var goToText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "maximize",
    onClick: function onClick() {
      setActive('text');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 20
    }
  });
  var textDisplay = active === 'text' ? 'block' : 'none';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "video_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "".concat(video, "-text"),
    className: "video_overlays ".concat(active === 'text' ? 'active' : '', " timeout"),
    style: {
      display: textDisplay
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_text_loop__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interval: 2000,
    width: "640",
    height: "480",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, children)), goToVideo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: video,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Watch In YouTube"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: "640",
    height: "480",
    url: "https://www.youtube.com/watch?v=".concat(video),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }))));
}

function Post2(_ref2) {
  var children = _ref2.children,
      video = _ref2.video,
      title = _ref2.title;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('text'),
      _useState4 = _slicedToArray(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var goToVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "close",
    onClick: function onClick() {
      setActive('video');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Go to Video");
  var goToText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: function onClick() {
      setActive('text');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 20
    }
  }, "Go to Titles");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "major",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: video,
    style: {
      display: 'flex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    id: "".concat(video, "-text"),
    className: "".concat(active === 'text' ? 'active' : '', " timeout"),
    style: {
      display: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, goToVideo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_text_loop__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interval: 2000,
    width: "640",
    height: "480",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, children))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    id: "".concat(video, "-vid"),
    className: "active timeout",
    style: {
      display: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("video", {
    width: "640",
    height: "480",
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("source", {
    src: video,
    type: "video/mp4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }), goToText))));
}

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-player/lib/Player.js":
/*!*************************************************!*\
  !*** ./node_modules/react-player/lib/Player.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-player/node_modules/react-fast-compare/index.js"));

var _props = __webpack_require__(/*! ./props */ "./node_modules/react-player/lib/props.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEEK_ON_PLAY_EXPIRY = 5000;

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "isReady", false);

    _defineProperty(_assertThisInitialized(_this), "isPlaying", false);

    _defineProperty(_assertThisInitialized(_this), "isLoading", true);

    _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);

    _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);

    _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);

    _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);

    _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function (player) {
      _this.player = player;

      _this.player.load(_this.props.url);

      _this.progress();
    });

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
      if (!_this.player) return null;
      return _this.player[key];
    });

    _defineProperty(_assertThisInitialized(_this), "progress", function () {
      if (_this.props.url && _this.player && _this.isReady) {
        var playedSeconds = _this.getCurrentTime() || 0;

        var loadedSeconds = _this.getSecondsLoaded();

        var duration = _this.getDuration();

        if (duration) {
          var progress = {
            playedSeconds: playedSeconds,
            played: playedSeconds / duration
          };

          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          } // Only call onProgress if values have changed


          if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
            _this.props.onProgress(progress);
          }

          _this.prevPlayed = progress.playedSeconds;
          _this.prevLoaded = progress.loadedSeconds;
        }
      }

      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
      if (!_this.mounted) return;
      _this.isReady = true;
      _this.isLoading = false;
      var _this$props = _this.props,
          onReady = _this$props.onReady,
          playing = _this$props.playing,
          volume = _this$props.volume,
          muted = _this$props.muted;
      onReady();

      if (!muted && volume !== null) {
        _this.player.setVolume(volume);
      }

      if (_this.loadOnReady) {
        _this.player.load(_this.loadOnReady, true);

        _this.loadOnReady = null;
      } else if (playing) {
        _this.player.play();
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
      _this.isPlaying = true;
      _this.isLoading = false;
      var _this$props2 = _this.props,
          onStart = _this$props2.onStart,
          onPlay = _this$props2.onPlay,
          playbackRate = _this$props2.playbackRate;

      if (_this.startOnPlay) {
        if (_this.player.setPlaybackRate && playbackRate !== 1) {
          _this.player.setPlaybackRate(playbackRate);
        }

        onStart();
        _this.startOnPlay = false;
      }

      onPlay();

      if (_this.seekOnPlay) {
        _this.seekTo(_this.seekOnPlay);

        _this.seekOnPlay = null;
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
      _this.isPlaying = false;

      if (!_this.isLoading) {
        _this.props.onPause(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
      var _this$props3 = _this.props,
          activePlayer = _this$props3.activePlayer,
          loop = _this$props3.loop,
          onEnded = _this$props3.onEnded;

      if (activePlayer.loopOnEnded && loop) {
        _this.seekTo(0);
      }

      if (!loop) {
        _this.isPlaying = false;
        onEnded();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      var _this$props4;

      _this.isLoading = false;

      (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
      clearTimeout(_this.durationCheckTimeout);

      var duration = _this.getDuration();

      if (duration) {
        if (!_this.onDurationCalled) {
          _this.props.onDuration(duration);

          _this.onDurationCalled = true;
        }
      } else {
        _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
      // Sometimes we know loading has stopped but onReady/onPlay are never called
      // so this provides a way for players to avoid getting stuck
      _this.isLoading = false;
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.progressTimeout);
      clearTimeout(this.durationCheckTimeout);

      if (this.isReady && this.props.stopOnUnmount) {
        this.player.stop();

        if (this.player.disablePIP) {
          this.player.disablePIP();
        }
      }

      this.mounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // If there isn’t a player available, don’t do anything
      if (!this.player) {
        return;
      } // Invoke player methods based on changed props


      var _this$props5 = this.props,
          url = _this$props5.url,
          playing = _this$props5.playing,
          volume = _this$props5.volume,
          muted = _this$props5.muted,
          playbackRate = _this$props5.playbackRate,
          pip = _this$props5.pip,
          loop = _this$props5.loop,
          activePlayer = _this$props5.activePlayer;

      if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
        if (this.isLoading && !activePlayer.forceLoad) {
          console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
          this.loadOnReady = url;
          return;
        }

        this.isLoading = true;
        this.startOnPlay = true;
        this.onDurationCalled = false;
        this.player.load(url, this.isReady);
      }

      if (!prevProps.playing && playing && !this.isPlaying) {
        this.player.play();
      }

      if (prevProps.playing && !playing && this.isPlaying) {
        this.player.pause();
      }

      if (!prevProps.pip && pip && this.player.enablePIP) {
        this.player.enablePIP();
      }

      if (prevProps.pip && !pip && this.player.disablePIP) {
        this.player.disablePIP();
      }

      if (prevProps.volume !== volume && volume !== null) {
        this.player.setVolume(volume);
      }

      if (prevProps.muted !== muted) {
        if (muted) {
          this.player.mute();
        } else {
          this.player.unmute();

          if (volume !== null) {
            // Set volume next tick to fix a bug with DailyMotion
            setTimeout(function () {
              return _this2.player.setVolume(volume);
            });
          }
        }
      }

      if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
        this.player.setPlaybackRate(playbackRate);
      }

      if (prevProps.loop !== loop && this.player.setLoop) {
        this.player.setLoop(loop);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.isReady) return null;
      return this.player.getDuration();
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.isReady) return null;
      return this.player.getCurrentTime();
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.isReady) return null;
      return this.player.getSecondsLoaded();
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount, type) {
      var _this3 = this;

      // When seeking before player is ready, store value and seek later
      if (!this.isReady && amount !== 0) {
        this.seekOnPlay = amount;
        setTimeout(function () {
          _this3.seekOnPlay = null;
        }, SEEK_ON_PLAY_EXPIRY);
        return;
      }

      var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';

      if (isFraction) {
        // Convert fraction to seconds based on duration
        var duration = this.player.getDuration();

        if (!duration) {
          console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
          return;
        }

        this.player.seekTo(duration * amount);
        return;
      }

      this.player.seekTo(amount);
    }
  }, {
    key: "render",
    value: function render() {
      var Player = this.props.activePlayer;

      if (!Player) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }));
    }
  }]);

  return Player;
}(_react.Component);

exports["default"] = Player;

_defineProperty(Player, "displayName", 'Player');

_defineProperty(Player, "propTypes", _props.propTypes);

_defineProperty(Player, "defaultProps", _props.defaultProps);

/***/ }),

/***/ "./node_modules/react-player/lib/Preview.js":
/*!**************************************************!*\
  !*** ./node_modules/react-player/lib/Preview.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_SIZE = '64px';
var cache = {};

var Preview = /*#__PURE__*/function (_Component) {
  _inherits(Preview, _Component);

  var _super = _createSuper(Preview);

  function Preview() {
    var _this;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      image: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onClick();
      }
    });

    return _this;
  }

  _createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.fetchImage(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          url = _this$props.url,
          light = _this$props.light;

      if (prevProps.url !== url || prevProps.light !== light) {
        this.fetchImage(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "fetchImage",
    value: function fetchImage(_ref) {
      var _this2 = this;

      var url = _ref.url,
          light = _ref.light;

      if (typeof light === 'string') {
        this.setState({
          image: light
        });
        return;
      }

      if (cache[url]) {
        this.setState({
          image: cache[url]
        });
        return;
      }

      this.setState({
        image: null
      });
      return window.fetch("https://noembed.com/embed?url=".concat(url)).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.thumbnail_url && _this2.mounted) {
          var image = data.thumbnail_url.replace('height=100', 'height=480');

          _this2.setState({
            image: image
          });

          cache[url] = image;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          playIcon = _this$props2.playIcon,
          previewTabIndex = _this$props2.previewTabIndex;
      var image = this.state.image;
      var flexCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
      var styles = {
        preview: _objectSpread({
          width: '100%',
          height: '100%',
          backgroundImage: image ? "url(".concat(image, ")") : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer'
        }, flexCenter),
        shadow: _objectSpread({
          background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE
        }, flexCenter),
        playIcon: {
          borderStyle: 'solid',
          borderWidth: '16px 0 16px 26px',
          borderColor: 'transparent transparent transparent white',
          marginLeft: '7px'
        }
      };

      var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.shadow,
        className: "react-player__shadow"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.playIcon,
        className: "react-player__play-icon"
      }));

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.preview,
        className: "react-player__preview",
        onClick: onClick,
        tabIndex: previewTabIndex,
        onKeyPress: this.handleKeyPress
      }, playIcon || defaultPlayIcon);
    }
  }]);

  return Preview;
}(_react.Component);

exports["default"] = Preview;

/***/ }),

/***/ "./node_modules/react-player/lib/ReactPlayer.js":
/*!******************************************************!*\
  !*** ./node_modules/react-player/lib/ReactPlayer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReactPlayer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-player/node_modules/react-fast-compare/index.js"));

var _props = __webpack_require__(/*! ./props */ "./node_modules/react-player/lib/props.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-player/lib/utils.js");

var _Player3 = _interopRequireDefault(__webpack_require__(/*! ./Player */ "./node_modules/react-player/lib/Player.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(__webpack_require__(/*! ./Preview */ "./node_modules/react-player/lib/Preview.js"));
  });
});
var IS_BROWSER = typeof window !== 'undefined' && window.document;
var IS_GLOBAL = typeof global !== 'undefined' && global.window && global.window.document;
var SUPPORTED_PROPS = Object.keys(_props.propTypes); // Return null when rendering on the server
// as Suspense is not supported yet

var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function () {
  return null;
};
var customPlayers = [];

var createReactPlayer = function createReactPlayer(players, fallback) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(ReactPlayer, _Component);

    var _super = _createSuper(ReactPlayer);

    function ReactPlayer() {
      var _this;

      _classCallCheck(this, ReactPlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        showPreview: !!_this.props.light
      });

      _defineProperty(_assertThisInitialized(_this), "references", {
        wrapper: function wrapper(_wrapper) {
          _this.wrapper = _wrapper;
        },
        player: function player(_player) {
          _this.player = _player;
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function (e) {
        _this.setState({
          showPreview: false
        });

        _this.props.onClickPreview(e);
      });

      _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
        _this.setState({
          showPreview: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
        if (!_this.player) return null;
        return _this.player.getDuration();
      });

      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
        if (!_this.player) return null;
        return _this.player.getCurrentTime();
      });

      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
        if (!_this.player) return null;
        return _this.player.getSecondsLoaded();
      });

      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
        if (!_this.player) return null;
        return _this.player.getInternalPlayer(key);
      });

      _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
        if (!_this.player) return null;

        _this.player.seekTo(fraction, type);
      });

      _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
        _this.props.onReady(_assertThisInitialized(_this));
      });

      _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function (url) {
        for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players)); _i < _arr.length; _i++) {
          var player = _arr[_i];

          if (player.canPlay(url)) {
            return player;
          }
        }

        if (fallback) {
          return fallback;
        }

        return null;
      }));

      _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function (url, key) {
        var config = _this.props.config;
        return _deepmerge["default"].all([_props.defaultProps.config, _props.defaultProps.config[key] || {}, config, config[key] || {}]);
      }));

      _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function (url) {
        return (0, _utils.omit)(_this.props, SUPPORTED_PROPS);
      }));

      _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function (url) {
        if (!url) return null;

        var player = _this.getActivePlayer(url);

        if (!player) return null;

        var config = _this.getConfig(url, player.key);

        return /*#__PURE__*/_react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
          key: player.key,
          ref: _this.references.player,
          config: config,
          activePlayer: player.lazyPlayer || player,
          onReady: _this.handleReady
        }));
      });

      return _this;
    }

    _createClass(ReactPlayer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var light = this.props.light;

        if (!prevProps.light && light) {
          this.setState({
            showPreview: true
          });
        }

        if (prevProps.light && !light) {
          this.setState({
            showPreview: false
          });
        }
      }
    }, {
      key: "renderPreview",
      value: function renderPreview(url) {
        if (!url) return null;
        var _this$props = this.props,
            light = _this$props.light,
            playIcon = _this$props.playIcon,
            previewTabIndex = _this$props.previewTabIndex;
        return /*#__PURE__*/_react["default"].createElement(Preview, {
          url: url,
          light: light,
          playIcon: playIcon,
          previewTabIndex: previewTabIndex,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            url = _this$props2.url,
            style = _this$props2.style,
            width = _this$props2.width,
            height = _this$props2.height,
            fallback = _this$props2.fallback,
            Wrapper = _this$props2.wrapper;
        var showPreview = this.state.showPreview;
        var attributes = this.getAttributes(url);
        return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
          ref: this.references.wrapper,
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: width,
            height: height
          })
        }, attributes), /*#__PURE__*/_react["default"].createElement(UniversalSuspense, {
          fallback: fallback
        }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
      }
    }]);

    return ReactPlayer;
  }(_react.Component), _defineProperty(_class, "displayName", 'ReactPlayer'), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "addCustomPlayer", function (player) {
    customPlayers.push(player);
  }), _defineProperty(_class, "removeCustomPlayers", function () {
    customPlayers.length = 0;
  }), _defineProperty(_class, "canPlay", function (url) {
    for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players)); _i2 < _arr2.length; _i2++) {
      var _Player = _arr2[_i2];

      if (_Player.canPlay(url)) {
        return true;
      }
    }

    return false;
  }), _defineProperty(_class, "canEnablePIP", function (url) {
    for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players)); _i3 < _arr3.length; _i3++) {
      var _Player2 = _arr3[_i3];

      if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
        return true;
      }
    }

    return false;
  }), _temp;
};

exports.createReactPlayer = createReactPlayer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-player/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-player/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _players = _interopRequireDefault(__webpack_require__(/*! ./players */ "./node_modules/react-player/lib/players/index.js"));

var _ReactPlayer = __webpack_require__(/*! ./ReactPlayer */ "./node_modules/react-player/lib/ReactPlayer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Fall back to FilePlayer if nothing else can play the URL
var fallback = _players["default"][_players["default"].length - 1];

var _default = (0, _ReactPlayer.createReactPlayer)(_players["default"], fallback);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-player/lib/players/DailyMotion.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lib/players/DailyMotion.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://api.dmcdn.net/all.js';
var SDK_GLOBAL = 'DM';
var SDK_GLOBAL_READY = 'dmAsyncInit';

var DailyMotion = /*#__PURE__*/function (_Component) {
  _inherits(DailyMotion, _Component);

  var _super = _createSuper(DailyMotion);

  function DailyMotion() {
    var _this;

    _classCallCheck(this, DailyMotion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
      var duration = _this.getDuration();

      _this.props.onDuration(duration);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(DailyMotion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          config = _this$props.config,
          onError = _this$props.onError,
          playing = _this$props.playing;

      var _url$match = url.match(_patterns.MATCH_URL_DAILYMOTION),
          _url$match2 = _slicedToArray(_url$match, 2),
          id = _url$match2[1];

      if (this.player) {
        this.player.load(id, {
          start: (0, _utils.parseStartTime)(url),
          autoplay: playing
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
        return DM.player;
      }).then(function (DM) {
        if (!_this2.container) return;
        var Player = DM.player;
        _this2.player = new Player(_this2.container, {
          width: '100%',
          height: '100%',
          video: id,
          params: _objectSpread({
            controls: controls,
            autoplay: _this2.props.playing,
            mute: _this2.props.muted,
            start: (0, _utils.parseStartTime)(url),
            origin: window.location.origin
          }, config.params),
          events: {
            apiready: _this2.props.onReady,
            seeked: function seeked() {
              return _this2.props.onSeek(_this2.player.currentTime);
            },
            video_end: _this2.props.onEnded,
            durationchange: _this2.onDurationChange,
            pause: _this2.props.onPause,
            playing: _this2.props.onPlay,
            waiting: _this2.props.onBuffer,
            error: function error(event) {
              return onError(event);
            }
          }
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.player.duration || null;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.player.bufferedTime;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return DailyMotion;
}(_react.Component);

exports["default"] = DailyMotion;

_defineProperty(DailyMotion, "displayName", 'DailyMotion');

_defineProperty(DailyMotion, "canPlay", _patterns.canPlay.dailymotion);

_defineProperty(DailyMotion, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Facebook.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Facebook.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
var SDK_GLOBAL = 'FB';
var SDK_GLOBAL_READY = 'fbAsyncInit';
var PLAYER_ID_PREFIX = 'facebook-player-';

var Facebook = /*#__PURE__*/function (_Component) {
  _inherits(Facebook, _Component);

  var _super = _createSuper(Facebook);

  function Facebook() {
    var _this;

    _classCallCheck(this, Facebook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Facebook, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      if (isReady) {
        (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
          return FB.XFBML.parse();
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
        FB.init({
          appId: _this2.props.config.appId,
          xfbml: true,
          version: _this2.props.config.version
        });
        FB.Event.subscribe('xfbml.render', function (msg) {
          // Here we know the SDK has loaded, even if onReady/onPlay
          // is not called due to a video that cannot be embedded
          _this2.props.onLoaded();
        });
        FB.Event.subscribe('xfbml.ready', function (msg) {
          if (msg.type === 'video' && msg.id === _this2.playerID) {
            _this2.player = msg.instance;

            _this2.player.subscribe('startedPlaying', _this2.props.onPlay);

            _this2.player.subscribe('paused', _this2.props.onPause);

            _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);

            _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);

            _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);

            _this2.player.subscribe('error', _this2.props.onError);

            if (_this2.props.muted) {
              _this2.callPlayer('mute');
            } else {
              _this2.callPlayer('unmute');
            }

            _this2.props.onReady(); // For some reason Facebook have added `visibility: hidden`
            // to the iframe when autoplay fails, so here we set it back


            document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
          }
        });
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentPosition');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.config.attributes;
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        style: style,
        id: this.playerID,
        className: "fb-video",
        "data-href": this.props.url,
        "data-autoplay": this.props.playing ? 'true' : 'false',
        "data-allowfullscreen": "true",
        "data-controls": this.props.controls ? 'true' : 'false'
      }, attributes));
    }
  }]);

  return Facebook;
}(_react.Component);

exports["default"] = Facebook;

_defineProperty(Facebook, "displayName", 'Facebook');

_defineProperty(Facebook, "canPlay", _patterns.canPlay.facebook);

_defineProperty(Facebook, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/FilePlayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/FilePlayer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HAS_NAVIGATOR = typeof navigator !== 'undefined';
var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
var FLV_GLOBAL = 'flvjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
      this.addListeners(this.player);

      if (IS_IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer, prevProps.url);
        this.addListeners(this.player);
      }

      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
        this.player.srcObject = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.addEventListener('canplay', this.onReady);
      }

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player, url) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.removeEventListener('canplay', this.onReady);
      }
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.forceVideo) {
        return false;
      }

      if (props.config.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      if (this.props.config.forceHLS) {
        return true;
      }

      if (IS_IOS) {
        return false;
      }

      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
    }
  }, {
    key: "shouldUseFLV",
    value: function shouldUseFLV(url) {
      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;

      if (this.hls) {
        this.hls.destroy();
      }

      if (this.dash) {
        this.dash.reset();
      }

      if (this.shouldUseHLS(url)) {
        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(hlsOptions);

          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            _this2.props.onReady();
          });

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
          } else {
            _this2.hls.loadSource(url);
          }

          _this2.hls.attachMedia(_this2.player);

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          if (parseInt(dashVersion) < 3) {
            _this2.dash.getDebug().setLogToBrowserConsole(false);
          } else {
            _this2.dash.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              }
            });
          }

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseFLV(url)) {
        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
          _this2.flv = flvjs.createPlayer({
            type: 'flv',
            url: url
          });

          _this2.flv.attachMediaElement(_this2.player);

          _this2.flv.load();

          _this2.props.onLoaded();
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, _utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);
      var useFLV = this.shouldUseFLV(url);

      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports["default"] = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Kaltura.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Kaltura.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';

var Kaltura = /*#__PURE__*/function (_Component) {
  _inherits(Kaltura, _Component);

  var _super = _createSuper(Kaltura);

  function Kaltura() {
    var _this;

    _classCallCheck(this, Kaltura);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Kaltura, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.on('ready', function () {
          _this2.player.isReady = true;

          _this2.player.on('play', _this2.props.onPlay);

          _this2.player.on('pause', _this2.props.onPause);

          _this2.player.on('seeked', _this2.props.onSeek);

          _this2.player.on('ended', _this2.props.onEnded);

          _this2.player.on('error', _this2.props.onError);

          _this2.player.on('timeupdate', function (_ref) {
            var duration = _ref.duration,
                seconds = _ref.seconds;
            _this2.duration = duration;
            _this2.currentTime = seconds;
          });

          _this2.player.on('buffered', function (_ref2) {
            var percent = _ref2.percent;

            if (_this2.duration) {
              _this2.secondsLoaded = _this2.duration * percent;
            }
          });

          _this2.player.setLoop(_this2.props.loop);

          if (_this2.props.muted) {
            _this2.player.mute();
          }

          setTimeout(function () {
            _this2.props.onReady();
          });
        });
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: this.props.url,
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allowFullScreen: true,
        allow: "encrypted-media",
        referrerPolicy: "no-referrer-when-downgrade"
      });
    }
  }]);

  return Kaltura;
}(_react.Component);

exports["default"] = Kaltura;

_defineProperty(Kaltura, "displayName", 'Kaltura');

_defineProperty(Kaltura, "canPlay", _patterns.canPlay.kaltura);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Mixcloud.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Mixcloud.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
var SDK_GLOBAL = 'Mixcloud';

var Mixcloud = /*#__PURE__*/function (_Component) {
  _inherits(Mixcloud, _Component);

  var _super = _createSuper(Mixcloud);

  function Mixcloud() {
    var _this;

    _classCallCheck(this, Mixcloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Mixcloud, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
        _this2.player = Mixcloud.PlayerWidget(_this2.iframe);

        _this2.player.ready.then(function () {
          _this2.player.events.play.on(_this2.props.onPlay);

          _this2.player.events.pause.on(_this2.props.onPause);

          _this2.player.events.ended.on(_this2.props.onEnded);

          _this2.player.events.error.on(_this2.props.error);

          _this2.player.events.progress.on(function (seconds, duration) {
            _this2.currentTime = seconds;
            _this2.duration = duration;
          });

          _this2.props.onReady();
        });
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {// No volume support
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          config = _this$props.config;
      var id = url.match(_patterns.MATCH_URL_MIXCLOUD)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      var query = (0, _utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
        feed: "/".concat(id, "/")
      })); // We have to give the iframe a key here to prevent a
      // weird dialog appearing when loading a new track

      return /*#__PURE__*/_react["default"].createElement("iframe", {
        key: id,
        ref: this.ref,
        style: style,
        src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
        frameBorder: "0"
      });
    }
  }]);

  return Mixcloud;
}(_react.Component);

exports["default"] = Mixcloud;

_defineProperty(Mixcloud, "displayName", 'Mixcloud');

_defineProperty(Mixcloud, "canPlay", _patterns.canPlay.mixcloud);

_defineProperty(Mixcloud, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/SoundCloud.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/SoundCloud.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://w.soundcloud.com/player/api.js';
var SDK_GLOBAL = 'SC';

var SoundCloud = /*#__PURE__*/function (_Component) {
  _inherits(SoundCloud, _Component);

  var _super = _createSuper(SoundCloud);

  function SoundCloud() {
    var _this;

    _classCallCheck(this, SoundCloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(SoundCloud, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
        if (!_this2.iframe) return;
        var _SC$Widget$Events = SC.Widget.Events,
            PLAY = _SC$Widget$Events.PLAY,
            PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
            PAUSE = _SC$Widget$Events.PAUSE,
            FINISH = _SC$Widget$Events.FINISH,
            ERROR = _SC$Widget$Events.ERROR;

        if (!isReady) {
          _this2.player = SC.Widget(_this2.iframe);

          _this2.player.bind(PLAY, _this2.props.onPlay);

          _this2.player.bind(PAUSE, function () {
            var remaining = _this2.duration - _this2.currentTime;

            if (remaining < 0.05) {
              // Prevent onPause firing right before onEnded
              return;
            }

            _this2.props.onPause();
          });

          _this2.player.bind(PLAY_PROGRESS, function (e) {
            _this2.currentTime = e.currentPosition / 1000;
            _this2.fractionLoaded = e.loadedProgress;
          });

          _this2.player.bind(FINISH, function () {
            return _this2.props.onEnded();
          });

          _this2.player.bind(ERROR, function (e) {
            return _this2.props.onError(e);
          });
        }

        _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
          callback: function callback() {
            _this2.player.getDuration(function (duration) {
              _this2.duration = duration / 1000;

              _this2.props.onReady();
            });
          }
        }));
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seekTo', seconds * 1000);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.fractionLoaded * this.duration;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
        style: style,
        frameBorder: 0,
        allow: "autoplay"
      });
    }
  }]);

  return SoundCloud;
}(_react.Component);

exports["default"] = SoundCloud;

_defineProperty(SoundCloud, "displayName", 'SoundCloud');

_defineProperty(SoundCloud, "canPlay", _patterns.canPlay.soundcloud);

_defineProperty(SoundCloud, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Streamable.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/Streamable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';

var Streamable = /*#__PURE__*/function (_Component) {
  _inherits(Streamable, _Component);

  var _super = _createSuper(Streamable);

  function Streamable() {
    var _this;

    _classCallCheck(this, Streamable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Streamable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.setLoop(_this2.props.loop);

        _this2.player.on('ready', _this2.props.onReady);

        _this2.player.on('play', _this2.props.onPlay);

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', _this2.props.onSeek);

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var duration = _ref.duration,
              seconds = _ref.seconds;
          _this2.duration = duration;
          _this2.currentTime = seconds;
        });

        _this2.player.on('buffered', function (_ref2) {
          var percent = _ref2.percent;

          if (_this2.duration) {
            _this2.secondsLoaded = _this2.duration * percent;
          }
        });

        if (_this2.props.muted) {
          _this2.player.mute();
        }
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://streamable.com/o/".concat(id),
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allowFullScreen: true
      });
    }
  }]);

  return Streamable;
}(_react.Component);

exports["default"] = Streamable;

_defineProperty(Streamable, "displayName", 'Streamable');

_defineProperty(Streamable, "canPlay", _patterns.canPlay.streamable);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Twitch.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Twitch.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
var SDK_GLOBAL = 'Twitch';
var PLAYER_ID_PREFIX = 'twitch-player-';

var Twitch = /*#__PURE__*/function (_Component) {
  _inherits(Twitch, _Component);

  var _super = _createSuper(Twitch);

  function Twitch() {
    var _this;

    _classCallCheck(this, Twitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    return _this;
  }

  _createClass(Twitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props = this.props,
          playsinline = _this$props.playsinline,
          onError = _this$props.onError,
          config = _this$props.config,
          controls = _this$props.controls;

      var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);

      var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];

      if (isReady) {
        if (isChannel) {
          this.player.setChannel(id);
        } else {
          this.player.setVideo('v' + id);
        }

        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
        _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
          video: isChannel ? '' : id,
          channel: isChannel ? id : '',
          height: '100%',
          width: '100%',
          playsinline: playsinline,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
          controls: isChannel ? true : controls,
          time: (0, _utils.parseStartTime)(url)
        }, config.options));
        var _Twitch$Player = Twitch.Player,
            READY = _Twitch$Player.READY,
            PLAYING = _Twitch$Player.PLAYING,
            PAUSE = _Twitch$Player.PAUSE,
            ENDED = _Twitch$Player.ENDED,
            ONLINE = _Twitch$Player.ONLINE,
            OFFLINE = _Twitch$Player.OFFLINE;

        _this2.player.addEventListener(READY, _this2.props.onReady);

        _this2.player.addEventListener(PLAYING, _this2.props.onPlay);

        _this2.player.addEventListener(PAUSE, _this2.props.onPause);

        _this2.player.addEventListener(ENDED, _this2.props.onEnded); // Prevent weird isLoading behaviour when streams are offline


        _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);

        _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('pause');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        id: this.playerID
      });
    }
  }]);

  return Twitch;
}(_react.Component);

exports["default"] = Twitch;

_defineProperty(Twitch, "displayName", 'Twitch');

_defineProperty(Twitch, "canPlay", _patterns.canPlay.twitch);

_defineProperty(Twitch, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Vidyard.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vidyard.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://play.vidyard.com/embed/v4.js';
var SDK_GLOBAL = 'VidyardV4';
var SDK_GLOBAL_READY = 'onVidyardAPI';

var Vidyard = /*#__PURE__*/function (_Component) {
  _inherits(Vidyard, _Component);

  var _super = _createSuper(Vidyard);

  function Vidyard() {
    var _this;

    _classCallCheck(this, Vidyard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vidyard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          playing = _this$props.playing,
          config = _this$props.config,
          onError = _this$props.onError,
          onDuration = _this$props.onDuration;
      var id = url && url.match(_patterns.MATCH_URL_VIDYARD)[1];

      if (this.player) {
        this.stop();
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (Vidyard) {
        if (!_this2.container) return;
        Vidyard.api.addReadyListener(function (data, player) {
          _this2.player = player;

          _this2.player.on('ready', _this2.props.onReady);

          _this2.player.on('play', _this2.props.onPlay);

          _this2.player.on('pause', _this2.props.onPause);

          _this2.player.on('seek', _this2.props.onSeek);

          _this2.player.on('playerComplete', _this2.props.onEnded);
        }, id);
        Vidyard.api.renderPlayer(_objectSpread({
          uuid: id,
          container: _this2.container,
          autoplay: playing ? 1 : 0
        }, config.options));
        Vidyard.api.getPlayerMetadata(id).then(function (meta) {
          _this2.duration = meta.length_in_seconds;
          onDuration(meta.length_in_seconds);
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      window.VidyardV4.api.destroyPlayer(this.player);
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seek', amount);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackSpeed', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('currentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return Vidyard;
}(_react.Component);

exports["default"] = Vidyard;

_defineProperty(Vidyard, "displayName", 'Vidyard');

_defineProperty(Vidyard, "canPlay", _patterns.canPlay.vidyard);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Vimeo.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vimeo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.vimeo.com/api/player.js';
var SDK_GLOBAL = 'Vimeo';

var Vimeo = /*#__PURE__*/function (_Component) {
  _inherits(Vimeo, _Component);

  var _super = _createSuper(Vimeo);

  function Vimeo() {
    var _this;

    _classCallCheck(this, Vimeo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vimeo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      this.duration = null;
      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
        if (!_this2.container) return;
        _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
          url: url,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          loop: _this2.props.loop,
          playsinline: _this2.props.playsinline,
          controls: _this2.props.controls
        }, _this2.props.config.playerOptions));

        _this2.player.ready().then(function () {
          var iframe = _this2.container.querySelector('iframe');

          iframe.style.width = '100%';
          iframe.style.height = '100%';
        })["catch"](_this2.props.onError);

        _this2.player.on('loaded', function () {
          _this2.props.onReady();

          _this2.refreshDuration();
        });

        _this2.player.on('play', function () {
          _this2.props.onPlay();

          _this2.refreshDuration();
        });

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', function (e) {
          return _this2.props.onSeek(e.seconds);
        });

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var seconds = _ref.seconds;
          _this2.currentTime = seconds;
        });

        _this2.player.on('progress', function (_ref2) {
          var seconds = _ref2.seconds;
          _this2.secondsLoaded = seconds;
        });

        _this2.player.on('bufferstart', _this2.props.onBuffer);

        _this2.player.on('bufferend', _this2.props.onBufferEnd);
      }, this.props.onError);
    }
  }, {
    key: "refreshDuration",
    value: function refreshDuration() {
      var _this3 = this;

      this.player.getDuration().then(function (duration) {
        _this3.duration = duration;
      });
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.callPlayer('play');

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('unload');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.props.url,
        ref: this.ref,
        style: style
      });
    }
  }]);

  return Vimeo;
}(_react.Component);

exports["default"] = Vimeo;

_defineProperty(Vimeo, "displayName", 'Vimeo');

_defineProperty(Vimeo, "canPlay", _patterns.canPlay.vimeo);

_defineProperty(Vimeo, "forceLoad", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Wistia.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Wistia.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
var SDK_GLOBAL = 'Wistia';
var PLAYER_ID_PREFIX = 'wistia-player-';

var Wistia = /*#__PURE__*/function (_Component) {
  _inherits(Wistia, _Component);

  var _super = _createSuper(Wistia);

  function Wistia() {
    var _this;

    _classCallCheck(this, Wistia);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props;

      return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Wistia, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props5 = this.props,
          playing = _this$props5.playing,
          muted = _this$props5.muted,
          controls = _this$props5.controls,
          _onReady = _this$props5.onReady,
          config = _this$props5.config,
          onError = _this$props5.onError;
      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {
        if (config.customControls) {
          config.customControls.forEach(function (control) {
            return Wistia.defineControl(control);
          });
        }

        window._wq = window._wq || [];

        window._wq.push({
          id: _this2.playerID,
          options: _objectSpread({
            autoPlay: playing,
            silentAutoPlay: 'allow',
            muted: muted,
            controlsVisibleOnLoad: controls,
            fullscreenButton: controls,
            playbar: controls,
            playbackRateControl: controls,
            qualityControl: controls,
            volumeControl: controls,
            settingsControl: controls,
            smallPlayButton: controls
          }, config.options),
          onReady: function onReady(player) {
            _this2.player = player;

            _this2.unbind();

            _this2.player.bind('play', _this2.onPlay);

            _this2.player.bind('pause', _this2.onPause);

            _this2.player.bind('seek', _this2.onSeek);

            _this2.player.bind('end', _this2.onEnded);

            _onReady();
          }
        });
      }, onError);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.player.unbind('play', this.onPlay);
      this.player.unbind('pause', this.onPause);
      this.player.unbind('seek', this.onSeek);
      this.player.unbind('end', this.onEnded);
    } // Proxy methods to prevent listener leaks

  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.unbind();
      this.callPlayer('remove');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('time', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('volume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('playbackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('duration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('time');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];
      var className = "wistia_embed wistia_async_".concat(videoID);
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.playerID,
        key: videoID,
        className: className,
        style: style
      });
    }
  }]);

  return Wistia;
}(_react.Component);

exports["default"] = Wistia;

_defineProperty(Wistia, "displayName", 'Wistia');

_defineProperty(Wistia, "canPlay", _patterns.canPlay.wistia);

_defineProperty(Wistia, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  key: 'youtube',
  name: 'YouTube',
  canPlay: _patterns.canPlay.youtube,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./YouTube */ "./node_modules/react-player/lib/players/YouTube.js"));
    });
  })
}, {
  key: 'soundcloud',
  name: 'SoundCloud',
  canPlay: _patterns.canPlay.soundcloud,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./SoundCloud */ "./node_modules/react-player/lib/players/SoundCloud.js"));
    });
  })
}, {
  key: 'vimeo',
  name: 'Vimeo',
  canPlay: _patterns.canPlay.vimeo,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Vimeo */ "./node_modules/react-player/lib/players/Vimeo.js"));
    });
  })
}, {
  key: 'facebook',
  name: 'Facebook',
  canPlay: _patterns.canPlay.facebook,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Facebook */ "./node_modules/react-player/lib/players/Facebook.js"));
    });
  })
}, {
  key: 'streamable',
  name: 'Streamable',
  canPlay: _patterns.canPlay.streamable,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Streamable */ "./node_modules/react-player/lib/players/Streamable.js"));
    });
  })
}, {
  key: 'wistia',
  name: 'Wistia',
  canPlay: _patterns.canPlay.wistia,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Wistia */ "./node_modules/react-player/lib/players/Wistia.js"));
    });
  })
}, {
  key: 'twitch',
  name: 'Twitch',
  canPlay: _patterns.canPlay.twitch,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Twitch */ "./node_modules/react-player/lib/players/Twitch.js"));
    });
  })
}, {
  key: 'dailymotion',
  name: 'DailyMotion',
  canPlay: _patterns.canPlay.dailymotion,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./DailyMotion */ "./node_modules/react-player/lib/players/DailyMotion.js"));
    });
  })
}, {
  key: 'mixcloud',
  name: 'Mixcloud',
  canPlay: _patterns.canPlay.mixcloud,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Mixcloud */ "./node_modules/react-player/lib/players/Mixcloud.js"));
    });
  })
}, {
  key: 'vidyard',
  name: 'Vidyard',
  canPlay: _patterns.canPlay.vidyard,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Vidyard */ "./node_modules/react-player/lib/players/Vidyard.js"));
    });
  })
}, {
  key: 'kaltura',
  name: 'Kaltura',
  canPlay: _patterns.canPlay.kaltura,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Kaltura */ "./node_modules/react-player/lib/players/Kaltura.js"));
    });
  })
}, {
  key: 'file',
  name: 'FilePlayer',
  canPlay: _patterns.canPlay.file,
  canEnablePIP: function canEnablePIP(url) {
    return _patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, _utils.supportsWebKitPresentationMode)()) && !_patterns.AUDIO_EXTENSIONS.test(url);
  },
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./FilePlayer */ "./node_modules/react-player/lib/players/FilePlayer.js"));
    });
  })
}];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-player/lib/props.js":
/*!************************************************!*\
  !*** ./node_modules/react-player/lib/props.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
var propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string]),
  playIcon: node,
  previewTabIndex: number,
  fallback: node,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
exports.propTypes = propTypes;

var noop = function noop() {};

var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: 'div',
  previewTabIndex: 0,
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      }
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: '0.14.16',
      dashVersion: '3.1.3',
      flvVersion: '1.5.0'
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop
};
exports.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-player/node_modules/react-fast-compare/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-player/node_modules/react-fast-compare/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ })

})
//# sourceMappingURL=index.js.167b73e163c0d7aded46.hot-update.js.map