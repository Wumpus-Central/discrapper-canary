n.d(t, { _: () => i });
let r = (0, n(818083).B)({
        id: '2024-09_quests_trophy_case',
        kind: 'user',
        label: 'Trophy Case',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n }).enabled;
    };
