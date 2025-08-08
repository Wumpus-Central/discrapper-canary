n.d(t, {
    ZP: () => a,
    xI: () => o,
});
var r = n(818083),
    i = n(987338),
    o = (function (e) {
        return (e.Control = "CONTROL"), (e.Interactive = "INTERACTIVE"), (e.Static = "STATIC"), e;
    })({});
let a = (0, r.B)({
    kind: "user",
    id: "2025-08_referral_program_popover",
    label: "Referral Program Popover Experiment",
    defaultConfig: { cohort: "CONTROL" },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
