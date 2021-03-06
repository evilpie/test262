// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1-3-7
description: >
    Allow reserved words as property names by index
    assignment,verified with hasOwnProperty: while, debugger, function
includes: [runTestCase.js]
---*/

function testcase() {
        var tokenCodes  = {};
        tokenCodes['while'] = 0;
        tokenCodes['debugger'] = 1;
        tokenCodes['function'] = 2; 
        var arr = [
            'while',
            'debugger',
            'function'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);
