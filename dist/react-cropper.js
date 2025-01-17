"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cropperjs = _interopRequireDefault(require("cropperjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var optionProps = ['dragMode', 'aspectRatio', 'data', 'crop', // unchangeable props start from here
'viewMode', 'preview', 'responsive', 'restore', 'checkCrossOrigin', 'checkOrientation', 'modal', 'guides', 'center', 'highlight', 'background', 'autoCrop', 'autoCropArea', 'movable', 'rotatable', 'scalable', 'zoomable', 'zoomOnTouch', 'zoomOnWheel', 'wheelZoomRatio', 'cropBoxMovable', 'cropBoxResizable', 'toggleDragModeOnDblclick', 'minContainerWidth', 'minContainerHeight', 'minCanvasWidth', 'minCanvasHeight', 'minCropBoxWidth', 'minCropBoxHeight', 'ready', 'cropstart', 'cropmove', 'cropend', 'zoom'];
var unchangeableProps = optionProps.slice(4);

var ReactCropper =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactCropper, _Component);

  function ReactCropper() {
    _classCallCheck(this, ReactCropper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactCropper).apply(this, arguments));
  }

  _createClass(ReactCropper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var options = Object.keys(this.props).filter(function (propKey) {
        return optionProps.indexOf(propKey) !== -1;
      }).reduce(function (prevOptions, propKey) {
        return _extends({}, prevOptions, _defineProperty({}, propKey, _this.props[propKey]));
      }, {});
      this.cropper = new _cropperjs["default"](this.img, options);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.src !== this.props.src) {
        this.cropper.reset().clear().replace(nextProps.src);
      }

      if (nextProps.aspectRatio !== this.props.aspectRatio) {
        this.setAspectRatio(nextProps.aspectRatio);
      }

      if (nextProps.data !== this.props.data) {
        this.setData(nextProps.data);
      }

      if (nextProps.dragMode !== this.props.dragMode) {
        this.setDragMode(nextProps.dragMode);
      }

      if (nextProps.cropBoxData !== this.props.cropBoxData) {
        this.setCropBoxData(nextProps.cropBoxData);
      }

      if (nextProps.canvasData !== this.props.canvasData) {
        this.setCanvasData(nextProps.canvasData);
      }

      if (nextProps.moveTo !== this.props.moveTo) {
        if (nextProps.moveTo.length > 1) {
          this.moveTo(nextProps.moveTo[0], nextProps.moveTo[1]);
        } else {
          this.moveTo(nextProps.moveTo[0]);
        }
      }

      if (nextProps.zoomTo !== this.props.zoomTo) {
        this.zoomTo(nextProps.zoomTo);
      }

      if (nextProps.rotateTo !== this.props.rotateTo) {
        this.rotateTo(nextProps.rotateTo);
      }

      if (nextProps.scaleX !== this.props.scaleX) {
        this.scaleX(nextProps.scaleX);
      }

      if (nextProps.scaleY !== this.props.scaleY) {
        this.scaleY(nextProps.scaleY);
      }

      if (nextProps.enable !== this.props.enable) {
        if (nextProps.enable) {
          this.enable();
        } else {
          this.disable();
        }
      }

      Object.keys(nextProps).forEach(function (propKey) {
        var isDifferentVal = nextProps[propKey] !== _this2.props[propKey];
        var isUnchangeableProps = unchangeableProps.indexOf(propKey) !== -1;

        if (typeof nextProps[propKey] === 'function' && typeof _this2.props[propKey] === 'function') {
          isDifferentVal = nextProps[propKey].toString() !== _this2.props[propKey].toString();
        }

        if (isDifferentVal && isUnchangeableProps) {
          throw new Error("prop: ".concat(propKey, " can't be change after componentDidMount"));
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.img) {
        // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
        this.cropper.destroy();
        delete this.img;
        delete this.cropper;
      }
    }
  }, {
    key: "setDragMode",
    value: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }, {
    key: "setAspectRatio",
    value: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    }
  }, {
    key: "getCroppedCanvas",
    value: function getCroppedCanvas(options) {
      return this.cropper.getCroppedCanvas(options);
    }
  }, {
    key: "setCropBoxData",
    value: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    }
  }, {
    key: "getCropBoxData",
    value: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    }
  }, {
    key: "setCanvasData",
    value: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    }
  }, {
    key: "getCanvasData",
    value: function getCanvasData() {
      return this.cropper.getCanvasData();
    }
  }, {
    key: "getImageData",
    value: function getImageData() {
      return this.cropper.getImageData();
    }
  }, {
    key: "getContainerData",
    value: function getContainerData() {
      return this.cropper.getContainerData();
    }
  }, {
    key: "setData",
    value: function setData(data) {
      return this.cropper.setData(data);
    }
  }, {
    key: "getData",
    value: function getData(rounded) {
      return this.cropper.getData(rounded);
    }
  }, {
    key: "crop",
    value: function crop() {
      return this.cropper.crop();
    }
  }, {
    key: "move",
    value: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      return this.cropper.moveTo(x, y);
    }
  }, {
    key: "zoom",
    value: function zoom(ratio) {
      return this.cropper.zoom(ratio);
    }
  }, {
    key: "zoomTo",
    value: function zoomTo(ratio) {
      return this.cropper.zoomTo(ratio);
    }
  }, {
    key: "rotate",
    value: function rotate(degree) {
      return this.cropper.rotate(degree);
    }
  }, {
    key: "rotateTo",
    value: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    }
  }, {
    key: "enable",
    value: function enable() {
      return this.cropper.enable();
    }
  }, {
    key: "disable",
    value: function disable() {
      return this.cropper.disable();
    }
  }, {
    key: "reset",
    value: function reset() {
      return this.cropper.reset();
    }
  }, {
    key: "clear",
    value: function clear() {
      return this.cropper.clear();
    }
  }, {
    key: "replace",
    value: function replace(url, onlyColorChanged) {
      return this.cropper.replace(url, onlyColorChanged);
    }
  }, {
    key: "scale",
    value: function scale(scaleX, scaleY) {
      return this.cropper.scale(scaleX, scaleY);
    }
  }, {
    key: "scaleX",
    value: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    }
  }, {
    key: "scaleY",
    value: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          src = _this$props.src,
          alt = _this$props.alt,
          crossOrigin = _this$props.crossOrigin,
          style = _this$props.style,
          className = _this$props.className;
      return _react["default"].createElement("div", {
        style: style,
        className: className
      }, _react["default"].createElement("img", {
        crossOrigin: crossOrigin,
        ref: function ref(img) {
          _this3.img = img;
        },
        src: src,
        alt: alt === undefined ? 'picture' : alt,
        style: {
          opacity: 0
        }
      }));
    }
  }]);

  return ReactCropper;
}(_react.Component);

