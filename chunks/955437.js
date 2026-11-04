var n = a(620632),
    r = a(73153),
    l = a(569717),
    i = a(831167),
    o = a(129230),
    s = a(204925),
    u = a(652215);
a.d(
    t,
    {},
    {
        $2: function (e) {
            (r.h.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
                o.default.track(u.HAw.AGE_GATE_ACTION, { source: e, action: s.AM.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER }));
        },
        Xv: function (e) {
            (r.h.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
                o.default.track(u.HAw.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AM.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
                }));
        },
        n7: function (e, t) {
            return (
                (0, l.A)(e, t),
                o.default.track(u.HAw.AGE_GATE_ACTION, { source: t, action: s.AM.AGE_GATE_SUBMITTED }),
                n.Bo.patch({
                    url: u.Rsh.ME,
                    oldFormErrors: !0,
                    body: { date_of_birth: (0, i.A)(e) },
                    rejectWithError: !1,
                }).then((e) => {
                    let a = e.body;
                    (r.h.dispatch({ type: "CURRENT_USER_UPDATE", user: a }),
                        o.default.track(u.HAw.AGE_GATE_ACTION, { source: t, action: s.AM.AGE_GATE_SUCCESS }));
                })
            );
        },
    },
);
