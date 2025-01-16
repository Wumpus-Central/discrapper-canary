n(653041), n(47120);
var i,
    r,
    s,
    a,
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(759174),
    u = n(570140),
    m = n(981631);
let g = (e, t) => ''.concat(t, '-').concat(e),
    h = (e) => 'app-id-'.concat(e),
    p = (e) => 'user-id-'.concat(e),
    x = new d.h(
        function (e) {
            let t = [];
            return t.push(h(e.applicationId)), t.push(p(e.id)), t;
        },
        (e) => ''.concat(e.since)
    ),
    f = 0,
    _ = 0,
    E = 0;
function C() {
    let { [m.OGo.PENDING_INCOMING]: e = 0, [m.OGo.PENDING_OUTGOING]: t = 0, [m.OGo.FRIEND]: n = 0 } = o().countBy(x.values(void 0, !0), (e) => e.type);
    (f = e), (_ = t), (E = n);
}
function T(e) {
    x.set(g(e.id, e.applicationId), e);
}
class S extends (i = c.ZP.Store) {
    isGameFriend(e, t) {
        var n;
        return null != e && null != t && (null === (n = x.get(g(e, t))) || void 0 === n ? void 0 : n.type) === m.OGo.FRIEND;
    }
    getPendingIncomingCount() {
        return f;
    }
    getPendingOutgoingCount() {
        return _;
    }
    getGameFriendCount(e) {
        return null == e ? E : this.getGameFriendsForApplication(e).length;
    }
    getGameFriendsForApplication(e) {
        return null == e ? [] : x.values(h(e), !0).filter((e) => e.type === m.OGo.FRIEND);
    }
    getGameFriendsForUser(e) {
        return null == e ? [] : x.values(p(e), !0).filter((e) => e.type === m.OGo.FRIEND);
    }
    getGameRelationshipCount(e) {
        return null == e ? x.size() : x.size(h(e));
    }
    getGameRelationships() {
        return x;
    }
    getGameRelationship(e, t) {
        if (null != e && null != t) return x.get(g(e, t));
    }
    getGameRelationshipsVersion() {
        return x.version;
    }
}
(a = 'GameRelationshipStore'),
    (s = 'displayName') in (r = S)
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a),
    (t.Z = new S(u.Z, {
        CONNECTION_OPEN: function (e) {
            x.clear(),
                e.gameRelationships.forEach((e) => {
                    var t;
                    T({
                        id: (t = e).id,
                        applicationId: t.application_id,
                        type: t.type,
                        since: t.since,
                        dmAccessType: t.dm_access_type
                    });
                }),
                C();
        },
        GAME_RELATIONSHIP_ADD: function (e) {
            T(e.gameRelationship), C();
        },
        GAME_RELATIONSHIP_REMOVE: function (e) {
            var t, n;
            (t = e.userId), (n = e.applicationId), x.delete(g(t, n)), C();
        }
    }));
