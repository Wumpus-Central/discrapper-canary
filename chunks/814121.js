"use strict";
n.d(t, { Z: () => o });
var r = n(745768),
    i = n(478681),
    a = n(663583);
let s = 100;
function o(e, t) {
    let n = (0, a.KU)(),
        o = (0, a.rm)();
    if (!n) return;
    let { beforeBreadcrumb: l = null, maxBreadcrumbs: u = s } = n.getOptions();
    if (u <= 0) return;
    let c = { timestamp: (0, r.lu)(), ...e },
        d = l ? (0, i.pq)(() => l(c, t)) : c;
    null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), o.addBreadcrumb(d, u));
}
