"use strict";
n.d(t, { A: () => _, B: () => c });
var i = n(362474),
    r = n(228366),
    s = n(376728),
    a = n(439372),
    o = n(495544),
    l = n(723702),
    u = n(652215);
let c = "guestInviteToAccept";
class d extends a.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    handleConnectionOpen = async () => {
        if ((0, l.isWeb)()) {
            let e = i.u.get(c);
            if (null != e && "string" == typeof e && o.default.isAuthenticated()) {
                let { invite: t } = await s.Ay.resolveInvite(e, "Desktop Modal");
                null != t &&
                    (r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: u.BRT.APP }),
                    i.u.remove(c));
            }
        }
    };
}
let _ = new d();
