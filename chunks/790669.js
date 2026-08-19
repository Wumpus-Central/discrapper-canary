"use strict";
var n = r(906046),
    o = n("Date.prototype.getDay"),
    i = function (e) {
        try {
            return o(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = n("Object.prototype.toString"),
    s = r(581070)();
e.exports = function (e) {
    return "object" == typeof e && null !== e && (s ? i(e) : "[object Date]" === a(e));
};
