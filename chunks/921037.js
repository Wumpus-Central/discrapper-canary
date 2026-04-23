n.d(t, { A: () => h, B: () => d });
var r = n(362474),
    i = n(228366),
    a = n(376728),
    l = n(439372),
    o = n(495544),
    s = n(723702),
    u = n(652215);
let d = "guestInviteToAccept";
class c extends l.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    handleConnectionOpen = async () => {
        if ((0, s.isWeb)()) {
            let e = r.u.get(d);
            if (null != e && "string" == typeof e && o.default.isAuthenticated()) {
                let { invite: t } = await a.Ay.resolveInvite(e, "Desktop Modal");
                null != t &&
                    (i.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: u.BRT.APP }),
                    r.u.remove(d));
            }
        }
    };
}
let h = new c();
