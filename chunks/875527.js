n.d(t, {
    Hu: () => l,
    wt: () => o
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
    }),
    s = () => (0, r.isWindows)() || (0, r.isMac)();
function o(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i && s();
}
function l(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return i && s();
}
