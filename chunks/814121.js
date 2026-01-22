n.d(t, {
    Z: () => o,
});
var r = n(745768),
    i = n(478681),
    a = n(663583);
let s = 100;

function o(e, t) {
    let n = (0, a.KU)(),
        o = (0, a.rm)();
    if (!n) return;
    let { beforeBreadcrumb: l = null, maxBreadcrumbs: c = s } = n.getOptions();
    if (c <= 0) return;
    let u = {
            timestamp: (0, r.lu)(),
            ...e,
        },
        d = l ? (0, i.pq)(() => l(u, t)) : u;
    null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), o.addBreadcrumb(d, c));
}
