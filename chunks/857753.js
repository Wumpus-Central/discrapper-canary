n.d(t, { Y: () => r });
var i = n(818083),
    l = n(987338);
let r = (0, i.B)({
    kind: 'user',
    id: '2024-10_mobile_referral_trial_recipient',
    label: 'Referral Recipient Experiment',
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Referral Recipient Experiment on Mobile',
            config: { enabled: !0 }
        }
    ]
});
