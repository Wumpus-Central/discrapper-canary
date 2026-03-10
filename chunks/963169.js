n.d(t, { MS: () => l, OE: () => o, Qb: () => c });
var i = n(73153),
    a = n(976860),
    r = n(954571),
    s = n(652215);
function l() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function o(e) {
    (0, a.TX)() &&
        (r.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, a.aX)());
}
function c(e) {
    (0, a.TX)() &&
        (r.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, a.sY)());
}
