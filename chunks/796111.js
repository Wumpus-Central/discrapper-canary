n.d(t, { P: () => r });
let s = (0, n(818083).B)({
        id: '2024-06_quest_inline_console_connection',
        kind: 'user',
        label: 'Quest Inline Console Connection Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Simplified console connection flow',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Inline console connection flow',
                config: { enabled: !0 }
            }
        ]
    }),
    r = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e,
            { enabled: r } = s.useExperiment({ location: t }, { autoTrackExposure: n });
        return r;
    };
