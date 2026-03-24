"use strict";
n.d(t, { VS: () => c, ds: () => l, sE: () => d, t4: () => u });
var r = n(600975),
    i = n(945810),
    s = n(335934),
    a = n(688151);
let o = (0, i.mj)({
        kind: "user",
        name: "2026-03-content-inventory-memberlist-and-ranker",
        defaultConfig: { enabled: !0, impressionCappingEnabled: !0 },
        variations: { 0: { enabled: !1, impressionCappingEnabled: !1 } },
    }),
    l = (0, r.C)({
        kind: "user",
        id: "2025-04_hotwheels_holdout_the_sequel",
        label: "Tracking a holdout hashed to member list experiment for data readouts",
        commonTriggerPoint: a.$G.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            { id: 0, label: "Holdout", config: {} },
            { id: 1, label: "Shadow Treatment", config: {} },
        ],
    }),
    u = (0, r.C)({
        kind: "user",
        id: "2025-09_hotwheels_nvidia_boost",
        label: "Next iteration of the activity feed ranking model.",
        commonTriggerPoint: a.$G.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            { id: 16, label: "ML model V3 - Nvidia small boost", config: {} },
            { id: 17, label: "ML model V3 - Nvidia big boost", config: {} },
        ],
    });
function c(e) {
    let { enabled: t } = o.getConfig({ location: e }),
        n = (0, s.HF)(e, !1);
    return t || n;
}
function d(e) {
    let { enabled: t, impressionCappingEnabled: n } = o.getConfig({ location: e });
    return t && !0 === n;
}
