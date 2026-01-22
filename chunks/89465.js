n.d(t, {
    A: () => l,
});
var r = n(600975),
    i = n(688151);
let l = (0, r.C)({
    kind: "user",
    id: "2025-05_reverse_trial_promotion",
    label: "Reverse Trials",
    defaultConfig: {
        enabled: !1,
    },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Users receives reverse trial + 1 week follow-up offer",
            config: {
                enabled: !0,
            },
        },
    ],
});
