n.d(t, { A: () => T }), n(321073);
var i = n(17928),
    r = n(713402),
    l = n(228366),
    a = n(994500),
    s = n(652215);
let o = (e, t) => `${t}-${e}`,
    d = (e) => `application-id-${e}`,
    u = (e) => `user-id-${e}`,
    c = (e) => `relationship-type-${e}`,
    h = new r.J(
        function (e) {
            let t = [];
            return t.push(d(e.applicationId)), t.push(u(e.id)), t.push(c(e.type)), t;
        },
        (e) => `${e.since}`,
    ),
    E = 0,
    _ = 0,
    p = 0;
function A() {
    let e = 0,
        t = 0,
        n = 0;
    h.values().forEach((i) => {
        let { type: r, id: l } = i;
        if (r === s.eA$.FRIEND) n += 1;
        else if (r === s.eA$.PENDING_OUTGOING) t += 1;
        else if (r === s.eA$.PENDING_INCOMING) {
            if (a.A.isSpam(l) || a.A.isIgnored(l)) return;
            e += 1;
        }
    }),
        (E = e),
        (_ = t),
        (p = n);
}
function f(e) {
    h.set(o(e.id, e.applicationId), e);
}
function g(e, t) {
    h.delete(o(e, t));
}
class I extends i.Ay.Store {
    static displayName = "GameRelationshipStore";
    initialize() {
        this.waitFor(a.A);
    }
    getPendingIncomingCount() {
        return E;
    }
    getPendingOutgoingCount() {
        return _;
    }
    getGameFriendCount() {
        return p;
    }
    getGameFriendsForApplication(e) {
        return h.values(d(e), !0).filter((e) => e.type === s.eA$.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return h.values(u(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, s.eA$.FRIEND);
    }
    getGameRelationshipCount() {
        return h.size();
    }
    getGameRelationships() {
        return h;
    }
    getGameRelationshipsByType(e) {
        return h.values(c(e), !0);
    }
    getGameRelationshipsVersion() {
        return h.version;
    }
}
let T = new I(l.h, {
    CONNECTION_OPEN: function (e) {
        h.clear(),
            e.gameRelationships.forEach((e) => {
                f({
                    id: e.id,
                    applicationId: e.application_id,
                    type: e.type,
                    since: e.since,
                    dmAccessType: e.dm_access_type,
                });
            }),
            A();
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        f(e.gameRelationship), A();
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        g(e.userId, e.applicationId), A();
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null != t) {
            for (let e of t)
                for (let t of h.values(d(e)))
                    (t.type === s.eA$.PENDING_INCOMING || t.type === s.eA$.PENDING_OUTGOING) && g(t.id, e);
            A();
        }
    },
});
