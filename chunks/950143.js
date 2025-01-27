var i = r(789020);
var a = r(47120);
var o = r(533800),
    s = r(147913),
    l = r(82085),
    u = r(630388),
    c = r(461014),
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
function p(e) {
    var n, r;
    let { guild: i } = e.invite,
        a = null !== (r = e.invite.flags) && void 0 !== r ? r : 0;
    if (null != i && (null == i ? void 0 : null === (n = i.features) || void 0 === n ? void 0 : n.includes(d.oNc.HUB))) {
        l.Z.onOpenHubInvite(e.invite);
        return;
    }
    !((0, u.yE)(a, o.$.IS_GUEST_INVITE) || (0, u.yE)(a, o.$.IS_APPLICATION_BYPASS)) && null != i && (0, c.u)(i) && (0, c._)(i.id);
}
class h extends s.Z {
    constructor(...e) {
        super(...e), f(this, 'actions', { INVITE_ACCEPT_SUCCESS: p });
    }
}
n.Z = new h();
