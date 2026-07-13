"use strict";
n.d(t, { VS: () => u, dN: () => c, sE: () => _, t4: () => o });
var i = n(600975),
    r = n(945810),
    a = n(519059),
    s = n(688151);
let l = (0, r.mj)({
        kind: "user",
        name: "2026-03-content-inventory-memberlist-and-ranker",
        defaultConfig: { enabled: !0, impressionCappingEnabled: !0 },
        variations: { 0: { enabled: !1, impressionCappingEnabled: !1 } },
    }),
    o = (0, i.C)({
        kind: "user",
        id: "2025-09_hotwheels_nvidia_boost",
        label: "Next iteration of the activity feed ranking model.",
        commonTriggerPoint: s.$G.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            { id: 16, label: "ML model V3 - Nvidia small boost", config: {} },
            { id: 17, label: "ML model V3 - Nvidia big boost", config: {} },
        ],
    }),
    d = (0, r.mj)({
        name: "2026-07-hotwheels-clickable-game-icon",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function c(e) {
    return d.useConfig({ location: e }).enabled;
}
function u(e) {
    let { enabled: t } = l.getConfig({ location: e }),
        n = (0, a.HF)(e);
    return t || n;
}
function _(e) {
    let { enabled: t, impressionCappingEnabled: n } = l.getConfig({ location: e });
    return t && !0 === n;
}
