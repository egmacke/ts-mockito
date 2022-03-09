"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodCallToStringConverter = void 0;
var MethodCallToStringConverter = (function () {
    function MethodCallToStringConverter() {
    }
    MethodCallToStringConverter.prototype.convert = function (method) {
        var stringifiedMatchers = method.matchers.map(function (matcher) { return matcher.toString(); }).join(", ");
        return "".concat(method.name, "(").concat(stringifiedMatchers, ")\" ");
    };
    MethodCallToStringConverter.prototype.convertActualCalls = function (calls) {
        return calls.map(function (call) { return "".concat(call.methodName, "(").concat(call.args.map(function (arg) { return arg.toString(); }).join(", "), ")"); });
    };
    return MethodCallToStringConverter;
}());
exports.MethodCallToStringConverter = MethodCallToStringConverter;
//# sourceMappingURL=MethodCallToStringConverter.js.map