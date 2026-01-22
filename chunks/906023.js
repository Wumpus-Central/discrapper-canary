n.d(t, {
    A: () => r,
});
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_calculated_yearly_discount_percentage",
    label: "Calculated Yearly Discount Percentage Experiment",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 0,
            label: "Use existing yearly discount percentage",
            config: {
                enabled: !1,
            },
        },
        {
            id: 1,
            label: "Use calculated yearly discount percentage",
            config: {
                enabled: !0,
            },
        },
    ],
});
