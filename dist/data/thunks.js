"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkExamEntry = checkExamEntry;
exports.continueExam = continueExam;
exports.createProctoredExamAttempt = createProctoredExamAttempt;
exports.examRequiresAccessToken = examRequiresAccessToken;
exports.expireExam = expireExam;
exports.getAllowProctoringOptOut = getAllowProctoringOptOut;
exports.getExamAttemptsData = getExamAttemptsData;
exports.getExamReviewPolicy = getExamReviewPolicy;
exports.getLatestAttemptData = getLatestAttemptData;
exports.getProctoringSettings = getProctoringSettings;
exports.pingAttempt = pingAttempt;
exports.pollAttempt = pollAttempt;
exports.resetExam = resetExam;
exports.skipProctoringExam = skipProctoringExam;
exports.startProctoredExam = startProctoredExam;
exports.startProctoringSoftwareDownload = startProctoringSoftwareDownload;
exports.startTimedExam = startTimedExam;
exports.stopExam = stopExam;
exports.submitExam = submitExam;
var _logging = require("@edx/frontend-platform/logging");
var _frontendPlatform = require("@edx/frontend-platform");
var _api = require("./api");
var _helpers = require("../helpers");
var _slice = require("./slice");
var _constants = require("../constants");
var _handlers = require("./messages/handlers");
var _constants2 = _interopRequireDefault(require("./messages/constants"));
var _proctorio = require("./messages/proctorio");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function handleAPIError(error, dispatch) {
  var message = error.message,
    detail = error.detail;
  dispatch((0, _slice.setApiError)({
    errorMsg: message || detail
  }));
}
var EXAM_START_TIMEOUT_MILLISECONDS = 5000;

/**
 * Fetch attempt data and update exam state after performing another action if it is provided.
 * It is assumed that action somehow modifies attempt in the backend, that's why the state needs
 * to be updated.
 * @param courseId - id of a course
 * @param sequenceId - id of a sequence
 * @param promiseToBeResolvedFirst - a promise that should get resolved before fetching attempt data
 * @param noLoading - if set to false shows spinner while executing the function
 */
function updateAttemptAfter(courseId, sequenceId) {
  var promiseToBeResolvedFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var noLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var response, attemptData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!noLoading) {
              dispatch((0, _slice.setIsLoading)({
                isLoading: true
              }));
            }
            if (!promiseToBeResolvedFirst) {
              _context.next = 15;
              break;
            }
            _context.prev = 2;
            _context.next = 5;
            return promiseToBeResolvedFirst;
          case 5:
            response = _context.sent;
            if (!(!response || !response.exam_attempt_id)) {
              _context.next = 9;
              break;
            }
            if (!noLoading) {
              dispatch((0, _slice.setIsLoading)({
                isLoading: false
              }));
            }
            return _context.abrupt("return");
          case 9:
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            handleAPIError(_context.t0, dispatch);
            if (!noLoading) {
              dispatch((0, _slice.setIsLoading)({
                isLoading: false
              }));
            }
          case 15:
            _context.prev = 15;
            _context.next = 18;
            return (0, _api.fetchExamAttemptsData)(courseId, sequenceId);
          case 18:
            attemptData = _context.sent;
            dispatch((0, _slice.setExamState)({
              exam: attemptData.exam,
              activeAttempt: !(0, _helpers.isEmpty)(attemptData.active_attempt) ? attemptData.active_attempt : null
            }));
            _context.next = 25;
            break;
          case 22:
            _context.prev = 22;
            _context.t1 = _context["catch"](15);
            handleAPIError(_context.t1, dispatch);
          case 25:
            _context.prev = 25;
            if (!noLoading) {
              dispatch((0, _slice.setIsLoading)({
                isLoading: false
              }));
            }
            return _context.finish(25);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 11], [15, 22, 25, 28]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
