var i,
    a = r(653041);
var o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(759174),
    d = r(570140),
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
    return {
        id: e.id,
        applicationId: e.application_id,
        type: e.type,
        since: e.since,
        dmAccessType: e.dm_access_type
    };
}
let _ = (e, n) => ''.concat(n, '-').concat(e),
    m = (e) => 'app-id-'.concat(e),
    g = (e) => 'user-id-'.concat(e);
function E(e) {
    let n = [];
    return n.push(m(e.applicationId)), n.push(g(e.id)), n;
}
let v = new c.h(E, (e) => ''.concat(e.since)),
    y = 0,
    b = 0,
    I = 0;
function T() {
    let { [f.OGo.PENDING_INCOMING]: e = 0, [f.OGo.PENDING_OUTGOING]: n = 0, [f.OGo.FRIEND]: r = 0 } = l().countBy(v.values(void 0, !0), (e) => e.type);
    (y = e), (b = n), (I = r);
}
function S(e) {
    v.set(_(e.id, e.applicationId), e);
}
function A(e, n) {
    v.delete(_(e, n));
}
function C(e) {
    v.clear(),
        e.gameRelationships.forEach((e) => {
            S(h(e));
        }),
        T();
}
function N(e) {
    S(e.gameRelationship), T();
}
function R(e) {
    A(e.userId, e.applicationId), T();
}
class O extends (i = u.ZP.Store) {
    isGameFriend(e, n) {
        var r;
        return null != e && null != n && (null === (r = v.get(_(e, n))) || void 0 === r ? void 0 : r.type) === f.OGo.FRIEND;
    }
    getPendingIncomingCount() {
        return y;
    }
    getPendingOutgoingCount() {
        return b;
    }
    getGameFriendCount(e) {
        return null == e ? I : this.getGameFriendsForApplication(e).length;
    }
    getGameFriendsForApplication(e) {
        return null == e ? [] : v.values(m(e), !0).filter((e) => e.type === f.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.OGo.FRIEND;
        return null == e ? [] : v.values(g(e), !0).filter((e) => e.type === n);
    }
    getGameFriendsForUser(e) {
        return null == e ? [] : v.values(g(e), !0).filter((e) => e.type === f.OGo.FRIEND);
    }
    getGameRelationshipCount(e) {
        return null == e ? v.size() : v.size(m(e));
    }
    getGameRelationships() {
        return v;
    }
    getGameRelationship(e, n) {
        if (null != e && null != n) return v.get(_(e, n));
    }
    getGameRelationshipsVersion() {
        return v.version;
    }
}
p(O, 'displayName', 'GameRelationshipStore'),
    (n.Z = new O(d.Z, {
        CONNECTION_OPEN: C,
        GAME_RELATIONSHIP_ADD: N,
        GAME_RELATIONSHIP_REMOVE: R
    }));
