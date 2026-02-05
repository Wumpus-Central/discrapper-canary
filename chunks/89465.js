n.d(t, { A: () => a });
var i = n(600975),
    r = n(688151);
let a = (0, i.C)({
    kind: "user",
    id: "2025-05_reverse_trial_promotion",
    label: "Reverse Trials",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$G.CONNECTION_OPEN,
    treatments: [{ id: 1, label: "Users receives reverse trial + 1 week follow-up offer", config: { enabled: !0 } }],
});
