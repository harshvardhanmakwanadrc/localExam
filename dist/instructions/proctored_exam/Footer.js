"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = function Footer() {
  var faqUrl = (0, _frontendPlatform.getConfig)().PROCTORED_EXAM_FAQ_URL;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "footer-sequence",
    children: faqUrl && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "request-exam-time-button",
      variant: "link",
      href: faqUrl,
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.footerButton",
        defaultMessage: "About Proctored Exams"
      })
    })
  });
};
var _default = exports["default"] = Footer;
//# sourceMappingURL=Footer.js.map