n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    o = n(335818),
    a = n(481060),
    i = n(501431),
    s = n(149705),
    c = n(388032);
function u() {
    let { itemTypeFilters: e, searchQuery: t } = (0, i.S)((e) => e),
        { totalCount: n, isFetchingResults: u } = (0, s.a)(),
        d = (0, i.S)((e) => e.hasFilters()),
        p = l.useCallback(
            () =>
                d
                    ? u
                        ? c.intl.string(c.t['/FaMSE'])
                        : '' !== t
                          ? c.intl.format(c.t.KJMJOz, {
                                count: n,
                                search: t
                            })
                          : 1 === e.size && e.has(o.G.AVATAR_DECORATION)
                            ? c.intl.format(c.t.s1UzGR, { count: n })
                            : 1 === e.size && e.has(o.G.NAMEPLATE)
                              ? c.intl.format(c.t.ZWGN9f, { count: n })
                              : 1 === e.size && e.has(o.G.PROFILE_EFFECT)
                                ? c.intl.format(c.t['v/7apq'], { count: n })
                                : 1 === e.size && e.has(o.G.BUNDLE)
                                  ? c.intl.format(c.t.fZ1rdn, { count: n })
                                  : c.intl.format(c.t['/rPvmZ'], { count: n })
                    : '',
            [e, n, d, t, u]
        );
    return (0, r.jsx)(a.X6q, {
        variant: 'heading-lg/semibold',
        children: p()
    });
}
