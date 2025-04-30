n.d(t, { f: () => o });
var r = n(818083),
    i = n(772209);
let a = (0, r.B)({
        kind: 'user',
        id: '2025-03_activity_status_descriptive_text',
        label: 'Activity Status Descriptive Text',
        defaultConfig: { descriptiveTextEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Descriptive text enabled',
                config: { descriptiveTextEnabled: !0 }
            }
        ]
    }),
    o = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e,
            r = (0, i.q)({
                location: t,
                autoTrackExposure: n
            });
        return a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    };
