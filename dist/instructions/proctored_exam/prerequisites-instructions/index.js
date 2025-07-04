"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _Pending = _interopRequireDefault(require("./Pending"));
var _Failed = _interopRequireDefault(require("./Failed"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PrerequisitesProctoredExamInstructions = function PrerequisitesProctoredExamInstructions(_ref) {
  var skipProctoredExam = _ref.skipProctoredExam;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam,
    allowProctoringOptOut = _useSelector.allowProctoringOptOut;
  var prerequisitesData = exam.prerequisite_status;
  var pending = prerequisitesData.pending_prerequisites,
    failed = prerequisitesData.failed_prerequisites;
  var child = null;
  if (failed && failed.length > 0) {
    child = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Failed["default"], {
      prerequisites: failed,
      allowProctoringOptOut: allowProctoringOptOut,
      skipProctoredExam: skipProctoredExam
    });
  } else if (pending && pending.length > 0) {
    child = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pending["default"], {
      prerequisites: pending,
      allowProctoringOptOut: allowProctoringOptOut,
      skipProctoredExam: skipProctoredExam
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        "data-testid": "exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.EntranceProctoredExamInstructions.title",
          defaultMessage: "This exam is proctored"
        })
      }), child]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
PrerequisitesProctoredExamInstructions.propTypes = {
  skipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = PrerequisitesProctoredExamInstructions;
//# sourceMappingURL=index.js.map