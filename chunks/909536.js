i.d(e, { Gh: () => n, St: () => a });
let l = (0, i(945810).mj)({
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
    return l.useConfig({ location: t }).isEnabled;
}
function a(t) {
    return l.useConfig({ location: t }).isRoadblocksEnabled;
}
