n.d(t, {
    MS: () => c,
    OE: () => u,
    Qb: () => d,
});
var r = n(73153),
    i = n(976860),
    a = n(954571),
    s = n(545167),
    o = n(729904),
    l = n(652215);
function c(e, t, n) {
    r.h.dispatch({
        type: "ROUTE_CHANGED",
        path: e,
        key: t,
        isReplace: n,
    });
}
function u(e) {
    if (!(0, i.TX)()) return;
    if (
        (a.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e,
        }),
        !(0, s.J)({ location: e }))
    )
        return void (0, i.aX)();
    let t = o.A.backDestination;
    null != t && (r.h.dispatch({ type: "GO_BACK" }), (0, i.pX)(t.path));
}
function d(e) {
    if (!(0, i.TX)()) return;
    if (
        (a.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e,
        }),
        !(0, s.J)({ location: e }))
    )
        return void (0, i.sY)();
    let t = o.A.forwardDestination;
    null != t && (r.h.dispatch({ type: "GO_FORWARD" }), (0, i.pX)(t.path));
}
