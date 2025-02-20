n.d(e, {
    R: () => a,
    S: () => r
});
let i = (0, n(987170).Z)({
    kind: 'user',
    id: '2024-05_secure_frames_ui_rollout',
    label: 'Secure Frames Rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled.',
            config: { enabled: !0 }
        }
    ]
});
function r(t) {
    let { location: e } = t;
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
function a(t) {
    let { location: e } = t;
    return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
