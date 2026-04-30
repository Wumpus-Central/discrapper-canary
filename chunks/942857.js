"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(192308),
    s = n(587626),
    a = n(663066),
    o = n(33524),
    l = n(174768),
    u = n(186111);
let c = () => {
    let e = (0, i.bG)([u.A], () => u.A.hasLayers()),
        t = (0, a.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, o.LL)(),
        c = (0, r.useModalsStore)(r.hasAnyModalOpen),
        d = (0, i.bG)([s.A], () => s.A.isConnected()),
        _ = (0, i.bG)([l.A], () => l.A.isOpen());
    return e || t || c || n || !d || _;
};
