"use strict";
n.d(t, { L: () => o }), n(667532);
var i = n(64700),
    r = n(840411),
    a = n(909536),
    s = n(862772),
    l = n(202541);
function o(e) {
    let { userId: t, wishlist: n, numWishlistItemsToRecommend: o, maxWishlistItemsToShow: d = o, source: c } = e,
        { recommendations: u, status: _ } = (0, s.Ul)({ userId: t, numItems: o, source: c }),
        E = (0, a.Gh)("add_to_wishlist_grid_suggested_nitro"),
        A = i.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
        h = E && "success" === _ && !A.has(l.pe.TIER_2);
    return {
        items: i.useMemo(() => {
            let e = u.filter((e) => !A.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
            return h && e.unshift({ sku: (0, r.rI)(), itemSource: "takeover" }), e.slice(0, d);
        }, [u, A, h, d]),
        status: _,
    };
}
