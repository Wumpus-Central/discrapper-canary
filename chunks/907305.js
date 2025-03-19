n.d(t, { w: () => a });
var r = n(818083),
    i = n(772209);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-01_activity_status_cleanup',
        label: 'Activity Status Cleanup',
        defaultConfig: { activityStatusCleanupEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Activity Status Cleanup Enabled',
                config: { activityStatusCleanupEnabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e,
            r = (0, i.q)({
                location: t,
                autoTrackExposure: n
            });
        return o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    };
