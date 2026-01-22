n.d(t, {
    $2: () => d,
    Xv: () => u,
    n7: () => c,
});
var r = n(562465),
    i = n(73153),
    s = n(569717),
    l = n(954571),
    a = n(204925),
    o = n(652215);
function c(e, t) {
    return (
        (0, s.A)(e, t),
        l.default.track(o.HAw.AGE_GATE_ACTION, {
            source: t,
            action: a.AM.AGE_GATE_SUBMITTED,
        }),
        r.Bo.patch({
            url: o.Rsh.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
            rejectWithError: !1,
        }).then((e) => {
            let n = e.body;
            i.h.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: n,
            }),
                l.default.track(o.HAw.AGE_GATE_ACTION, {
                    source: t,
                    action: a.AM.AGE_GATE_SUCCESS,
                });
        })
    );
}
function u(e) {
    i.h.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
        l.default.track(o.HAw.AGE_GATE_ACTION, {
            source: e,
            action: a.AM.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
        });
}
function d(e) {
    i.h.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
        l.default.track(o.HAw.AGE_GATE_ACTION, {
            source: e,
            action: a.AM.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
        });
}
