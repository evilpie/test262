// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1-8-7
description: >
    Allow reserved words as property names by set function within an
    object, accessed via indexing: while, debugger, function
includes: [runTestCase.js]
---*/

function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set while(value){
                test0 = value;
            },
            get while(){
                return test0
            },
            set debugger(value){
                test1 = value;
            },
            get debugger(){
                return test1;
            },
            set function(value){
                test2 = value;
            },
            get function(){
                return test2;
            }
        }; 
        var arr = [
            'while' ,
            'debugger', 
            'function'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
