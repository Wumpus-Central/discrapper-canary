n.d(t, { MS: () => _, OE: () => l, Qb: () => o });
var i = n(228366),
    r = n(976860),
    a = n(954571),
    s = n(652215);
function _() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function l(e) {
    (0, r.TX)() &&
        (a.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, r.aX)());
}
function o(e) {
    (0, r.TX)() &&
        (a.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, r.sY)());
}
