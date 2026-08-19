"use strict";
n.d(t, { A: () => _, B: () => c });
var i = n(362474),
    r = n(228366),
    a = n(376728),
    s = n(439372),
    l = n(280450),
    o = n(723702),
    d = n(652215);
let c = "guestInviteToAccept";
class u extends s.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    handleConnectionOpen = async () => {
        if ((0, o.isWeb)()) {
            let e = i.u.get(c);
            if (null != e && "string" == typeof e && l.default.isAuthenticated()) {
                let { invite: t } = await a.Ay.resolveInvite(e, "Desktop Modal");
                null != t &&
                    (r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: d.BRT.APP }),
                    i.u.remove(c));
            }
        }
    };
}
let _ = new u();
