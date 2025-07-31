(n.d(t, { Z: () => A }), n(539854), n(388685));
var r,
    i = n(442837),
    a = n(759174),
    o = n(570140),
    s = n(699516),
    l = n(981631);
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
    return {
        id: e.id,
        applicationId: e.application_id,
        type: e.type,
        since: e.since,
        dmAccessType: e.dm_access_type
    };
}
let d = (e, t) => ''.concat(t, '-').concat(e),
    _ = {
        BY_APPLICATION_ID: (e) => 'application-id-'.concat(e),
        BY_USER_ID: (e) => 'user-id-'.concat(e),
        BY_RELATIONSHIP_TYPE: (e) => 'relationship-type-'.concat(e)
    };
function f(e) {
    let t = [];
    return (t.push(_.BY_APPLICATION_ID(e.applicationId)), t.push(_.BY_USER_ID(e.id)), t.push(_.BY_RELATIONSHIP_TYPE(e.type)), t);
}
let p = new a.h(f, (e) => ''.concat(e.since)),
    h = 0,
    m = 0,
    g = 0;
function E() {
    let e = 0,
        t = 0,
        n = 0;
    (p.values().forEach((r) => {
        let { type: i, id: a } = r;
        if (i === l.OGo.FRIEND) n += 1;
        else if (i === l.OGo.PENDING_OUTGOING) t += 1;
        else if (i === l.OGo.PENDING_INCOMING) {
            if (s.Z.isSpam(a) || s.Z.isIgnored(a)) return;
            e += 1;
        }
    }),
        (h = e),
        (m = t),
        (g = n));
}
function b(e) {
    p.set(d(e.id, e.applicationId), e);
}
function y(e, t) {
    p.delete(d(e, t));
}
function O(e) {
    let { unknownApplicationIds: t } = e;
    if (null != t) {
        for (let e of t) for (let t of p.values(_.BY_APPLICATION_ID(e))) (t.type === l.OGo.PENDING_INCOMING || t.type === l.OGo.PENDING_OUTGOING) && y(t.id, e);
        E();
    }
}
function v(e) {
    (p.clear(),
        e.gameRelationships.forEach((e) => {
            b(u(e));
        }),
        E());
}
function I(e) {
    (b(e.gameRelationship), E());
}
function T(e) {
    (y(e.userId, e.applicationId), E());
}
class S extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getPendingIncomingCount() {
        return h;
    }
    getPendingOutgoingCount() {
        return m;
    }
    getGameFriendCount() {
        return g;
    }
    getGameFriendsForApplication(e) {
        return p.values(_.BY_APPLICATION_ID(e), !0).filter((e) => e.type === l.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return p.values(_.BY_USER_ID(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, l.OGo.FRIEND);
    }
    getGameRelationshipCount() {
        return p.size();
    }
    getGameRelationships() {
        return p;
    }
    getGameRelationshipsByType(e) {
        return p.values(_.BY_RELATIONSHIP_TYPE(e), !0);
    }
    getGameRelationshipsVersion() {
        return p.version;
    }
}
c(S, 'displayName', 'GameRelationshipStore');
let A = new S(o.Z, {
    CONNECTION_OPEN: v,
    GAME_RELATIONSHIP_ADD: I,
    GAME_RELATIONSHIP_REMOVE: T,
    APPLICATIONS_FETCH_SUCCESS: O
});
