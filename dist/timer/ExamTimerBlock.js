"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _CountDownTimer = _interopRequireDefault(require("./CountDownTimer"));
var _constants = require("../constants");
var _TimerProvider = _interopRequireDefault(require("./TimerProvider"));
var _data = require("../data");
var _events = require("./events");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * Exam timer block component.
 */
var ExamTimerBlock = (0, _i18n.injectIntl)(function (_ref) {
  var intl = _ref.intl;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    attempt = _useSelector.activeAttempt;
  var _useToggle = (0, _paragon.useToggle)(false),
    _useToggle2 = _slicedToArray(_useToggle, 3),
    isShowMore = _useToggle2[0],
    showMore = _useToggle2[1],
    showLess = _useToggle2[2];
  var _useState = (0, _react.useState)('info'),
    _useState2 = _slicedToArray(_useState, 2),
    alertVariant = _useState2[0],
    setAlertVariant = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    timeReachedNull = _useState4[0],
    setTimeReachedNull = _useState4[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  if (!attempt || !(0, _constants.IS_STARTED_STATUS)(attempt.attempt_status)) {
    return null;
  }
  var onLowTime = function onLowTime() {
    return setAlertVariant('warning');
  };
  var onCriticalLowTime = function onCriticalLowTime() {
    return setAlertVariant('danger');
  };
  var onTimeReachedNull = function onTimeReachedNull() {
    return setTimeReachedNull(true);
  };
  var handleEndExamClick = function handleEndExamClick() {
    // if timer reached 00:00 submit exam right away
    // instead of trying to move user to ready_to_submit page
    if (timeReachedNull) {
      dispatch((0, _data.submitExam)());
    } else {
      dispatch((0, _data.stopExam)());
    }
  };
  (0, _react.useEffect)(function () {
    _data.Emitter.once(_events.TIMER_IS_LOW, onLowTime);
    _data.Emitter.once(_events.TIMER_IS_CRITICALLY_LOW, onCriticalLowTime);
    _data.Emitter.once(_events.TIMER_LIMIT_REACHED, function () {
      return dispatch((0, _data.expireExam)());
    });
    _data.Emitter.once(_events.TIMER_REACHED_NULL, onTimeReachedNull);
    return function () {
      _data.Emitter.off(_events.TIMER_IS_LOW, onLowTime);
      _data.Emitter.off(_events.TIMER_IS_CRITICALLY_LOW, onCriticalLowTime);
      _data.Emitter.off(_events.TIMER_LIMIT_REACHED, function () {
        return dispatch((0, _data.expireExam)());
      });
      _data.Emitter.off(_events.TIMER_REACHED_NULL, onTimeReachedNull);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimerProvider["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
      variant: alertVariant,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex justify-content-between flex-column flex-lg-row align-items-start",
        "data-testid": "exam-timer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.examTimer.text",
            defaultMessage: "You are taking \"{examLink}\" as {examType}.",
            values: {
              examLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Link, {
                href: attempt.exam_url_path,
                children: attempt.exam_display_name
              }),
              examType: attempt.exam_type
            }
          }), ' ', isShowMore ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.examTimer.showLess",
              defaultMessage: 'The timer on the right shows the time remaining in the exam. ' + 'To receive credit for problems, you must select "Submit" ' + 'for each problem before you select "End My Exam" '
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Link, {
              onClick: showLess,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
                id: "exam.examTimer.showLessLink",
                defaultMessage: "Show less"
              })
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Link, {
            onClick: showMore,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.examTimer.showMoreLink",
              defaultMessage: "Show more"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "d-flex align-items-center flex-shrink-0 ml-lg-3 mt-2 mt-lg-0",
          "aria-label": intl.formatMessage({
            id: 'exam.aria.examTimerAndEndExamButton',
            defaultMessage: 'Exam timer and end exam button'
          }),
          children: [attempt.attempt_status !== _constants.ExamStatus.READY_TO_SUBMIT && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            "data-testid": "end-button",
            className: "mr-3",
            variant: "outline-primary",
            onClick: handleEndExamClick,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.examTimer.endExamBtn",
              defaultMessage: "End My Exam"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountDownTimer["default"], {
            attempt: attempt
          })]
        })]
      })
    })
  });
});
ExamTimerBlock.propTypes = {};
var _default = exports["default"] = ExamTimerBlock;
//# sourceMappingURL=ExamTimerBlock.js.map