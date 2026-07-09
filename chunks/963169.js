"use strict";
n.d(t, { MS: () => l, OE: () => o, Qb: () => d });
var i = n(228366),
    r = n(976860),
    a = n(174459),
    s = n(652215);
function l() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function o(e) {
    (0, r.TX)() &&
        (a.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, r.aX)());
}
function d(e) {
    (0, r.TX)() &&
        (a.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, r.sY)());
}
