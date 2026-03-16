s.d(e, { Z: () => o });
var i = s(630449),
    r = s(272469),
    n = s(83220);
function o(t, e) {
    let s = (0, i.KU)(),
        o = (0, i.rm)();
    if (!s) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: h = 100 } = s.getOptions();
    if (h <= 0) return;
    let c = { timestamp: (0, n.lu)(), ...t },
        u = a ? (0, r.pq)(() => a(c, e)) : c;
    null !== u && (s.emit && s.emit("beforeAddBreadcrumb", u, e), o.addBreadcrumb(u, h));
}
