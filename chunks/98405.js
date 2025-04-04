var r = a(127849),
    n = a(840991).f,
    _ = a(436207),
    o = a(556585),
    i = a(587218),
    c = a(190289),
    s = a(275717);
t.exports = function (t, e) {
    var a,
        E,
        l,
        u,
        I,
        R = t.target,
        d = t.global,
        A = t.stat;
    if ((a = d ? r : A ? r[R] || i(R, {}) : r[R] && r[R].prototype))
        for (E in e) {
            if (((u = e[E]), (l = t.dontCallGetSet ? (I = n(a, E)) && I.value : a[E]), !s(d ? E : R + (A ? '.' : '#') + E, t.forced) && void 0 !== l)) {
                if (typeof u == typeof l) continue;
                c(u, l);
            }
            (t.sham || (l && l.sham)) && _(u, 'sham', !0), o(a, E, u, t);
        }
};
