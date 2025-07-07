"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _TimerProvider = require("./TimerProvider");
var _helpers = require("../helpers");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * Display timer textual value. Display hide/show button.
 */
var CountDownTimer = (0, _i18n.injectIntl)(function (props) {
  var timer = (0, _react.useContext)(_TimerProvider.TimerContext);
  var timeString = timer.getTimeString();
  var _useToggle = (0, _paragon.useToggle)(true),
    _useToggle2 = _slicedToArray(_useToggle, 3),
    isShowTimer = _useToggle2[0],
    showTimer = _useToggle2[1],
    hideTimer = _useToggle2[2];
  var intl = props.intl;
  var timeRemainingSeconds = props.attempt.time_remaining_seconds;
  console.log(timeRemainingSeconds);
  var generateAccessbilityString = function generateAccessbilityString() {
    var humanizedTime = (0, _helpers.generateHumanizedTime)(timeRemainingSeconds);
    /**
    * INTL NOTE: At the moment, these strings are NOT internationalized/translated.
    * The back-end also does not support this either.
    *
    * It is TBD if this needs to be implemented
    */
    return "you have ".concat(humanizedTime, " remaining");
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "exam-timer-clock d-flex justify-content-between",
    style: {
      minWidth: isShowTimer ? '110px' : '32px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "sr-only timer-announce",
      "aria-live": "assertive",
      children: generateAccessbilityString()
    }), isShowTimer && timeString, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "pl-2 d-flex flex-column justify-content-center",
      id: "toggle_timer",
      "aria-pressed": isShowTimer ? 'false' : 'true',
      "aria-label": isShowTimer ? intl.formatMessage({
        id: 'exam.aria.hideTimer',
        defaultMessage: 'Hide Timer'
      }) : intl.formatMessage({
        id: 'exam.aria.showTimer',
        defaultMessage: 'Show Timer'
      }),
      children: isShowTimer ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
        "data-testid": "hide-timer",
        src: _icons.VisibilityOff,
        onClick: hideTimer
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
        "data-testid": "show-timer",
        src: _icons.Visibility,
        onClick: showTimer
      })
    })]
  });
});
var _default = exports["default"] = CountDownTimer;
//# sourceMappingURL=CountDownTimer.js.map