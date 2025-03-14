n.d(t, { E: () => l });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
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
    l = (e) => o.useExperiment({ location: e }).hideStrikethroughPrice;
