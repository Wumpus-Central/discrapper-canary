n.d(t, {
    K5: () => s,
    UL: () => a,
    X9: () => o,
});
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    id: "2024-11_soundmoji_rendering",
    label: "Render soundmojis",
    kind: "user",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function s(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
