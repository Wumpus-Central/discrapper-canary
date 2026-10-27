n.d(e, { I: () => o, Z: () => s });
var r = n(561573),
    i = n(832163);
function o(t) {
    let e = i.A.getStorefrontDataForApplicationId(t)?.storefront?.promotions;
    if (null == e) return;
    let n = Date.now();
    return Object.values(e)
        .filter((t) => null == t.endsAt || Date.parse(t.endsAt) > n)
        .map((t) => t.id);
}
function s(t) {
    return r.A.getPromotionIdsForSkuId(t)?.[0];
}
