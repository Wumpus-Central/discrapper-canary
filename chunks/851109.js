n.d(t, { GE: () => c, RK: () => l, U5: () => _, X8: () => d, yF: () => o });
var i,
    r,
    a,
    s = n(945810),
    _ = (((i = {}).POPOUT = "popout"), (i.SIDEBAR = "sidebar"), (i.LEGACY = "legacy"), i),
    l =
        (((r = {}).SERVER_RAIL_TOP = "server-rail-top"),
        (r.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
        (r.TITLE_BAR_LEFT = "title-bar-left"),
        r),
    o = (((a = {}).TABS = "tabs"), (a.DROPDOWN = "dropdown"), a);
let E = (0, s.mj)({
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
    return E.useConfig(e);
}
function c(e) {
    return E.getConfig(e);
}
