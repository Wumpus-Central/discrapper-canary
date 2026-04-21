"use strict";
n.d(t, { x: () => i });
let r = (0, n(945810).mj)({
    name: "2026-04-profile-message-cta",
    kind: "user",
    defaultConfig: { showCTA: !1, hideDMInput: !1 },
    variations: { 1: { showCTA: !0, hideDMInput: !1 }, 2: { showCTA: !0, hideDMInput: !0 } },
});
function i() {
    return r.useConfig({ location: "UserProfilePopout" });
}
