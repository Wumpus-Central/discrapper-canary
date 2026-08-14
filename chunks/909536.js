r.d(e, { Gh: () => n, St: () => s });
let i = (0, r(945810).mj)({
    name: "2026-03-wishlisting-nitro",
    kind: "user",
    defaultConfig: { isEnabled: !1, isRoadblocksEnabled: !1 },
    variations: {
        0: { isEnabled: !1, isRoadblocksEnabled: !1 },
        1: { isEnabled: !0, isRoadblocksEnabled: !1 },
        2: { isEnabled: !0, isRoadblocksEnabled: !0 },
    },
});
function n(t) {
    return i.useConfig({ location: t }).isEnabled;
}
function s(t) {
    return i.useConfig({ location: t }).isRoadblocksEnabled;
}
