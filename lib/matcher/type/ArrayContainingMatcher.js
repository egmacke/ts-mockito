"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayContainingMatcher = void 0;
var Matcher_1 = require("./Matcher");
var ArrayContainingMatcher = (function (_super) {
    __extends(ArrayContainingMatcher, _super);
    function ArrayContainingMatcher(expectedValue) {
        var _this = _super.call(this) || this;
        _this.expectedValue = expectedValue;
        return _this;
    }
    ArrayContainingMatcher.prototype.match = function (value) {
        if (Array.isArray(this.expectedValue)) {
            return this.expectedValue.every(function (item) { return value.includes(item); });
        }
        else {
            return value.includes(this.expectedValue);
        }
    };
    ArrayContainingMatcher.prototype.toString = function () {
        return "objectContaining(".concat(JSON.stringify(this.expectedValue), ")");
    };
    return ArrayContainingMatcher;
}(Matcher_1.Matcher));
exports.ArrayContainingMatcher = ArrayContainingMatcher;
//# sourceMappingURL=ArrayContainingMatcher.js.map