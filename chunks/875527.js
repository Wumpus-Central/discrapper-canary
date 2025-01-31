n.d(t, {
    H: () => r,
    c: () => i
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_flamingo',
    label: 'Flamingo',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled - Treatment 1',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Enabled - Treatment 2',
            config: { enabled: !0 }
        },
        {
            id: 3,
            label: 'Enabled - Treatment 3',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { enabled: t } = i.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
