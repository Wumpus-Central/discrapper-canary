n.d(t, {
    Hm: () => u,
    TL: () => d,
    pN: () => c,
});
var r = n(570140),
    i = n(703656),
    a = n(626135),
    o = n(719961),
    s = n(365355),
    l = n(981631);
function c(e, t, n) {
    r.Z.dispatch({
        type: "ROUTE_CHANGED",
        path: e,
        key: t,
        isReplace: n,
    });
}
function u(e) {
    if (!(0, i.x3)()) return;
    if (
        (a.default.track(l.rMx.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e,
        }),
        !(0, o.v)({ location: e }))
    )
        return void (0, i.op)();
    let t = s.Z.backDestination;
    null != t && (r.Z.dispatch({ type: "GO_BACK" }), (0, i.uL)(t.path));
}
function d(e) {
    if (!(0, i.x3)()) return;
    if (
        (a.default.track(l.rMx.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e,
        }),
        !(0, o.v)({ location: e }))
    )
        return void (0, i.eH)();
    let t = s.Z.forwardDestination;
    null != t && (r.Z.dispatch({ type: "GO_FORWARD" }), (0, i.uL)(t.path));
}
