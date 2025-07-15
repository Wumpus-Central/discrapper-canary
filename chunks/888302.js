r.d(t, { Z: () => u });
var n = r(255367),
    l = r(73800),
    i = r(335818),
    o = r(481060),
    a = r(501431),
    s = r(149705),
    c = r(388032);
function u() {
    let { itemTypeFilters: e, searchQuery: t } = (0, a.S)((e) => e),
        { totalCount: r, isFetchingResults: u } = (0, s.a)(),
        d = (0, a.S)((e) => e.hasFilters()),
        p = l.useCallback(() => {
            if (!d) return '';
            if (u) return c.intl.string(c.t['/FaMSE']);
            if ('' !== t) {
                let e = t.length > 40 ? ''.concat(t.slice(0, 40), '...') : t;
                return c.intl.format(c.t.KJMJOz, {
                    count: r,
                    search: e
                });
            }
            return 1 === e.size && e.has(i.G.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGR, { count: r }) : 1 === e.size && e.has(i.G.NAMEPLATE) ? c.intl.format(c.t.ZWGN9f, { count: r }) : 1 === e.size && e.has(i.G.PROFILE_EFFECT) ? c.intl.format(c.t['v/7apq'], { count: r }) : 1 === e.size && e.has(i.G.BUNDLE) ? c.intl.format(c.t.fZ1rdn, { count: r }) : c.intl.format(c.t['/rPvmZ'], { count: r });
        }, [e, r, d, t, u]);
    return (0, n.jsx)(o.X6q, {
        variant: 'heading-lg/semibold',
        children: p()
    });
}
