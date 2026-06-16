"use strict";
var i = n(860511),
    r = Object.defineProperty;
e.exports = function (e, t) {
    try {
        r(i, e, { value: t, configurable: !0, writable: !0 });
    } catch (n) {
        i[e] = t;
    }
    return t;
};
