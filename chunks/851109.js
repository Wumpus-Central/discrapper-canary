n.d(t, { GE: () => E, RK: () => o, U5: () => l, X8: () => _, yF: () => d });
var i,
    a,
    r,
    s = n(945810),
    l = (((i = {}).POPOUT = "popout"), (i.SIDEBAR = "sidebar"), (i.LEGACY = "legacy"), i),
    o =
        (((a = {}).SERVER_RAIL_TOP = "server-rail-top"),
        (a.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
        (a.TITLE_BAR_LEFT = "title-bar-left"),
        a),
    d = (((r = {}).TABS = "tabs"), (r.DROPDOWN = "dropdown"), r);
let c = (0, s.mj)({
    name: "2026-04-desktop-notification-center",
    kind: "user",
    defaultConfig: { notificationCenterVariant: null, entrypoint: null, filterStyle: null },
    variations: {
        1: { notificationCenterVariant: "popout", entrypoint: "title-bar-left", filterStyle: "dropdown" },
        2: { notificationCenterVariant: "popout", entrypoint: "server-rail-top", filterStyle: "dropdown" },
        3: { notificationCenterVariant: "sidebar", entrypoint: "server-rail-top", filterStyle: "dropdown" },
    },
});
function _(e) {
    return c.useConfig(e);
}
function E(e) {
    return c.getConfig(e);
}
