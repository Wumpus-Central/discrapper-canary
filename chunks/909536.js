"use strict";
n.d(t, { Gh: () => r, St: () => s });
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
function r(e) {
    return i.useConfig({ location: e }).isEnabled;
}
function s(e) {
    return i.useConfig({ location: e }).isRoadblocksEnabled;
}
