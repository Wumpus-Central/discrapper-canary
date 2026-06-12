var i = n(292528),
    r = n(381138),
    s = n(369705),
    a = n(431250),
    o = n(261010),
    l = n(926226),
    u = n(758513),
    c = n(481702),
    d = "[object Arguments]",
    _ = "[object Array]",
    h = "[object Object]",
    f = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, p, E, m) {
    var g = l(e),
        A = l(t),
        I = g ? _ : o(e),
        T = A ? _ : o(t);
    (I = I == d ? h : I), (T = T == d ? h : T);
    var S = I == h,
        y = T == h,
        N = I == T;
    if (N && u(e)) {
        if (!u(t)) return !1;
        (g = !0), (S = !1);
    }
    if (N && !S) return m || (m = new i()), g || c(e) ? r(e, t, n, p, E, m) : s(e, t, I, n, p, E, m);
    if (!(1 & n)) {
        var v = S && f.call(e, "__wrapped__"),
            C = y && f.call(t, "__wrapped__");
        if (v || C) {
            var R = v ? e.value() : e,
                O = C ? t.value() : t;
            return m || (m = new i()), E(R, O, n, p, m);
        }
    }
    return !!N && (m || (m = new i()), a(e, t, n, p, E, m));
};
