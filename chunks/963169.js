"use strict";
n.d(t, { MS: () => c, OE: () => d, Qb: () => _ });
var r = n(73153),
    i = n(824865),
    s = n(976860),
    a = n(954571),
    o = n(545167),
    l = n(729904),
    u = n(652215);
function c(e, t) {
    r.h.dispatch({ type: "ROUTE_CHANGED", location: e, action: t });
}
function d(e) {
    if (!(0, s.TX)()) return;
    if (
        (a.default.track(u.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }),
        !(0, o.v)({ location: "navigatingBackForward" }))
    )
        return void (0, s.aX)();
    let t = l.A.backDestination;
    null != t && (0, s.pX)(t.path, { source: i.A.USER_NAVIGATED_BACK });
}
function _(e) {
    if (!(0, s.TX)()) return;
    if (
        (a.default.track(u.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }),
        !(0, o.v)({ location: "navigatingBackForward" }))
    )
        return void (0, s.sY)();
    let t = l.A.forwardDestination;
    null != t && (0, s.pX)(t.path, { source: i.A.USER_NAVIGATED_FORWARD });
}
