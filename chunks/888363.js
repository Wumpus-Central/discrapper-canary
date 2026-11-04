var i = n(620632),
    r = n(73153),
    a = n(652215);
n.d(
    t,
    {},
    {
        q: function () {
            return i.Bo.get({ url: a.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
                () => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
            );
        },
    },
);
