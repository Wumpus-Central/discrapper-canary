n.d(t, {
    Q: () => i,
    U: () => a,
});
let r = (0, n(600975).C)({
    id: "2024-04_quest_preview_tool",
    kind: "user",
    label: "Quest Preview Tool",
    defaultConfig: {
        enabled: !1,
        v2Enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Preview tool enabled",
            config: {
                enabled: !0,
                v2Enabled: !1,
            },
        },
        {
            id: 2,
            label: "Preview tool 2 enabled",
            config: {
                enabled: !0,
                v2Enabled: !0,
            },
        },
    ],
});
function i(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).v2Enabled;
}
