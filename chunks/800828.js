n.d(t, { A: () => S }), n(321073);
var i = n(17928),
    l = n(713402),
    a = n(228366),
    r = n(994500),
    s = n(652215);
let o = (e, t) => `${t}-${e}`,
    d = (e) => `application-id-${e}`,
    u = (e) => `user-id-${e}`,
    c = (e) => `relationship-type-${e}`,
    h = new l.J(
        function (e) {
            let t = [];
            return t.push(d(e.applicationId)), t.push(u(e.id)), t.push(c(e.type)), t;
        },
        (e) => `${e.since}`,
    ),
    E = 0,
    A = 0,
    _ = 0;
function p() {
    let e = 0,
        t = 0,
        n = 0;
    h.values().forEach((i) => {
        let { type: l, id: a } = i;
        if (l === s.eA$.FRIEND) n += 1;
        else if (l === s.eA$.PENDING_OUTGOING) t += 1;
        else if (l === s.eA$.PENDING_INCOMING) {
            if (r.A.isSpam(a) || r.A.isIgnored(a)) return;
            e += 1;
        }
    }),
        (E = e),
        (A = t),
        (_ = n);
}
function g(e) {
    h.set(o(e.id, e.applicationId), e);
}
function f(e, t) {
    h.delete(o(e, t));
}
class I extends i.Ay.Store {
    static displayName = "GameRelationshipStore";
    initialize() {
        this.waitFor(r.A);
    }
    getPendingIncomingCount() {
        return E;
    }
    getPendingOutgoingCount() {
        return A;
    }
    getGameFriendCount() {
        return _;
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
let S = new I(a.h, {
    CONNECTION_OPEN: function (e) {
        h.clear(),
            e.gameRelationships.forEach((e) => {
                g({
                    id: e.id,
                    applicationId: e.application_id,
                    type: e.type,
                    since: e.since,
                    dmAccessType: e.dm_access_type,
                });
            }),
            p();
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        g(e.gameRelationship), p();
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        f(e.userId, e.applicationId), p();
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null != t) {
            for (let e of t)
                for (let t of h.values(d(e)))
                    (t.type === s.eA$.PENDING_INCOMING || t.type === s.eA$.PENDING_OUTGOING) && f(t.id, e);
            p();
        }
    },
});
