n.d(t, {
    MS: () => u,
    OE: () => f,
    Qb: () => p,
});
var r = n(73153),
    i = n(824865),
    a = n(976860),
    s = n(954571),
    o = n(545167),
    l = n(729904),
    c = n(652215);

function u(e, t) {
    r.h.dispatch({
        type: "ROUTE_CHANGED",
        location: e,
        action: t,
    });
}
let d = () =>
    (0, o.J)({
        location: "NavHistoryActionCreators",
    });

function f(e) {
    if (!(0, a.TX)()) return;
    if (
        (s.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e,
        }),
        !d())
    )
        return void (0, a.aX)();
    let t = l.A.backDestination;
    null != t &&
        (0, a.pX)(t.path, {
            source: i.A.USER_NAVIGATED_BACK,
        });
}

function p(e) {
    if (!(0, a.TX)()) return;
    if (
        (s.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e,
        }),
        !d())
    )
        return void (0, a.sY)();
    let t = l.A.forwardDestination;
    null != t &&
        (0, a.pX)(t.path, {
            source: i.A.USER_NAVIGATED_FORWARD,
        });
}
