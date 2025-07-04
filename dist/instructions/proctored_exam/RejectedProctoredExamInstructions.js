"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RejectedProctoredExamInstructions = function RejectedProctoredExamInstructions() {
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "proctored-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.RejectedProctoredExamInstructions.title",
        defaultMessage: "Your proctoring session was reviewed, but did not pass all requirements"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mb-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.RejectedProctoredExamInstructions.description",
        defaultMessage: 'If you have questions about the status of ' + 'your proctoring session results, contact {platformName} Support.',
        values: {
          platformName: platformName
        }
      })
    })]
  });
};
var _default = exports["default"] = RejectedProctoredExamInstructions;
//# sourceMappingURL=RejectedProctoredExamInstructions.js.map