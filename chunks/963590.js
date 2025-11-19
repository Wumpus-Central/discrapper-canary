n.d(t, {
    E: () => i,
    Z: () => s,
});
var a = n(818083),
    l = n(875527),
    r = n(987338);
let i = (0, a.B)({
    kind: "user",
    id: "2025-06_voice_filters_ea",
    label: "Voice Filters EA",
    defaultConfig: { enabled: null },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
        { enabled: n } = i.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        a = (0, l.Hu)({
            location: "VoiceFiltersEarlyAccess",
            autoTrackExposure: !0,
        });
    return n && a;
}
