i.d(e, { MS: () => d, OE: () => h, Qb: () => u });
var n = i(73153),
    r = i(824865),
    a = i(976860),
    s = i(954571),
    l = i(545167),
    o = i(729904),
    c = i(652215);
function d(t, e) {
    n.h.dispatch({ type: "ROUTE_CHANGED", location: t, action: e });
}
function h(t) {
    if (!(0, a.TX)()) return;
    if (
        (s.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: t }),
        !(0, l.vY)({ location: "navigatingBackForward" }))
    )
        return void (0, a.aX)();
    let e = o.A.backDestination;
    null != e && (0, a.pX)(e.path, { source: r.A.USER_NAVIGATED_BACK });
}
function u(t) {
    if (!(0, a.TX)()) return;
    if (
        (s.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: t }),
        !(0, l.vY)({ location: "navigatingBackForward" }))
    )
        return void (0, a.sY)();
    let e = o.A.forwardDestination;
    null != e && (0, a.pX)(e.path, { source: r.A.USER_NAVIGATED_FORWARD });
}
