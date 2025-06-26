n.d(t, {
    E: () => o,
    M: () => a
});
var r = n(818083),
    l = n(987338);
let a = (0, r.B)({
        kind: 'user',
        id: '2025-03_shop_hide_strikethrough_price',
        label: 'Shop Hide Strikethrough Price Experiment',
        defaultConfig: { hideStrikethroughPrice: !1 },
        treatments: [
            {
                id: 1,
                label: 'Hide strikethrough prices',
                config: { hideStrikethroughPrice: !0 }
            }
        ],
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN
    }),
    o = (e) => a.useExperiment({ location: e }).hideStrikethroughPrice;
