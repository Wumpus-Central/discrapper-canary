n.d(t, {
    MS: () => u,
    OE: () => d,
    Qb: () => f,
});
var r = n(73153),
    i = n(824865),
    a = n(976860),
    o = n(954571),
    s = n(545167),
    l = n(729904),
    c = n(652215);

function u(e, t) {
    r.h.dispatch({
        type: "ROUTE_CHANGED",
        location: e,
        action: t,
    });
}

function d(e) {
    if (!(0, a.TX)()) return;
    if (
        (o.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e,
        }),
        !(0, s.vY)({
            location: e,
        }))
    )
        return void (0, a.aX)();
    let t = l.A.backDestination;
    null != t &&
        (0, a.pX)(t.path, {
            source: i.A.USER_NAVIGATED_BACK,
        });
}

function f(e) {
    if (!(0, a.TX)()) return;
    if (
        (o.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e,
        }),
        !(0, s.vY)({
            location: e,
        }))
    )
        return void (0, a.sY)();
    let t = l.A.forwardDestination;
    null != t &&
        (0, a.pX)(t.path, {
            source: i.A.USER_NAVIGATED_FORWARD,
        });
}
