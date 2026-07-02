n.d(t, { MS: () => o, OE: () => a, Qb: () => d });
var i = n(228366),
    l = n(976860),
    s = n(174459),
    r = n(652215);
function o() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function a(e) {
    (0, l.TX)() &&
        (s.default.track(r.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, l.aX)());
}
function d(e) {
    (0, l.TX)() &&
        (s.default.track(r.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, l.sY)());
}
