n.d(t, {
    Z: () => d,
    g: () => c,
}),
    n(388685);
var r = n(647438),
    a = n(442837),
    i = n(146282),
    o = n(327220),
    l = n(959580),
    s = n(371177);
function c(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function d(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: d, filters: u } = (0, a.cj)([i.Z], () => ({
            feed: i.Z.getFeed(t),
            filters: i.Z.getFilters(),
        })),
        _ = r.useMemo(() => {
            let e = n
                ? null == d
                    ? void 0
                    : d.unranked_game_entries.map((e) => e.content)
                : null == d
                  ? void 0
                  : d.entries.map((e) => e.content);
            return null != u ? (null == e ? void 0 : e.filter((e) => c(u, e))) : e;
        }, [d, u, n]);
    return (_ = (0, o.Z)(_)), (_ = (0, l.Z)(_)), (_ = (0, s.Z)(_));
}
