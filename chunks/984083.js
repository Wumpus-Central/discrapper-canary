s.d(e, { Z: () => o });
var i = s(630449),
    n = s(272469),
    r = s(83220);
function o(t, e) {
    let s = (0, i.KU)(),
        o = (0, i.rm)();
    if (!s) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: c = 100 } = s.getOptions();
    if (c <= 0) return;
    let h = { timestamp: (0, r.lu)(), ...t },
        u = a ? (0, n.pq)(() => a(h, e)) : h;
    null !== u && (s.emit && s.emit("beforeAddBreadcrumb", u, e), o.addBreadcrumb(u, c));
}