ReactCropper.propTypes = {
  style: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  className: _propTypes["default"].string,
  // react cropper options
  crossOrigin: _propTypes["default"].string,
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  // props of option can be changed after componentDidmount
  aspectRatio: _propTypes["default"].number,
  dragMode: _propTypes["default"].oneOf(['crop', 'move', 'none']),
  data: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number,
    width: _propTypes["default"].number,
    height: _propTypes["default"].number,
    rotate: _propTypes["default"].number,
    scaleX: _propTypes["default"].number,
    scaleY: _propTypes["default"].number
  }),
  scaleX: _propTypes["default"].number,
  scaleY: _propTypes["default"].number,
  enable: _propTypes["default"].bool,
  cropBoxData: _propTypes["default"].shape({
    left: _propTypes["default"].number,
    top: _propTypes["default"].number,
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }),
  canvasData: _propTypes["default"].shape({
    left: _propTypes["default"].number,
    top: _propTypes["default"].number,
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }),
  zoomTo: _propTypes["default"].number,
  moveTo: _propTypes["default"].arrayOf(_propTypes["default"].number),
  rotateTo: _propTypes["default"].number,
  // cropperjs options
  // https://github.com/fengyuanchen/cropperjs#options
  // aspectRatio, dragMode, data
  viewMode: _propTypes["default"].oneOf([0, 1, 2, 3]),
  preview: _propTypes["default"].string,
  responsive: _propTypes["default"].bool,
  restore: _propTypes["default"].bool,
  checkCrossOrigin: _propTypes["default"].bool,
  checkOrientation: _propTypes["default"].bool,
  modal: _propTypes["default"].bool,
  guides: _propTypes["default"].bool,
  center: _propTypes["default"].bool,
  highlight: _propTypes["default"].bool,
  background: _propTypes["default"].bool,
  autoCrop: _propTypes["default"].bool,
  autoCropArea: _propTypes["default"].number,
  movable: _propTypes["default"].bool,
  rotatable: _propTypes["default"].bool,
  scalable: _propTypes["default"].bool,
  zoomable: _propTypes["default"].bool,
  zoomOnTouch: _propTypes["default"].bool,
  zoomOnWheel: _propTypes["default"].bool,
  wheelZoomRatio: _propTypes["default"].number,
  cropBoxMovable: _propTypes["default"].bool,
  cropBoxResizable: _propTypes["default"].bool,
  toggleDragModeOnDblclick: _propTypes["default"].bool,
  minContainerWidth: _propTypes["default"].number,
  minContainerHeight: _propTypes["default"].number,
  minCanvasWidth: _propTypes["default"].number,
  minCanvasHeight: _propTypes["default"].number,
  minCropBoxWidth: _propTypes["default"].number,
  minCropBoxHeight: _propTypes["default"].number,
  ready: _propTypes["default"].func,
  cropstart: _propTypes["default"].func,
  cropmove: _propTypes["default"].func,
  cropend: _propTypes["default"].func,
  crop: _propTypes["default"].func,
  zoom: _propTypes["default"].func
};
ReactCropper.defaultProps = {
  src: null,
  dragMode: 'crop',
  data: null,
  scaleX: 1,
  scaleY: 1,
  enable: true,
  zoomTo: 1,
  rotateTo: 0
};
var _default = ReactCropper;
exports["default"] = _default;
