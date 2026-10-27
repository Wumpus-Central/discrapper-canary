n.d(s, { A: () => h });
var a = n(17928),
    r = n(192308),
    t = n(276602),
    p = n(361158),
    d = n(33524),
    u = n(174768),
    c = n(186111);
let h = function () {
    let e = (0, a.bG)([c.A], () => c.A.hasLayers()),
        s = (0, p.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, d.useIsModalOpen)(),
        h = (0, r.useModalsStore)(r.hasAnyModalOpen),
        i = (0, a.bG)([t.A], () => t.A.isConnected()),
        l = (0, a.bG)([u.A], () => u.A.isOpen());
    return e || s || h || n || !i || l;
};
