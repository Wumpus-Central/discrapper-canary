"use strict";
n.d(t, { G: () => a, r: () => r });
let i = (0, n(945810).mj)({
    name: "2026-04-consistent-profiles",
    kind: "user",
    defaultConfig: { enabled: !1, showMutualFriendsNameplate: !1 },
    variations: {
        1: { enabled: !0, showMutualFriendsNameplate: !1 },
        2: { enabled: !0, showMutualFriendsNameplate: !0 },
    },
});
function r(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
}
function a(e) {
    let { showMutualFriendsNameplate: t } = i.useConfig({ location: e });
    return t;
}
