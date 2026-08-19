"use strict";
var n = r(147205),
    o = "u" < typeof globalThis ? r.g : globalThis;
e.exports = function () {
    for (var e = [], t = 0; t < n.length; t++) "function" == typeof o[n[t]] && (e[e.length] = n[t]);
    return e;
};
