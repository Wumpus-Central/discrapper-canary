var l = n(431955);
(n(993046), n(872472), n(394300), n(721932));
var i = n(652215),
    r = n(682901),
    u = n(792996);
n.d(
    t,
    {},
    {
        Ap: function (e, t, n, l) {
            let i = null,
                r = null;
            n < l
                ? ((i = t[l]?.skuId ?? null), (r = t[l + 1]?.skuId ?? null))
                : ((i = t[l - 1]?.skuId ?? null), (r = t[l]?.skuId ?? null));
            let u = [...t],
                [a] = u.splice(n, 1);
            return (u.splice(l, 0, a), { newWishlistData: e.set("items", u), previousSkuId: i, nextSkuId: r });
        },
        rI: function () {
            return new l.A({
                id: r.pe.TIER_2,
                productLine: i.EZt.PREMIUM,
                name: u.intl.string(u.t.lG6a5x),
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
