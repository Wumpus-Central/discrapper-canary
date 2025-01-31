n.d(t, { Z: () => f }), n(789020), n(47120);
var i = n(533800),
    r = n(147913),
    a = n(82085),
    s = n(630388),
    o = n(461014),
    l = n(981631);
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
function c(e) {
    var t, n;
    let { guild: r } = e.invite,
        u = null !== (n = e.invite.flags) && void 0 !== n ? n : 0;
    if (null != r && (null == r ? void 0 : null === (t = r.features) || void 0 === t ? void 0 : t.includes(l.oNc.HUB))) {
        a.Z.onOpenHubInvite(e.invite);
        return;
    }
    !((0, s.yE)(u, i.$.IS_GUEST_INVITE) || (0, s.yE)(u, i.$.IS_APPLICATION_BYPASS)) && null != r && (0, o.u)(r) && (0, o._)(r.id);
}
class d extends r.Z {
    constructor(...e) {
        super(...e), u(this, 'actions', { INVITE_ACCEPT_SUCCESS: c });
    }
}
let f = new d();
