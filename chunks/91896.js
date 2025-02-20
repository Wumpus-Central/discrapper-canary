n.d(t, { Z: () => N }), n(653041), n(47120);
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
    f = (e) => 'app-id-'.concat(e),
    p = (e) => 'user-id-'.concat(e);
function _(e) {
    let t = [];
    return t.push(f(e.applicationId)), t.push(p(e.id)), t;
}
let h = new o.h(_, (e) => ''.concat(e.since)),
    m = 0,
    g = 0,
    E = 0;
function v() {
    let e = 0,
        t = 0,
        n = 0;
    h.values().forEach((r) => {
        let { type: i, id: o } = r;
        if (i === l.OGo.FRIEND) n += 1;
        else if (i === l.OGo.PENDING_OUTGOING) t += 1;
        else if (i === l.OGo.PENDING_INCOMING) {
            if (s.Z.isSpam(o) || s.Z.isIgnored(o)) return;
            e += 1;
        }
    }),
        (m = e),
        (g = t),
        (E = n);
}
function b(e) {
    h.set(d(e.id, e.applicationId), e);
}
function y(e, t) {
    h.delete(d(e, t));
}
function O(e) {
    h.clear(),
        e.gameRelationships.forEach((e) => {
            b(u(e));
        }),
        v();
}
function S(e) {
    b(e.gameRelationship), v();
}
function I(e) {
    y(e.userId, e.applicationId), v();
}
class T extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
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
    getGameRelationshipsVersion() {
        return h.version;
    }
}
c(T, 'displayName', 'GameRelationshipStore');
let N = new T(a.Z, {
    CONNECTION_OPEN: O,
    GAME_RELATIONSHIP_ADD: S,
    GAME_RELATIONSHIP_REMOVE: I
});
