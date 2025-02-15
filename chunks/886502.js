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
t.exports = function (t, e, a, d, A, f) {
    var p = c(t),
        T = c(e),
        N = p ? u : i(t),
        L = T ? u : i(e);
    (N = N == l ? I : N), (L = L == l ? I : L);
    var h = N == I,
        O = L == I,
        D = N == L;
    if (D && s(t)) {
        if (!s(e)) return !1;
        (p = !0), (h = !1);
    }
    if (D && !h) return f || (f = new r()), p || E(t) ? n(t, e, a, d, A, f) : _(t, e, N, a, d, A, f);
    if (!(1 & a)) {
        var g = h && R.call(t, '__wrapped__'),
            m = O && R.call(e, '__wrapped__');
        if (g || m) {
            var y = g ? t.value() : t,
                P = m ? e.value() : e;
            return f || (f = new r()), A(y, P, a, d, f);
        }
    }
    return !!D && (f || (f = new r()), o(t, e, a, d, A, f));
};
