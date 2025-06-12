var r = n(127849),
    i = n(840991).f,
    a = n(436207),
    o = n(556585),
    s = n(587218),
    l = n(190289),
    c = n(275717);
e.exports = function (e, t) {
    var n,
        u,
        d,
        _,
        f,
        p = e.target,
        h = e.global,
        m = e.stat;
    if ((n = h ? r : m ? r[p] || s(p, {}) : r[p] && r[p].prototype))
        for (u in t) {
            if (((_ = t[u]), (d = e.dontCallGetSet ? (f = i(n, u)) && f.value : n[u]), !c(h ? u : p + (m ? '.' : '#') + u, e.forced) && void 0 !== d)) {
                if (typeof _ == typeof d) continue;
                l(_, d);
            }
            (e.sham || (d && d.sham)) && a(_, 'sham', !0), o(n, u, _, e);
        }
};
