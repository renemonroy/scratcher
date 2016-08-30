(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RUI"] = factory(require("react"));
	else
		root["RUI"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /* eslint-env browser */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _NUIScratcherClasses = __webpack_require__(4);
	
	var _NUIScratcherClasses2 = _interopRequireDefault(_NUIScratcherClasses);
	
	var _brush = __webpack_require__(5);
	
	var _brush2 = _interopRequireDefault(_brush);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(6);
	
	var NUIScratcher = (_temp = _class = function (_Component) {
	  _inherits(NUIScratcher, _Component);
	
	  function NUIScratcher(props) {
	    _classCallCheck(this, NUIScratcher);
	
	    var _this = _possibleConstructorReturn(this, (NUIScratcher.__proto__ || Object.getPrototypeOf(NUIScratcher)).call(this, props));
	
	    _this.state = {
	      previewImageLoaded: false,
	      largeImageLoaded: false
	    };
	    return _this;
	  }
	
	  _createClass(NUIScratcher, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.isDrawing = false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setImageInCanvas();
	      this.setBrushInCanvas();
	    }
	  }, {
	    key: 'setImageInCanvas',
	    value: function setImageInCanvas() {
	      var _this2 = this;
	
	      var image = this.props.image;
	      var _state = this.state;
	      var canvasWidth = _state.canvasWidth;
	      var canvasHeight = _state.canvasHeight;
	
	      var img = new Image(canvasWidth, canvasHeight);
	      this.ctx = this.canvas.getContext('2d');
	      img.onload = function () {
	        return _this2.ctx.drawImage(img, 0, 0, 375, 265);
	      };
	      img.crossOrigin = 'anonymous';
	      img.src = image;
	    }
	  }, {
	    key: 'setBrushInCanvas',
	    value: function setBrushInCanvas() {
	      this.brush = new Image();
	      this.brush.src = _brush2.default;
	    }
	  }, {
	    key: 'getMousePosition',
	    value: function getMousePosition(e, canvas) {
	      var offsetX = 0;
	      var offsetY = 0;
	      var c = canvas;
	      if (c.offsetParent !== undefined) {
	        do {
	          offsetX += c.offsetLeft;
	          offsetY += c.offsetTop;
	        } while ((c = c.offsetParent) !== null);
	      }
	      return {
	        x: (e.pageX || e.touches[0].clientX) - offsetX,
	        y: (e.pageY || e.touches[0].clientY) - offsetY
	      };
	    }
	  }, {
	    key: 'getDistanceBetween2Points',
	    value: function getDistanceBetween2Points(p1, p2) {
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: 'getAngleBetween2Points',
	    value: function getAngleBetween2Points(p1, p2) {
	      return Math.atan2(p2.x - p1.x, p2.y - p1.y);
	    }
	  }, {
	    key: 'getBlurForPreload',
	    value: function getBlurForPreload(percent) {
	      return (100 - percent * 100) / 5;
	    }
	  }, {
	    key: 'getFilledInPixels',
	    value: function getFilledInPixels(stride) {
	      var _props = this.props;
	      var canvasWidth = _props.canvasWidth;
	      var canvasHeight = _props.canvasHeight;
	
	      var strd = !stride || stride < 1 ? 1 : stride;
	      var pixels = this.ctx.getImageData(0, 0, canvasWidth, canvasHeight);
	      var pdata = pixels.data;
	      var l = pdata.length;
	      var total = l / stride;
	      var count = 0;
	      for (var i = count = 0; i < l; i += strd) {
	        if (parseInt(pdata[i], 10) === 0) {
	          count++;
	        }
	      }
	      return Math.round(count / total * 100);
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      this.isDrawing = true;
	      this.lastPoint = this.getMousePosition(e, this.canvas);
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(e) {
	      if (!this.isDrawing) return;
	      e.preventDefault();
	      var currentPoint = this.getMousePosition(e, this.canvas);
	      var dist = this.getDistanceBetween2Points(this.lastPoint, currentPoint);
	      var angle = this.getAngleBetween2Points(this.lastPoint, currentPoint);
	      var x = void 0;
	      var y = void 0;
	      for (var i = 0; i < dist; i++) {
	        x = this.lastPoint.x + Math.sin(angle) * i - 9;
	        y = this.lastPoint.y + Math.cos(angle) * i - 9;
	        this.ctx.globalCompositeOperation = 'destination-out';
	        this.ctx.drawImage(this.brush, x, y, 18, 18);
	      }
	      this.lastPoint = currentPoint;
	      this.handlePercentage(this.getFilledInPixels(32));
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	      this.isDrawing = false;
	    }
	  }, {
	    key: 'handlePercentage',
	    value: function handlePercentage(filledInPixels) {
	      var fip = (filledInPixels || 0) * 10;
	      var opacity = -(fip - 100) / 100;
	      this.canvas.style.opacity = fip > 75 ? 0 : opacity;
	    }
	  }, {
	    key: 'hasImageData',
	    value: function hasImageData() {
	      return Object.keys(this.props.image).length > 0;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props2 = this.props;
	      var canvasWidth = _props2.canvasWidth;
	      var canvasHeight = _props2.canvasHeight;
	      var mask = _props2.mask;
	      var preloader = _props2.preloader;
	      var _state2 = this.state;
	      var previewImageLoaded = _state2.previewImageLoaded;
	      var largeImageLoaded = _state2.largeImageLoaded;
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUIScratcher) },
	        this.hasImageData() ? _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUIImageLayer) },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUIImageRowWrapper) },
	            _react2.default.createElement(
	              'div',
	              { className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUIImageRow) },
	              _react2.default.createElement('img', {
	                src: preloader,
	                role: 'presentation',
	                onLoad: function onLoad() {
	                  return _this3.setState({ previewImageLoaded: true });
	                },
	                className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUIPreviewImage, previewImageLoaded ? 'loaded' : null)
	              }),
	              previewImageLoaded ? _react2.default.createElement('img', {
	                src: mask,
	                role: 'presentation',
	                onLoad: function onLoad() {
	                  return _this3.setState({ largeImageLoaded: true });
	                },
	                className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUIDefaultImage, largeImageLoaded ? 'loaded' : null),
	                style: { filter: 'blur(' + this.getBlurForPreload(1) + 'px)' }
	              }) : null
	            )
	          )
	        ) : null,
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUICanvasLayer) },
	          _react2.default.createElement('canvas', {
	            ref: function ref(c) {
	              _this3.canvas = c;
	            },
	            className: (0, _classnames2.default)(_NUIScratcherClasses2.default.NUICanvas),
	            width: canvasWidth,
	            height: canvasHeight,
	            onMouseDown: this.handleMouseDown.bind(this),
	            onTouchStart: this.handleMouseDown.bind(this),
	            onMouseMove: this.handleMouseMove.bind(this),
	            onTouchMove: this.handleMouseMove.bind(this),
	            onMouseUp: this.handleMouseUp.bind(this),
	            onTouchEnd: this.handleMouseUp.bind(this)
	          })
	        )
	      );
	    }
	  }]);
	
	  return NUIScratcher;
	}(_react.Component), _class.displayName = 'NUIScratcher', _class.propTypes = {
	  canvasWidth: _react.PropTypes.number,
	  canvasHeight: _react.PropTypes.number,
	  preloader: _react.PropTypes.string.isRequired,
	  image: _react.PropTypes.string.isRequired,
	  mask: _react.PropTypes.string.isRequired
	}, _class.defaultProps = {
	  canvasWidth: 375,
	  canvasHeight: 265
	}, _temp);
	exports.default = NUIScratcher;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(3)) === 'object' && __webpack_require__(3)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  NUIScratcher: {
	    'nui-scratcher': true
	  },
	  NUIImageLayer: {
	    'nui-scratcher-image-layer': true,
	    'ncss-container': true,
	    'fixed-fluid': true,
	    'p0-sm': true,
	    'u-sm-t': true,
	    'u-full-height': true
	  },
	  NUIImageRowWrapper: {
	    'u-sm-tc': true,
	    'u-align-center': true,
	    'u-sm-tr': true
	  },
	  NUIImageRow: {
	    'nui-scratcher-image-row': true,
	    'ncss-row': true,
	    'u-align-center': true,
	    'p0-sm': true,
	    'm0-sm': true
	  },
	  NUIPreviewImage: {
	    'nui-scratcher-preview-image': true
	  },
	  NUIDefaultImage: {
	    'nui-scratcher-default-image': true
	  },
	  NUICanvasLayer: {
	    'nui-scratcher-canvas-layer': true
	  },
	  NUICanvas: {
	    'nui-scratcher-canvas': true
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var brush = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAxCAYAAABNuS5SAAAAGXRFW\nHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY\n2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6e\nD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxN\nS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xO\nTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wP\nSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94Y\nXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZ\nVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NO\nkluc3RhbmNlSUQ9InhtcC5paWQ6QjEwMzNCRUY2NjQzMTFFNkJEODA5QzEzQkM4Nzk5QjYiIHhtcE1NOkRvY3VtZ\nW50SUQ9InhtcC5kaWQ6QjEwMzNCRjA2NjQzMTFFNkJEODA5QzEzQkM4Nzk5QjYiPiA8eG1wTU06RGVyaXZlZEZyb\n20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMTAzM0JFRDY2NDMxMUU2QkQ4MDlDMTNCQzg3OTlCNiIgc3RSZ\nWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMTAzM0JFRTY2NDMxMUU2QkQ4MDlDMTNCQzg3OTlCNiIvPiA8L3JkZjpEZ\nXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtwZaCAAAANJSURBV\nHja7JtbSBRRGMfPtomEBaVI2cUuZhBpStAFCqIbFFnQS/UYVvhSoAVF0MUIihK6PAQ9RNHlwSx6CMHo9hBUEBGRE\nD1UblDRUmBE2m5E2/9jPmEYXVg9c/nOzHzwY2d3ds7u/jyX75w5JnK5nIpj5DEqVhALjAWaHKN1Lp49Y6ZJv3Us2\nAJKwA6wCzweOPku1eO/QOExBqwDt/l5K9hrO7/VLjBuwoODhJ0FZaABNDvO19oqUSKKAoscv6MRHHe0rmngEbgFk\no7ry8FE0AVqAukDA4iNYCV4CVaDbjAP1IF6fk8xeM5CKebnKWsWeAKq+Lg7rAJbWNJ3sL+A9+8ZRg2u4uPKMNbAU\nq5Fp3T6qAJjSlgEUp+0GKznjn+yT59rtMBFYA33bfVc8/yOSSYIpH7sPHgIzvCAsBssEfBHLDNB4AKwnNnGI5+UG\nG9CHljqSCEkRYkJAqsFj/hJ6QKTPEhIjb/SBbaBuYIFZiQLPMSzCcnRJ2kUPsfzUVr9WMoCpUe/FIGUkDZxnzeHB\nRYZIPCPFIF1XPsoVihzIi2lD6xW5gU13+tSauB0AwVuAg+k1MCpBon7oKzlsnvgn4QaWAFWGSDuMzgNLoKfuoW5K\nZBu4JQLFtcLLnCalXarULcE7gSbhYr7BS4rawmtx+3C3RBIS0FHhU7PrnFzfevVh7ghsIH7P7/iPkjxiL8QTLCdo\n5voHZzIvwJvvP4ybghc64M02oP3DJwAnbbX6Z7JMmWtalONa9WZVQQhkNKgGh++J90wPzjE61+4xnUE1U/o5oHUf\nCo9/o60VndV6tCuK7Cf8yov4z0nvaEU+NvLEY6jS2msGEsXWKG8vS35iRN0FVaBTXnmv5fATc2yb/AI+zHMAoda8\nzsGtoN9YAOPnpRi3BlGubTE3ixdnhtpjHP5iuaah/k4xXTyQNDOOWNWWTuo6NraPPKojK8GLExoC7TfT32hBu8CH\nYh2frzLj0/BOHBEWVs8aP9yMc8yWli8ioLAH9wHZnhBIVvgdVmG9sYcUNbOANq58E1Z+wBVVAT28uNJnnuOdLWES\nCsDQ3cQyXCtaVMRDV2BCU43+qIqULcJXwGvVYQjEf+3ZrBNOBYYK9CL/wIMAHIoisNugCztAAAAAElFTkSuQmCC";
	
	exports.default = brush;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./NUIScratcher.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./NUIScratcher.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".nui-scratcher {\n  position: relative;\n  width: 375px;\n  height: 265px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.nui-scratcher-canvas-layer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.nui-scratcher-canvas-layer canvas {\n  transition: opacity 500ms linear;\n}\n.nui-scratcher-image-layer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n}\n.nui-scratcher-image-row {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.nui-scratcher-image-row > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  transition: opacity 500ms linear;\n  opacity: 0;\n  position: absolute;\n}\n.nui-scratcher-image-row > img.nui-scratcher-preview-image.loaded {\n  opacity: 0.35;\n}\n.nui-scratcher-image-row > img.nui-scratcher-default-image.loaded {\n  opacity: 1;\n}\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=rui.map