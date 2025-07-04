"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _emitter = _interopRequireDefault(require("../data/emitter"));
var _constants = require("../constants");
var _data = require("../data");
var _proctored_exam = require("./proctored_exam");
var _timed_exam = require("./timed_exam");
var _Footer = _interopRequireDefault(require("./proctored_exam/Footer"));
var _events = require("../timer/events");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SubmitExamInstructions = function SubmitExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam,
    activeAttempt = _useSelector.activeAttempt;
  var dispatch = (0, _reactRedux.useDispatch)();
  var timeRemaining = activeAttempt.time_remaining_seconds;
  var _ref = exam || {},
    examType = _ref.type;
  var _useState = (0, _react.useState)(timeRemaining > 0),
    _useState2 = _slicedToArray(_useState, 2),
    canContinue = _useState2[0],
    setCanContinue = _useState2[1];
  var hideContinueButton = function hideContinueButton() {
    return setCanContinue(false);
  };
  (0, _react.useEffect)(function () {
    _emitter["default"].once(_events.TIMER_REACHED_NULL, hideContinueButton);
    return function () {
      _emitter["default"].off(_events.TIMER_REACHED_NULL, hideContinueButton);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [examType === _constants.ExamType.TIMED ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_timed_exam.SubmitTimedExamInstructions, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.SubmitProctoredExamInstructions, {}), canContinue && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: "outline-primary",
        onClick: function onClick() {
          return dispatch((0, _data.continueExam)());
        },
        "data-testid": "continue-exam-button",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmitExamInstructions.continueButton",
          defaultMessage: "No, I'd like to continue working"
        })
      })]
    }), examType !== _constants.ExamType.TIMED && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
var _default = exports["default"] = SubmitExamInstructions;
//# sourceMappingURL=SubmitInstructions.js.map