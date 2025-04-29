n.d(t, {
    X: () => o,
    j: () => i
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-09_hd_streaming_potion',
        label: 'Consumable HD Streaming Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Treatment',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => r.useExperiment({ location: e }).enabled,
    o = (e) => r.getCurrentConfig({ location: e }).enabled;
