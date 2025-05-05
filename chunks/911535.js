n.d(t, {
    P: () => a,
    h: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-04_shop_generic_product_description',
        label: 'Shop Show Generic Product Description',
        defaultConfig: { showGenericProductDescription: !1 },
        commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Use generic product description',
                config: { showGenericProductDescription: !0 }
            }
        ]
    }),
    a = (e) => o.useExperiment({ location: e }).showGenericProductDescription;
