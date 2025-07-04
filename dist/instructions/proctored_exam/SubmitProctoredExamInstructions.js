"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _frontendPlatform = require("@edx/frontend-platform");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _constants = require("../../constants");
var _data = require("../../data");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SubmitProctoredExamInstructions = function SubmitProctoredExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam,
    activeAttempt = _useSelector.activeAttempt;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _ref = exam || {},
    examType = _ref.type,
    attempt = _ref.attempt;
  var examName = activeAttempt.exam_display_name;
  var examHasLtiProvider = !attempt.use_legacy_attempt_api;
  var submitLtiAttemptUrl = "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/lti/end_assessment/").concat(attempt.attempt_id);
  var handleSubmitClick = function handleSubmitClick() {
    if (examHasLtiProvider) {
      window.location.assign(submitLtiAttemptUrl);
    } else {
      dispatch((0, _data.submitExam)());
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "proctored-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmitProctoredExamInstructions.title",
        defaultMessage: "Are you sure you want to end your proctored exam?"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmitProctoredExamInstructions.warningText1",
          defaultMessage: "Make sure that you have selected \"Submit\" for each answer before you submit your exam."
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmitProctoredExamInstructions.warningText2",
          defaultMessage: 'Once you click "Yes, end my proctored exam", the exam will' + ' be closed, and your proctoring session will be submitted for review.'
        })
      })]
    }), examType === _constants.ExamType.ONBOARDING && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      "data-testid": "submit-onboarding-exam",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmitOnboardingExamInstructions.text",
        defaultMessage: 'You are taking "{examName}" as an ' + 'onboarding exam. You must click “Yes, end my proctored exam” ' + 'and submit your proctoring session to complete onboarding.',
        values: {
          examName: examName
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: handleSubmitClick,
      className: "mr-2",
      "data-testid": "end-exam-button",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmitProctoredExamInstructions.submit",
        defaultMessage: "Yes, end my proctored exam"
      })
    })]
  });
};
var _default = exports["default"] = SubmitProctoredExamInstructions;
//# sourceMappingURL=SubmitProctoredExamInstructions.js.map