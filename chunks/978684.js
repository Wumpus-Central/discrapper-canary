r.d(n, {
    J: function () {
        return p;
    }
});
var i = r(47120);
var a = r(298444),
    o = r(570140),
    s = r(447543),
    l = r(147913),
    u = r(314897),
    c = r(358085),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 'guestInviteToAccept';
class h extends l.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            f(this, 'handleConnectionOpen', async () => {
                if ((0, c.isWeb)()) {
                    let e = a.x.get(p);
                    if (null != e && 'string' == typeof e && u.default.isAuthenticated()) {
                        let { invite: n } = await s.Z.resolveInvite(e, 'Desktop Modal');
                        null != n &&
                            (o.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: n,
                                code: e,
                                context: d.IlC.APP
                            }),
                            a.x.remove(p));
                    }
                }
            });
    }
}
n.Z = new h();
