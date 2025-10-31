n.d(t, {
    E: () => r,
    Z: () => s,
});
var a = n(818083),
    i = n(875527),
    l = n(987338);
let r = (0, a.B)({
    kind: "user",
    id: "2025-06_voice_filters_ea",
    label: "Voice Filters EA",
    defaultConfig: { enabled: null },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "User don't see voice filters EA",
            config: { enabled: null },
        },
        {
            id: 1,
            label: "User sees voice filters EA",
            config: { enabled: !0 },
        },
    ],
});
function s(e) {
    let { location: t } = e,
        { enabled: n } = r.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        a = (0, i.Hu)({
            location: "VoiceFiltersEarlyAccess",
            autoTrackExposure: !0,
        });
    return n && a;
}
