n.d(t, {
    Gc: () => l,
    UX: () => s,
    wn: () => c,
});
var r = n(818083),
    i = n(154579);
let a = {
        enabled: !1,
        inExperiment: !1,
    },
    o = (0, r.B)({
        kind: "user",
        id: "2025-06_search_desktop_xdm_experiment",
        label: "Search Desktop XDM Experiment",
        defaultConfig: a,
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
        r = (0, i.nd)({
            location: t,
            autoTrackExposure: n,
        }),
        { enabled: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.nd)({
            location: t,
            autoTrackExposure: n,
        }),
        { inExperiment: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.ro)({
            location: t,
            autoTrackExposure: n,
        }),
        { inExperiment: a } = o.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return a;
}
