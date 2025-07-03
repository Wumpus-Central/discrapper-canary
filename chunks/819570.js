r.d(t, {
    E: () => a,
    M: () => l
});
var n = r(818083),
    i = r(987338);
let l = (0, n.B)({
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
        commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN
    }),
    a = (e) => l.useExperiment({ location: e }).hideStrikethroughPrice;
