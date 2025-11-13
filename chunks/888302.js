n.d(t, { Z: () => u });
var r = n(951288),
    l = n(647438),
    i = n(335818),
    a = n(481060),
    o = n(501431),
    s = n(149705),
    c = n(388032);
function u() {
    let { itemTypeFilters: e, searchQuery: t } = (0, o.S)((e) => e),
        { totalCount: n, isFetchingResults: u } = (0, s.a)(),
        d = (0, o.S)((e) => e.hasFilters()),
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
            return 1 === e.size && e.has(i.G.AVATAR_DECORATION)
                ? c.intl.format(c.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(i.G.NAMEPLATE)
                  ? c.intl.format(c.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(i.G.PROFILE_EFFECT)
                    ? c.intl.format(c.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(i.G.BUNDLE)
                      ? c.intl.format(c.t.fZ1rdk, { count: n })
                      : c.intl.format(c.t["/rPvmQ"], { count: n });
        }, [e, n, d, t, u]);
    return (0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: g(),
    });
}
