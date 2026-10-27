i.d(l, { Ap: () => d, rI: () => r });
var t = i(32731);
(i(993046), i(872472), i(394300), i(721932));
var n = i(652215),
    a = i(202541),
    s = i(105292);
function r() {
    return new t.A({
        id: a.pe.TIER_2,
        productLine: n.EZt.PREMIUM,
        name: s.intl.string(s.t.lG6a5x),
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
function d(e, l, i, t) {
    let n = null,
        a = null;
    i < t
        ? ((n = l[t]?.skuId ?? null), (a = l[t + 1]?.skuId ?? null))
        : ((n = l[t - 1]?.skuId ?? null), (a = l[t]?.skuId ?? null));
    let s = [...l],
        [r] = s.splice(i, 1);
    return (s.splice(t, 0, r), { newWishlistData: e.set("items", s), previousSkuId: n, nextSkuId: a });
}
