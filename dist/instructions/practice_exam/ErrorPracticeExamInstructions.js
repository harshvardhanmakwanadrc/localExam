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
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ErrorPracticeExamInstructions = function ErrorPracticeExamInstructions() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorPracticeExamInstructions.title",
        defaultMessage: "There was a problem with your practice proctoring session"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
      className: "h4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorPracticeExamInstructions.title2",
        defaultMessage: "Your practice proctoring results: "
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-weight-bold",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.ErrorPracticeExamInstructions.title2.result",
          defaultMessage: "Unsatisfactory"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mb-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorPracticeExamInstructions.text",
        defaultMessage: 'Your proctoring session ended before you completed this practice exam. ' + 'You can retry this practice exam if you had problems setting up the online proctoring software.'
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "retry-exam-button",
      variant: "primary",
      onClick: function onClick() {
        return dispatch((0, _data.resetExam)());
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorOnboardingExamInstructions.retryExamButton",
        defaultMessage: "Retry my exam"
      })
    })]
  });
};
var _default = exports["default"] = ErrorPracticeExamInstructions;
//# sourceMappingURL=ErrorPracticeExamInstructions.js.map