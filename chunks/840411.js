t.d(s, { Ap: () => u, gm: () => d, rI: () => r });
var i = t(32731);
t(993046);
var n = t(428262);
t(872472), t(394300), t(721932);
var l = t(652215),
    a = t(202541),
    o = t(375708);
function r() {
    return new i.A({
        id: a.pe.TIER_2,
        productLine: l.EZt.PREMIUM,
        name: o.intl.string(o.t.lG6a5x),
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
function u(e, s, t, i) {
    let n = null,
        l = null;
    t < i
        ? ((n = s[i]?.skuId ?? null), (l = s[i + 1]?.skuId ?? null))
        : ((n = s[i - 1]?.skuId ?? null), (l = s[i]?.skuId ?? null));
    let a = [...s],
        [o] = a.splice(t, 1);
    return a.splice(i, 0, o), { newWishlistData: e.set("items", a), previousSkuId: n, nextSkuId: l };
}
function d(e) {
    let s = e.findIndex((e) => n.Ay.isPremiumSku(e.skuId));
    if (s <= 0) return e;
    let t = [...e],
        [i] = t.splice(s, 1);
    return [i, ...t];
}
