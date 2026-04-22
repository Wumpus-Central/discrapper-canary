var r = n(292528),
    i = n(381138),
    s = n(369705),
    a = n(431250),
    o = n(261010),
    l = n(926226),
    u = n(758513),
    d = n(481702),
    c = "[object Arguments]",
    _ = "[object Array]",
    f = "[object Object]",
    E = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, p, m) {
    var g = l(e),
        A = l(t),
        I = g ? _ : o(e),
        T = A ? _ : o(t);
    (I = I == c ? f : I), (T = T == c ? f : T);
    var S = I == f,
        y = T == f,
        N = I == T;
    if (N && u(e)) {
        if (!u(t)) return !1;
        (g = !0), (S = !1);
    }
    if (N && !S) return m || (m = new r()), g || d(e) ? i(e, t, n, h, p, m) : s(e, t, I, n, h, p, m);
    if (!(1 & n)) {
        var O = S && E.call(e, "__wrapped__"),
            R = y && E.call(t, "__wrapped__");
        if (O || R) {
            var v = O ? e.value() : e,
                C = R ? t.value() : t;
            return m || (m = new r()), p(v, C, n, h, m);
        }
    }
    return !!N && (m || (m = new r()), a(e, t, n, h, p, m));
};
