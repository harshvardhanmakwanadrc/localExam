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
var _Footer = _interopRequireDefault(require("./Footer"));
var _data = require("../../data");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SkipProctoredExamInstruction = function SkipProctoredExamInstruction(_ref) {
  var cancelSkipProctoredExam = _ref.cancelSkipProctoredExam;
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        "data-testid": "proctored-exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.skipProctoredExamInstructions.text1",
          defaultMessage: "Are you sure you want to take this exam without proctoring?"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.skipProctoredExamInstructions.text2",
          defaultMessage: 'If you take this exam without proctoring, you will not be eligible for ' + 'course credit or the MicroMasters credential if either applies to this course.'
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "mb-0",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          "data-testid": "skip-confirm-exam-button",
          variant: "primary",
          className: "mr-3 mb-2",
          onClick: function onClick() {
            return dispatch((0, _data.skipProctoringExam)());
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.entranceExamInstructions.skipConfirmExamButtonText1",
            defaultMessage: "Continue Exam Without Proctoring"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          "data-testid": "skip-cancel-exam-button",
          variant: "secondary",
          className: "mb-2",
          onClick: cancelSkipProctoredExam,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.entranceExamInstructions.skipCancelExamButtonText",
            defaultMessage: "Go Back"
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
SkipProctoredExamInstruction.propTypes = {
  cancelSkipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = SkipProctoredExamInstruction;
//# sourceMappingURL=SkipProctoredExamInstruction.js.map