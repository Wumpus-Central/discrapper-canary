t.d(n, { P: () => o });
let r = (0, t(818083).B)({
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
    o = (e) => {
        let { location: n, autoTrackExposure: t = !1 } = e,
            { enabled: o } = r.useExperiment({ location: n }, { autoTrackExposure: t });
        return o;
    };
