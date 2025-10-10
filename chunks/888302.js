n.d(t, { Z: () => u });
var r = n(951288),
    l = n(647438),
    a = n(335818),
    s = n(481060),
    i = n(501431),
    o = n(149705),
    c = n(388032);
function u() {
    let { itemTypeFilters: e, searchQuery: t } = (0, i.S)((e) => e),
        { totalCount: n, isFetchingResults: u } = (0, o.a)(),
        d = (0, i.S)((e) => e.hasFilters()),
        g = l.useCallback(() => {
            if (!d) return "";
            if (u) return c.intl.string(c.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? "".concat(t.slice(0, 40), "...") : t;
                return c.intl.format(c.t.KJMJOz, {
                    count: n,
                    search: e,
                });
            }
            return 1 === e.size && e.has(a.G.AVATAR_DECORATION)
                ? c.intl.format(c.t.s1UzGR, { count: n })
                : 1 === e.size && e.has(a.G.NAMEPLATE)
                  ? c.intl.format(c.t.ZWGN9f, { count: n })
                  : 1 === e.size && e.has(a.G.PROFILE_EFFECT)
                    ? c.intl.format(c.t["v/7apq"], { count: n })
                    : 1 === e.size && e.has(a.G.BUNDLE)
                      ? c.intl.format(c.t.fZ1rdn, { count: n })
                      : c.intl.format(c.t["/rPvmZ"], { count: n });
        }, [e, n, d, t, u]);
    return (0, r.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: g(),
    });
}
