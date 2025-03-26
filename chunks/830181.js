n.d(t, { x: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-03_preload_user_profile_for_popout_performance',
    label: 'Preload User Profile for Popout Performance Experiment',
    defaultConfig: { waitForRefetch: !0 },
    treatments: [
        {
            id: 1,
            label: 'Do not wait for refetches to show user profile popout',
            config: { waitForRefetch: !1 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
}
