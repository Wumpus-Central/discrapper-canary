n.d(t, {
    ZP: () => s,
    eP: () => i
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2023-12_pause_subscriptions_experiment',
        label: 'Pause Subscriptions Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Pause Subscription Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: s = {} } = e;
        return i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: s
            }
        );
    };
