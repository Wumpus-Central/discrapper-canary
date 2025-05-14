n.d(t, { f: () => i });
let r = (0, n(818083).B)({
    id: '2025-05_202505questclaimrewardexclamationmark',
    kind: 'user',
    label: 'Quest Claim Reward',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Claim Reward Exclamation Mark',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: n }).enabled;
}
