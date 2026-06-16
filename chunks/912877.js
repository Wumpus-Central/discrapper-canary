"use strict";
var i = "u" > typeof Symbol && Symbol,
    r = n(640847);
e.exports = function () {
    return (
        "function" == typeof i &&
        "function" == typeof Symbol &&
        "symbol" == typeof i("foo") &&
        "symbol" == typeof Symbol("bar") &&
        r()
    );
};
