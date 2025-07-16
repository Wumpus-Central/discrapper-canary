n.d(t, {
    c: () => l,
    p: () => a
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        id: '2025-07_nitro_perk_private_browsing_survey',
        kind: 'user',
        label: 'Nitro Perk Private Browsing Survey',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables the Nitro Perk Private Browsing Survey',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: t } = e;
        return l.useExperiment({ location: t });
    };
