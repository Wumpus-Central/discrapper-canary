n.d(e, { MS: () => s, OE: () => o, Qb: () => u });
var i = n(73153),
    r = n(976860),
    l = n(954571),
    a = n(652215);
function s() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function o(t) {
    (0, r.TX)() &&
        (l.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: t }), (0, r.aX)());
}
function u(t) {
    (0, r.TX)() &&
        (l.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: t }), (0, r.sY)());
}
