n.d(t, { B: () => l });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_shop_tile_impression_logging',
        label: 'Shop tile impressions logging',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable shop tile impression logging',
                config: { enabled: !0 }
            }
        ]
    }),
    l = (e) => r.useExperiment({ location: e }).enabled;
