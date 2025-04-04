n.d(t, {
    J: () => d,
    Z: () => _
}),
    n(47120);
var r = n(298444),
    i = n(570140),
    o = n(447543),
    a = n(147913),
    s = n(314897),
    l = n(358085),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 'guestInviteToAccept';
class f extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            u(this, 'handleConnectionOpen', async () => {
                if ((0, l.isWeb)()) {
                    let e = r.x.get(d);
                    if (null != e && 'string' == typeof e && s.default.isAuthenticated()) {
                        let { invite: t } = await o.ZP.resolveInvite(e, 'Desktop Modal');
                        null != t &&
                            (i.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: t,
                                code: e,
                                context: c.IlC.APP
                            }),
                            r.x.remove(d));
                    }
                }
            });
    }
}
let _ = new f();
