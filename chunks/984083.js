"use strict";
n.d(t, { Z: () => a });
var i = n(630449),
    r = n(272469),
    s = n(83220);
function a(e, t) {
    let n = (0, i.KU)(),
        a = (0, i.rm)();
    if (!n) return;
    let { beforeBreadcrumb: o = null, maxBreadcrumbs: l = 100 } = n.getOptions();
    if (l <= 0) return;
    let u = { timestamp: (0, s.lu)(), ...e },
        c = o ? (0, r.pq)(() => o(u, t)) : u;
    null !== c && (n.emit && n.emit("beforeAddBreadcrumb", c, t), a.addBreadcrumb(c, l));
}
