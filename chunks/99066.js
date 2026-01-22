n.d(t, {
    Lj: () => f,
    VS: () => c,
    ds: () => o,
    sE: () => u,
    t4: () => l,
});
var r = n(600975),
    i = n(335934),
    a = n(688151);
let s = (0, r.C)({
        kind: "user",
        id: "2024-03_content_inventory_memberlist_and_ranker",
        label: "Enables the memberlist content feed",
        defaultConfig: {
            enabled: !0,
            impressionCappingEnabled: !0,
        },
        treatments: [
            {
                id: -1,
                label: "Not in experiment",
                config: {
                    enabled: !1,
                },
            },
            {
                id: 0,
                label: "Holdout",
                config: {
                    enabled: !1,
                },
            },
        ],
    }),
    o = (0, r.C)({
        kind: "user",
        id: "2025-04_hotwheels_holdout_the_sequel",
        label: "Tracking a holdout hashed to member list experiment for data readouts",
        commonTriggerPoint: a.$G.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            {
                id: 0,
                label: "Holdout",
                config: {},
            },
            {
                id: 1,
                label: "Shadow Treatment",
                config: {},
            },
        ],
    }),
    l = (0, r.C)({
        kind: "user",
        id: "2025-09_hotwheels_nvidia_boost",
        label: "Next iteration of the activity feed ranking model.",
        commonTriggerPoint: a.$G.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            {
                id: 16,
                label: "ML model V3 - Nvidia small boost",
                config: {},
            },
            {
                id: 17,
                label: "ML model V3 - Nvidia big boost",
                config: {},
            },
        ],
    });

function c(e) {
    let { enabled: t } = s.getCurrentConfig(
            {
                location: e,
            },
            {
                autoTrackExposure: !0,
            },
        ),
        n = (0, i.HF)(e, !1);
    return t || n;
}

function u(e) {
    let { enabled: t, impressionCappingEnabled: n } = s.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: !1,
        },
    );
    return t && !0 === n;
}
let d = (0, r.C)({
    kind: "user",
    id: "2024-08_content_inventory_analytics_sampling",
    label: "Content Inventory Analytics Sampling",
    defaultConfig: {
        trackingEnabled: !0,
    },
    treatments: [
        {
            id: 1,
            label: "Tracking disabled",
            config: {
                trackingEnabled: !1,
            },
        },
    ],
});

function f(e) {
    return d.getCurrentConfig(
        {
            location: e,
        },
        {
            autoTrackExposure: !0,
        },
    );
}
