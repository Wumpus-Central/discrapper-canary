n.d(t, {
    Z: () => c,
    g: () => u
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(146282),
    s = n(327220),
    o = n(959580),
    l = n(371177);
function u(e, t) {
    let { types: n } = e;
    return !!(null == n || n.has(t.content_type));
}
function c(e) {
    let { feed: t, filters: n } = (0, r.cj)([a.Z], () => ({
            feed: a.Z.getFeed(e),
            filters: a.Z.getFilters()
        })),
        c = i.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n ? (null == e ? void 0 : e.filter((e) => u(n, e))) : e;
        }, [t, n]);
    return (c = (0, s.Z)(c)), (c = (0, o.Z)(c)), (c = (0, l.Z)(c));
}
