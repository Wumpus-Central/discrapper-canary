var r = a(620014),
    n = a(501979),
    _ = a(575473),
    o = a(907287),
    i = a(65064),
    c = a(402428),
    s = a(207757),
    E = a(556868),
    l = '[object Arguments]',
    u = '[object Array]',
    I = '[object Object]',
    R = Object.prototype.hasOwnProperty;
t.exports = function (t, e, a, d, f, A) {
    var p = c(t),
        N = c(e),
        T = p ? u : i(t),
        L = N ? u : i(e);
    (T = T == l ? I : T), (L = L == l ? I : L);
    var h = T == I,
        O = L == I,
        D = T == L;
    if (D && s(t)) {
        if (!s(e)) return !1;
        (p = !0), (h = !1);
    }
    if (D && !h) return A || (A = new r()), p || E(t) ? n(t, e, a, d, f, A) : _(t, e, T, a, d, f, A);
    if (!(1 & a)) {
        var g = h && R.call(t, '__wrapped__'),
            P = O && R.call(e, '__wrapped__');
        if (g || P) {
            var y = g ? t.value() : t,
                m = P ? e.value() : e;
            return A || (A = new r()), f(y, m, a, d, A);
        }
    }
    return !!D && (A || (A = new r()), o(t, e, a, d, f, A));
};
