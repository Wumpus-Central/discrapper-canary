r.d(t, {
    Z: () => u,
    g: () => c
}),
    r(47120);
var n = r(192379),
    a = r(442837),
    o = r(146282),
    i = r(327220),
    l = r(959580),
    s = r(371177);
function c(e, t) {
    let { types: r } = e;
    return null == r || !!r.has(t.content_type);
}
function u(e) {
    let { feed: t, filters: r } = (0, a.cj)([o.Z], () => ({
            feed: o.Z.getFeed(e),
            filters: o.Z.getFilters()
        })),
        u = n.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != r ? (null == e ? void 0 : e.filter((e) => c(r, e))) : e;
        }, [t, r]);
    return (u = (0, i.Z)(u)), (u = (0, l.Z)(u)), (u = (0, s.Z)(u));
}