function getExamAttemptsData(courseId, sequenceId) {
  return updateAttemptAfter(courseId, sequenceId);
}
function getLatestAttemptData(courseId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      var attemptData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0, _slice.setIsLoading)({
              isLoading: true
            }));
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _api.fetchLatestAttempt)(courseId);
          case 4:
            attemptData = _context2.sent;
            dispatch((0, _slice.setExamState)({
              exam: attemptData.exam,
              activeAttempt: !(0, _helpers.isEmpty)(attemptData.active_attempt) ? attemptData.active_attempt : null
            }));
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            handleAPIError(_context2.t0, dispatch);
          case 11:
            _context2.prev = 11;
            dispatch((0, _slice.setIsLoading)({
              isLoading: false
            }));
            return _context2.finish(11);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 8, 11, 14]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function getProctoringSettings() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch, getState) {
      var exam, proctoringSettings;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            exam = getState().specialExams.exam;
            if (exam.id) {
              _context3.next = 5;
              break;
            }
            (0, _logging.logError)('Failed to get exam settings. No exam id.');
            handleAPIError({
              message: 'Failed to fetch proctoring settings. No exam id was found.'
            }, dispatch);
            return _context3.abrupt("return");
          case 5:
            _context3.prev = 5;
            _context3.next = 8;
            return (0, _api.fetchProctoringSettings)(exam.course_id, exam.id);
          case 8:
            proctoringSettings = _context3.sent;
            dispatch((0, _slice.setProctoringSettings)({
              proctoringSettings: proctoringSettings
            }));
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);
            handleAPIError(_context3.t0, dispatch);
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 12]]);
    }));
    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();
}
function examRequiresAccessToken() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch, getState) {
      var exam, examAccessToken;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if ((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            exam = getState().specialExams.exam;
            if (exam.id) {
              _context4.next = 6;
              break;
            }
            (0, _logging.logError)('Failed to get exam access token. No exam id.');
            return _context4.abrupt("return");
          case 6:
            _context4.prev = 6;
            _context4.next = 9;
            return (0, _api.fetchExamAccessToken)(exam.id);
          case 9:
            examAccessToken = _context4.sent;
            dispatch((0, _slice.setExamAccessToken)({
              examAccessToken: examAccessToken
            }));
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](6);
            (0, _logging.logError)('Exam access token was not granted.');
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[6, 13]]);
    }));
    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
}

/**
 * Start a timed exam
 */
function startTimedExam() {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch, getState) {
      var exam;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            exam = getState().specialExams.exam;
            if (exam.id) {
              _context5.next = 5;
              break;
            }
            (0, _logging.logError)('Failed to start exam. No exam id.');
            handleAPIError({
              message: 'Failed to start exam. No exam id was found.'
            }, dispatch);
            return _context5.abrupt("return");
          case 5:
            _context5.next = 7;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.createExamAttempt)(exam.id, exam.use_legacy_attempt_api))(dispatch);
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();
}
function createProctoredExamAttempt() {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dispatch, getState) {
      var exam;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            exam = getState().specialExams.exam;
            if (exam.id) {
              _context6.next = 4;
              break;
            }
            (0, _logging.logError)('Failed to create exam attempt. No exam id.');
            return _context6.abrupt("return");
          case 4:
            _context6.next = 6;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.createExamAttempt)(exam.id, exam.use_legacy_attempt_api, false, true))(dispatch);
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }();
}

/**
 * Start a proctored exam (including onboarding and practice exams)
 */
