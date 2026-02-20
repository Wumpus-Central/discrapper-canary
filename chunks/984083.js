"use strict";
n.d(t, { Z: () => o });
var r = n(630449),
    i = n(272469),
    s = n(83220);
let a = 100;
function o(e, t) {
    let n = (0, r.KU)(),
        o = (0, r.rm)();
    if (!n) return;
    let { beforeBreadcrumb: l = null, maxBreadcrumbs: u = a } = n.getOptions();
    if (u <= 0) return;
    let c = { timestamp: (0, s.lu)(), ...e },
        d = l ? (0, i.pq)(() => l(c, t)) : c;
    null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), o.addBreadcrumb(d, u));
}
