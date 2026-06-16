"use strict";
n.d(t, { MS: () => o, OE: () => l, Qb: () => u });
var i = n(228366),
    r = n(976860),
    s = n(174459),
    a = n(652215);
function o() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function l(e) {
    (0, r.TX)() &&
        (s.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, r.aX)());
}
function u(e) {
    (0, r.TX)() &&
        (s.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, r.sY)());
}
