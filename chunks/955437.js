"use strict";
n.d(t, { $2: () => u, Xv: () => d, n7: () => c });
var i = n(562465),
    s = n(73153),
    r = n(569717),
    l = n(954571),
    a = n(204925),
    o = n(652215);
function c(e, t) {
    return (
        (0, r.A)(e, t),
        l.default.track(o.HAw.AGE_GATE_ACTION, { source: t, action: a.AM.AGE_GATE_SUBMITTED }),
        i.Bo.patch({
            url: o.Rsh.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
            rejectWithError: !1,
        }).then((e) => {
            let n = e.body;
            s.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                l.default.track(o.HAw.AGE_GATE_ACTION, { source: t, action: a.AM.AGE_GATE_SUCCESS });
        })
    );
}
function d(e) {
    s.h.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
        l.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION });
}
function u(e) {
    s.h.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
        l.default.track(o.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER });
}
