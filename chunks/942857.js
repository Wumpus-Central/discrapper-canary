n.d(t, { A: () => c });
var i = n(17928),
    a = n(192308),
    r = n(446458),
    s = n(361158),
    l = n(33524),
    o = n(174768),
    d = n(186111);
let c = () => {
    let e = (0, i.bG)([d.A], () => d.A.hasLayers()),
        t = (0, s.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, l.LL)(),
        c = (0, a.useModalsStore)(a.hasAnyModalOpen),
        _ = (0, i.bG)([r.A], () => r.A.isConnected()),
        E = (0, i.bG)([o.A], () => o.A.isOpen());
    return e || t || c || n || !_ || E;
};
