n.d(t, {
    E: () => o,
    Z: () => s,
});
var r = n(818083),
    i = n(875527),
    a = n(987338);
let o = (0, r.B)({
    kind: "user",
    id: "2025-06_voice_filters_ea",
    label: "Voice Filters EA",
    defaultConfig: { enabled: null },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
        { enabled: n } = o.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        r = (0, i.Hu)({
            location: "VoiceFiltersEarlyAccess",
            autoTrackExposure: !0,
        });
    return n && r;
}
