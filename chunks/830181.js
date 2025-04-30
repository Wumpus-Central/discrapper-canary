n.d(t, { x: () => o });
var r = n(818083),
    i = n(812740);
let a = (0, r.B)({
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
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.A)({
            location: t,
            autoTrackExposure: n
        });
    return a.getCurrentConfig(
        { location: t },
        {
            autoTrackExposure: n,
            disable: r
        }
    );
}
