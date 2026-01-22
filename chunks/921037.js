n.d(t, {
    A: () => p,
    B: () => d,
}),
    n(896048);
var r = n(362474),
    i = n(73153),
    a = n(846293),
    s = n(439372),
    o = n(961350),
    l = n(723702),
    c = n(652215);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = "guestInviteToAccept";
class f extends s.A {
    constructor(...e) {
        super(...e),
            u(this, "actions", { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            u(this, "handleConnectionOpen", async () => {
                if ((0, l.isWeb)()) {
                    let e = r.u.get(d);
                    if (null != e && "string" == typeof e && o.default.isAuthenticated()) {
                        let { invite: t } = await a.Ay.resolveInvite(e, "Desktop Modal");
                        null != t &&
                            (i.h.dispatch({
                                type: "INVITE_MODAL_OPEN",
                                invite: t,
                                code: e,
                                context: c.BRT.APP,
                            }),
                            r.u.remove(d));
                    }
                }
            });
    }
}
let p = new f();
