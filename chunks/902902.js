(n.d(t, { A: () => R }), n(321073));
var i = n(17928),
    r = n(73153),
    a = n(945810),
    s = n(800828),
    l = n(994500),
    o = n(925166),
    d = n(652215);
let c = [d.eA$.PENDING_INCOMING, d.eA$.PENDING_OUTGOING],
    u = new Map(),
    _ = new Map(),
    E = [],
    A = [],
    h = !1;
function I(e, t) {
    return (t.since ?? "").localeCompare(e.since ?? "");
}
function f(e, t) {
    return e === d.eA$.PENDING_OUTGOING || (e === d.eA$.PENDING_INCOMING && !l.A.isSpam(t) && !l.A.isIgnored(t));
}
function p(e, t) {
    t === d.eA$.PENDING_INCOMING ? (e.incoming = !0) : (e.outgoing = !0);
}
function T() {
    return o.A.getConfig({ location: "FriendRequestsStore" }).sidebarEnabled;
}
function g(e) {
    if (!h) return !1;
    let t = { incoming: !1, outgoing: !1 };
    for (let n of e)
        !(function (e, t) {
            let n = (function (e) {
                    let t = [],
                        n = l.A.getRelationshipType(e);
                    for (let { applicationId: i, type: r, since: a } of (f(n, e) &&
                        t.push({
                            key: e,
                            userId: e,
                            type: n,
                            since: l.A.getSince(e),
                            applicationId: l.A.getOriginApplicationId(e),
                            isGameRelationship: !1,
                        }),
                    s.A.getGameRelationshipsForUser(e)))
                        f(r, e) &&
                            t.push({
                                key: `${e}-${i}`,
                                userId: e,
                                type: r,
                                since: a,
                                applicationId: i,
                                isGameRelationship: !0,
                            });
                    return t;
                })(e),
                i = n.map((e) => e.key);
            for (let n of _.get(e) ?? []) {
                if (i.includes(n)) continue;
                let e = u.get(n);
                null != e && (u.delete(n), p(t, e.type));
            }
            for (let e of n) {
                let n = u.get(e.key);
                (null == n || n.type !== e.type || n.since !== e.since || n.applicationId !== e.applicationId) &&
                    (u.set(e.key, e), p(t, e.type), null != n && p(t, n.type));
            }
            i.length > 0 ? _.set(e, i) : _.delete(e);
        })(n, t);
    return (function (e) {
        let { incoming: t, outgoing: n } = e;
        if (!t && !n) return !1;
        let i = [],
            r = [];
        for (let e of u.values()) e.type === d.eA$.PENDING_INCOMING ? t && i.push(e) : n && r.push(e);
        return (t && (E = i.sort(I)), n && (A = r.sort(I)), !0);
    })(t);
}
function m() {
    let e = u.size > 0;
    return (u.clear(), _.clear(), (E = []), (A = []), e);
}
function S() {
    let e = m();
    if (!(h = T())) return e;
    let t = new Set();
    for (let e of (l.A.getMutableRelationships().forEach((e, n) => {
        (e === d.eA$.PENDING_INCOMING || e === d.eA$.PENDING_OUTGOING) && t.add(n);
    }),
    c))
        for (let { id: n } of s.A.getGameRelationshipsByType(e)) t.add(n);
    return g(t) || e;
}
function N() {
    return T() !== h && S();
}
function C(e) {
    let { relationship: t } = e;
    return g([t.id]);
}
class O extends i.Ay.Store {
    static displayName = "FriendRequestsStore";
    initialize() {
        (this.waitFor(l.A, s.A, a.Bt), this.syncWith([a.Bt], N));
    }
    getIncomingRequests() {
        return E;
    }
    getOutgoingRequests() {
        return A;
    }
}
let R = new O(r.h, {
    CONNECTION_OPEN: S,
    RELATIONSHIP_ADD: C,
    RELATIONSHIP_UPDATE: C,
    RELATIONSHIP_REMOVE: C,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: S,
    GAME_RELATIONSHIP_ADD: function (e) {
        let { gameRelationship: t } = e;
        return g([t.id]);
    },
    GAME_RELATIONSHIP_REMOVE: function (e) {
        let { userId: t } = e;
        return g([t]);
    },
    APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { unknownApplicationIds: t } = e;
        if (null == t || 0 === t.length) return !1;
        let n = new Set(t),
            i = new Set();
        return (
            u.forEach((e) => {
                let { userId: t, applicationId: r, isGameRelationship: a } = e;
                !a || (null != r && n.has(r) && i.add(t));
            }),
            g(i)
        );
    },
    LOGOUT: m,
});
