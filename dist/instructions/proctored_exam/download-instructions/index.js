"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _frontendPlatform = require("@edx/frontend-platform");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _constants = require("../../../constants");
var _data = require("../../../data");
var _WarningModal = _interopRequireDefault(require("../WarningModal"));
var _api = require("../../../data/api");
var _messages = _interopRequireDefault(require("../messages"));
var _LtiProviderInstructions = _interopRequireDefault(require("./LtiProviderInstructions"));
var _RestProviderInstructions = _interopRequireDefault(require("./RestProviderInstructions"));
var _RPNowInstructions = _interopRequireDefault(require("./RPNowInstructions"));
var _DownloadButtons = _interopRequireDefault(require("./DownloadButtons"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _SkipProctoredExamButton = _interopRequireDefault(require("../SkipProctoredExamButton"));
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
var DownloadSoftwareProctoredExamInstructions = function DownloadSoftwareProctoredExamInstructions(_ref) {
  var intl = _ref.intl,
    skipProctoredExam = _ref.skipProctoredExam;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    proctoringSettings = _useSelector.proctoringSettings,
    exam = _useSelector.exam,
    allowProctoringOptOut = _useSelector.allowProctoringOptOut;
  var dispatch = (0, _reactRedux.useDispatch)();
  var attempt = exam.attempt,
    courseId = exam.course_id,
    sequenceId = exam.content_id;
  var pollUrl = attempt.exam_started_poll_url,
    examCode = attempt.attempt_code,
    attemptId = attempt.attempt_id,
    downloadUrl = attempt.software_download_url,
    useLegacyAttemptApi = attempt.use_legacy_attempt_api;
  var providerName = proctoringSettings.provider_name,
    supportEmail = proctoringSettings.provider_tech_support_email,
    supportPhone = proctoringSettings.provider_tech_support_phone,
    supportURL = proctoringSettings.provider_tech_support_url,
    proctoringBackend = proctoringSettings.exam_proctoring_backend;
  var examHasLtiProvider = !useLegacyAttemptApi;
  var _ref2 = proctoringBackend || {},
    instructions = _ref2.instructions;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    systemCheckStatus = _useState2[0],
    setSystemCheckStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    downloadClicked = _useState4[0],
    setDownloadClicked = _useState4[1];
  var withProviderInstructions = instructions && instructions.length > 0;
  var launchSoftwareUrl = examHasLtiProvider ? "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/lti/start_proctoring/").concat(attemptId) : downloadUrl;
  var handleDownloadClick = function handleDownloadClick() {
    (0, _api.pollExamAttempt)(pollUrl, sequenceId).then(function (data) {
      if (data.status === _constants.ExamStatus.READY_TO_START) {
        setSystemCheckStatus('success');
      } else {
        // TODO: This call will circumvent the thunk for startProctoringSoftwareDownload
        // which is a bit odd and would handle useLegacyAttempt for us.
        // There's an opportunity to refactor and clean this up a bit.
        (0, _api.softwareDownloadAttempt)(attemptId, useLegacyAttemptApi);
        window.location.assign(launchSoftwareUrl);
      }
    });
    setDownloadClicked(true);
  };
  var handleStartExamClick = function handleStartExamClick() {
    (0, _api.pollExamAttempt)(pollUrl, sequenceId).then(function (data) {
      return data.status === _constants.ExamStatus.READY_TO_START ? dispatch((0, _data.getExamAttemptsData)(courseId, sequenceId)) : setSystemCheckStatus('failure');
    });
  };
  function providerInstructions() {
    if (examHasLtiProvider) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LtiProviderInstructions["default"], {
        providerName: providerName,
        supportEmail: supportEmail,
        supportPhone: supportPhone,
        supportURL: supportURL
      });
    }
    if (withProviderInstructions) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RestProviderInstructions["default"], {
        providerName: providerName,
        supportEmail: supportEmail,
        supportPhone: supportPhone,
        instructions: instructions
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RPNowInstructions["default"], {
      code: examCode
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WarningModal["default"], {
        isOpen: Boolean(systemCheckStatus),
        title: systemCheckStatus === 'success' ? intl.formatMessage(_messages["default"].softwareLoadedModalTitle) : intl.formatMessage(_messages["default"].cannotStartModalTitle),
        body: systemCheckStatus === 'success' ? intl.formatMessage(_messages["default"].softwareLoadedModalBody) : intl.formatMessage(_messages["default"].cannotStartModalBody),
        handleClose: function handleClose() {
          return setSystemCheckStatus('');
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        "data-testid": "exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.DownloadSoftwareProctoredExamInstructions.title",
          defaultMessage: "Set up and start your proctored exam."
        })
      }), providerInstructions(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DownloadButtons["default"], {
        downloadUrl: launchSoftwareUrl,
        onDownloadClick: handleDownloadClick,
        onStartExamClick: handleStartExamClick,
        downloadClicked: downloadClicked
      }), !examHasLtiProvider && !withProviderInstructions && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pt-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.title",
            defaultMessage: "Step 3."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.body",
            defaultMessage: 'For security and exam integrity reasons, ' + 'we ask you to sign in to your edX account. Then we will ' + 'direct you to the RPNow proctoring experience.'
          })
        })]
      })]
    }), allowProctoringOptOut && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SkipProctoredExamButton["default"], {
      handleClick: skipProctoredExam
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
DownloadSoftwareProctoredExamInstructions.propTypes = {
  intl: _i18n.intlShape.isRequired,
  skipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(DownloadSoftwareProctoredExamInstructions);
//# sourceMappingURL=index.js.map