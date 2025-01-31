n.d(t, {
    JH: () => a,
    o9: () => r,
    w8: () => i
});
let i = (0, n(818083).B)({
        kind: 'user',
        label: 'Pomelo',
        id: '2023-03_pomelo',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    r = () => {
        let { enabled: e } = i.useExperiment({ location: 'faf26d_1' }, { autoTrackExposure: !1 });
        return e;
    },
    a = () => {
        let { enabled: e } = i.getCurrentConfig({ location: 'faf26d_2' }, { autoTrackExposure: !1 });
        return e;
    };
