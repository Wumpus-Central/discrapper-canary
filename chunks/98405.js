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
        f,
        p,
        _ = e.target,
        m = e.global,
        h = e.stat;
    if ((n = m ? r : h ? r[_] || s(_, {}) : r[_] && r[_].prototype))
        for (u in t) {
            if (
                ((f = t[u]),
                (d = e.dontCallGetSet ? (p = i(n, u)) && p.value : n[u]),
                !c(m ? u : _ + (h ? "." : "#") + u, e.forced) && void 0 !== d)
            ) {
                if (typeof f == typeof d) continue;
                l(f, d);
            }
            (e.sham || (d && d.sham)) && a(f, "sham", !0), o(n, u, f, e);
        }
};
