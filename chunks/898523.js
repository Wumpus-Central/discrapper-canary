var i = n(561573),
    r = n(832163);
n.d(
    e,
    {},
    {
        I: function (t) {
            let e = r.A.getStorefrontDataForApplicationId(t)?.storefront?.promotions;
            if (null == e) return;
            let n = Date.now();
            return Object.values(e)
                .filter((t) => null == t.endsAt || Date.parse(t.endsAt) > n)
                .map((t) => t.id);
        },
        Z: function (t) {
            return i.A.getPromotionIdsForSkuId(t)?.[0];
        },
    },
);
