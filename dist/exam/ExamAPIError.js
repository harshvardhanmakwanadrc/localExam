"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _frontendPlatform = require("@edx/frontend-platform");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ExamAPIError = function ExamAPIError(_ref) {
  var intl = _ref.intl;
  var _getConfig = (0, _frontendPlatform.getConfig)(),
    SITE_NAME = _getConfig.SITE_NAME,
    SUPPORT_URL = _getConfig.SUPPORT_URL;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    apiErrorMsg = _useSelector.apiErrorMsg;
  var shouldShowApiErrorMsg = !!apiErrorMsg && !apiErrorMsg.includes('<');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Alert, {
    variant: "danger",
    "data-testid": "exam-api-error-component",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Info,
      className: "alert-icon"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
      "data-testid": "error-details",
      children: shouldShowApiErrorMsg ? apiErrorMsg : intl.formatMessage(_messages["default"].apiErrorDefault)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: SITE_NAME && SUPPORT_URL ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.apiError.supportText.withLink",
        defaultMessage: 'If the issue persists, please reach out to {supportLink} for assistance, ' + 'and return to the exam once you receive further instructions.',
        values: {
          supportLink: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Hyperlink, {
            "data-testid": "support-link",
            destination: SUPPORT_URL,
            target: "_blank",
            children: [SITE_NAME, " Support"]
          })
        }
      }) : intl.formatMessage(_messages["default"].supportTextWithoutLink)
    })]
  });
};
ExamAPIError.propTypes = {
  intl: _i18n.intlShape.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(ExamAPIError);
//# sourceMappingURL=ExamAPIError.js.map