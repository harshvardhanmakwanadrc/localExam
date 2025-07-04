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
var SubmitTimedExamInstructions = function SubmitTimedExamInstructions() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submitExamInstructions.title",
        defaultMessage: "Are you sure that you want to submit your timed exam?"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submitExamInstructions.warningText",
        defaultMessage: "Make sure that you have selected \"Submit\" for each problem before you submit your exam."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submitExamInstructions.text",
        defaultMessage: "After you submit your exam, your exam will be graded."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: function onClick() {
        return dispatch((0, _data.submitExam)());
      },
      className: "mr-2",
      "data-testid": "end-exam-button",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submitExamInstructions.submit",
        defaultMessage: "Yes, submit my timed exam."
      })
    })]
  });
};
var _default = exports["default"] = SubmitTimedExamInstructions;
//# sourceMappingURL=SubmitTimedExamInstructions.js.map