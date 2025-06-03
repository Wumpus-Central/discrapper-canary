n.d(t, { E: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_voice_filters_ea',
    label: 'Voice Filters EA',
    defaultConfig: { enabled: null },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
