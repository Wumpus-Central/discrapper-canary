n.d(t, { w: () => r });
let i = (0, n(818083).B)({
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
    r = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: n });
    };
