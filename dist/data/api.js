"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.continueAttempt = continueAttempt;
exports.createExamAttempt = createExamAttempt;
exports.declineAttempt = declineAttempt;
exports.endExamWithFailure = endExamWithFailure;
exports.fetchExamAccessToken = fetchExamAccessToken;
exports.fetchExamAttemptsData = fetchExamAttemptsData;
exports.fetchExamReviewPolicy = fetchExamReviewPolicy;
exports.fetchLatestAttempt = fetchLatestAttempt;
exports.fetchProctoringSettings = fetchProctoringSettings;
exports.pollExamAttempt = pollExamAttempt;
exports.resetAttempt = resetAttempt;
exports.softwareDownloadAttempt = softwareDownloadAttempt;
exports.stopAttempt = stopAttempt;
exports.submitAttempt = submitAttempt;
exports.updateAttemptStatus = updateAttemptStatus;
var _frontendPlatform = require("@edx/frontend-platform");
var _auth = require("@edx/frontend-platform/auth");
var _constants = require("../constants");
var _helpers = require("../helpers");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var BASE_API_URL = '/api/edx_proctoring/v1/proctored_exam/attempt';
function fetchActiveAttempt() {
  return _fetchActiveAttempt.apply(this, arguments);
}
function _fetchActiveAttempt() {
  _fetchActiveAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var activeAttemptUrl, activeAttemptResponse;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // fetch 'active' (timer is running) attempt if it exists
          activeAttemptUrl = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt/latest"));
          _context.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(activeAttemptUrl.href);
        case 3:
          activeAttemptResponse = _context.sent;
          return _context.abrupt("return", activeAttemptResponse.data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchActiveAttempt.apply(this, arguments);
}
function fetchAttemptForExamSequnceId(_x) {
  return _fetchAttemptForExamSequnceId.apply(this, arguments);
}
function _fetchAttemptForExamSequnceId() {
  _fetchAttemptForExamSequnceId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sequenceId) {
    var attemptUrl, attemptResponse;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          attemptUrl = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt/latest")); // the calls the same endpoint as fetchActiveAttempt but it behaves slightly different
          // with an exam's section specified. The attempt for that requested exam is always returned
          // even if it is not 'active' (timer is not running)
          attemptUrl.searchParams.append('content_id', sequenceId);
          _context2.next = 4;
          return (0, _auth.getAuthenticatedHttpClient)().get(attemptUrl.href);
        case 4:
          attemptResponse = _context2.sent;
          return _context2.abrupt("return", attemptResponse.data);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchAttemptForExamSequnceId.apply(this, arguments);
}
function fetchExamAttemptsData(_x2, _x3) {
  return _fetchExamAttemptsData.apply(this, arguments);
}
function _fetchExamAttemptsData() {
  _fetchExamAttemptsData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(courseId, sequenceId) {
    var data, url, urlResponse, examUrl, examResponse, attemptData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if ((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
            _context3.next = 10;
            break;
          }
          url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/course_id/").concat(courseId));
          url.searchParams.append('content_id', sequenceId);
          url.searchParams.append('is_learning_mfe', true);
          _context3.next = 6;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 6:
          urlResponse = _context3.sent;
          data = urlResponse.data;
          _context3.next = 20;
          break;
        case 10:
          examUrl = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/student/exam/attempt/course_id/").concat(courseId, "/content_id/").concat(sequenceId));
          _context3.next = 13;
          return (0, _auth.getAuthenticatedHttpClient)().get(examUrl.href);
        case 13:
          examResponse = _context3.sent;
          data = examResponse.data;

          // humanize total time if response is from edx-exams
          data.exam.total_time = Number.isInteger(data.exam.total_time) ? (0, _helpers.generateHumanizedTime)(data.exam.total_time * 60) : data.exam.total_time;
          _context3.next = 18;
          return fetchActiveAttempt();
        case 18:
          attemptData = _context3.sent;
          data.active_attempt = attemptData;
        case 20:
          return _context3.abrupt("return", data);
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchExamAttemptsData.apply(this, arguments);
}
function fetchLatestAttempt(_x4) {
  return _fetchLatestAttempt.apply(this, arguments);
}
function _fetchLatestAttempt() {
  _fetchLatestAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(courseId) {
    var data, url, urlResponse, attemptData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if ((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
            _context4.next = 9;
            break;
          }
          url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/course_id/").concat(courseId));
          url.searchParams.append('is_learning_mfe', true);
          _context4.next = 5;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 5:
          urlResponse = _context4.sent;
          data = urlResponse.data;
          _context4.next = 14;
          break;
        case 9:
          // initialize data dictionary to be similar to what edx-proctoring returns
          data = {
            exam: {}
          };
          _context4.next = 12;
          return fetchActiveAttempt();
        case 12:
          attemptData = _context4.sent;
          data.active_attempt = attemptData;
        case 14:
          return _context4.abrupt("return", data);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _fetchLatestAttempt.apply(this, arguments);
}
function pollExamAttempt(_x5, _x6) {
  return _pollExamAttempt.apply(this, arguments);
}
function _pollExamAttempt() {
  _pollExamAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(pollUrl, sequenceId) {
    var data, edxProctoringURL, urlResponse;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!pollUrl) {
            _context5.next = 7;
            break;
          }
          edxProctoringURL = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(pollUrl));
          _context5.next = 4;
          return (0, _auth.getAuthenticatedHttpClient)().get(edxProctoringURL.href);
        case 4:
          urlResponse = _context5.sent;
          data = urlResponse.data;
          return _context5.abrupt("return", data);
        case 7:
          if (!sequenceId) {
            _context5.next = 13;
            break;
          }
          _context5.next = 10;
          return fetchAttemptForExamSequnceId(sequenceId);
        case 10:
          data = _context5.sent;
          _context5.next = 16;
          break;
        case 13:
          _context5.next = 15;
          return fetchActiveAttempt();
        case 15:
          data = _context5.sent;
        case 16:
          // Update dictionaries returned by edx-exams to have correct status key for legacy compatibility
          if (data.attempt_status) {
            data.status = data.attempt_status;
            delete data.attempt_status;
          }
          return _context5.abrupt("return", data);
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _pollExamAttempt.apply(this, arguments);
}
function createExamAttempt(_x7, _x8) {
  return _createExamAttempt.apply(this, arguments);
}
function _createExamAttempt() {
  _createExamAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(examId, legacyAttempt) {
    var startClock,
      attemptProctored,
      urlString,
      url,
      payload,
      _yield$getAuthenticat,
      data,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          startClock = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;
          attemptProctored = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
          if (!(0, _frontendPlatform.getConfig)().EXAMS_BASE_URL || legacyAttempt) {
            urlString = "".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL);
          } else {
            urlString = "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt");
          }
          url = new URL(urlString);
          payload = {
            exam_id: examId,
            start_clock: startClock.toString(),
            attempt_proctored: attemptProctored.toString()
          };
          _context6.next = 7;
          return (0, _auth.getAuthenticatedHttpClient)().post(url.href, payload);
        case 7:
          _yield$getAuthenticat = _context6.sent;
          data = _yield$getAuthenticat.data;
          return _context6.abrupt("return", data);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _createExamAttempt.apply(this, arguments);
}
function updateAttemptStatus(_x9, _x10, _x11) {
  return _updateAttemptStatus.apply(this, arguments);
}
function _updateAttemptStatus() {
  _updateAttemptStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(attemptId, action, legacyAttempt) {
    var detail,
      urlString,
      url,
      payload,
      _yield$getAuthenticat2,
      data,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          detail = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : null;
          if (!(0, _frontendPlatform.getConfig)().EXAMS_BASE_URL || legacyAttempt) {
            urlString = "".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/").concat(attemptId);
          } else {
            urlString = "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt/").concat(attemptId);
          }
          url = new URL(urlString);
          payload = {
            action: action
          };
          if (detail) {
            payload.detail = detail;
          }
          _context7.next = 7;
          return (0, _auth.getAuthenticatedHttpClient)().put(url.href, payload);
        case 7:
          _yield$getAuthenticat2 = _context7.sent;
          data = _yield$getAuthenticat2.data;
          return _context7.abrupt("return", data);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _updateAttemptStatus.apply(this, arguments);
}
function stopAttempt(_x12) {
  return _stopAttempt.apply(this, arguments);
}
function _stopAttempt() {
  _stopAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(attemptId) {
    var legacyAttempt,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          legacyAttempt = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;
          return _context8.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.STOP, legacyAttempt));
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _stopAttempt.apply(this, arguments);
}
function continueAttempt(_x13) {
  return _continueAttempt.apply(this, arguments);
}
function _continueAttempt() {
  _continueAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(attemptId) {
    var legacyAttempt,
      _args9 = arguments;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          legacyAttempt = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;
          return _context9.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.START, legacyAttempt));
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _continueAttempt.apply(this, arguments);
}
function submitAttempt(_x14) {
  return _submitAttempt.apply(this, arguments);
}
function _submitAttempt() {
  _submitAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(attemptId) {
    var legacyAttempt,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          legacyAttempt = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : false;
          return _context10.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.SUBMIT, legacyAttempt));
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _submitAttempt.apply(this, arguments);
}
function resetAttempt(_x15) {
  return _resetAttempt.apply(this, arguments);
}
function _resetAttempt() {
  _resetAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(attemptId) {
    var legacyAttempt,
      _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          legacyAttempt = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
          return _context11.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.RESET, legacyAttempt));
        case 2:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _resetAttempt.apply(this, arguments);
}
function endExamWithFailure(_x16, _x17) {
  return _endExamWithFailure.apply(this, arguments);
}
function _endExamWithFailure() {
  _endExamWithFailure = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(attemptId, error) {
    var legacyAttempt,
      _args12 = arguments;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          legacyAttempt = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : false;
          return _context12.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.ERROR, legacyAttempt, error));
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _endExamWithFailure.apply(this, arguments);
}
function softwareDownloadAttempt(_x18) {
  return _softwareDownloadAttempt.apply(this, arguments);
}
function _softwareDownloadAttempt() {
  _softwareDownloadAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(attemptId) {
    var legacyAttempt,
      _args13 = arguments;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          legacyAttempt = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : false;
          return _context13.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.CLICK_DOWNLOAD_SOFTWARE, legacyAttempt));
        case 2:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _softwareDownloadAttempt.apply(this, arguments);
}
function declineAttempt(_x19) {
  return _declineAttempt.apply(this, arguments);
}
function _declineAttempt() {
  _declineAttempt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(attemptId) {
    var legacyAttempt,
      _args14 = arguments;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          legacyAttempt = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : false;
          return _context14.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.DECLINE, legacyAttempt));
        case 2:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _declineAttempt.apply(this, arguments);
}
function fetchExamReviewPolicy(_x20) {
  return _fetchExamReviewPolicy.apply(this, arguments);
}
function _fetchExamReviewPolicy() {
  _fetchExamReviewPolicy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(examId) {
    var url, _yield$getAuthenticat3, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/api/edx_proctoring/v1/proctored_exam/review_policy/exam_id/").concat(examId, "/"));
          _context15.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 3:
          _yield$getAuthenticat3 = _context15.sent;
          data = _yield$getAuthenticat3.data;
          return _context15.abrupt("return", data);
        case 6:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _fetchExamReviewPolicy.apply(this, arguments);
}
function fetchProctoringSettings(_x21, _x22) {
  return _fetchProctoringSettings.apply(this, arguments);
}
function _fetchProctoringSettings() {
  _fetchProctoringSettings = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(courseId, examId) {
    var url, _yield$getAuthenticat4, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (!(0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/api/edx_proctoring/v1/proctored_exam/settings/exam_id/").concat(examId, "/"));
          } else {
            url = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exam/provider_settings/course_id/").concat(courseId, "/exam_id/").concat(examId));
          }
          _context16.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 3:
          _yield$getAuthenticat4 = _context16.sent;
          data = _yield$getAuthenticat4.data;
          return _context16.abrupt("return", data);
        case 6:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _fetchProctoringSettings.apply(this, arguments);
}
function fetchExamAccessToken(_x23) {
  return _fetchExamAccessToken.apply(this, arguments);
}
function _fetchExamAccessToken() {
  _fetchExamAccessToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(examId) {
    var url, _yield$getAuthenticat5, data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          url = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/access_tokens/exam_id/").concat(examId, "/"));
          _context17.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 3:
          _yield$getAuthenticat5 = _context17.sent;
          data = _yield$getAuthenticat5.data;
          return _context17.abrupt("return", data);
        case 6:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return _fetchExamAccessToken.apply(this, arguments);
}
//# sourceMappingURL=api.js.map