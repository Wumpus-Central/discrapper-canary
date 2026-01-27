n.d(t, {
    Z: () => s,
});
var r = n(745768),
    i = n(478681),
    a = n(663583);
let o = 100;

function s(e, t) {
    let n = (0, a.KU)(),
        s = (0, a.rm)();
    if (!n) return;
    let { beforeBreadcrumb: l = null, maxBreadcrumbs: c = o } = n.getOptions();
    if (c <= 0) return;
    let u = {
            timestamp: (0, r.lu)(),
            ...e,
        },
        d = l ? (0, i.pq)(() => l(u, t)) : u;
    null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c));
}
