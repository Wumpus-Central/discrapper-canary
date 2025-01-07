t.d(n, {
    eP: function () {
        return r;
    }
});
let r = (0, t(818083).B)({
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
});
n.ZP = (e) => {
    let { location: n, autoTrackExposure: t = !0, trackExposureOptions: s = {} } = e;
    return r.useExperiment(
        { location: n },
        {
            autoTrackExposure: t,
            trackExposureOptions: s
        }
    );
};
