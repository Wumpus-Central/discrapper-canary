n.d(t, { Z: () => f }), n(997841), n(388685);
var r = n(533800),
    i = n(95015),
    a = n(147913),
    o = n(82085),
    s = n(461014),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    var t, n;
    let { guild: a } = e.invite,
        c = null != (n = e.invite.flags) ? n : 0;
    if (null != a && (null == a || null == (t = a.features) ? void 0 : t.includes(l.GuildFeatures.HUB)))
        return void o.Z.onOpenHubInvite(e.invite);
    e.invite.new_member &&
        !((0, i.yE)(c, r.$.IS_GUEST_INVITE) || (0, i.yE)(c, r.$.IS_APPLICATION_BYPASS)) &&
        null != a &&
        (0, s.u)(a) &&
        (0, s._)(a.id);
}
class d extends a.Z {
    constructor(...e) {
        super(...e), c(this, "actions", { INVITE_ACCEPT_SUCCESS: u });
    }
}
let f = new d();
