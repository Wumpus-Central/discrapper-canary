var i = n(40111),
    r = n(915124),
    s = n(490740),
    a = parseFloat,
    o = Math.min,
    l = Math.random;
e.exports = function (e, t, n) {
    if (
        (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0),
        void 0 === n &&
            ("boolean" == typeof t ? ((n = t), (t = void 0)) : "boolean" == typeof e && ((n = e), (e = void 0))),
        void 0 === e && void 0 === t
            ? ((e = 0), (t = 1))
            : ((e = s(e)), void 0 === t ? ((t = e), (e = 0)) : (t = s(t))),
        e > t)
    ) {
        var u = e;
        (e = t), (t = u);
    }
    if (n || e % 1 || t % 1) {
        var c = l();
        return o(e + c * (t - e + a("1e-" + ((c + "").length - 1))), t);
    }
    return i(e, t);
};
