var n = r(906046),
    i = n("Date.prototype.getDay"),
    o = function (e) {
        try {
            return i(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = n("Object.prototype.toString"),
    s = r(581070)();
e.exports = function (e) {
    return "object" == typeof e && null !== e && (s ? o(e) : "[object Date]" === a(e));
};
