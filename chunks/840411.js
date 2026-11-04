var a = i(431955);
(i(993046), i(872472), i(394300), i(721932));
var s = i(652215),
    n = i(682901),
    t = i(792996);
i.d(
    l,
    {},
    {
        Ap: function (e, l, i, a) {
            let s = null,
                n = null;
            i < a
                ? ((s = l[a]?.skuId ?? null), (n = l[a + 1]?.skuId ?? null))
                : ((s = l[a - 1]?.skuId ?? null), (n = l[a]?.skuId ?? null));
            let t = [...l],
                [r] = t.splice(i, 1);
            return (t.splice(a, 0, r), { newWishlistData: e.set("items", t), previousSkuId: s, nextSkuId: n });
        },
        rI: function () {
            return new a.A({
                id: n.pe.TIER_2,
                productLine: s.EZt.PREMIUM,
                name: t.intl.string(t.t.lG6a5x),
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
