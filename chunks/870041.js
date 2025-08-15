n.d(t, {
    ZP: () => o,
    xI: () => a,
});
var r,
    i = n(818083),
    l = n(987338),
    a = (((r = {}).Control = "CONTROL"), (r.Interactive = "INTERACTIVE"), (r.Static = "STATIC"), r);
let o = (0, i.B)({
    kind: "user",
    id: "2025-08_referral_program_popover",
    label: "Referral Program Popover Experiment",
    defaultConfig: { cohort: "CONTROL" },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Control group. Users see existing copy.",
            config: { cohort: "CONTROL" },
        },
        {
            id: 1,
            label: "Treatment Group 1. Users see an interactive popover.",
            config: { cohort: "INTERACTIVE" },
        },
        {
            id: 2,
            label: "Treatment Group 2. Users see a static, flat popover.",
            config: { cohort: "STATIC" },
        },
    ],
});
