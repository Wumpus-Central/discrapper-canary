"use strict";
n.d(t, { GE: () => c, RK: () => o, U5: () => a, X8: () => u });
var i,
    r,
    s = n(945810),
    a = (((i = {}).POPOUT = "popout"), (i.SIDEBAR = "sidebar"), (i.LEGACY = "legacy"), i),
    o =
        (((r = {}).SERVER_RAIL_TOP = "server-rail-top"),
        (r.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
        (r.TITLE_BAR_LEFT = "title-bar-left"),
        r);
let l = (0, s.mj)({
    name: "2026-04-desktop-notification-center",
    kind: "user",
    defaultConfig: { notificationCenterVariant: null, entrypoint: null, filterStyle: null },
    variations: {
        1: { notificationCenterVariant: "popout", entrypoint: "title-bar-left", filterStyle: "dropdown" },
        2: { notificationCenterVariant: "popout", entrypoint: "server-rail-top", filterStyle: "dropdown" },
        3: { notificationCenterVariant: "sidebar", entrypoint: "server-rail-top", filterStyle: "dropdown" },
    },
});
function u(e) {
    return l.useConfig(e);
}
function c(e) {
    return l.getConfig(e);
}
