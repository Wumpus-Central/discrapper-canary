n.d(t, { A: () => m }), n(321073);
var i = n(17928),
    r = n(713402),
    a = n(228366),
    s = n(994500),
    l = n(652215);
let o = (e, t) => `${t}-${e}`,
    d = (e) => `application-id-${e}`,
    c = (e) => `user-id-${e}`,
    u = (e) => `relationship-type-${e}`,
    _ = new r.J(
        function (e) {
            let t = [];
            return t.push(d(e.applicationId)), t.push(c(e.id)), t.push(u(e.type)), t;
        },
        (e) => `${e.since}`,
    ),
    E = 0,
    A = 0,
    h = 0;
function I() {
    let e = 0,
        t = 0,
        n = 0;
    _.values().forEach((i) => {
        let { type: r, id: a } = i;
        if (r === l.eA$.FRIEND) n += 1;
        else if (r === l.eA$.PENDING_OUTGOING) t += 1;
        else if (r === l.eA$.PENDING_INCOMING) {
            if (s.A.isSpam(a) || s.A.isIgnored(a)) return;
            e += 1;
        }
    }),
        (E = e),
        (A = t),
        (h = n);
}
function f(e) {
    _.set(o(e.id, e.applicationId), e);
}
function p(e, t) {
    _.delete(o(e, t));
}
class T extends i.Ay.Store {
    static displayName = "GameRelationshipStore";
    initialize() {
        this.waitFor(s.A);
    }
    getPendingIncomingCount() {
        return E;
    }
    getPendingOutgoingCount() {
        return A;
    }
    getGameFriendCount() {
        return h;
    }
    getGameFriendsForApplication(e) {
        return _.values(d(e), !0).filter((e) => e.type === l.eA$.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return _.values(c(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, l.eA$.FRIEND);
    }
    getGameRelationshipCount() {
        return _.size();
    }
    getGameRelationships() {
        return _;
    }
    getGameRelationshipsByType(e) {
        return _.values(u(e), !0);
    }
    getGameRelationshipsVersion() {
        return _.version;
    }
}
let m = new T(a.h, {
    CONNECTION_OPEN: function (e) {
        _.clear(),
            e.gameRelationships.forEach((e) => {
                f({
                    id: e.id,
                    applicationId: e.application_id,
                    type: e.type,
                    since: e.since,
                    dmAccessType: e.dm_access_type,
                });
            }),
            I();
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        f(e.gameRelationship), I();
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        p(e.userId, e.applicationId), I();
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null != t) {
            for (let e of t)
                for (let t of _.values(d(e)))
                    (t.type === l.eA$.PENDING_INCOMING || t.type === l.eA$.PENDING_OUTGOING) && p(t.id, e);
            I();
        }
    },
});
