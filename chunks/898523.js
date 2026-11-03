n.d(e, { I: () => i, Z: () => s });
var r = n(561573),
    o = n(832163);
function i(t) {
    let e = o.A.getStorefrontDataForApplicationId(t)?.storefront?.promotions;
    if (null == e) return;
    let n = Date.now();
    return Object.values(e)
        .filter((t) => null == t.endsAt || Date.parse(t.endsAt) > n)
        .map((t) => t.id);
}
function s(t) {
    return r.A.getPromotionIdsForSkuId(t)?.[0];
}
