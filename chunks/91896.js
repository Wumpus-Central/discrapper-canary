n(653041), n(47120);
var i,
    r,
    l,
    a,
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(759174),
    u = n(570140),
    h = n(981631);
let m = (e, t) => ''.concat(t, '-').concat(e),
    p = (e) => 'app-id-'.concat(e),
    g = (e) => 'user-id-'.concat(e),
    f = new d.h(
        function (e) {
            let t = [];
            return t.push(p(e.applicationId)), t.push(g(e.id)), t;
        },
        (e) => ''.concat(e.since)
    ),
    _ = 0,
    E = 0,
    I = 0;
function C() {
    let { [h.OGo.PENDING_INCOMING]: e = 0, [h.OGo.PENDING_OUTGOING]: t = 0, [h.OGo.FRIEND]: n = 0 } = o().countBy(f.values(void 0, !0), (e) => e.type);
    (_ = e), (E = t), (I = n);
}
function N(e) {
    f.set(m(e.id, e.applicationId), e);
}
class v extends (i = c.ZP.Store) {
    isGameFriend(e, t) {
        var n;
        return null != e && null != t && (null === (n = f.get(m(e, t))) || void 0 === n ? void 0 : n.type) === h.OGo.FRIEND;
    }
    getPendingIncomingCount() {
        return _;
    }
    getPendingOutgoingCount() {
        return E;
    }
    getGameFriendCount(e) {
        return null == e ? I : this.getGameFriendsForApplication(e).length;
    }
    getGameFriendsForApplication(e) {
        return null == e ? [] : f.values(p(e), !0).filter((e) => e.type === h.OGo.FRIEND);
    }
    getGameFriendsForUser(e) {
        return null == e ? [] : f.values(g(e), !0).filter((e) => e.type === h.OGo.FRIEND);
    }
    getGameRelationshipCount(e) {
        return null == e ? f.size() : f.size(p(e));
    }
    getGameRelationships() {
        return f;
    }
    getGameRelationship(e, t) {
        if (null != e && null != t) return f.get(m(e, t));
    }
    getGameRelationshipsVersion() {
        return f.version;
    }
}
(a = 'GameRelationshipStore'),
    (l = 'displayName') in (r = v)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    new v(u.Z, {
        CONNECTION_OPEN: function (e) {
            f.clear(),
                e.gameRelationships.forEach((e) => {
                    var t;
                    N({
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
            N(e.gameRelationship), C();
        },
        GAME_RELATIONSHIP_REMOVE: function (e) {
            var t, n;
            (t = e.userId), (n = e.applicationId), f.delete(m(t, n)), C();
        }
    });
