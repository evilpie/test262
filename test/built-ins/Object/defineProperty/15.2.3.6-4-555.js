// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-555
description: >
    ES5 Attributes - success to update [[Configurable]] attribute of
    accessor property ([[Get]] is a Function, [[Set]] is a Function,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
includes: [propertyHelper.js]
---*/

var obj = {};

var getFunc = function () {
    return 1001;
};

var verifySetFunc = "data";
var setFunc = function (value) {
    verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: getFunc,
    set: setFunc,
    enumerable: false,
    configurable: true
});

var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
assert.sameValue(desc1.configurable, true);

Object.defineProperty(obj, "prop", {
    configurable: false
});

verifyNotConfigurable(obj, "prop");
