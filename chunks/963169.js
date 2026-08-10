n.d(t, { MS: () => a, OE: () => o, Qb: () => d });
var i = n(228366),
    l = n(976860),
    r = n(174459),
    s = n(652215);
function a() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function o(e) {
    (0, l.TX)() &&
        (r.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, l.aX)());
}
function d(e) {
    (0, l.TX)() &&
        (r.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, l.sY)());
}
