a.d(t, { $2: () => d, Xv: () => _, n7: () => c });
var n = a(636537),
    s = a(228366),
    i = a(569717),
    l = a(954571),
    r = a(204925),
    o = a(652215);
function c(e, t) {
    return (
        (0, i.A)(e, t),
        l.default.track(o.HAw.AGE_GATE_ACTION, { source: t, action: r.AM.AGE_GATE_SUBMITTED }),
        n.Bo.patch({
            url: o.Rsh.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
            rejectWithError: !1,
        }).then((e) => {
            let a = e.body;
            s.h.dispatch({ type: "CURRENT_USER_UPDATE", user: a }),
                l.default.track(o.HAw.AGE_GATE_ACTION, { source: t, action: r.AM.AGE_GATE_SUCCESS });
        })
    );
}
function _(e) {
    s.h.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
        l.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: r.AM.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION });
}
function d(e) {
    s.h.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
        l.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: r.AM.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER });
}
