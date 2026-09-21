n.d(t, { A: () => o });
var r = n(17928),
    l = n(192308),
    u = n(597643),
    a = n(361158),
    i = n(33524),
    s = n(174768),
    c = n(186111);
let o = function () {
    let e = (0, r.bG)([c.A], () => c.A.hasLayers()),
        t = (0, a.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, i.useIsModalOpen)(),
        o = (0, l.useModalsStore)(l.hasAnyModalOpen),
        d = (0, r.bG)([u.A], () => u.A.isConnected()),
        f = (0, r.bG)([s.A], () => s.A.isOpen());
    return e || t || o || n || !d || f;
};
