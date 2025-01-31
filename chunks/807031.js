n.d(t, {
    KR: () => r,
    wC: () => a
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_voice_channel_blocked_user_warning',
    label: 'Voice Channel Blocked User Warning',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show blocked user warning in voice channel as a modal',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t } = e;
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    let { location: t } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
