n.d(t, {
    Z: () => u,
    g: () => c
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(146282),
    a = n(327220),
    s = n(959580),
    l = n(371177);
function c(e, t) {
    let { types: n } = e;
    return !!(null == n || n.has(t.content_type));
}
function u(e) {
    let { feed: t, filters: n } = (0, i.cj)([o.Z], () => ({
            feed: o.Z.getFeed(e),
            filters: o.Z.getFilters()
        })),
        u = r.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => c(n, e))) : e;
        }, [t, n]);
    return (u = (0, a.Z)(u)), (u = (0, s.Z)(u)), (u = (0, l.Z)(u));
}
