n.d(t, {
    Z: () => u,
    g: () => s
}),
    n(388685);
var r = n(73800),
    a = n(442837),
    i = n(146282),
    o = n(327220),
    l = n(959580),
    c = n(371177);
function s(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function u(e) {
    let { feed: t, filters: n } = (0, a.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters()
        })),
        u = r.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => s(n, e))) : e;
        }, [t, n]);
    return (u = (0, o.Z)(u)), (u = (0, l.Z)(u)), (u = (0, c.Z)(u));
}
