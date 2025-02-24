n.d(t, { Z: () => f }), n(47120);
var r = n(780384),
    i = n(147913),
    o = n(844070),
    a = n(981631),
    s = n(388032);
function l(e, t, n) {
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
    let { relationship: t } = e,
        n = t.userIgnored;
    t.type !== a.OGo.PENDING_INCOMING || n || (r.uv.announce(s.NW.formatToPlainString(s.t.zH0kCw, { username: t.user.username })), o.T(t.user));
}
function u(e) {
    let { user: t } = e;
    r.uv.announce(s.NW.formatToPlainString(s.t['/+7xk5'], { username: t.username })), o.z(t);
}
class d extends i.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                RELATIONSHIP_ADD: c,
                FRIEND_REQUEST_ACCEPTED: u
            });
    }
}
let f = new d();
