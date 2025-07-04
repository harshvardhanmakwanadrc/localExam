"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ErrorProctoredExamInstructions = function ErrorProctoredExamInstructions() {
  var _ref = (0, _reactRedux.useSelector)(function (state) {
      var _state$specialExams;
      return (_state$specialExams = state.specialExams) === null || _state$specialExams === void 0 ? void 0 : _state$specialExams.proctoringSettings;
    }) || {},
    proctoringEscalationEmail = _ref.proctoring_escalation_email;
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  var contactUsUrl = (0, _frontendPlatform.getConfig)().CONTACT_URL;
  var renderBody = function renderBody() {
    if (proctoringEscalationEmail) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorProctoredExamInstructions.text1",
        defaultMessage: 'A system error has occurred with your proctored exam. ' + 'Please reach out to your course team at {supportLink} for assistance, ' + 'and return to the exam once you receive further instructions.',
        values: {
          supportLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.MailtoLink, {
            to: proctoringEscalationEmail,
            children: proctoringEscalationEmail
          })
        }
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.ErrorProctoredExamInstructions.text2",
      defaultMessage: 'A system error has occurred with your proctored exam. ' + 'Please reach out to {supportLink} for assistance, and return to ' + 'the exam once you receive further instructions.',
      values: {
        supportLink: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Hyperlink, {
          destination: contactUsUrl,
          target: "_blank",
          children: [platformName, " Support"]
        })
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorProctoredExamInstructions.title",
        defaultMessage: "Error with proctored exam"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mb-0",
      children: renderBody()
    })]
  });
};
var _default = exports["default"] = ErrorProctoredExamInstructions;
//# sourceMappingURL=ErrorProctoredExamInstructions.js.map