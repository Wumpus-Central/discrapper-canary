n.d(t, { C$: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_ignore_user_feedback',
    label: 'Ignore User Feedback Experiment',
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
