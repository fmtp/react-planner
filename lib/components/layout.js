'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      rest = _objectWithoutProperties(_ref, ['width', 'height']);

  var toolbarWidth = 50;
  var sidebarWidth = 300;
  var contentWidth = width - toolbarWidth - sidebarWidth;

  var footerBarHeight = 20;
  var toolbarHeight = height - footerBarHeight;
  var contentHeight = height - footerBarHeight;
  var sidebarHeight = height - footerBarHeight;

  return _react2.default.createElement(
    'div',
    { style: { display: "flex", flexFlow: "row nowrap", height: height } },
    _react2.default.createElement(_toolbar2.default, _extends({ width: toolbarWidth, height: toolbarHeight }, rest)),
    _react2.default.createElement(_content2.default, _extends({ width: contentWidth, height: contentHeight }, rest, { onWheel: function onWheel(event) {
        return event.preventDefault();
      } })),
    _react2.default.createElement(_sidebar2.default, _extends({ width: sidebarWidth, height: sidebarHeight }, rest)),
    _react2.default.createElement(_footerbar2.default, _extends({ width: width, height: footerBarHeight }, rest))
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toolbar = require('./toolbar/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _sidebar = require('./sidebar/sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _footerbar = require('./footerbar/footerbar');

var _footerbar2 = _interopRequireDefault(_footerbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }