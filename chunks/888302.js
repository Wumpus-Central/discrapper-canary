n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    o = n(335818),
    i = n(481060),
    a = n(501431),
    s = n(149705),
    c = n(388032);
function u(e) {
    let { sortedCategories: t } = e,
        { itemTypeFilters: n, searchQuery: u } = (0, a.S)((e) => e),
        { totalCount: d, isFetchingResults: p } = (0, s.a)(),
        g = t.length,
        f = (0, a.S)((e) => e.hasFilters()),
        h = l.useCallback(
            () =>
                p
                    ? c.intl.string(c.t['/FaMSE'])
                    : f
                      ? '' !== u
                          ? c.intl.format(c.t.KJMJOz, {
                                count: d,
                                search: u
                            })
                          : 1 === n.size && n.has(o.G.AVATAR_DECORATION)
                            ? c.intl.format(c.t.s1UzGR, { count: d })
                            : 1 === n.size && n.has(o.G.NAMEPLATE)
                              ? c.intl.format(c.t.ZWGN9f, { count: d })
                              : 1 === n.size && n.has(o.G.PROFILE_EFFECT)
                                ? c.intl.format(c.t['v/7apq'], { count: d })
                                : 1 === n.size && n.has(o.G.BUNDLE)
                                  ? c.intl.format(c.t.fZ1rdn, { count: d })
                                  : c.intl.format(c.t['/rPvmZ'], { count: d })
                      : c.intl.format(c.t['+687XV'], { count: g }),
            [n, d, g, f, u, p]
        );
    return (0, r.jsx)(i.X6q, {
        variant: 'heading-lg/semibold',
        children: h()
    });
}
