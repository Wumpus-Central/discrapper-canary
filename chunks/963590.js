n.d(t, {
    E: () => a,
    Z: () => l
});
var i = n(818083),
    r = n(875527),
    s = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2025-06_voice_filters_ea',
    label: 'Voice Filters EA',
    defaultConfig: { enabled: null },
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "User don't see voice filters EA",
            config: { enabled: null }
        },
        {
            id: 1,
            label: 'User sees voice filters EA',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t } = e,
        { enabled: n } = a.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        i = (0, r.Hu)({
            location: 'VoiceFiltersEarlyAccess',
            autoTrackExposure: !0
        });
    return n && i;
}
