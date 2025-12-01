var r = n(620014),
    i = n(501979),
    a = n(575473),
    o = n(907287),
    s = n(65064),
    l = n(402428),
    c = n(207757),
    u = n(556868),
    d = 1,
    f = "[object Arguments]",
    p = "[object Array]",
    _ = "[object Object]",
    m = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, g, E) {
    var b = l(e),
        y = l(t),
        O = b ? p : s(e),
        v = y ? p : s(t);
    (O = O == f ? _ : O), (v = v == f ? _ : v);
    var S = O == _,
        I = v == _,
        T = O == v;
    if (T && c(e)) {
        if (!c(t)) return !1;
        (b = !0), (S = !1);
    }
    if (T && !S) return E || (E = new r()), b || u(e) ? i(e, t, n, h, g, E) : a(e, t, O, n, h, g, E);
    if (!(n & d)) {
        var A = S && m.call(e, "__wrapped__"),
            C = I && m.call(t, "__wrapped__");
        if (A || C) {
            var N = A ? e.value() : e,
                P = C ? t.value() : t;
            return E || (E = new r()), g(N, P, n, h, E);
        }
    }
    return !!T && (E || (E = new r()), o(e, t, n, h, g, E));
};
