t.d(s, { Ap: () => u, rI: () => r });
var n = t(32731);
(t(993046), t(872472), t(394300), t(721932));
var i = t(652215),
    l = t(202541),
    a = t(375708);
function r() {
    return new n.A({
        id: l.pe.TIER_2,
        productLine: i.EZt.PREMIUM,
        name: a.intl.string(a.t.lG6a5x),
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
function u(e, s, t, n) {
    let i = null,
        l = null;
    t < n
        ? ((i = s[n]?.skuId ?? null), (l = s[n + 1]?.skuId ?? null))
        : ((i = s[n - 1]?.skuId ?? null), (l = s[n]?.skuId ?? null));
    let a = [...s],
        [r] = a.splice(t, 1);
    return (a.splice(n, 0, r), { newWishlistData: e.set("items", a), previousSkuId: i, nextSkuId: l });
}
