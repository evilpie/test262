// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-8-b-iii-1-29
description: >
    Array.prototype.reduceRight applied to Function object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 2);
            }
        }

        var obj = function (a, b, c) {
            return a + b + c;
        };

        obj[0] = 0;
        obj[1] = 1;
        obj[2] = 2;

        Array.prototype.reduceRight.call(obj, callbackfn);
        return testResult;

    }
runTestCase(testcase);
