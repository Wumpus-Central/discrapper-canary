(r.d(t, {
    Z: () => u,
    g: () => c
}),
    r(388685));
var n = r(73800),
    i = r(442837),
    a = r(146282),
    l = r(327220),
    s = r(959580),
    o = r(371177);
function c(e, t) {
    let { types: r } = e;
    return null == r || !!r.has(t.content_type);
}
function u(e) {
    let { id: t, unrankedEntries: r = !1 } = e,
        { feed: u, filters: d } = (0, i.cj)([a.Z], () => ({
            feed: a.Z.getFeed(t),
            filters: a.Z.getFilters()
        })),
        m = n.useMemo(() => {
            let e = r ? (null == u ? void 0 : u.unranked_game_entries.map((e) => e.content)) : null == u ? void 0 : u.entries.map((e) => e.content);
            return null != d ? (null == e ? void 0 : e.filter((e) => c(d, e))) : e;
        }, [u, d, r]);
    return ((m = (0, l.Z)(m)), (m = (0, s.Z)(m)), (m = (0, o.Z)(m)));
}
