var r = n(40111),
    i = n(915124),
    a = n(490740),
    s = parseFloat,
    o = Math.min,
    l = Math.random;
e.exports = function (e, t, n) {
    if (
        (n && "boolean" != typeof n && i(e, t, n) && (t = n = void 0),
        void 0 === n &&
            ("boolean" == typeof t ? ((n = t), (t = void 0)) : "boolean" == typeof e && ((n = e), (e = void 0))),
        void 0 === e && void 0 === t
            ? ((e = 0), (t = 1))
            : ((e = a(e)), void 0 === t ? ((t = e), (e = 0)) : (t = a(t))),
        e > t)
    ) {
        var c = e;
        (e = t), (t = c);
    }
    if (n || e % 1 || t % 1) {
        var u = l();
        return o(e + u * (t - e + s("1e-" + ((u + "").length - 1))), t);
    }
    return r(e, t);
};
