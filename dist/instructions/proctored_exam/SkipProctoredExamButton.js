"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SkipProctoredExamButton = function SkipProctoredExamButton(_ref) {
  var handleClick = _ref.handleClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "start-exam-without-proctoring-button",
      variant: "link",
      onClick: handleClick,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.skipProctoredExamButton",
        defaultMessage: "Take this exam without proctoring."
      })
    })
  });
};
SkipProctoredExamButton.propTypes = {
  handleClick: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = SkipProctoredExamButton;
//# sourceMappingURL=SkipProctoredExamButton.js.map