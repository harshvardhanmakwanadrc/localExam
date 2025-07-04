"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _data = require("../../data");
var _SkipProctoredExamButton = _interopRequireDefault(require("./SkipProctoredExamButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var EntranceProctoredExamInstructions = function EntranceProctoredExamInstructions(_ref) {
  var skipProctoredExam = _ref.skipProctoredExam;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam,
    allowProctoringOptOut = _useSelector.allowProctoringOptOut;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _ref2 = exam || {},
    attempt = _ref2.attempt;
  var _attempt$total_time = attempt.total_time,
    totalTime = _attempt$total_time === void 0 ? 0 : _attempt$total_time;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [attempt.attempt_ready_to_resume ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        "data-testid": "proctored-exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.ReadyToResumeProctoredExamInstructions.title",
          defaultMessage: "Your exam is ready to be resumed."
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.ReadyToResumeProctoredExamInstructions.text",
          defaultMessage: "You will have {totalTime} to complete your exam.",
          values: {
            totalTime: totalTime
          }
        })
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h3",
      "data-testid": "proctored-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceProctoredExamInstructions.title",
        defaultMessage: "This exam is proctored"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceProctoredExamInstructions.text1",
        defaultMessage: 'To be eligible for credit or the program credential associated with this course, ' + 'you must pass the proctoring review for this exam.'
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mt-4 pl-md-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceProctoredExamInstructions.text2",
        defaultMessage: "You will be guided through steps to set up online proctoring software and verify your identity."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "pl-md-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        "data-testid": "start-exam-button",
        variant: "primary",
        onClick: function onClick() {
          return dispatch((0, _data.createProctoredExamAttempt)());
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.startExamInstructions.startExamButtonText",
          defaultMessage: "Continue to my proctored exam."
        })
      })
    }), allowProctoringOptOut && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SkipProctoredExamButton["default"], {
      handleClick: skipProctoredExam
    })]
  });
};
EntranceProctoredExamInstructions.propTypes = {
  skipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = EntranceProctoredExamInstructions;
//# sourceMappingURL=EntranceProctoredExamInstructions.js.map