r.d(n, {
    JH: function () {
        return o;
    },
    o9: function () {
        return a;
    },
    w8: function () {
        return i;
    }
});
let i = (0, r(818083).B)({
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
    a = () => {
        let { enabled: e } = i.useExperiment({ location: 'faf26d_1' }, { autoTrackExposure: !1 });
        return e;
    },
    o = () => {
        let { enabled: e } = i.getCurrentConfig({ location: 'faf26d_2' }, { autoTrackExposure: !1 });
        return e;
    };
