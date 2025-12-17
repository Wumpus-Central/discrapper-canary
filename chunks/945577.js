n.d(t, {
    U: () => o,
    a: () => s,
});
var r = n(818083);
let i = {
        isXDMSearchEnabled: !1,
        inExperiment: !1,
    },
    a = (0, r.B)({
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
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isXDMSearchEnabled: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isXDMSearchEnabled: r } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
