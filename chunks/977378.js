t.d(n, { E: () => i });
let o = (0, t(818083).B)({
        kind: 'user',
        id: '2025-05_user_profile_view_main_profile_negative_experiment',
        label: 'User Profile View Main Profile Negative Experiment',
        defaultConfig: { viewMainProfileEnabled: !0 },
        treatments: [
            {
                id: 1,
                label: 'View Main Profile Disabled',
                config: { viewMainProfileEnabled: !1 }
            }
        ]
    }),
    i = (e) => {
        let { location: n, autoTrackExposure: t = !0 } = e;
        return o.useExperiment({ location: n }, { autoTrackExposure: t });
    };
