"use strict";
r.d(e, { Z: () => o });
var n = r(745768),
    i = r(478681),
    s = r(663583);
function o(t, e) {
    let r = (0, s.KU)(),
        o = (0, s.rm)();
    if (!r) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: c = 100 } = r.getOptions();
    if (c <= 0) return;
    let u = { timestamp: (0, n.lu)(), ...t },
        h = a ? (0, i.pq)(() => a(u, e)) : u;
    null !== h && (r.emit && r.emit("beforeAddBreadcrumb", h, e), o.addBreadcrumb(h, c));
}
