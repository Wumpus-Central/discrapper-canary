n.d(t, { nZ: () => l });
let a = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_block_user_feedback',
    label: 'Block User Feedback Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Block User Feedback Survey',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
