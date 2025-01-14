"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallThroughMethodStub = void 0;
var CallThroughMethodStub = (function () {
    function CallThroughMethodStub(instance, method) {
        this.instance = instance;
        this.method = method;
    }
    CallThroughMethodStub.prototype.getGroupIndex = function () {
        return -1;
    };
    CallThroughMethodStub.prototype.isApplicable = function (args) {
        return false;
    };
    CallThroughMethodStub.prototype.execute = function (args) {
        this.result = this.method.apply(this.instance, args);
    };
    CallThroughMethodStub.prototype.getValue = function () {
        return this.result;
    };
    return CallThroughMethodStub;
}());
exports.CallThroughMethodStub = CallThroughMethodStub;
//# sourceMappingURL=CallThroughMethodStub.js.map