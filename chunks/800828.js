"use strict";
n.d(t, { A: () => b }), n(321073);
var r = n(311907),
    i = n(713402),
    a = n(73153),
    s = n(994500),
    o = n(652215);
function l(e) {
    return { id: e.id, applicationId: e.application_id, type: e.type, since: e.since, dmAccessType: e.dm_access_type };
}
let u = (e, t) => `${t}-${e}`,
    c = (e) => `application-id-${e}`,
    d = (e) => `user-id-${e}`,
    _ = (e) => `relationship-type-${e}`;
function f(e) {
    let t = [];
    return t.push(c(e.applicationId)), t.push(d(e.id)), t.push(_(e.type)), t;
}
let p = new i.J(f, (e) => `${e.since}`),
    h = 0,
    m = 0,
    g = 0;
function E() {
    let e = 0,
        t = 0,
        n = 0;
    p.values().forEach((r) => {
        let { type: i, id: a } = r;
        if (i === o.eA$.FRIEND) n += 1;
        else if (i === o.eA$.PENDING_OUTGOING) t += 1;
        else if (i === o.eA$.PENDING_INCOMING) {
            if (s.A.isSpam(a) || s.A.isIgnored(a)) return;
            e += 1;
        }
    }),
        (h = e),
        (m = t),
        (g = n);
}
function A(e) {
    p.set(u(e.id, e.applicationId), e);
}
function I(e, t) {
    p.delete(u(e, t));
}
function T(e) {
    let { unknownApplicationIds: t } = e;
    if (null != t) {
        for (let e of t)
            for (let t of p.values(c(e)))
                (t.type === o.eA$.PENDING_INCOMING || t.type === o.eA$.PENDING_OUTGOING) && I(t.id, e);
        E();
    }
}
function y(e) {
    p.clear(),
        e.gameRelationships.forEach((e) => {
            A(l(e));
        }),
        E();
}
function S(e) {
    A(e.gameRelationship), E();
}
function v(e) {
    I(e.userId, e.applicationId), E();
}
class C extends r.Ay.Store {
    static displayName = "GameRelationshipStore";
    initialize() {
        this.waitFor(s.A);
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
        return p.values(c(e), !0).filter((e) => e.type === o.eA$.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return p.values(d(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, o.eA$.FRIEND);
    }
    getGameRelationshipCount() {
        return p.size();
    }
    getGameRelationships() {
        return p;
    }
    getGameRelationshipsByType(e) {
        return p.values(_(e), !0);
    }
    getGameRelationshipsVersion() {
        return p.version;
    }
}
let b = new C(a.h, {
    CONNECTION_OPEN: y,
    GAME_RELATIONSHIP_ADD: S,
    GAME_RELATIONSHIP_REMOVE: v,
    APPLICATIONS_FETCH_SUCCESS: T,
});
