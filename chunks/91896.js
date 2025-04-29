n.d(t, { Z: () => A }), n(539854), n(388685);
var r,
    i = n(442837),
    o = n(759174),
    a = n(570140),
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
    f = {
        BY_APPLICATION_ID: (e) => 'application-id-'.concat(e),
        BY_USER_ID: (e) => 'user-id-'.concat(e),
        BY_RELATIONSHIP_TYPE: (e) => 'relationship-type-'.concat(e)
    };
function _(e) {
    let t = [];
    return t.push(f.BY_APPLICATION_ID(e.applicationId)), t.push(f.BY_USER_ID(e.id)), t.push(f.BY_RELATIONSHIP_TYPE(e.type)), t;
}
let p = new o.h(_, (e) => ''.concat(e.since)),
    h = 0,
    m = 0,
    g = 0;
function E() {
    let e = 0,
        t = 0,
        n = 0;
    p.values().forEach((r) => {
        let { type: i, id: o } = r;
        if (i === l.OGo.FRIEND) n += 1;
        else if (i === l.OGo.PENDING_OUTGOING) t += 1;
        else if (i === l.OGo.PENDING_INCOMING) {
            if (s.Z.isSpam(o) || s.Z.isIgnored(o)) return;
            e += 1;
        }
    }),
        (h = e),
        (m = t),
        (g = n);
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
        for (let e of t) for (let t of p.values(f.BY_APPLICATION_ID(e))) (t.type === l.OGo.PENDING_INCOMING || t.type === l.OGo.PENDING_OUTGOING) && y(t.id, e);
        E();
    }
}
function v(e) {
    p.clear(),
        e.gameRelationships.forEach((e) => {
            b(u(e));
        }),
        E();
}
function I(e) {
    b(e.gameRelationship), E();
}
function S(e) {
    y(e.userId, e.applicationId), E();
}
class T extends (r = i.ZP.Store) {
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
        return p.values(f.BY_APPLICATION_ID(e), !0).filter((e) => e.type === l.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return p.values(f.BY_USER_ID(e), !0);
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
        return p.values(f.BY_RELATIONSHIP_TYPE(e), !0);
    }
    getGameRelationshipsVersion() {
        return p.version;
    }
}
c(T, 'displayName', 'GameRelationshipStore');
let A = new T(a.Z, {
    CONNECTION_OPEN: v,
    GAME_RELATIONSHIP_ADD: I,
    GAME_RELATIONSHIP_REMOVE: S,
    APPLICATIONS_FETCH_SUCCESS: O
});
