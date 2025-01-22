var i = r(789020);
var a = r(47120);
var o = r(533800),
    s = r(147913),
    l = r(305325),
    u = r(82085),
    c = r(630388),
    d = r(461014),
    f = r(981631);
function p(e, n, r) {
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
function h(e) {
    var n, r;
    let { guild: i } = e.invite,
        a = null !== (r = e.invite.flags) && void 0 !== r ? r : 0;
    if (null != i && (null == i ? void 0 : null === (n = i.features) || void 0 === n ? void 0 : n.includes(f.oNc.HUB))) {
        u.Z.onOpenHubInvite(e.invite);
        return;
    }
    !((0, c.yE)(a, o.$.IS_GUEST_INVITE) || (0, c.yE)(a, o.$.IS_APPLICATION_BYPASS)) && null != i && (0, d.u)(i) && (0, l.hk)(i.id);
}
class _ extends s.Z {
    constructor(...e) {
        super(...e), p(this, 'actions', { INVITE_ACCEPT_SUCCESS: h });
    }
}
n.Z = new _();
