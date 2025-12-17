n.d(t, { Z: () => u });
var r = n(54381),
    l = n(473749),
    a = n(335818),
    s = n(481060),
    o = n(501431),
    i = n(149705),
    c = n(388032);
function u() {
    let { itemTypeFilters: e, searchQuery: t } = (0, o.S)((e) => e),
        { totalCount: n, isFetchingResults: u } = (0, i.a)(),
        d = (0, o.S)((e) => e.hasFilters()),
        f = l.useCallback(() => {
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
                ? c.intl.format(c.t.s1UzGQ, { count: n })
                : 1 === e.size && e.has(a.G.NAMEPLATE)
                  ? c.intl.format(c.t.ZWGN9T, { count: n })
                  : 1 === e.size && e.has(a.G.PROFILE_EFFECT)
                    ? c.intl.format(c.t["v/7apu"], { count: n })
                    : 1 === e.size && e.has(a.G.BUNDLE)
                      ? c.intl.format(c.t.fZ1rdk, { count: n })
                      : c.intl.format(c.t["/rPvmQ"], { count: n });
        }, [e, n, d, t, u]);
    return (0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: f(),
    });
}
