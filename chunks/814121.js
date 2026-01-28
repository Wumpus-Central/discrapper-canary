r.d(e, {
    Z: () => o,
});
var n = r(745768),
    s = r(478681),
    i = r(663583);

function o(t, e) {
    let r = (0, i.KU)(),
        o = (0, i.rm)();
    if (!r) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: c = 100 } = r.getOptions();
    if (c <= 0) return;
    let u = {
            timestamp: (0, n.lu)(),
            ...t,
        },
        h = a ? (0, s.pq)(() => a(u, e)) : u;
    null !== h && (r.emit && r.emit("beforeAddBreadcrumb", h, e), o.addBreadcrumb(h, c));
}
