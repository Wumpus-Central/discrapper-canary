var n = r(855986),
    t = r(192308),
    a = r(225123),
    c = r(361158),
    i = r(33524),
    p = r(174768),
    u = r(186111);
r.d(
    s,
    {},
    {
        A: function () {
            let e = (0, n.bG)([u.A], () => u.A.hasLayers()),
                s = (0, c.xr)((e) => e.fullScreenLayers.length > 0),
                r = (0, i.LL)(),
                h = (0, t.re)(t.ue),
                A = (0, n.bG)([a.A], () => a.A.isConnected()),
                d = (0, n.bG)([p.A], () => p.A.isOpen());
            return e || s || h || r || !A || d;
        },
    },
);
