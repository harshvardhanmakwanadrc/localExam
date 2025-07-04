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
var EntranceOnboardingExamInstructions = function EntranceOnboardingExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    proctoringSettings = _useSelector.proctoringSettings;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _ref = proctoringSettings || {},
    providerName = _ref.provider_name,
    learnerNotificationFromEmail = _ref.learner_notification_from_email,
    integrationSpecificEmail = _ref.integration_specific_email;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h3",
      "data-testid": "exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.title",
        defaultMessage: "Proctoring onboarding exam"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text1",
        defaultMessage: "Why this is important to you:"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.EntranceOnboardingExamInstructions.listItem1",
          defaultMessage: "Establish your identity with the proctoring system to take a proctored exam"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.EntranceOnboardingExamInstructions.listItem2",
          defaultMessage: "Create your onboarding profile for faster access in the future"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.EntranceOnboardingExamInstructions.listItem3",
          defaultMessage: "Practice taking a proctored test"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text2",
        defaultMessage: 'Proctoring for this course is provided via {providerName}. ' + 'Onboarding review, including identity verification, can take 2+ business days.',
        values: {
          providerName: providerName
        }
      })
    }), learnerNotificationFromEmail && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      "data-testid": "learner-notification-email-contact",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text3",
        defaultMessage: 'Once your profile has been reviewed, you will receive an email ' + 'with review results. The email will come from '
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.MailtoLink, {
        to: learnerNotificationFromEmail,
        children: learnerNotificationFromEmail
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text4",
        defaultMessage: " Make sure this email has been added to your inbox filter."
      })]
    }), integrationSpecificEmail && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      "data-testid": "integration-email-contact",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text5",
        defaultMessage: "Please contact "
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.MailtoLink, {
        to: integrationSpecificEmail,
        children: integrationSpecificEmail
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text6",
        defaultMessage: " if you have questions."
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "pl-4 m-md-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        "data-testid": "start-exam-button",
        variant: "primary",
        onClick: function onClick() {
          return dispatch((0, _data.createProctoredExamAttempt)());
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.EntranceOnboardingExamInstructions.startExamButtonText",
          defaultMessage: "Continue to onboarding"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "pl-md-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.EntranceOnboardingExamInstructions.text7",
        defaultMessage: "You will be guided through online proctoring software set up and identity verification."
      })
    })]
  });
};
var _default = exports["default"] = EntranceOnboardingExamInstructions;
//# sourceMappingURL=EntranceOnboardingExamInstructions.js.map