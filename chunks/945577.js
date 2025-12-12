n.d(t, {
    U: () => a,
    a: () => s,
});
var r = n(818083);
let i = {
        isXDMSearchEnabled: !1,
        inExperiment: !1,
    },
    o = (0, r.B)({
        kind: "user",
        id: "2025-06_search_desktop_xdm_experiment",
        label: "Search Desktop XDM Experiment",
        defaultConfig: i,
        treatments: [
            {
                id: 0,
                label: "Control group for xDM search on desktop",
                config: {
                    isXDMSearchEnabled: !1,
                    inExperiment: !0,
                },
            },
            {
                id: 1,
                label: "Enables xDM search with xDM setting as default off",
                config: {
                    isXDMSearchEnabled: !0,
                    inExperiment: !0,
                },
            },
        ],
    });
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isXDMSearchEnabled: r } = o.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isXDMSearchEnabled: r } = o.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
