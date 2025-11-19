n.d(t, {
    Z: () => u,
    g: () => c,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(146282),
    o = n(327220),
    s = n(959580),
    l = n(371177);
function c(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function u(e) {
    let { id: t, unrankedEntries: n = !1 } = e,
        { feed: u, filters: d } = (0, i.cj)([a.Z], () => ({
            feed: a.Z.getFeed(t),
            filters: a.Z.getFilters(),
        })),
        f = r.useMemo(() => {
            let e = n
                ? null == u
                    ? void 0
                    : u.unranked_game_entries.map((e) => e.content)
                : null == u
                  ? void 0
                  : u.entries.map((e) => e.content);
            return null != d ? (null == e ? void 0 : e.filter((e) => c(d, e))) : e;
        }, [u, d, n]);
    return (f = (0, o.Z)(f)), (f = (0, s.Z)(f)), (f = (0, l.Z)(f));
}
