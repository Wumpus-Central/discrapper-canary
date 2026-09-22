n.d(s, { Ap: () => u, rI: () => r });
var t = n(32731);
(n(993046), n(872472), n(394300), n(721932));
var i = n(652215),
    l = n(202541),
    a = n(375708);
function r() {
    return new t.A({
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
function u(e, s, n, t) {
    let i = null,
        l = null;
    n < t
        ? ((i = s[t]?.skuId ?? null), (l = s[t + 1]?.skuId ?? null))
        : ((i = s[t - 1]?.skuId ?? null), (l = s[t]?.skuId ?? null));
    let a = [...s],
        [r] = a.splice(n, 1);
    return (a.splice(t, 0, r), { newWishlistData: e.set("items", a), previousSkuId: i, nextSkuId: l });
}
