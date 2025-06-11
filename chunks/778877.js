n.d(t, {
    U: () => s,
    a: () => o
});
var r = n(818083);
let i = { enabled: !1 },
    a = (0, r.B)({
        kind: 'user',
        id: '2025-06_search_desktop_xdm_experiment',
        label: 'Search Desktop XDM Experiment',
        defaultConfig: i,
        treatments: [
            {
                id: 1,
                label: 'Enables xDM search on desktop',
                config: { enabled: !0 }
            }
        ]
    });
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
