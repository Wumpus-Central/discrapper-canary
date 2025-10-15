n.d(t, { WW: () => i });
let r = (0, n(818083).B)({
        kind: "user",
        id: "2025-09_one_time_login_client",
        label: "One Time Login",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    }),
    i = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !0 });
