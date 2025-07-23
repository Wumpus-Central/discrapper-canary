(n.d(t, {
    Z: () => s,
    g: () => u
}),
    n(388685));
var r = n(73800),
    o = n(442837),
    a = n(146282),
    i = n(327220),
    l = n(959580),
    c = n(371177);
function u(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function s(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: s, filters: d } = (0, o.cj)([a.Z], () => ({
            feed: a.Z.getFeed(t),
            filters: a.Z.getFilters()
        })),
        f = r.useMemo(() => {
            let e = n ? (null == s ? void 0 : s.unranked_game_entries.map((e) => e.content)) : null == s ? void 0 : s.entries.map((e) => e.content);
            return null != d ? (null == e ? void 0 : e.filter((e) => u(d, e))) : e;
        }, [s, d, n]);
    return ((f = (0, i.Z)(f)), (f = (0, l.Z)(f)), (f = (0, c.Z)(f)));
}
