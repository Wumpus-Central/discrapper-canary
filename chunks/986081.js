n.d(t, {
    Q: () => l,
    Z: () => r,
});
let i = (0, n(818083).B)({
        kind: "user",
        id: "2022-07_system_dm_safety_onboarding",
        label: "System DM Safety Onboarding",
        defaultConfig: { systemDMRedesignEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enabled, v1 copy",
                config: { systemDMRedesignEnabled: !0 },
            },
            {
                id: 2,
                label: "Enabled, v2 copy",
                config: { systemDMRedesignEnabled: !0 },
            },
        ],
    }),
    r = i;
function l() {
    return i.getCurrentConfig({ location: "0a5674_1" }, { autoTrackExposure: !1 }).systemDMRedesignEnabled;
}