function startProctoredExam() {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(dispatch, getState) {
      var exam, _ref8, attempt, _ref9, workerUrl, useWorker, examHasLtiProvider, startExamTimeoutMilliseconds;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            exam = getState().specialExams.exam;
            _ref8 = exam || {}, attempt = _ref8.attempt;
            if (exam.id) {
              _context7.next = 5;
              break;
            }
            (0, _logging.logError)('Failed to start proctored exam. No exam id.');
            return _context7.abrupt("return");
          case 5:
            _ref9 = attempt || {}, workerUrl = _ref9.desktop_application_js_url;
            useWorker = window.Worker && workerUrl;
            examHasLtiProvider = !exam.useLegacyAttemptApi;
            if (!useWorker) {
              _context7.next = 13;
              break;
            }
            startExamTimeoutMilliseconds = EXAM_START_TIMEOUT_MILLISECONDS;
            (0, _handlers.workerPromiseForEventNames)(_constants2["default"].start, exam.attempt.desktop_application_js_url)(startExamTimeoutMilliseconds, attempt.external_id).then(function () {
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.continueAttempt)(attempt.attempt_id, attempt.use_legacy_attempt_api))(dispatch);
            })["catch"](function (error) {
              var message = (error === null || error === void 0 ? void 0 : error.message) || 'Worker failed to respond.';
              (0, _logging.logError)(message, {
                attemptId: attempt.attempt_id,
                attemptStatus: attempt.attempt_status,
                courseId: attempt.course_id,
                examId: exam.id
              });
              handleAPIError({
                message: 'Something has gone wrong starting your exam. Please double-check that the application is running.'
              }, dispatch);
            });
            _context7.next = 16;
            break;
          case 13:
            if (examHasLtiProvider) {
              (0, _proctorio.notifyStartExam)();
            }
            _context7.next = 16;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.continueAttempt)(attempt.attempt_id, attempt.use_legacy_attempt_api))(dispatch);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }();
}
function skipProctoringExam() {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dispatch, getState) {
      var exam, attemptId, useLegacyAttemptApi;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            exam = getState().specialExams.exam;
            if (exam.id) {
              _context8.next = 4;
              break;
            }
            (0, _logging.logError)('Failed to skip proctored exam. No exam id.');
            return _context8.abrupt("return");
          case 4:
            attemptId = exam.attempt.attempt_id;
            useLegacyAttemptApi = exam.use_legacy_attempt_api;
            if (!attemptId) {
              _context8.next = 11;
              break;
            }
            _context8.next = 9;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.declineAttempt)(attemptId, useLegacyAttemptApi))(dispatch);
          case 9:
            _context8.next = 13;
            break;
          case 11:
            _context8.next = 13;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.createExamAttempt)(exam.id, true, false, useLegacyAttemptApi))(dispatch);
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x13, _x14) {
      return _ref10.apply(this, arguments);
    };
  }();
}

/**
 * Poll exam active attempt status.
 * @param url - poll attempt url
 */
