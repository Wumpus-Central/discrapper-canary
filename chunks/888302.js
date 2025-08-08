n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    a = n(335818),
    i = n(481060),
    o = n(501431),
    s = n(149705),
    c = n(388032);
function u() {
    let { itemTypeFilters: e, searchQuery: t } = (0, o.S)((e) => e),
        { totalCount: n, isFetchingResults: u } = (0, s.a)(),
        d = (0, o.S)((e) => e.hasFilters()),
        p = l.useCallback(() => {
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
    return (0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: p(),
    });
}
