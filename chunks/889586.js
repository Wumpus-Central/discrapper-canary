t.d(s, { L: () => r }), t(667532);
var i = t(64700),
    l = t(840411),
    n = t(909536),
    a = t(862772),
    o = t(202541);
function r(e) {
    let { userId: s, wishlist: t, numWishlistItemsToRecommend: r, maxWishlistItemsToShow: u = r, source: d } = e,
        { recommendations: c, status: m } = (0, a.Ul)({ userId: s, numItems: r, source: d }),
        p = (0, n.Gh)("add_to_wishlist_grid_suggested_nitro"),
        f = i.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        g = p && "success" === m && !f.has(o.pe.TIER_2);
    return {
        items: i.useMemo(() => {
            let e = c.filter((e) => !f.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
            return g && e.unshift({ sku: (0, l.rI)(), itemSource: "takeover" }), e.slice(0, u);
        }, [c, f, g, u]),
        status: m,
    };
}
