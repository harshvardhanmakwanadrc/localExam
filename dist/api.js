"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsExam = exports.useFetchExamAccessToken = exports.useExamAccessToken = void 0;
var _reactRedux = require("react-redux");
var _data = require("./data");
var useIsExam = exports.useIsExam = function useIsExam() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam;
  return !!(exam !== null && exam !== void 0 && exam.id);
};
var useExamAccessToken = exports.useExamAccessToken = function useExamAccessToken() {
  var _useSelector2 = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector2.exam,
    examAccessToken = _useSelector2.examAccessToken;
  if (!exam) {
    return '';
  }
  return examAccessToken.exam_access_token;
};
var useFetchExamAccessToken = exports.useFetchExamAccessToken = function useFetchExamAccessToken() {
  var _useSelector3 = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector3.exam;
  var dispatch = (0, _reactRedux.useDispatch)();
  if (!exam) {
    return Promise.resolve();
  }
  return function () {
    return dispatch((0, _data.examRequiresAccessToken)());
  };
};
//# sourceMappingURL=api.js.map