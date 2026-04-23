"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(192308),
    s = n(142120),
    a = n(361158),
    o = n(33524),
    l = n(174768),
    u = n(186111);
let c = () => {
    let e = (0, r.bG)([u.A], () => u.A.hasLayers()),
        t = (0, a.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, o.LL)(),
        c = (0, i.useModalsStore)(i.hasAnyModalOpen),
        d = (0, r.bG)([s.A], () => s.A.isConnected()),
        _ = (0, r.bG)([l.A], () => l.A.isOpen());
    return e || t || c || n || !d || _;
};
