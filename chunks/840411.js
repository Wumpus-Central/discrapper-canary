var i = l(431955);
(l(993046), l(872472), l(394300), l(721932));
var a = l(652215),
    s = l(682901),
    n = l(792996);
l.d(
    t,
    {},
    {
        Ap: function (e, t, l, i) {
            let a = null,
                s = null;
            l < i
                ? ((a = t[i]?.skuId ?? null), (s = t[i + 1]?.skuId ?? null))
                : ((a = t[i - 1]?.skuId ?? null), (s = t[i]?.skuId ?? null));
            let n = [...t],
                [r] = n.splice(l, 1);
            return (n.splice(i, 0, r), { newWishlistData: e.set("items", n), previousSkuId: a, nextSkuId: s });
        },
        rI: function () {
            return new i.A({
                id: s.pe.TIER_2,
                productLine: a.EZt.PREMIUM,
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
        },
    },
);
