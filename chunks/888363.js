n.d(t, { q: () => s });
var i = n(636537),
    r = n(73153),
    a = n(652215);
function s() {
    return i.Bo.get({ url: a.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
        (e) => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
        () => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
    );
}
