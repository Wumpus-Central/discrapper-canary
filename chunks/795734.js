"use strict";
var n = r(439619)("%String%"),
    o = r(741623);
e.exports = function (e) {
    if ("symbol" == typeof e) throw new o("Cannot convert a Symbol value to a string");
    return n(e);
};
