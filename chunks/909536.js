n.d(t, { Gh: () => l, St: () => a });
let i = (0, n(945810).mj)({
    name: "2026-03-wishlisting-nitro",
    kind: "user",
    defaultConfig: { isEnabled: !1, isRoadblocksEnabled: !1 },
    variations: {
        0: { isEnabled: !1, isRoadblocksEnabled: !1 },
        1: { isEnabled: !0, isRoadblocksEnabled: !1 },
        2: { isEnabled: !0, isRoadblocksEnabled: !0 },
    },
});
function l(e) {
    return i.useConfig({ location: e }).isEnabled;
}
function a(e) {
    return i.useConfig({ location: e }).isRoadblocksEnabled;
}
