n.d(t, { A: () => c });
var l = n(17928),
    r = n(192308),
    i = n(617710),
    s = n(361158),
    a = n(33524),
    u = n(174768),
    o = n(186111);
let c = function () {
    let e = (0, l.bG)([o.A], () => o.A.hasLayers()),
        t = (0, s.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, a.LL)(),
        c = (0, r.useModalsStore)(r.hasAnyModalOpen),
        d = (0, l.bG)([i.A], () => i.A.isConnected()),
        f = (0, l.bG)([u.A], () => u.A.isOpen());
    return e || t || c || n || !d || f;
};