function pollAttempt(url) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(dispatch, getState) {
      var currentAttempt, exam, data, updatedAttempt;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            currentAttempt = getState().specialExams.activeAttempt; // If the learner is in a state where they've finished the exam
            // and the attempt can be submitted (i.e. they are "ready_to_submit"),
            // don't ping the proctoring app (which action could move
            // the attempt into an error state).
            if (!(currentAttempt && currentAttempt.attempt_status === _constants.ExamStatus.READY_TO_SUBMIT)) {
              _context9.next = 3;
              break;
            }
            return _context9.abrupt("return");
          case 3:
            _context9.prev = 3;
            exam = getState().specialExams.exam;
            _context9.next = 7;
            return (0, _api.pollExamAttempt)(url, exam.content_id);
          case 7:
            data = _context9.sent;
            if (data) {
              _context9.next = 10;
              break;
            }
            throw new Error('Poll Exam failed to fetch.');
          case 10:
            updatedAttempt = _objectSpread(_objectSpread({}, currentAttempt), {}, {
              time_remaining_seconds: data.time_remaining_seconds,
              attempt_status: data.status
            });
            dispatch((0, _slice.setActiveAttempt)({
              activeAttempt: updatedAttempt
            }));
            if ([_constants.ExamStatus.SUBMITTED, _constants.ExamStatus.ERROR].includes(data.status)) {
              dispatch((0, _slice.expireExamAttempt)());
              updateAttemptAfter(exam.course_id, exam.content_id)(dispatch);
            }
            _context9.next = 18;
            break;
          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](3);
            handleAPIError(_context9.t0, dispatch);
          case 18:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[3, 15]]);
    }));
    return function (_x15, _x16) {
      return _ref11.apply(this, arguments);
    };
  }();
}
function stopExam() {
  return /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(dispatch, getState) {
      var _getState$specialExam, exam, activeAttempt, attemptId, examUrl, useLegacyAttemptAPI;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _getState$specialExam = getState().specialExams, exam = _getState$specialExam.exam, activeAttempt = _getState$specialExam.activeAttempt;
            if (activeAttempt) {
              _context10.next = 5;
              break;
            }
            (0, _logging.logError)('Failed to stop exam. No active attempt.');
            handleAPIError({
              message: 'Failed to stop exam. No active attempt was found.'
            }, dispatch);
            return _context10.abrupt("return");
          case 5:
            attemptId = activeAttempt.attempt_id, examUrl = activeAttempt.exam_url_path, useLegacyAttemptAPI = activeAttempt.use_legacy_attempt_api;
            if (!(!exam.attempt || attemptId !== exam.attempt.attempt_id)) {
              _context10.next = 17;
              break;
            }
            _context10.prev = 7;
            _context10.next = 10;
            return (0, _api.stopAttempt)(attemptId, useLegacyAttemptAPI);
          case 10:
            window.location.href = examUrl;
            _context10.next = 16;
            break;
          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](7);
            handleAPIError(_context10.t0, dispatch);
          case 16:
            return _context10.abrupt("return");
          case 17:
            _context10.next = 19;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.stopAttempt)(attemptId, useLegacyAttemptAPI))(dispatch);
          case 19:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[7, 13]]);
    }));
    return function (_x17, _x18) {
      return _ref12.apply(this, arguments);
    };
  }();
}
function continueExam() {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(dispatch, getState) {
      var exam, attemptId, useLegacyAttemptAPI;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            exam = getState().specialExams.exam;
            attemptId = exam.attempt.attempt_id;
            useLegacyAttemptAPI = exam.attempt.use_legacy_attempt_api;
            if (attemptId) {
              _context11.next = 7;
              break;
            }
            (0, _logging.logError)('Failed to continue exam. No attempt id.');
            handleAPIError({
              message: 'Failed to continue exam. No attempt id was found.'
            }, dispatch);
            return _context11.abrupt("return");
          case 7:
            _context11.next = 9;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.continueAttempt)(attemptId, useLegacyAttemptAPI))(dispatch);
          case 9:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function (_x19, _x20) {
      return _ref13.apply(this, arguments);
    };
  }();
}
function resetExam() {
  return /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(dispatch, getState) {
      var exam, attemptId, useLegacyAttemptAPI;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            exam = getState().specialExams.exam;
            attemptId = exam.attempt.attempt_id;
            useLegacyAttemptAPI = exam.attempt.use_legacy_attempt_api;
            if (attemptId) {
              _context12.next = 7;
              break;
            }
            (0, _logging.logError)('Failed to reset exam attempt. No attempt id.');
            handleAPIError({
              message: 'Failed to reset exam attempt. No attempt id was found.'
            }, dispatch);
            return _context12.abrupt("return");
          case 7:
            _context12.next = 9;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.resetAttempt)(attemptId, useLegacyAttemptAPI))(dispatch);
          case 9:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function (_x21, _x22) {
      return _ref14.apply(this, arguments);
    };
  }();
}
function submitExam() {
  return /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(dispatch, getState) {
      var _getState$specialExam2, exam, activeAttempt, _ref16, workerUrl, attemptExternalId, useWorker, handleBackendProviderSubmission, attemptId, examUrl, useLegacyAttemptAPI;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _getState$specialExam2 = getState().specialExams, exam = _getState$specialExam2.exam, activeAttempt = _getState$specialExam2.activeAttempt;
            _ref16 = activeAttempt || {}, workerUrl = _ref16.desktop_application_js_url, attemptExternalId = _ref16.external_id;
            useWorker = window.Worker && activeAttempt && workerUrl;
            handleBackendProviderSubmission = function handleBackendProviderSubmission() {
              // if a backend provider is being used during the exam
              // send it a message that exam is being submitted
              if (useWorker) {
                (0, _handlers.workerPromiseForEventNames)(_constants2["default"].submit, workerUrl)(0, attemptExternalId)["catch"](function () {
                  return handleAPIError({
                    message: 'Something has gone wrong submitting your exam. Please double-check that the application is running.'
                  }, dispatch);
                });
              }
            };
            if (activeAttempt) {
              _context13.next = 8;
              break;
            }
            (0, _logging.logError)('Failed to submit exam. No active attempt.');
            handleAPIError({
              message: 'Failed to submit exam. No active attempt was found.'
            }, dispatch);
            return _context13.abrupt("return");
          case 8:
            attemptId = activeAttempt.attempt_id, examUrl = activeAttempt.exam_url_path, useLegacyAttemptAPI = activeAttempt.use_legacy_attempt_api;
            if (!(!exam.attempt || attemptId !== exam.attempt.attempt_id)) {
              _context13.next = 21;
              break;
            }
            _context13.prev = 10;
            _context13.next = 13;
            return (0, _api.submitAttempt)(attemptId, useLegacyAttemptAPI);
          case 13:
            window.location.href = examUrl;
            handleBackendProviderSubmission();
            _context13.next = 20;
            break;
          case 17:
            _context13.prev = 17;
            _context13.t0 = _context13["catch"](10);
            handleAPIError(_context13.t0, dispatch);
          case 20:
            return _context13.abrupt("return");
          case 21:
            _context13.next = 23;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.submitAttempt)(attemptId, useLegacyAttemptAPI))(dispatch);
          case 23:
            handleBackendProviderSubmission();
          case 24:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[10, 17]]);
    }));
    return function (_x23, _x24) {
      return _ref15.apply(this, arguments);
    };
  }();
}
function expireExam() {
  return /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(dispatch, getState) {
      var _getState$specialExam3, exam, activeAttempt, _ref18, workerUrl, attemptId, attemptExternalId, useLegacyAttemptAPI, useWorker;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _getState$specialExam3 = getState().specialExams, exam = _getState$specialExam3.exam, activeAttempt = _getState$specialExam3.activeAttempt;
            _ref18 = activeAttempt || {}, workerUrl = _ref18.desktop_application_js_url, attemptId = _ref18.attempt_id, attemptExternalId = _ref18.external_id, useLegacyAttemptAPI = _ref18.use_legacy_attempt_api;
            useWorker = window.Worker && activeAttempt && workerUrl;
            if (attemptId) {
              _context14.next = 7;
              break;
            }
            (0, _logging.logError)('Failed to expire exam. No attempt id.');
            handleAPIError({
              message: 'Failed to expire exam. No attempt id was found.'
            }, dispatch);
            return _context14.abrupt("return");
          case 7:
            _context14.next = 9;
            return updateAttemptAfter(activeAttempt.course_id, exam.content_id, (0, _api.submitAttempt)(attemptId, useLegacyAttemptAPI))(dispatch);
          case 9:
            dispatch((0, _slice.expireExamAttempt)());
            if (useWorker) {
              (0, _handlers.workerPromiseForEventNames)(_constants2["default"].submit, workerUrl)(0, attemptExternalId)["catch"](function () {
                return handleAPIError({
                  message: 'Something has gone wrong submitting your exam. Please double-check that the application is running.'
                }, dispatch);
              });
            }
          case 11:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return function (_x25, _x26) {
      return _ref17.apply(this, arguments);
    };
  }();
}

