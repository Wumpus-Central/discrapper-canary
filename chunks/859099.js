n.d(t, { Z: () => p }), n(47120);
var r = n(780384),
    i = n(147913),
    o = n(844070),
    a = n(922611),
    s = n(981631),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
    let { relationship: t } = e,
        n = (0, a.JX)({ location: 'RelationshipManager.handleRelationshipAdd' }) && t.userIgnored;
    t.type !== s.OGo.PENDING_INCOMING || n || (r.uv.announce(l.NW.formatToPlainString(l.t.zH0kCw, { username: t.user.username })), o.T(t.user));
}
function d(e) {
    let { user: t } = e;
    r.uv.announce(l.NW.formatToPlainString(l.t['/+7xk5'], { username: t.username })), o.z(t);
}
class f extends i.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                RELATIONSHIP_ADD: u,
                FRIEND_REQUEST_ACCEPTED: d
            });
    }
}
let p = new f();
