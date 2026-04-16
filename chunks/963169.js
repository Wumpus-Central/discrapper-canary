n.d(e, { MS: () => a, OE: () => o, Qb: () => c });
var i = n(73153),
    r = n(976860),
    s = n(954571),
    l = n(652215);
function a() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function o(t) {
    (0, r.TX)() &&
        (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: t }), (0, r.aX)());
}
function c(t) {
    (0, r.TX)() &&
        (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: t }), (0, r.sY)());
}
