"use strict";
n.d(t, { GE: () => c, RK: () => l, U5: () => s, X8: () => d });
var i,
    r,
    a = n(945810),
    s = (((i = {}).POPOUT = "popout"), (i.SIDEBAR = "sidebar"), (i.LEGACY = "legacy"), i),
    l =
        (((r = {}).SERVER_RAIL_TOP = "server-rail-top"),
        (r.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
        (r.TITLE_BAR_LEFT = "title-bar-left"),
        r);
let o = (0, a.mj)({
    name: "2026-04-desktop-notification-center",
    kind: "user",
    defaultConfig: { notificationCenterVariant: null, entrypoint: null, filterStyle: null },
    variations: {
        1: { notificationCenterVariant: "popout", entrypoint: "title-bar-left", filterStyle: "dropdown" },
        2: { notificationCenterVariant: "popout", entrypoint: "server-rail-top", filterStyle: "dropdown" },
        3: { notificationCenterVariant: "sidebar", entrypoint: "server-rail-top", filterStyle: "dropdown" },
    },
});
function d(e) {
    return o.useConfig(e);
}
function c(e) {
    return o.getConfig(e);
}
