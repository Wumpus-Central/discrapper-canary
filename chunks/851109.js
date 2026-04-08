"use strict";
n.d(t, { GE: () => u, RK: () => s, U5: () => i, X8: () => l, yF: () => a });
var r = n(945810),
    i = (function (e) {
        return (e.POPOUT = "popout"), (e.SIDEBAR = "sidebar"), (e.LEGACY = "legacy"), e;
    })({}),
    s = (function (e) {
        return (
            (e.SERVER_RAIL_TOP = "server-rail-top"),
            (e.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
            (e.TITLE_BAR_LEFT = "title-bar-left"),
            e
        );
    })({}),
    a = (function (e) {
        return (e.TABS = "tabs"), (e.DROPDOWN = "dropdown"), e;
    })({});
let o = (0, r.mj)({
    name: "2026-04-desktop-notification-center",
    kind: "user",
    defaultConfig: { notificationCenterVariant: null, entrypoint: null, filterStyle: null },
    variations: {
        1: { notificationCenterVariant: "popout", entrypoint: "title-bar-left", filterStyle: "dropdown" },
        2: { notificationCenterVariant: "popout", entrypoint: "server-rail-top", filterStyle: "dropdown" },
        3: { notificationCenterVariant: "sidebar", entrypoint: "server-rail-top", filterStyle: "dropdown" },
    },
});
function l(e) {
    return o.useConfig(e);
}
function u(e) {
    return o.getConfig(e);
}
