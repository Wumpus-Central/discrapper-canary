n.d(t, {
    Hu: () => o,
    wt: () => s
});
var i = n(818083),
    r = n(358085);
let a = (0, i.B)({
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
function s(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i && (0, r.isDesktop)();
}
function o(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return i && (0, r.isDesktop)();
}
