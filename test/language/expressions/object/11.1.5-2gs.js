// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.1.5-2gs
description: >
    Duplicate definitions of data properties are allowed in ObjectLiterals.
---*/

var obj = { _11_1_5_2_gs: 10, _11_1_5_2_gs: 20 };
assert.sameValue(obj._11_1_5_2_gs, 20);
