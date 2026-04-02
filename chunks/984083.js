s.d(e, { Z: () => o });
var r = s(630449),
    i = s(272469),
    n = s(83220);
function o(t, e) {
    let s = (0, r.KU)(),
        o = (0, r.rm)();
    if (!s) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: c = 100 } = s.getOptions();
    if (c <= 0) return;
    let h = { timestamp: (0, n.lu)(), ...t },
        u = a ? (0, i.pq)(() => a(h, e)) : h;
    null !== u && (s.emit && s.emit("beforeAddBreadcrumb", u, e), o.addBreadcrumb(u, c));
}
