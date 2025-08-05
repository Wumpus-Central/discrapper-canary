(n.d(t, {
    Z: () => d,
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
function d(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: d, filters: u } = (0, o.cj)([i.Z], () => ({
            feed: i.Z.getFeed(t),
            filters: i.Z.getFilters()
        })),
        f = r.useMemo(() => {
            let e = n ? (null == d ? void 0 : d.unranked_game_entries.map((e) => e.content)) : null == d ? void 0 : d.entries.map((e) => e.content);
            return null != u ? (null == e ? void 0 : e.filter((e) => s(u, e))) : e;
        }, [d, u, n]);
    return ((f = (0, l.Z)(f)), (f = (0, a.Z)(f)), (f = (0, c.Z)(f)));
}
