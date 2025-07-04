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
var StartTimedExamInstructions = function StartTimedExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam;
  var dispatch = (0, _reactRedux.useDispatch)();
  var examDuration = exam.total_time;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h3",
      "data-testid": "exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.title",
        defaultMessage: "Subsection is a Timed Exam ({examDuration})",
        values: {
          examDuration: examDuration
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.text1",
        defaultMessage: "This exam has a time limit associated with it. "
      }), "dasdasdasd associatedd", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.startExamInstructions.text2",
          defaultMessage: "To pass this exam, you must complete the problems in the time allowed. "
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.text3",
        defaultMessage: 'After you select "I am ready to start this timed exam", ' + 'you will have {examDuration} to complete and submit the exam.',
        values: {
          examDuration: examDuration
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "start-exam-button",
      variant: "outline-primary",
      onClick: function onClick() {
        return dispatch((0, _data.startTimedExam)());
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.startExamButtonText",
        defaultMessage: "I am ready to start this timed exam."
      })
    })]
  });
};
var _default = exports["default"] = StartTimedExamInstructions;
//# sourceMappingURL=StartTimedExamInstructions.js.map