n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    i = n(335818),
    o = n(481060),
    a = n(501431),
    s = n(149705),
    c = n(388032);
function u(e) {
    let { sortedCategories: t } = e,
        { itemTypeFilters: n } = (0, a.S0)((e) => e),
        { totalCount: u } = (0, s.a)(),
        d = t.length,
        p = (0, a.S0)((e) => e.hasFilters()),
        g = l.useCallback(() => (p ? (1 === n.size && n.has(i.G.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGR, { count: u }) : 1 === n.size && n.has(i.G.NAMEPLATE) ? c.intl.format(c.t.ZWGN9f, { count: u }) : 1 === n.size && n.has(i.G.PROFILE_EFFECT) ? c.intl.format(c.t['v/7apq'], { count: u }) : 1 === n.size && n.has(i.G.BUNDLE) ? c.intl.format(c.t.fZ1rdn, { count: u }) : c.intl.format(c.t['/rPvmZ'], { count: u })) : c.intl.format(c.t['+687XV'], { count: d })), [n, u, d, p]);
    return (0, r.jsx)(o.X6q, {
        variant: 'heading-lg/semibold',
        children: g()
    });
}
