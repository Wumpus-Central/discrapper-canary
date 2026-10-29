r.d(t, { A: () => c });
var n = r(17928),
    u = r(192308),
    l = r(403010),
    s = r(361158),
    a = r(33524),
    i = r(174768),
    o = r(186111);
let c = function () {
    let e = (0, n.bG)([o.A], () => o.A.hasLayers()),
        t = (0, s.xr)((e) => e.fullScreenLayers.length > 0),
        r = (0, a.useIsModalOpen)(),
        c = (0, u.useModalsStore)(u.hasAnyModalOpen),
        d = (0, n.bG)([l.A], () => l.A.isConnected()),
        f = (0, n.bG)([i.A], () => i.A.isOpen());
    return e || t || c || r || !d || f;
};
