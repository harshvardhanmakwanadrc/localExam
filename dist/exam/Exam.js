"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _timer = require("../timer");
var _instructions = _interopRequireDefault(require("../instructions"));
var _ExamAPIError = _interopRequireDefault(require("./ExamAPIError"));
var _constants = require("../constants");
var _messages = _interopRequireDefault(require("./messages"));
var _data = require("../data");
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
 * Exam component is intended to render exam instructions before and after exam.
 * It is also responsible for rendering exam timer block/component during the exam.
 * If children do not relate to exam sequence, render them directly.
 * @param isTimeLimited - boolean used to identify if we need to process sequence as an exam
 * @param children - sequence content
 * @returns {JSX.Element}
 * @constructor
 */
var Exam = function Exam(_ref) {
  var isGated = _ref.isGated,
    isTimeLimited = _ref.isTimeLimited,
    originalUserIsStaff = _ref.originalUserIsStaff,
    canAccessProctoredExams = _ref.canAccessProctoredExams,
    children = _ref.children,
    intl = _ref.intl;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    isLoading = _useSelector.isLoading,
    activeAttempt = _useSelector.activeAttempt,
    exam = _useSelector.exam,
    apiErrorMsg = _useSelector.apiErrorMsg;
  var dispatch = (0, _reactRedux.useDispatch)();
  var showTimer = !!(activeAttempt && (0, _constants.IS_STARTED_STATUS)(activeAttempt.attempt_status));
  var _ref2 = exam || {},
    attempt = _ref2.attempt,
    examType = _ref2.type,
    examId = _ref2.id,
    passedDueDate = _ref2.passed_due_date,
    hideAfterDue = _ref2.hide_after_due;
  var _ref3 = attempt || {},
    attemptStatus = _ref3.attempt_status;
  var shouldShowMasqueradeAlert = function shouldShowMasqueradeAlert() {
    // if course staff is masquerading as a specific learner, they should be able
    // to view the exam content regardless of the learner's current state
    if (originalUserIsStaff && isTimeLimited) {
      if (examType === _constants.ExamType.TIMED && passedDueDate && !hideAfterDue) {
        // if the learner is able to view exam content after the due date is passed,
        // don't show this alert
        return false;
      }
      return attemptStatus !== _constants.ExamStatus.STARTED;
    }
    return false;
  };
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    hasProctoredExamAccess = _useState2[0],
    setHasProctoredExamAccess = _useState2[1];
  var proctoredExamTypes = [_constants.ExamType.ONBOARDING, _constants.ExamType.PRACTICE, _constants.ExamType.PROCTORED];
  (0, _react.useEffect)(function () {
    if (proctoredExamTypes.includes(examType)) {
      // only fetch proctoring settings for a proctored exam
      if (examId) {
        dispatch((0, _data.getProctoringSettings)());
      }

      // Only exclude Timed Exam when restricting access to exams
      setHasProctoredExamAccess(canAccessProctoredExams);
    }
    // this makes sure useEffect gets called only one time after the exam has been fetched
    // we can't leave this empty since initially exam is just an empty object, so
    // API calls above would not get triggered
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId, dispatch]);
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "spinner",
      className: "d-flex justify-content-center align-items-center flex-column my-5 py-5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        variant: "primary"
      })
    });
  }
  if (!hasProctoredExamAccess) {
    // If the user cannot acces proctoring exam, and the current exam is a proctoring exam,
    // we want to display a message box to let learner know they have no access.
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "no-access",
      className: "d-flex justify-content-center align-items-center flex-column",
      children: intl.formatMessage(_messages["default"].proctoredExamAccessDenied)
    });
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  var sequenceContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [shouldShowMasqueradeAlert() && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
      variant: "info",
      icon: _icons.Info,
      "data-testid": "masquerade-alert",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.hiddenContent",
        defaultMessage: "This exam is hidden from the learner."
      })
    }), showTimer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_timer.ExamTimerBlock, {}),
    // show the error message only if you are in the exam sequence
    isTimeLimited && apiErrorMsg && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExamAPIError["default"], {}), isTimeLimited && !originalUserIsStaff && !isGated ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_instructions["default"], {
      children: sequenceContent
    }) : sequenceContent]
  });
};
Exam.propTypes = {
  isTimeLimited: _propTypes["default"].bool.isRequired,
  isGated: _propTypes["default"].bool.isRequired,
  originalUserIsStaff: _propTypes["default"].bool.isRequired,
  canAccessProctoredExams: _propTypes["default"].bool,
  children: _propTypes["default"].element.isRequired,
  intl: _i18n.intlShape.isRequired
};
Exam.defaultProps = {
  canAccessProctoredExams: true
};
var _default = exports["default"] = (0, _i18n.injectIntl)(Exam);
//# sourceMappingURL=Exam.js.map