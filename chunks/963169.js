i.d(e, { MS: () => o, OE: () => a, Qb: () => c });
var n = i(73153),
    r = i(976860),
    s = i(954571),
    l = i(652215);
function o() {
    n.h.dispatch({ type: "ROUTE_CHANGED" });
}
function a(t) {
    (0, r.TX)() &&
        (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: t }), (0, r.aX)());
}
function c(t) {
    (0, r.TX)() &&
        (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: t }), (0, r.sY)());
}
