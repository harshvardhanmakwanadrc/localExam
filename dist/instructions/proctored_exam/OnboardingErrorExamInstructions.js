"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _constants = require("../../constants");
var _Footer = _interopRequireDefault(require("./Footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var OnboardingErrorProctoredExamInstructions = function OnboardingErrorProctoredExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam,
    proctoringSettings = _useSelector.proctoringSettings;
  var attempt = exam.attempt,
    onboardingLink = exam.onboarding_link;
  var integrationSpecificEmail = proctoringSettings.integration_specific_email,
    providerName = proctoringSettings.provider_name;
  var renderBody = function renderBody() {
    switch (attempt.attempt_status) {
      case _constants.ExamStatus.ONBOARDING_MISSING:
      case _constants.ExamStatus.ONBOARDING_EXPIRED:
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            "data-testid": "onboarding_missing",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.OnboardingErrorProctoredExamInstructions.missingText",
              defaultMessage: "Please complete an onboarding exam before attempting this exam."
            })
          }), onboardingLink && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
            href: onboardingLink,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.OnboardingErrorProctoredExamInstructions.onboardingButtonText",
              defaultMessage: "Navigate to onboarding exam"
            })
          })]
        });
      case _constants.ExamStatus.ONBOARDING_PENDING:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          "data-testid": "onboarding_pending",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.OnboardingErrorProctoredExamInstructions.pendingText",
            defaultMessage: 'Your onboarding exam is being reviewed. Before attempting this exam,' + ' please allow 2+ business days for your onboarding exam to be reviewed.'
          })
        });
      case _constants.ExamStatus.ONBOARDING_FAILED:
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            "data-testid": "onboarding_failed",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.OnboardingErrorProctoredExamInstructions.failedText",
              defaultMessage: "Your onboarding exam failed to pass all requirements."
            })
          }), onboardingLink && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
            href: onboardingLink,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.OnboardingErrorProctoredExamInstructions.onboardingButtonText",
              defaultMessage: "Navigate to onboarding exam"
            })
          })]
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.title",
          defaultMessage: "You must complete an onboarding exam before taking this proctored exam"
        })
      }), renderBody(), integrationSpecificEmail && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "pt-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.providerInfo",
          defaultMessage: 'Proctoring for your exam is provided via {providerName}. ' + 'If you have questions about the status of your onboarding exam, contact ',
          values: {
            providerName: providerName
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.MailtoLink, {
          to: integrationSpecificEmail,
          children: integrationSpecificEmail
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
var _default = exports["default"] = OnboardingErrorProctoredExamInstructions;
//# sourceMappingURL=OnboardingErrorExamInstructions.js.map