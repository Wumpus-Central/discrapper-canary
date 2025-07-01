(n.d(t, {
    Z: () => d,
    g: () => u
}),
    n(388685));
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
function d(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: d, filters: s } = (0, i.cj)([o.Z], () => ({
            feed: o.Z.getFeed(t),
            filters: o.Z.getFilters()
        })),
        _ = r.useMemo(() => {
            let e = n ? (null == d ? void 0 : d.unranked_game_entries.map((e) => e.content)) : null == d ? void 0 : d.entries.map((e) => e.content);
            return null != s ? (null == e ? void 0 : e.filter((e) => u(s, e))) : e;
        }, [d, s, n]);
    return ((_ = (0, a.Z)(_)), (_ = (0, l.Z)(_)), (_ = (0, c.Z)(_)));
}
