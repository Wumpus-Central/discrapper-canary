"use strict";
n.d(t, { kW: () => i });
let r = (0, n(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
