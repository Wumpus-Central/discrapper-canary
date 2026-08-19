"use strict";
var n = "u" > typeof Symbol && Symbol,
    o = r(640847);
e.exports = function () {
    return (
        "function" == typeof n &&
        "function" == typeof Symbol &&
        "symbol" == typeof n("foo") &&
        "symbol" == typeof Symbol("bar") &&
        o()
    );
};
