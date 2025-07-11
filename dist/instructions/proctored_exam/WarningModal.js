"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var WarningModal = function WarningModal(_ref) {
  var isOpen = _ref.isOpen,
    handleClose = _ref.handleClose,
    title = _ref.title,
    body = _ref.body;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ModalDialog, {
    isOpen: isOpen,
    hasCloseButton: false,
    title: title,
    onClose: handleClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Header, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Title, {
        children: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Body, {
      children: body
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Footer, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          onClick: handleClose,
          variant: "tertiary",
          children: "Ok"
        })
      })
    })]
  });
};
WarningModal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  handleClose: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired,
  body: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = WarningModal;
//# sourceMappingURL=WarningModal.js.map