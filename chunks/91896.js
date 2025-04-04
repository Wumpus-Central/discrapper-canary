n.d(t, { Z: () => A }), n(653041), n(47120);
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
    f = (e) => 'application-id-'.concat(e),
    _ = (e) => 'user-id-'.concat(e),
    p = (e) => 'relationship-type-'.concat(e);
function h(e) {
    let t = [];
    return t.push(f(e.applicationId)), t.push(_(e.id)), t.push(p(e.type)), t;
}
let m = new o.h(h, (e) => ''.concat(e.since)),
    g = 0,
    E = 0,
    b = 0;
function y() {
    let e = 0,
        t = 0,
        n = 0;
    m.values().forEach((r) => {
        let { type: i, id: o } = r;
        if (i === l.OGo.FRIEND) n += 1;
        else if (i === l.OGo.PENDING_OUTGOING) t += 1;
        else if (i === l.OGo.PENDING_INCOMING) {
            if (s.Z.isSpam(o) || s.Z.isIgnored(o)) return;
            e += 1;
        }
    }),
        (g = e),
        (E = t),
        (b = n);
}
function v(e) {
    m.set(d(e.id, e.applicationId), e);
}
function O(e, t) {
    m.delete(d(e, t));
}
function I(e) {
    m.clear(),
        e.gameRelationships.forEach((e) => {
            v(u(e));
        }),
        y();
}
function S(e) {
    v(e.gameRelationship), y();
}
function T(e) {
    O(e.userId, e.applicationId), y();
}
class N extends (r = i.ZP.Store) {
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
        return m.values(f(e), !0).filter((e) => e.type === l.OGo.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return m.values(_(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, l.OGo.FRIEND);
    }
    getGameRelationshipCount() {
        return m.size();
    }
    getGameRelationships() {
        return m;
    }
    getGameRelationshipsByType(e) {
        return m.values(p(e), !0);
    }
    getGameRelationshipsVersion() {
        return m.version;
    }
}
c(N, 'displayName', 'GameRelationshipStore');
let A = new N(a.Z, {
    CONNECTION_OPEN: I,
    GAME_RELATIONSHIP_ADD: S,
    GAME_RELATIONSHIP_REMOVE: T
});
