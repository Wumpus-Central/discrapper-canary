i.d(l, { Ap: () => d, rI: () => r });
var a = i(32731);
(i(993046), i(872472), i(394300), i(721932));
var s = i(652215),
    t = i(202541),
    n = i(105292);
function r() {
    return new a.A({
        id: t.pe.TIER_2,
        productLine: s.EZt.PREMIUM,
        name: n.intl.string(n.t.lG6a5x),
        features: new Set(),
        genres: new Set(),
        manifests: [],
        availableRegions: [],
        locales: [],
        bundledSkuIds: [],
        selectedOptions: [],
        eligibleOffers: [],
        prices: {},
    });
}
function d(e, l, i, a) {
    let s = null,
        t = null;
    i < a
        ? ((s = l[a]?.skuId ?? null), (t = l[a + 1]?.skuId ?? null))
        : ((s = l[a - 1]?.skuId ?? null), (t = l[a]?.skuId ?? null));
    let n = [...l],
        [r] = n.splice(i, 1);
    return (n.splice(a, 0, r), { newWishlistData: e.set("items", n), previousSkuId: s, nextSkuId: t });
}
