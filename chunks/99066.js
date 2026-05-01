n.d(t, { VS: () => d, sE: () => c, t4: () => o });
var i = n(600975),
    a = n(945810),
    r = n(875448),
    s = n(688151);
let l = (0, a.mj)({
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
    });
function d(e) {
    let { enabled: t } = l.getConfig({ location: e }),
        n = (0, r.HF)(e);
    return t || n;
}
function c(e) {
    let { enabled: t, impressionCappingEnabled: n } = l.getConfig({ location: e });
    return t && !0 === n;
}
