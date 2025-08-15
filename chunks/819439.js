n.d(t, {
    $: () => o,
    Q: () => s,
});
var r = n(818083);
let i = {
        enabled: !1,
        inExperiment: !1,
    },
    a = (0, r.B)({
        kind: "user",
        id: "2025-08_desktop_top_level_search_v1",
        label: "Desktop Top Level Search v1",
        defaultConfig: i,
        treatments: [
            {
                id: 0,
                label: "Control group for desktop top level search v1",
                config: {
                    enabled: !1,
                    inExperiment: !0,
                },
            },
            {
                id: 1,
                label: "Enables desktop top level search v1",
                config: {
                    enabled: !0,
                    inExperiment: !0,
                },
            },
        ],
    });
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r;
}
