n.d(t, {
    R: function () {
        return l;
    },
    S: function () {
        return r;
    }
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
function r(e) {
    let { location: t } = e;
    return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
}
function l(e) {
    let { location: t } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
}
