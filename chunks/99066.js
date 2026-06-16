"use strict";
n.d(t, { VS: () => u, sE: () => c, t4: () => l });
var i = n(600975),
    r = n(945810),
    s = n(519059),
    a = n(688151);
let o = (0, r.mj)({
        kind: "user",
        name: "2026-03-content-inventory-memberlist-and-ranker",
        defaultConfig: { enabled: !0, impressionCappingEnabled: !0 },
        variations: { 0: { enabled: !1, impressionCappingEnabled: !1 } },
    }),
    l = (0, i.C)({
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
function u(e) {
    let { enabled: t } = o.getConfig({ location: e }),
        n = (0, s.HF)(e);
    return t || n;
}
function c(e) {
    let { enabled: t, impressionCappingEnabled: n } = o.getConfig({ location: e });
    return t && !0 === n;
}
