"use strict";
var r = n(906046),
    i = r("Date.prototype.getDay"),
    s = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = r("Object.prototype.toString"),
    o = n(581070)();
e.exports = function (e) {
    return "object" == typeof e && null !== e && (o ? s(e) : "[object Date]" === a(e));
};
