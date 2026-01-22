n.d(t, {
    oK: () => l,
    ty: () => c,
});
var r = n(923457),
    i = n(600975),
    a = n(207560);
let s = (0, i.C)({
        kind: "user",
        id: "2025-01_default_activity_status",
        label: "Guild activity status defaults",
        defaultConfig: {
            enabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Enable new defaults",
                config: {
                    enabled: !0,
                },
            },
        ],
    }),
    o = (0, i.C)({
        kind: "user",
        id: "2025-01_default_activity_status_new_users",
        label: "Guild activity status defaults",
        defaultConfig: {
            enabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Enable new defaults",
                config: {
                    enabled: !0,
                },
            },
        ],
    }),
    l = (e) =>
        s.getCurrentConfig(
            {
                location: e,
            },
            {
                autoTrackExposure: !1,
            },
        ).enabled ||
        o.getCurrentConfig(
            {
                location: e,
            },
            {
                autoTrackExposure: !1,
            },
        ).enabled ||
        (0, a.To)(r.p.GUILD_ACTIVITY_STATUS),
    c = (e) => {
        let t = s.useExperiment(
                {
                    location: e,
                },
                {
                    autoTrackExposure: !1,
                },
            ).enabled,
            n = o.useExperiment(
                {
                    location: e,
                },
                {
                    autoTrackExposure: !1,
                },
            ).enabled,
            i = (0, a.yv)(r.p.GUILD_ACTIVITY_STATUS);
        return t || n || i;
    };
