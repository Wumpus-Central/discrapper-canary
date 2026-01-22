n.d(t, {
    A: () => N,
}),
    n(321073),
    n(896048);
var r,
    i = n(311907),
    a = n(713402),
    s = n(73153),
    o = n(994500),
    l = n(652215);

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

function h(e) {
    let t = [];
    return t.push(f(e.applicationId)), t.push(p(e.id)), t.push(_(e.type)), t;
}
let m = new a.J(h, (e) => "".concat(e.since)),
    g = 0,
    E = 0,
    b = 0;

function y() {
    let e = 0,
        t = 0,
        n = 0;
    m.values().forEach((r) => {
        let { type: i, id: a } = r;
        if (i === l.eA$.FRIEND) n += 1;
        else if (i === l.eA$.PENDING_OUTGOING) t += 1;
        else if (i === l.eA$.PENDING_INCOMING) {
            if (o.A.isSpam(a) || o.A.isIgnored(a)) return;
            e += 1;
        }
    }),
        (g = e),
        (E = t),
        (b = n);
}

function O(e) {
    m.set(d(e.id, e.applicationId), e);
}

function A(e, t) {
    m.delete(d(e, t));
}

function v(e) {
    let { unknownApplicationIds: t } = e;
    if (null != t) {
        for (let e of t)
            for (let t of m.values(f(e)))
                (t.type === l.eA$.PENDING_INCOMING || t.type === l.eA$.PENDING_OUTGOING) && A(t.id, e);
        y();
    }
}

function S(e) {
    m.clear(),
        e.gameRelationships.forEach((e) => {
            O(u(e));
        }),
        y();
}

function I(e) {
    O(e.gameRelationship), y();
}

function T(e) {
    A(e.userId, e.applicationId), y();
}
class C extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A);
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
        return m.values(f(e), !0).filter((e) => e.type === l.eA$.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return m.values(p(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, l.eA$.FRIEND);
    }
    getGameRelationshipCount() {
        return m.size();
    }
    getGameRelationships() {
        return m;
    }
    getGameRelationshipsByType(e) {
        return m.values(_(e), !0);
    }
    getGameRelationshipsVersion() {
        return m.version;
    }
}
c(C, "displayName", "GameRelationshipStore");
let N = new C(s.h, {
    CONNECTION_OPEN: S,
    GAME_RELATIONSHIP_ADD: I,
    GAME_RELATIONSHIP_REMOVE: T,
    APPLICATIONS_FETCH_SUCCESS: v,
});
