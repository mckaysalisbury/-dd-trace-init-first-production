"use strict";
exports.__esModule = true;
var dd_trace_1 = require("dd-trace");
if (process.env.NODE_ENV === 'production') {
    dd_trace_1["default"].init();
}
