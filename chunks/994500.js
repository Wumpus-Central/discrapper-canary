"use strict";
n.d(t, { A: () => O });
var r = n(311907),
    i = n(73153),
    s = n(383233),
    a = n(287809),
    o = n(652215);
let l = new Map(),
    u = {},
    c = {},
    d = new Set(),
    _ = new Set(),
    f = new Set(),
    p = {},
    h = 0,
    E = {},
    m = 0,
    g = 0,
    A = 0,
    I = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 };
function T() {
    (I.friends = void 0), (I.blocked = void 0), (I.ignored = void 0), (I.blockedOrIgnored = void 0);
}
let S = new Map();
function y(e, t) {
    let n = l.get(e);
    if (n === t) return;
    null != n && S.get(n)?.delete(e), l.set(e, t);
    let r = S.get(t);
    null != r ? r.add(e) : S.set(t, new Set([e])), T();
}
function N(e) {
    let t = l.get(e);
    null != t && (l.delete(e), S.get(t)?.delete(e), T());
}
function v() {
    (g = d.size), (A = f.size), (m = Math.max((S.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - g - A, 0)), h++;
}
class C extends r.Ay.Store {
    static displayName = "RelationshipStore";
    initialize() {
        this.waitFor(a.default);
    }
    isFriend(e) {
        return null != e && l.get(e) === o.eA$.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && l.get(e) === o.eA$.BLOCKED;
    }
    isBlockedForMessage(e) {
        if (null != e.author && l.get(e.author.id) === o.eA$.BLOCKED) return !0;
        if (e instanceof s.Ay) {
            if (this.isBlocked(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isBlocked(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && l.get(e) !== o.eA$.BLOCKED && _.has(e);
    }
    isIgnoredForMessage(e) {
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof s.Ay) {
            if (this.isIgnored(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isIgnored(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return l.get(e) === o.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return m;
    }
    getSpamCount() {
        return g;
    }
    getPendingIgnoredCount() {
        return A;
    }
    getOutgoingCount() {
        return S.get(o.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return S.get(o.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return l.size;
    }
    getMutableRelationships() {
        return l;
    }
    getVersion() {
        return h;
    }
    isSpam(e) {
        return d.has(e);
    }
    getRelationshipType(e) {
        let t = l.get(e);
        return null != t ? t : o.eA$.NONE;
    }
    getNickname(e) {
        return u[e];
    }
    getSince(e) {
        return c[e];
    }
    getSinces() {
        return c;
    }
    getFriendIDs() {
        return null == I.friends && (I.friends = Array.from(S.get(o.eA$.FRIEND) ?? [])), I.friends;
    }
    getBlockedIDs() {
        return null == I.blocked && (I.blocked = Array.from(S.get(o.eA$.BLOCKED) ?? [])), I.blocked;
    }
    getIgnoredIDs() {
        return null == I.ignored && (I.ignored = Array.from(_.values()).filter((e) => this.isIgnored(e))), I.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == I.blockedOrIgnored) {
            let e = new Set(_),
                t = S.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            I.blockedOrIgnored = Array.from(e.values());
        }
        return I.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return p[e];
    }
    isStranger(e) {
        if (null != E[e]) return E[e].expiry < Date.now() ? void delete E[e] : E[e].isStranger;
    }
}
let O = new C(i.h, {
    CONNECTION_OPEN: function (e) {
        l.clear(),
            S.clear(),
            (u = {}),
            (c = {}),
            _.clear(),
            d.clear(),
            f.clear(),
            T(),
            (p = {}),
            (E = {}),
            e.relationships.forEach((e) => {
                y(e.id, e.type),
                    null != e.nickname && (u[e.id] = e.nickname),
                    null != e.since && (c[e.id] = e.since),
                    e.is_spam_request && d.add(e.id),
                    null != e.origin_application_id && (p[e.id] = e.origin_application_id),
                    e.user_ignored && (_.add(e.id), e.type === o.eA$.PENDING_INCOMING && f.add(e.id));
            }),
            v();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (l.clear(), S.clear(), e.relationships)) y(t, n);
        v();
    },
    RELATIONSHIP_ADD: function (e) {
        let t = l.get(e.relationship.id);
        y(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (u = { ...u, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (c = { ...c, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.originApplicationId &&
                (p = { ...p, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? d.add(e.relationship.id) : d.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (_.add(e.relationship.id),
                  e.relationship.type === o.eA$.PENDING_INCOMING
                      ? f.add(e.relationship.id)
                      : e.relationship.type === o.eA$.FRIEND && f.delete(e.relationship.id))
                : (_.delete(e.relationship.id), f.delete(e.relationship.id)),
            v(),
            e.relationship.type === o.eA$.FRIEND &&
                t === o.eA$.PENDING_OUTGOING &&
                i.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
    },
    RELATIONSHIP_REMOVE: function (e) {
        N(e.relationship.id),
            null != u[e.relationship.id] && ((u = { ...u }), delete u[e.relationship.id]),
            null != c[e.relationship.id] && ((c = { ...c }), delete c[e.relationship.id]),
            null != p[e.relationship.id] && ((p = { ...p }), delete p[e.relationship.id]),
            e.relationship.userIgnored || _.delete(e.relationship.id),
            f.delete(e.relationship.id),
            d.delete(e.relationship.id),
            v();
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        y(t.id, t.type),
            null == t.since ? delete c[t.id] : (c[t.id] = t.since),
            null == t.nickname ? delete u[t.id] : (u[t.id] = t.nickname),
            t.isSpamRequest ? d.add(t.id) : d.delete(t.id),
            null != E[t.id] && delete E[t.id],
            null == t.originApplicationId ? delete p[t.id] : (p[t.id] = t.originApplicationId),
            t.userIgnored
                ? (_.add(t.id), t.type === o.eA$.PENDING_INCOMING && f.add(t.id))
                : (_.delete(t.id), f.delete(t.id)),
            v();
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of l.keys()) l.get(e) === o.eA$.PENDING_INCOMING && (N(e), d.delete(e), f.delete(e), delete E[e]);
        v();
    },
    UPDATE_STRANGER_STATUS: function (e) {
        E[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
