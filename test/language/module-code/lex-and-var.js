// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 10.2.1
description: >
    It is a Syntax Error if any element of the LexicallyDeclaredNames of
    ModuleItemList also occurs in the VarDeclaredNames of ModuleItemList.
flags: [module]
features: [let]
negative: [SyntaxError]
---*/

let x;
var x;
