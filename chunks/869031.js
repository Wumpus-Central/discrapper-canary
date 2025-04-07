n.d(t, { nZ: () => i });
let r = (0, n(818083).B)({
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
function i(e) {
    let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
