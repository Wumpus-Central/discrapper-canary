n.d(t, {
    Jz: () => i,
    kG: () => a,
    y1: () => r,
});
let r = (0, n(600975).C)({
        kind: "user",
        label: "Pomelo",
        id: "2023-03_pomelo",
        defaultConfig: {
            enabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "enabled",
                config: {
                    enabled: !0,
                },
            },
        ],
    }),
    i = () => {
        let { enabled: e } = r.useExperiment(
            {
                location: "faf26d_1",
            },
            {
                autoTrackExposure: !1,
            },
        );
        return e;
    },
    a = () => {
        let { enabled: e } = r.getCurrentConfig(
            {
                location: "faf26d_2",
            },
            {
                autoTrackExposure: !1,
            },
        );
        return e;
    };
