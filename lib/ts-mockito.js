"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spy = spy;
exports.mock = mock;
exports.verify = verify;
exports.when = when;
exports.instance = instance;
exports.capture = capture;
exports.reset = reset;
exports.resetCalls = resetCalls;
exports.anyOfClass = anyOfClass;
exports.anyFunction = anyFunction;
exports.anyNumber = anyNumber;
exports.anyString = anyString;
exports.anyEnum = anyEnum;
exports.anything = anything;
exports.between = between;
exports.deepEqual = deepEqual;
exports.notNull = notNull;
exports.strictEqual = strictEqual;
exports.match = match;
exports.objectContaining = objectContaining;
exports.arrayContaining = arrayContaining;
var ArgCaptor_1 = require("./capture/ArgCaptor");
var AnyEnumMatcher_1 = require("./matcher/type/AnyEnumMatcher");
var AnyFunctionMatcher_1 = require("./matcher/type/AnyFunctionMatcher");
var AnyNumberMatcher_1 = require("./matcher/type/AnyNumberMatcher");
var AnyOfClassMatcher_1 = require("./matcher/type/AnyOfClassMatcher");
var AnyStringMatcher_1 = require("./matcher/type/AnyStringMatcher");
var AnythingMatcher_1 = require("./matcher/type/AnythingMatcher");
var ArrayContainingMatcher_1 = require("./matcher/type/ArrayContainingMatcher");
var BetweenMatcher_1 = require("./matcher/type/BetweenMatcher");
var DeepEqualMatcher_1 = require("./matcher/type/DeepEqualMatcher");
var MatchingStringMatcher_1 = require("./matcher/type/MatchingStringMatcher");
var NotNullMatcher_1 = require("./matcher/type/NotNullMatcher");
var ObjectContainingMatcher_1 = require("./matcher/type/ObjectContainingMatcher");
var StrictEqualMatcher_1 = require("./matcher/type/StrictEqualMatcher");
var MethodStubSetter_1 = require("./MethodStubSetter");
var MethodStubVerificator_1 = require("./MethodStubVerificator");
var MethodToStub_1 = require("./MethodToStub");
var Mock_1 = require("./Mock");
var Spy_1 = require("./Spy");
function spy(instanceToSpy) {
    return new Spy_1.Spy(instanceToSpy).getMock();
}
function mock(clazz) {
    return new Mock_1.Mocker(clazz).getMock();
}
function verify(method) {
    return new MethodStubVerificator_1.MethodStubVerificator(method);
}
function when(method) {
    return new MethodStubSetter_1.MethodStubSetter(method);
}
function instance(mockedValue) {
    var tsmockitoInstance = mockedValue.__tsmockitoInstance;
    return tsmockitoInstance;
}
function capture(method) {
    var methodStub = method();
    if (methodStub instanceof MethodToStub_1.MethodToStub) {
        var actions = methodStub.mocker.getActionsByName(methodStub.name);
        return new ArgCaptor_1.ArgCaptor(actions);
    }
    else {
        throw Error("Cannot capture from not mocked object.");
    }
}
function reset() {
    var mockedValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mockedValues[_i] = arguments[_i];
    }
    mockedValues.forEach(function (mockedValue) {
        return mockedValue.__tsmockitoMocker.reset();
    });
}
function resetCalls() {
    var mockedValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mockedValues[_i] = arguments[_i];
    }
    mockedValues.forEach(function (mockedValue) {
        return mockedValue.__tsmockitoMocker.resetCalls();
    });
}
function anyOfClass(expectedClass) {
    return new AnyOfClassMatcher_1.AnyOfClassMatcher(expectedClass);
}
function anyFunction() {
    return new AnyFunctionMatcher_1.AnyFunctionMatcher();
}
function anyNumber() {
    return new AnyNumberMatcher_1.AnyNumberMatcher();
}
function anyString() {
    return new AnyStringMatcher_1.AnyStringMatcher();
}
function anyEnum() {
    return new AnyEnumMatcher_1.AnyEnumMatcher();
}
function anything() {
    return new AnythingMatcher_1.AnythingMatcher();
}
function between(min, max) {
    return new BetweenMatcher_1.BetweenMatcher(min, max);
}
function deepEqual(expectedValue) {
    return new DeepEqualMatcher_1.DeepEqualMatcher(expectedValue);
}
function notNull() {
    return new NotNullMatcher_1.NotNullMatcher();
}
function strictEqual(expectedValue) {
    return new StrictEqualMatcher_1.StrictEqualMatcher(expectedValue);
}
function match(expectedValue) {
    return new MatchingStringMatcher_1.MatchingStringMatcher(expectedValue);
}
function objectContaining(expectedValue) {
    return new ObjectContainingMatcher_1.ObjectContainingMatcher(expectedValue);
}
function arrayContaining(expectedValue) {
    return new ArrayContainingMatcher_1.ArrayContainingMatcher(expectedValue);
}
exports.default = {
    spy: spy,
    mock: mock,
    verify: verify,
    when: when,
    instance: instance,
    capture: capture,
    reset: reset,
    resetCalls: resetCalls,
    anyOfClass: anyOfClass,
    anyFunction: anyFunction,
    anyNumber: anyNumber,
    anyString: anyString,
    anyEnum: anyEnum,
    anything: anything,
    between: between,
    deepEqual: deepEqual,
    notNull: notNull,
    strictEqual: strictEqual,
    match: match,
    objectContaining: objectContaining,
    arrayContaining: arrayContaining
};
//# sourceMappingURL=ts-mockito.js.map