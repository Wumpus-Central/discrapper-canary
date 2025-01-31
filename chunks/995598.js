n.d(t, { Y: () => l });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-06_checkout_recovery_nagbar_test',
        label: 'Testing',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Users will not see the nagbar',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Users will see the nagbar',
                config: { enabled: !0 }
            }
        ]
    }),
    l = () => {
        let { enabled: e } = i.getCurrentConfig({ location: 'checkout_recovery_nagbar_test' });
        return e;
    };
