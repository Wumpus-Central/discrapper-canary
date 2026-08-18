"use strict";
n.d(t, { A: () => c });
var l = n(17928),
    i = n(192308),
    s = n(617710),
    r = n(361158),
    a = n(33524),
    o = n(174768),
    u = n(186111);
let c = function () {
    let e = (0, l.bG)([u.A], () => u.A.hasLayers()),
        t = (0, r.xr)((e) => e.fullScreenLayers.length > 0),
        n = (0, a.LL)(),
        c = (0, i.useModalsStore)(i.hasAnyModalOpen),
        d = (0, l.bG)([s.A], () => s.A.isConnected()),
        h = (0, l.bG)([o.A], () => o.A.isOpen());
    return e || t || c || n || !d || h;
};
