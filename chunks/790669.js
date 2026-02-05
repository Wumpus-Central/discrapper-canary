"use strict";
var r = n(906046),
    i = r("Date.prototype.getDay"),
    a = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    s = r("Object.prototype.toString"),
    o = "[object Date]",
    l = n(581070)();
e.exports = function (e) {
    return "object" == typeof e && null !== e && (l ? a(e) : s(e) === o);
};
