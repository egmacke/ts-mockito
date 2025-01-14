"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodStubCollection = void 0;
var _ = require("lodash");
var MethodStubCollection = (function () {
    function MethodStubCollection() {
        this.items = [];
    }
    MethodStubCollection.prototype.add = function (item) {
        this.items.push(item);
    };
    MethodStubCollection.prototype.getLastMatchingGroupIndex = function (args) {
        var matchingGroup = _.clone(this.items).reverse().find(function (item) { return item.isApplicable(args); });
        return matchingGroup ? matchingGroup.getGroupIndex() : -1;
    };
    MethodStubCollection.prototype.getFirstMatchingFromGroupAndRemoveIfNotLast = function (groupIndex, args) {
        var result = this.getFirstMatchingFromGroup(groupIndex, args);
        this.removeIfNotLast(groupIndex, args);
        return result;
    };
    MethodStubCollection.prototype.hasMatchingInAnyGroup = function (args) {
        return this.items.some(function (item) { return item.isApplicable(args); });
    };
    MethodStubCollection.prototype.removeIfNotLast = function (groupIndex, args) {
        var index = this.getFirstMatchingIndexFromGroup(groupIndex, args);
        if (index > -1 && this.getItemsCountInGroup(groupIndex) > 1) {
            this.items.splice(index, 1);
        }
    };
    MethodStubCollection.prototype.getFirstMatchingFromGroup = function (groupIndex, args) {
        return this.items.find(function (item) { return item.getGroupIndex() === groupIndex && item.isApplicable(args); });
    };
    MethodStubCollection.prototype.getFirstMatchingIndexFromGroup = function (groupIndex, args) {
        return this.items.findIndex(function (item) { return item.getGroupIndex() === groupIndex && item.isApplicable(args); });
    };
    MethodStubCollection.prototype.getItemsCountInGroup = function (groupIndex) {
        return this.items.filter(function (item) { return item.getGroupIndex() === groupIndex; }).length;
    };
    return MethodStubCollection;
}());
exports.MethodStubCollection = MethodStubCollection;
//# sourceMappingURL=MethodStubCollection.js.map