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
exports.AnyEnumMatcher = void 0;
var Matcher_1 = require("./Matcher");
var AnyEnumMatcher = (function (_super) {
    __extends(AnyEnumMatcher, _super);
    function AnyEnumMatcher() {
        return _super.call(this) || this;
    }
    AnyEnumMatcher.prototype.match = function (value) {
        return typeof value === "string" || typeof value === "number";
    };
    AnyEnumMatcher.prototype.toString = function () {
        return "anyString()";
    };
    return AnyEnumMatcher;
}(Matcher_1.Matcher));
exports.AnyEnumMatcher = AnyEnumMatcher;
//# sourceMappingURL=AnyEnumMatcher.js.map