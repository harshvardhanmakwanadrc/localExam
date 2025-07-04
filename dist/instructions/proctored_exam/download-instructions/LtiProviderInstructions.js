"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LtiProviderExamInstructions = function LtiProviderExamInstructions(_ref) {
  var providerName = _ref.providerName,
    supportEmail = _ref.supportEmail,
    supportPhone = _ref.supportPhone,
    supportURL = _ref.supportURL;
  var supportURLHyperlink = function supportURLHyperlink(chunks) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
      destination: chunks[0],
      target: "_blank",
      children: chunks
    });
  };
  var getSupportText = function getSupportText() {
    // We assume that an LTI-based provider will either have a supportURL or a supportEmail and supportPhone.
    // In the unlikely event a provider has all three, we prioritize the supportURL.
    if (supportURL) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DownloadSoftwareProctoredExamInstructions.LTI.supportText.URL",
        defaultMessage: 'If you have issues relating to proctoring, you can contact ' + '{providerName} technical support by visiting <a>{supportURL}</a>.',
        values: {
          providerName: providerName,
          supportURL: supportURL,
          a: supportURLHyperlink
        }
      });
    }
    if (supportEmail && supportPhone) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DownloadSoftwareProctoredExamInstructions.LTI.supportText.EmailPhone",
        defaultMessage: 'If you have issues relating to proctoring, you can contact ' + '{providerName} technical support by emailing {supportEmail} or by calling {supportPhone}.',
        values: {
          providerName: providerName,
          supportEmail: supportEmail,
          supportPhone: supportPhone
        }
      });
    }
    return null;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
    children: getSupportText()
  });
};
LtiProviderExamInstructions.propTypes = {
  providerName: _propTypes["default"].string,
  supportEmail: _propTypes["default"].string,
  supportPhone: _propTypes["default"].string,
  supportURL: _propTypes["default"].string
};
LtiProviderExamInstructions.defaultProps = {
  providerName: '',
  supportEmail: '',
  supportPhone: '',
  supportURL: ''
};
var _default = exports["default"] = LtiProviderExamInstructions;
//# sourceMappingURL=LtiProviderInstructions.js.map