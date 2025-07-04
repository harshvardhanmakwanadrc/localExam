"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var VerifiedProctoredExamInstructions = function VerifiedProctoredExamInstructions() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "proctored-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.VerifiedProctoredExamInstructions.title",
        defaultMessage: 'Your proctoring session was reviewed successfully. ' + 'A final grade will be available soon.'
      })
    })
  });
};
var _default = exports["default"] = VerifiedProctoredExamInstructions;
//# sourceMappingURL=VerifiedProctoredExamInstructions.js.map