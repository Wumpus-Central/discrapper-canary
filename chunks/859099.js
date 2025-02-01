n.d(t, { Z: () => _ }), n(47120);
var i = n(780384),
    r = n(147913),
    a = n(844070),
    s = n(922611),
    o = n(981631),
    l = n(388032);
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
    let { relationship: t } = e,
        n = (0, s.JX)({ location: 'RelationshipManager.handleRelationshipAdd' }) && t.userIgnored;
    t.type !== o.OGo.PENDING_INCOMING || n || (i.uv.announce(l.intl.formatToPlainString(l.t.zH0kCw, { username: t.user.username })), a.T(t.user));
}
function d(e) {
    let { user: t } = e;
    i.uv.announce(l.intl.formatToPlainString(l.t['/+7xk5'], { username: t.username })), a.z(t);
}
class f extends r.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                RELATIONSHIP_ADD: c,
                FRIEND_REQUEST_ACCEPTED: d
            });
    }
}
let _ = new f();
