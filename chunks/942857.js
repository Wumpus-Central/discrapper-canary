var n = r(855986),
    u = r(192308),
    l = r(225123),
    s = r(361158),
    a = r(33524),
    i = r(174768),
    c = r(186111);
r.d(
    t,
    {},
    {
        A: function () {
            let e = (0, n.bG)([c.A], () => c.A.hasLayers()),
                t = (0, s.xr)((e) => e.fullScreenLayers.length > 0),
                r = (0, a.LL)(),
                o = (0, u.re)(u.ue),
                d = (0, n.bG)([l.A], () => l.A.isConnected()),
                f = (0, n.bG)([i.A], () => i.A.isOpen());
            return e || t || o || r || !d || f;
        },
    },
);
