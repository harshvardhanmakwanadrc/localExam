"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var UnknownAttemptStatusError = function UnknownAttemptStatusError() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
    variant: "danger",
    "data-testid": "unknown-status-error",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.defaultError",
        defaultMessage: "A system error has occurred with your exam. Please reach out to support for assistance."
      })
    })
  });
};
var _default = exports["default"] = UnknownAttemptStatusError;
//# sourceMappingURL=UnknownAttemptStatusError.js.map