n.d(t, { VS: () => o, sE: () => E, t4: () => l });
var i = n(600975),
    r = n(945810),
    a = n(875448),
    s = n(688151);
let _ = (0, r.mj)({
        kind: "user",
        name: "2026-03-content-inventory-memberlist-and-ranker",
        defaultConfig: { enabled: !0, impressionCappingEnabled: !0 },
        variations: { 0: { enabled: !1, impressionCappingEnabled: !1 } },
    }),
    l = (0, i.C)({
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
function o(e) {
    let { enabled: t } = _.getConfig({ location: e }),
        n = (0, a.HF)(e);
    return t || n;
}
function E(e) {
    let { enabled: t, impressionCappingEnabled: n } = _.getConfig({ location: e });
    return t && !0 === n;
}
