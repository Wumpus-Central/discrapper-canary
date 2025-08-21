n.d(t, { Z: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: "user",
    id: "2025-08_referral_program_relaxed_banner_eligibility",
    label: "Referral Program Relaxed Banner Eligibility Experiment",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Control group. Users need eligible friends to see the referral program banner.",
            config: { enabled: !1 },
        },
        {
            id: 1,
            label: "Treatment Group 1. Users do not need eligible friends to see the referral program banner.",
            config: { enabled: !0 },
        },
    ],
});
