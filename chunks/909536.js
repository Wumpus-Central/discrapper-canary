i.d(e, { Gh: () => s, St: () => n });
let r = (0, i(945810).mj)({
    name: "2026-03-wishlisting-nitro",
    kind: "user",
    defaultConfig: { isEnabled: !1, isRoadblocksEnabled: !1 },
    variations: {
        0: { isEnabled: !1, isRoadblocksEnabled: !1 },
        1: { isEnabled: !0, isRoadblocksEnabled: !1 },
        2: { isEnabled: !0, isRoadblocksEnabled: !0 },
    },
});
function s(t) {
    return r.useConfig({ location: t }).isEnabled;
}
function n(t) {
    return r.useConfig({ location: t }).isRoadblocksEnabled;
}
