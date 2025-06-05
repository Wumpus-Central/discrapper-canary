n.d(t, {
    Z: () => s,
    g: () => u
}),
    n(388685);
var r = n(73800),
    i = n(442837),
    o = n(146282),
    a = n(327220),
    l = n(959580),
    c = n(371177);
function u(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function s(e) {
    let { feed: t, filters: n } = (0, i.cj)([o.Z], () => ({
            feed: o.Z.getFeed(e),
            filters: o.Z.getFilters()
        })),
        s = r.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => u(n, e))) : e;
        }, [t, n]);
    return (s = (0, a.Z)(s)), (s = (0, l.Z)(s)), (s = (0, c.Z)(s));
}
