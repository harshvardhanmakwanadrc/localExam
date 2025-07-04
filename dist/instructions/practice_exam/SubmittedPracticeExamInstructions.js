"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _data = require("../../data");
var _constants = require("../../constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SubmittedPracticeExamInstructions = function SubmittedPracticeExamInstructions() {
  var _exam$attempt, _exam$attempt2;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam;

  // It does not show the reload button if the exam is submitted and not legacy
  var showRetryButton = !(((_exam$attempt = exam.attempt) === null || _exam$attempt === void 0 ? void 0 : _exam$attempt.attempt_status) === _constants.ExamStatus.SUBMITTED && !((_exam$attempt2 = exam.attempt) !== null && _exam$attempt2 !== void 0 && _exam$attempt2.use_legacy_attempt_api));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmittedOnboardingExamInstructions.title",
        defaultMessage: "You have submitted this practice proctored exam"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmittedProctoredExamInstructions.text1",
        defaultMessage: 'Practice exams do not affect your grade. You have ' + 'completed this practice exam and can continue with your course work.'
      })
    }), showRetryButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "retry-exam-button",
      variant: "primary",
      onClick: function onClick() {
        return dispatch((0, _data.resetExam)());
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmittedPracticeExamInstructions.retryExamButton",
        defaultMessage: "Retry my exam"
      })
    }) : null]
  });
};
var _default = exports["default"] = SubmittedPracticeExamInstructions;
//# sourceMappingURL=SubmittedPracticeExamInstructions.js.map