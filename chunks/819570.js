n.d(t, { E: () => i });
let r = (0, n(818083).B)({
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
        ]
    }),
    i = (e) => r.useExperiment({ location: e }).hideStrikethroughPrice;
