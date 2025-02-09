e.d(t, {
    YC: () => r,
    cC: () => o
});
let i = (0, e(818083).B)({
    kind: 'user',
    id: '2024-10_blocking_context',
    label: 'Blocking Context',
    defaultConfig: {
        enabled: !1,
        condensed: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Show blocking context in block confirmation modal',
            config: {
                enabled: !0,
                condensed: !1
            }
        },
        {
            id: 2,
            label: 'Show condensed blocking context',
            config: {
                enabled: !0,
                condensed: !0
            }
        }
    ]
});
function r(n) {
    let { location: t } = n;
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 }).condensed;
}
function o(n) {
    let { location: t } = n;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
