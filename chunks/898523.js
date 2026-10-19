r.d(e, { I: () => o, Z: () => l });
var n = r(561573),
    i = r(832163);
function o(t) {
    let e = i.A.getStorefrontDataForApplicationId(t)?.storefront?.promotions;
    if (null == e) return;
    let r = Date.now();
    return Object.values(e)
        .filter((t) => null == t.endsAt || Date.parse(t.endsAt) > r)
        .map((t) => t.id);
}
function l(t) {
    return n.A.getPromotionIdsForSkuId(t)?.[0];
}
