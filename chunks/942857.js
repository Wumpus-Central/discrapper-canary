n.d(t, { A: () => E });
var i = n(17928),
    r = n(192308),
    a = n(366853),
    s = n(361158),
    _ = n(33524),
    l = n(174768),
    o = n(186111);
let E = () => {
    let e = (0, i.bG)([o.A], () => o.A.hasLayers()),
        t = (0, s.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, _.LL)(),
        E = (0, r.useModalsStore)(r.hasAnyModalOpen),
        d = (0, i.bG)([a.A], () => a.A.isConnected()),
        c = (0, i.bG)([l.A], () => l.A.isOpen());
    return e || t || E || n || !d || c;
};
