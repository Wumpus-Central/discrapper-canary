n.d(t, { a: () => i });
let r = (0, n(818083).B)({
        id: '2024-03_quests_client_monitoring',
        kind: 'user',
        label: 'Quests client monitoring experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'disabled',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
