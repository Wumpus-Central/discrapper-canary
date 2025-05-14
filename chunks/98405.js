var e = r(127849),
    o = r(840991).f,
    i = r(436207),
    u = r(556585),
    c = r(587218),
    a = r(190289),
    f = r(275717);
t.exports = function (t, n) {
    var r,
        s,
        l,
        p,
        d,
        _ = t.target,
        h = t.global,
        y = t.stat;
    if ((r = h ? e : y ? e[_] || c(_, {}) : e[_] && e[_].prototype))
        for (s in n) {
            if (((p = n[s]), (l = t.dontCallGetSet ? (d = o(r, s)) && d.value : r[s]), !f(h ? s : _ + (y ? '.' : '#') + s, t.forced) && void 0 !== l)) {
                if (typeof p == typeof l) continue;
                a(p, l);
            }
            (t.sham || (l && l.sham)) && i(p, 'sham', !0), u(r, s, p, t);
        }
};
