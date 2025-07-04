"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _constants = require("../constants");
var _onboarding_exam = require("./onboarding_exam");
var _proctored_exam = require("./proctored_exam");
var _Footer = _interopRequireDefault(require("./proctored_exam/Footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var VerifiedExamInstructions = function VerifiedExamInstructions(_ref) {
  var examType = _ref.examType;
  var renderInstructions = function renderInstructions() {
    switch (examType) {
      case _constants.ExamType.PROCTORED:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.VerifiedProctoredExamInstructions, {});
      case _constants.ExamType.PRACTICE:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.VerifiedProctoredExamInstructions, {});
      case _constants.ExamType.ONBOARDING:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_onboarding_exam.VerifiedOnboardingExamInstructions, {});
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: renderInstructions()
    }), examType !== _constants.ExamType.TIMED && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
VerifiedExamInstructions.propTypes = {
  examType: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = VerifiedExamInstructions;
//# sourceMappingURL=VerifiedInstructions.js.map