"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pingApplication = pingApplication;
exports.workerPromiseForEventNames = workerPromiseForEventNames;
var _logging = require("@edx/frontend-platform/logging");
var _constants = _interopRequireDefault(require("./constants"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function createWorker(url) {
  var blob = new Blob(["importScripts('".concat(url, "');")], {
    type: 'application/javascript'
  });
  var blobUrl = window.URL.createObjectURL(blob);
  return new Worker(blobUrl);
}
function workerTimeoutPromise(timeoutMilliseconds) {
  var message = "worker failed to respond after ".concat(timeoutMilliseconds, " ms");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(Error(message));
    }, timeoutMilliseconds);
  });
}
function workerPromiseForEventNames(eventNames, workerUrl) {
  return function (timeout, attemptExternalId) {
    var proctoringBackendWorker = createWorker(workerUrl);
    return new Promise(function (resolve, reject) {
      var _responseHandler = function responseHandler(e) {
        if (e.data.type === eventNames.successEventName) {
          proctoringBackendWorker.removeEventListener('message', _responseHandler);
          proctoringBackendWorker.terminate();
          resolve();
        } else {
          reject(e.data.error);
          (0, _logging.logError)('workerPromiseForEventNames failed with the following error:', e.data.error);
        }
      };
      proctoringBackendWorker.addEventListener('message', _responseHandler);
      proctoringBackendWorker.postMessage({
        type: eventNames.promptEventName,
        timeout: timeout,
        attemptExternalId: attemptExternalId
      });
    });
  };
}
function pingApplication(timeoutInSeconds, attemptExternalId, workerUrl) {
  var TIMEOUT_BUFFER_SECONDS = 10;
  var workerPingTimeout = timeoutInSeconds - TIMEOUT_BUFFER_SECONDS; // 10s buffer for worker to respond
  return Promise.race([workerPromiseForEventNames(_constants["default"].ping, workerUrl)(workerPingTimeout * 1000, attemptExternalId), workerTimeoutPromise(timeoutInSeconds * 1000)]);
}
//# sourceMappingURL=handlers.js.map