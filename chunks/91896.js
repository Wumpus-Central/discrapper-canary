n.d(t, { Z: () => C }), n(653041), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(759174),
    l = n(570140),
    u = n(981631);
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
function d(e) {
    return {
        id: e.id,
        applicationId: e.application_id,
        type: e.type,
        since: e.since,
        dmAccessType: e.dm_access_type
    };
}
let f = (e, t) => ''.concat(t, '-').concat(e),
    _ = (e) => 'app-id-'.concat(e),
    p = (e) => 'user-id-'.concat(e);
function h(e) {
    let t = [];
    return t.push(_(e.applicationId)), t.push(p(e.id)), t;
}
let m = new o.h(h, (e) => ''.concat(e.since)),
    g = 0,
    E = 0,
    v = 0;
function y() {
    let { [u.OGo.PENDING_INCOMING]: e = 0, [u.OGo.PENDING_OUTGOING]: t = 0, [u.OGo.FRIEND]: n = 0 } = a().countBy(m.values(void 0, !0), (e) => e.type);
    (g = e), (E = t), (v = n);
}
function I(e) {
    m.set(f(e.id, e.applicationId), e);
}
function b(e, t) {
    m.delete(f(e, t));
}
function T(e) {
    m.clear(),
        e.gameRelationships.forEach((e) => {
            I(d(e));
        }),
        y();
}
function S(e) {
    I(e.gameRelationship), y();
}
function A(e) {
    b(e.userId, e.applicationId), y();
}
class N extends (i = s.ZP.Store) {
    isGameFriend(e, t) {
        var n;
        return null != e && null != t && (null === (n = m.get(f(e, t))) || void 0 === n ? void 0 : n.type) === u.OGo.FRIEND;
    }
    getPendingIncomingCount() {
        return g;
    }
    getPendingOutgoingCount() {
        return E;
    }
    getGameFriendCount(e) {
        return null == e ? v : this.getGameFriendsForApplication(e).length;
    }
    getGameFriendsForApplication(e) {
        return null == e ? [] : m.values(_(e), !0).filter((e) => e.type === u.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return null == e ? [] : m.values(p(e), !0);
    }
    getGameRelationshipsForUserOfType(e, t) {
        return null == e ? [] : this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return null == e ? [] : m.values(p(e), !0).filter((e) => e.type === u.OGo.FRIEND);
    }
    getGameRelationshipCount(e) {
        return null == e ? m.size() : m.size(_(e));
    }
    getGameRelationships() {
        return m;
    }
    getGameRelationship(e, t) {
        if (null != e && null != t) return m.get(f(e, t));
    }
    getGameRelationshipsVersion() {
        return m.version;
    }
}
c(N, 'displayName', 'GameRelationshipStore');
let C = new N(l.Z, {
    CONNECTION_OPEN: T,
    GAME_RELATIONSHIP_ADD: S,
    GAME_RELATIONSHIP_REMOVE: A
});
