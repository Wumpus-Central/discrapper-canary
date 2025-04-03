r.d(t, {
    F4: () => i,
    vc: () => s
});
let n = (0, r(818083).B)({
        kind: 'user',
        id: '2023-06_unique_username_registration',
        label: 'Unique Username Registration',
        defaultConfig: {
            livecheckEnabled: !0,
            suggestions: !0
        },
        treatments: [
            {
                id: 1,
                label: 'Unique Username Registration enabled -livecheck -suggestions',
                config: {
                    livecheckEnabled: !1,
                    suggestions: !1
                }
            },
            {
                id: 2,
                label: 'Unique Username Registration enabled -livecheck +suggestions',
                config: {
                    livecheckEnabled: !1,
                    suggestions: !0
                }
            },
            {
                id: 3,
                label: 'Unique Username Registration enabled +livecheck -suggestions',
                config: {
                    livecheckEnabled: !0,
                    suggestions: !1
                }
            },
            {
                id: 4,
                label: 'Unique Username Registration enabled +livecheck +suggestions',
                config: {
                    livecheckEnabled: !0,
                    suggestions: !0
                }
            }
        ]
    }),
    i = () => n.useExperiment({ location: '83ca1a_3' }, { autoTrackExposure: !1 }),
    s = () => n.getCurrentConfig({ location: '83ca1a_4' }, { autoTrackExposure: !1 }).suggestions;
