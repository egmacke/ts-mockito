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
exports.StrictEqualMatcher = void 0;
var Matcher_1 = require("./Matcher");
var StrictEqualMatcher = (function (_super) {
    __extends(StrictEqualMatcher, _super);
    function StrictEqualMatcher(expectedValue) {
        var _this = _super.call(this) || this;
        _this.expectedValue = expectedValue;
        return _this;
    }
    StrictEqualMatcher.prototype.match = function (value) {
        return this.expectedValue === value;
    };
    StrictEqualMatcher.prototype.toString = function () {
        if (this.expectedValue instanceof Array) {
            return "strictEqual([".concat(this.expectedValue, "])");
        }
        else {
            return "strictEqual(".concat(this.expectedValue, ")");
        }
    };
    return StrictEqualMatcher;
}(Matcher_1.Matcher));
exports.StrictEqualMatcher = StrictEqualMatcher;
//# sourceMappingURL=StrictEqualMatcher.js.map