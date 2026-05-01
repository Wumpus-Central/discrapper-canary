"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(17928),
    r = n(713402),
    s = n(228366),
    a = n(994500),
    o = n(652215);
let l = (e, t) => `${t}-${e}`,
    u = (e) => `application-id-${e}`,
    c = (e) => `user-id-${e}`,
    d = (e) => `relationship-type-${e}`,
    _ = new r.J(
        function (e) {
            let t = [];
            return t.push(u(e.applicationId)), t.push(c(e.id)), t.push(d(e.type)), t;
        },
        (e) => `${e.since}`,
    ),
    f = 0,
    h = 0,
    p = 0;
function E() {
    let e = 0,
        t = 0,
        n = 0;
    _.values().forEach((i) => {
        let { type: r, id: s } = i;
        if (r === o.eA$.FRIEND) n += 1;
        else if (r === o.eA$.PENDING_OUTGOING) t += 1;
        else if (r === o.eA$.PENDING_INCOMING) {
            if (a.A.isSpam(s) || a.A.isIgnored(s)) return;
            e += 1;
        }
    }),
        (f = e),
        (h = t),
        (p = n);
}
function m(e) {
    _.set(l(e.id, e.applicationId), e);
}
function g(e, t) {
    _.delete(l(e, t));
}
class A extends i.Ay.Store {
    static displayName = "GameRelationshipStore";
    initialize() {
        this.waitFor(a.A);
    }
    getPendingIncomingCount() {
        return f;
    }
    getPendingOutgoingCount() {
        return h;
    }
    getGameFriendCount() {
        return p;
    }
    getGameFriendsForApplication(e) {
        return _.values(u(e), !0).filter((e) => e.type === o.eA$.FRIEND);
    }
    getGameRelationshipsForUser(e) {
        return _.values(c(e), !0);
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter((e) => e.type === t);
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, o.eA$.FRIEND);
    }
    getGameRelationshipCount() {
        return _.size();
    }
    getGameRelationships() {
        return _;
    }
    getGameRelationshipsByType(e) {
        return _.values(d(e), !0);
    }
    getGameRelationshipsVersion() {
        return _.version;
    }
}
let I = new A(s.h, {
    CONNECTION_OPEN: function (e) {
        _.clear(),
            e.gameRelationships.forEach((e) => {
                m({
                    id: e.id,
                    applicationId: e.application_id,
                    type: e.type,
                    since: e.since,
                    dmAccessType: e.dm_access_type,
                });
            }),
            E();
    },
    GAME_RELATIONSHIP_ADD: function (e) {
        m(e.gameRelationship), E();
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        g(e.userId, e.applicationId), E();
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null != t) {
            for (let e of t)
                for (let t of _.values(u(e)))
                    (t.type === o.eA$.PENDING_INCOMING || t.type === o.eA$.PENDING_OUTGOING) && g(t.id, e);
            E();
        }
    },
});
