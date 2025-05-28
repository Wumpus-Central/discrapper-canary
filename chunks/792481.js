n.d(t, { X: () => s });
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    id: '2025-04_tenure_level_up_moment',
    kind: 'user',
    label: 'Tenure Level Up Moment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables new animation and UI for the moment Nitro tenure levels up.',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'For testing: bypasses the one week time limit for showing the level up animation.',
            config: {
                enabled: !0,
                bypassTimeLimit: !0
            }
        }
    ]
});
