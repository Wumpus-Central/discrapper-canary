n.d(t, {
    F4: () => a,
    oW: () => i,
});
let r = (0, n(427164).le)({
    kind: "user",
    name: "2026-01-profile-updates-notification",
    defaultConfig: { showSettingsToggle: !1 },
    variations: {
        0: { showSettingsToggle: !1 },
        1: { showSettingsToggle: !0 },
        2: { showSettingsToggle: !0 },
    },
});
function i(e) {
    return r.useConfig({ location: e });
}
function a(e) {
    return r.getConfig({ location: e }).showSettingsToggle;
}
