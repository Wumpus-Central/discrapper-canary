n.d(t, {
    Gc: () => c,
    UX: () => l,
    ad: () => s,
});
var r = n(818083),
    i = n(154579);
let o = {
        enabled: !1,
        inExperiment: !1,
    },
    a = (0, r.B)({
        kind: "user",
        id: "2025-06_search_desktop_xdm_experiment",
        label: "Search Desktop XDM Experiment",
        defaultConfig: o,
        treatments: [
            {
                id: 0,
                label: "Control group for xDM search on desktop",
                config: {
                    enabled: !1,
                    inExperiment: !0,
                },
            },
            {
                id: 1,
                label: "Enables xDM search on desktop",
                config: {
                    enabled: !0,
                    inExperiment: !0,
                },
            },
        ],
    });
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.ro)({
            location: t,
            autoTrackExposure: n,
        }),
        { enabled: o } = a.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return o;
}
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.nd)({
            location: t,
            autoTrackExposure: n,
        }),
        { enabled: o } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return o;
}
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.nd)({
            location: t,
            autoTrackExposure: n,
        }),
        { inExperiment: o } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return o;
}
