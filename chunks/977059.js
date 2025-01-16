t.d(e, {
    R: function () {
        return a;
    },
    S: function () {
        return i;
    }
});
let l = (0, t(987170).Z)({
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
function i(n) {
    let { location: e } = n;
    return l.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
function a(n) {
    let { location: e } = n;
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
