"use strict";
var r = n(860511),
    i = Object.defineProperty;
e.exports = function (e, t) {
    try {
        i(r, e, { value: t, configurable: !0, writable: !0 });
    } catch (n) {
        r[e] = t;
    }
    return t;
};
