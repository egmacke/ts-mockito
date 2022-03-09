"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockableFunctionsFinder = void 0;
var MockableFunctionsFinder = (function () {
    function MockableFunctionsFinder() {
        this.functionNameRegex = /[.\s]([^.\s]+?)(?:\(|\s+=\s+(?:function\s*(?:[^.\s]+?\s*)?)?\()/g;
        this.cleanFunctionNameRegex = /^[.\s]([^.\s]+?)[\s(]/;
        this.excludedFunctionNames = ["hasOwnProperty", "function"];
    }
    MockableFunctionsFinder.prototype.find = function (code) {
        var _this = this;
        return (code.match(this.functionNameRegex) || [])
            .map(function (match) { return match.match(_this.cleanFunctionNameRegex)[1]; })
            .filter(function (functionName) { return _this.isMockable(functionName); })
            .map(function (functionName) { return functionName.indexOf('=') > 0 ? functionName.substr(0, functionName.indexOf('=')) : functionName; });
    };
    MockableFunctionsFinder.prototype.isMockable = function (name) {
        return this.excludedFunctionNames.indexOf(name) < 0;
    };
    return MockableFunctionsFinder;
}());
exports.MockableFunctionsFinder = MockableFunctionsFinder;
//# sourceMappingURL=MockableFunctionsFinder.js.map