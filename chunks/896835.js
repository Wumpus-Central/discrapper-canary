r.d(n, {
    X: function () {
        return o;
    },
    j: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
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
    a = (e) => i.useExperiment({ location: e }).enabled,
    o = (e) => i.getCurrentConfig({ location: e }).enabled;
