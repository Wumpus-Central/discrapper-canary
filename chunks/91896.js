n.d(t, { Z: () => N }), n(539854), n(388685);
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
                  writable: !0,
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
        dmAccessType: e.dm_access_type,
    };
}
let d = (e, t) => "".concat(t, "-").concat(e),
    f = (e) => "application-id-".concat(e),
    p = (e) => "user-id-".concat(e),
    _ = (e) => "relationship-type-".concat(e);
function m(e) {
    let t = [];
    return t.push(f(e.applicationId)), t.push(p(e.id)), t.push(_(e.type)), t;
}
let h = new a.h(m, (e) => "".concat(e.since)),
    g = 0,
    E = 0,
    b = 0;
function y() {
    let e = 0,
        t = 0,
        n = 0;
    h.values().forEach((r) => {
        let { type: i, id: a } = r;
        if (i === l.OGo.FRIEND) n += 1;
        else if (i === l.OGo.PENDING_OUTGOING) t += 1;
        else if (i === l.OGo.PENDING_INCOMING) {
            if (s.Z.isSpam(a) || s.Z.isIgnored(a)) return;
            e += 1;
        }
    }),
        (g = e),
        (E = t),
        (b = n);
}
function O(e) {
    h.set(d(e.id, e.applicationId), e);
}
function v(e, t) {
    h.delete(d(e, t));
}
function S(e) {
    let { unknownApplicationIds: t } = e;
    if (null != t) {
        for (let e of t)
            for (let t of h.values(f(e)))
                (t.type === l.OGo.PENDING_INCOMING || t.type === l.OGo.PENDING_OUTGOING) && v(t.id, e);
        y();
    }
}
function I(e) {
    h.clear(),
        e.gameRelationships.forEach((e) => {
            O(u(e));
        }),
        y();
}
function T(e) {
    O(e.gameRelationship), y();
}
function C(e) {
    v(e.userId, e.applicationId), y();
}
class A extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getPendingIncomingCount() {
        return g;
    }
    getPendingOutgoingCount() {
        return E;
    }
    getGameFriendCount() {
        return b;
    }
    getGameFriendsForApplication(e) {
        return h.values(f(e), !0).filter((e) => e.type === l.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return h.values(p(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, l.OGo.FRIEND);
    }
    getGameRelationshipCount() {
        return h.size();
    }
    getGameRelationships() {
        return h;
    }
    getGameRelationshipsByType(e) {
        return h.values(_(e), !0);
    }
    getGameRelationshipsVersion() {
        return h.version;
    }
}
c(A, "displayName", "GameRelationshipStore");
let N = new A(o.Z, {
    CONNECTION_OPEN: I,
    GAME_RELATIONSHIP_ADD: T,
    GAME_RELATIONSHIP_REMOVE: C,
    APPLICATIONS_FETCH_SUCCESS: S,
});
