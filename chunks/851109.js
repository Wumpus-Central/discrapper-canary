"use strict";
n.d(t, { GE: () => _, RK: () => l, U5: () => o, X8: () => d, yF: () => u });
var r,
    i,
    s,
    a = n(945810),
    o = (((r = {}).POPOUT = "popout"), (r.SIDEBAR = "sidebar"), (r.LEGACY = "legacy"), r),
    l =
        (((i = {}).SERVER_RAIL_TOP = "server-rail-top"),
        (i.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
        (i.TITLE_BAR_LEFT = "title-bar-left"),
        i),
    u = (((s = {}).TABS = "tabs"), (s.DROPDOWN = "dropdown"), s);
let c = (0, a.mj)({
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
    return c.useConfig(e);
}
function _(e) {
    return c.getConfig(e);
}
