t.d(s, { L: () => o }), t(667532);
var i = t(582128),
    l = t(840411),
    n = t(862772),
    a = t(202541);
function o(e) {
    let { userId: s, wishlist: t, numWishlistItemsToRecommend: o, maxWishlistItemsToShow: r = o, source: u } = e,
        { recommendations: c, status: d } = (0, n.Ul)({ userId: s, numItems: o, source: u }),
        m = i.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        p = "success" === d && !m.has(a.pe.TIER_2);
    return {
        items: i.useMemo(() => {
            let e = c.filter((e) => !m.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
            return p && e.unshift({ sku: (0, l.rI)(), itemSource: "takeover" }), e.slice(0, r);
        }, [c, m, p, r]),
        status: d,
    };
}
