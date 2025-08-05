(n.d(t, {
    Z: () => u,
    g: () => s
}),
    n(388685));
var r = n(73800),
    o = n(442837),
    i = n(146282),
    l = n(327220),
    a = n(959580),
    c = n(371177);
function s(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function u(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: u, filters: d } = (0, o.cj)([i.Z], () => ({
            feed: i.Z.getFeed(t),
            filters: i.Z.getFilters()
        })),
        f = r.useMemo(() => {
            let e = n ? (null == u ? void 0 : u.unranked_game_entries.map((e) => e.content)) : null == u ? void 0 : u.entries.map((e) => e.content);
            return null != d ? (null == e ? void 0 : e.filter((e) => s(d, e))) : e;
        }, [u, d, n]);
    return ((f = (0, l.Z)(f)), (f = (0, a.Z)(f)), (f = (0, c.Z)(f)));
}