/**
 * Ping provider application (used for proctored exams).
 * @param timeoutInSeconds - time to wait for worker response before raising an error
 * @param workerUrl - location of the worker from the provider
 */
function pingAttempt(timeoutInSeconds, workerUrl) {
  return /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(dispatch, getState) {
      var _getState$specialExam4, exam, activeAttempt, useLegacyAttemptAPI;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _getState$specialExam4 = getState().specialExams, exam = _getState$specialExam4.exam, activeAttempt = _getState$specialExam4.activeAttempt;
            useLegacyAttemptAPI = exam.attempt.use_legacy_attempt_api;
            _context16.next = 4;
            return (0, _handlers.pingApplication)(timeoutInSeconds, activeAttempt.external_id, workerUrl)["catch"](/*#__PURE__*/function () {
              var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(error) {
                var message;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      message = (error === null || error === void 0 ? void 0 : error.message) || 'Worker failed to respond.';
                      /**
                       * Note: The exam id logged here represents the current section being rendered.
                       * This may be different from the exam they are currently attempting
                       * if the learner has navigated to other course content during the exam.
                       * */
                      (0, _logging.logError)(message, {
                        attemptId: activeAttempt.attempt_id,
                        attemptStatus: activeAttempt.attempt_status,
                        courseId: activeAttempt.course_id,
                        examId: exam.id
                      });

                      // eslint-disable-next-line function-paren-newline
                      _context15.next = 4;
                      return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.endExamWithFailure)(activeAttempt.attempt_id, message, useLegacyAttemptAPI))(dispatch);
                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15);
              }));
              return function (_x29) {
                return _ref20.apply(this, arguments);
              };
            }());
          case 4:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }));
    return function (_x27, _x28) {
      return _ref19.apply(this, arguments);
    };
  }();
}
function startProctoringSoftwareDownload() {
  return /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(dispatch, getState) {
      var exam, attemptId, useLegacyAttemptAPI;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            exam = getState().specialExams.exam;
            attemptId = exam.attempt.attempt_id;
            useLegacyAttemptAPI = exam.attempt.use_legacy_attempt_api;
            if (attemptId) {
              _context17.next = 7;
              break;
            }
            (0, _logging.logError)('Failed to start downloading proctoring software. No attempt id.');
            handleAPIError({
              message: 'Failed to start downloading proctoring software. No attempt id was found.'
            }, dispatch);
            return _context17.abrupt("return");
          case 7:
            _context17.next = 9;
            return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.softwareDownloadAttempt)(attemptId, useLegacyAttemptAPI))(dispatch);
          case 9:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return function (_x30, _x31) {
      return _ref21.apply(this, arguments);
    };
  }();
}
function getExamReviewPolicy() {
  return /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(dispatch, getState) {
      var exam, data;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            exam = getState().specialExams.exam;
            if (exam.id) {
              _context18.next = 5;
              break;
            }
            (0, _logging.logError)('Failed to fetch exam review policy. No exam id.');
            handleAPIError({
              message: 'Failed to fetch exam review policy. No exam id was found.'
            }, dispatch);
            return _context18.abrupt("return");
          case 5:
            _context18.prev = 5;
            _context18.next = 8;
            return (0, _api.fetchExamReviewPolicy)(exam.id);
          case 8:
            data = _context18.sent;
            dispatch((0, _slice.setReviewPolicy)({
              policy: data.review_policy
            }));
            _context18.next = 15;
            break;
          case 12:
            _context18.prev = 12;
            _context18.t0 = _context18["catch"](5);
            handleAPIError(_context18.t0, dispatch);
          case 15:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[5, 12]]);
    }));
    return function (_x32, _x33) {
      return _ref22.apply(this, arguments);
    };
  }();
}
function getAllowProctoringOptOut(allowProctoringOptOut) {
  return function (dispatch) {
    dispatch((0, _slice.setAllowProctoringOptOut)({
      allowProctoringOptOut: allowProctoringOptOut
    }));
  };
}

