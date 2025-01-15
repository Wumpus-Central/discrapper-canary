t.d(e, {
    R: function () {
        return l;
    },
    S: function () {
        return r;
    }
});
let i = (0, t(987170).Z)({
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
function r(n) {
    let { location: e } = n;
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
function l(n) {
    let { location: e } = n;
    return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
