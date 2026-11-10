var n = l(431955);
(l(993046), l(872472), l(394300), l(721932));
var i = l(652215),
    a = l(682901),
    r = l(792996);
l.d(
    t,
    {},
    {
        Ap: function (e, t, l, n) {
            let i = null,
                a = null;
            l < n
                ? ((i = t[n]?.skuId ?? null), (a = t[n + 1]?.skuId ?? null))
                : ((i = t[n - 1]?.skuId ?? null), (a = t[n]?.skuId ?? null));
            let r = [...t],
                [s] = r.splice(l, 1);
            return (r.splice(n, 0, s), { newWishlistData: e.set("items", r), previousSkuId: i, nextSkuId: a });
        },
        rI: function () {
            return new n.A({
                id: a.pe.TIER_2,
                productLine: i.EZt.PREMIUM,
                name: r.intl.string(r.t.lG6a5x),
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
