"use strict";
n.d(t, { Ap: () => d, gm: () => c, rI: () => o });
var i = n(32731);
n(993046);
var r = n(428262);
n(872472), n(394300), n(721932);
var a = n(652215),
    s = n(202541),
    l = n(375708);
function o() {
    return new i.A({
        id: s.pe.TIER_2,
        productLine: a.EZt.PREMIUM,
        name: l.intl.string(l.t.lG6a5x),
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
function d(e, t, n, i) {
    let r = null,
        a = null;
    n < i
        ? ((r = t[i]?.skuId ?? null), (a = t[i + 1]?.skuId ?? null))
        : ((r = t[i - 1]?.skuId ?? null), (a = t[i]?.skuId ?? null));
    let s = [...t],
        [l] = s.splice(n, 1);
    return s.splice(i, 0, l), { newWishlistData: e.set("items", s), previousSkuId: r, nextSkuId: a };
}
function c(e) {
    let t = e.findIndex((e) => r.Ay.isPremiumSku(e.skuId));
    if (t <= 0) return e;
    let n = [...e],
        [i] = n.splice(t, 1);
    return [i, ...n];
}
