"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SubmittedTimedExamInstructions = function SubmittedTimedExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    timeIsOver = _useSelector.timeIsOver;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
    className: "h3",
    "data-testid": "exam.submittedExamInstructions.title",
    children: timeIsOver ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.submittedExamInstructions.overtimeTitle",
      defaultMessage: "The time allotted for this exam has expired. Your exam has been submitted and any work you completed will be graded."
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.submittedExamInstructions.title",
      defaultMessage: "You have submitted your timed exam."
    })
  });
};
var _default = exports["default"] = SubmittedTimedExamInstructions;
//# sourceMappingURL=SubmittedTimedExamInstructions.js.map