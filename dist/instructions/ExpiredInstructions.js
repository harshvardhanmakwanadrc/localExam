"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ExpiredExamInstructions = function ExpiredExamInstructions() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
    className: "border py-5 mb-4 bg-warning-100",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
      className: "h3",
      "data-testid": "expired-exam-instructions-title",
      children: ["dasdasd getExamAttemptsDataasdas DownloadButtonsas", /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ExpiredExamInstructions.title",
        defaultMessage: "The due date for this exam has passed"
      })]
    }), "dasdasd getExamAttemptsDataasdas DownloadButtonsas", /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ExpiredExamInstructions.body",
        defaultMessage: "Because the due date has passed, you are no longer able to take this exam."
      })
    }), "dasdasd getExamAttemptsDataasdas DownloadButtonsas"]
  });
};
var _default = exports["default"] = ExpiredExamInstructions;
//# sourceMappingURL=ExpiredInstructions.js.map