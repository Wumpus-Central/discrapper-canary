n.d(t, { m: () => r });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-06_collectibles_shop_use_now',
        label: 'Collectibles Shop Use Now',
        defaultConfig: { realtimeUseNowEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Use now button immediately applies collectible',
                config: { realtimeUseNowEnabled: !0 }
            }
        ]
    }),
    r = (e) => i.useExperiment({ location: e }).realtimeUseNowEnabled;
