"use strict";
n.d(t, { A: () => _, B: () => c });
var r = n(362474),
    i = n(73153),
    s = n(846293),
    a = n(439372),
    o = n(961350),
    l = n(723702),
    u = n(652215);
let c = "guestInviteToAccept";
class d extends a.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    handleConnectionOpen = async () => {
        if ((0, l.isWeb)()) {
            let e = r.u.get(c);
            if (null != e && "string" == typeof e && o.default.isAuthenticated()) {
                let { invite: t } = await s.Ay.resolveInvite(e, "Desktop Modal");
                null != t &&
                    (i.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: u.BRT.APP }),
                    r.u.remove(c));
            }
        }
    };
}
let _ = new d();
