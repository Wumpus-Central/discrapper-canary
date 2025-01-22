r.d(n, {
    O: function () {
        return a;
    },
    x: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
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
    a = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: r });
    },
    o = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: r });
    };
