n.d(t, { R: () => l });
var r = n(987170),
    i = n(987338);
let l = (0, r.Z)({
    kind: 'user',
    id: '2025-02_test_user_auth_filter_badges',
    label: 'Test User Auth Filter Badges',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Variation with treatment enabled',
            config: { enabled: !0 }
        }
    ]
});
