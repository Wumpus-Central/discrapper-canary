n.d(t, { A: () => o });
var l = n(17928),
    r = n(192308),
    s = n(617710),
    i = n(361158),
    a = n(33524),
    u = n(174768),
    c = n(186111);
let o = function () {
    let e = (0, l.bG)([c.A], () => c.A.hasLayers()),
        t = (0, i.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, a.LL)(),
        o = (0, r.useModalsStore)(r.hasAnyModalOpen),
        d = (0, l.bG)([s.A], () => s.A.isConnected()),
        f = (0, l.bG)([u.A], () => u.A.isOpen());
    return e || t || o || n || !d || f;
};
