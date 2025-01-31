n.d(t, {
    O: () => r,
    x: () => a
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-12_user_profile_modal_recent_activity',
        label: 'User Profile Modal Recent Activity',
        defaultConfig: { recentActivityTabEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Recent Activity Tab Enabled',
                config: { recentActivityTabEnabled: !0 }
            }
        ]
    }),
    r = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: n });
    },
    a = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    };
