a.d(t, { $2: () => d, Xv: () => c, n7: () => u });
var n = a(636537),
    r = a(228366),
    l = a(569717),
    i = a(174459),
    o = a(204925),
    s = a(652215);
function u(e, t) {
    return (
        (0, l.A)(e, t),
        i.default.track(s.HAw.AGE_GATE_ACTION, { source: t, action: o.AM.AGE_GATE_SUBMITTED }),
        n.Bo.patch({
            url: s.Rsh.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
            rejectWithError: !1,
        }).then((e) => {
            let a = e.body;
            r.h.dispatch({ type: "CURRENT_USER_UPDATE", user: a }),
                i.default.track(s.HAw.AGE_GATE_ACTION, { source: t, action: o.AM.AGE_GATE_SUCCESS });
        })
    );
}
function c(e) {
    r.h.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
        i.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: o.AM.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION });
}
function d(e) {
    r.h.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
        i.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: o.AM.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER });
}
