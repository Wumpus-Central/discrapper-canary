n.d(t, {
    F4: () => a,
    oW: () => i,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-12_profile_updates_notification",
    label: "Profile Updates Notification Experiment",
    defaultConfig: { showSettingsToggle: !1 },
    treatments: [
        {
            id: 1,
            label: "User can receive profile updates notifications (copy treatment 1). Show settings toggle.",
            config: { showSettingsToggle: !0 },
        },
        {
            id: 2,
            label: "User can receive profile updates notifications (copy treatment 2). Show settings toggle.",
            config: { showSettingsToggle: !0 },
        },
    ],
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
function a(e) {
    return r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).showSettingsToggle;
}