/**
 * Check if we are allowed to enter an exam where proctoring has started.
 * There is no support for reentry with LTI. The exam must be completed
 * in the proctored window. If a non-proctored window is opened, the exam will
 * be ended with an error.
 *
 * This check is necessary to prevent using a second browser to access the exam
 * content unproctored.
 */
function checkExamEntry() {
  return /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(dispatch, getState) {
      var exam;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            exam = getState().specialExams.exam; // Check only applies to LTI exams
            if (!(!(exam !== null && exam !== void 0 && exam.attempt) || exam.attempt.exam_type !== _constants.ExamType.PROCTORED || exam.attempt.use_legacy_attempt_api)) {
              _context19.next = 3;
              break;
            }
            return _context19.abrupt("return");
          case 3:
            if ((0, _constants.IS_PROCTORED_STATUS)(exam.attempt.attempt_status)) {
              Promise.race([(0, _proctorio.checkAppStatus)(), new Promise(function (resolve, reject) {
                setTimeout(function () {
                  return reject();
                }, EXAM_START_TIMEOUT_MILLISECONDS);
              })])["catch"](function () {
                dispatch((0, _slice.setApiError)({
                  errorMsg: 'Something has gone wrong with your exam. Proctoring application not detected.'
                }));
                updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.endExamWithFailure)(exam.attempt.attempt_id, 'exam reentry disallowed', false))(dispatch);
              });
            }
          case 4:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }));
    return function (_x34, _x35) {
      return _ref23.apply(this, arguments);
    };
  }();
}
//# sourceMappingURL=thunks.js.map