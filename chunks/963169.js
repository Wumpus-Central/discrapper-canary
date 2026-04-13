"use strict";
n.d(t, { MS: () => o, OE: () => l, Qb: () => u });
var r = n(73153),
    i = n(976860),
    s = n(954571),
    a = n(652215);
function o() {
    r.h.dispatch({ type: "ROUTE_CHANGED" });
}
function l(e) {
    (0, i.TX)() &&
        (s.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }), (0, i.aX)());
}
function u(e) {
    (0, i.TX)() &&
        (s.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }), (0, i.sY)());
}
