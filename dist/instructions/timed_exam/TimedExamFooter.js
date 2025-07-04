"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TimedExamFooter = function TimedExamFooter() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "footer-sequence",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.footerTitle",
        defaultMessage: "Can I request additional time to complete my exam?"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.footerText",
        defaultMessage: 'If you have disabilities, ' + 'you might be eligible for an additional time allowance on timed exams. ' + 'Ask your course team for information about additional time allowances.'
      })
    })]
  });
};
var _default = exports["default"] = TimedExamFooter;
//# sourceMappingURL=TimedExamFooter.js.map