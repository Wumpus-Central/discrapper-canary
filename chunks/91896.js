n.d(t, { Z: () => N }), n(653041), n(47120);
var i,
    r = n(442837),
    a = n(759174),
    s = n(570140),
    o = n(699516),
    l = n(981631);
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
    return {
        id: e.id,
        applicationId: e.application_id,
        type: e.type,
        since: e.since,
        dmAccessType: e.dm_access_type
    };
}
let d = (e, t) => ''.concat(t, '-').concat(e),
    f = (e) => 'app-id-'.concat(e),
    _ = (e) => 'user-id-'.concat(e);
function p(e) {
    let t = [];
    return t.push(f(e.applicationId)), t.push(_(e.id)), t;
}
let h = new a.h(p, (e) => ''.concat(e.since)),
    m = 0,
    g = 0,
    E = 0;
function v() {
    let e = 0,
        t = 0,
        n = 0;
    h.values().forEach((i) => {
        let { type: r, id: a } = i;
        if (r === l.OGo.FRIEND) n += 1;
        else if (r === l.OGo.PENDING_OUTGOING) t += 1;
        else if (r === l.OGo.PENDING_INCOMING) {
            if (o.Z.isSpam(a) || o.Z.isIgnored(a)) return;
            e += 1;
        }
    }),
        (m = e),
        (g = t),
        (E = n);
}
function y(e) {
    h.set(d(e.id, e.applicationId), e);
}
function I(e, t) {
    h.delete(d(e, t));
}
function T(e) {
    h.clear(),
        e.gameRelationships.forEach((e) => {
            y(c(e));
        }),
        v();
}
function S(e) {
    y(e.gameRelationship), v();
}
function b(e) {
    I(e.userId, e.applicationId), v();
}
class A extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getPendingIncomingCount() {
        return m;
    }
    getPendingOutgoingCount() {
        return g;
    }
    getGameFriendCount() {
        return E;
    }
    getGameFriendsForApplication(e) {
        return h.values(f(e), !0).filter((e) => e.type === l.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return h.values(_(e), !0);
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
    getGameRelationshipsVersion() {
        return h.version;
    }
}
u(A, 'displayName', 'GameRelationshipStore');
let N = new A(s.Z, {
    CONNECTION_OPEN: T,
    GAME_RELATIONSHIP_ADD: S,
    GAME_RELATIONSHIP_REMOVE: b
});
