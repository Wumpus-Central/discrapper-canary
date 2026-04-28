"use strict";
n.d(t, { A: () => D });
var i = n(17928),
    r = n(228366),
    s = n(383233),
    a = n(287809),
    o = n(652215);
let l = new Map(),
    _ = {},
    d = {},
    u = {},
    c = new Set(),
    E = new Set(),
    h = new Set(),
    m = {},
    f = 0,
    g = {},
    I = 0,
    A = 0,
    p = 0,
    T = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 };
function S() {
    (T.friends = void 0), (T.blocked = void 0), (T.ignored = void 0), (T.blockedOrIgnored = void 0);
}
let N = new Map();
function O(e, t) {
    let n = l.get(e);
    if (n === t) return;
    null != n && N.get(n)?.delete(e), l.set(e, t);
    let i = N.get(t);
    null != i ? i.add(e) : N.set(t, new Set([e])), S();
}
function R(e) {
    let t = l.get(e);
    null != t && (l.delete(e), N.get(t)?.delete(e), S());
}
function C() {
    (A = c.size), (p = h.size), (I = Math.max((N.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - A - p, 0)), f++;
}
class y extends i.Ay.Store {
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
        return null != e && l.get(e) !== o.eA$.BLOCKED && E.has(e);
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
        return I;
    }
    getSpamCount() {
        return A;
    }
    getPendingIgnoredCount() {
        return p;
    }
    getOutgoingCount() {
        return N.get(o.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return N.get(o.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return l.size;
    }
    getMutableRelationships() {
        return l;
    }
    getVersion() {
        return f;
    }
    isSpam(e) {
        return c.has(e);
    }
    getRelationshipType(e) {
        let t = l.get(e);
        return null != t ? t : o.eA$.NONE;
    }
    getNickname(e) {
        return _[e];
    }
    getSince(e) {
        return d[e];
    }
    getSinces() {
        return d;
    }
    getNote(e) {
        return u[e];
    }
    getFriendIDs() {
        return null == T.friends && (T.friends = Array.from(N.get(o.eA$.FRIEND) ?? [])), T.friends;
    }
    getBlockedIDs() {
        return null == T.blocked && (T.blocked = Array.from(N.get(o.eA$.BLOCKED) ?? [])), T.blocked;
    }
    getIgnoredIDs() {
        return null == T.ignored && (T.ignored = Array.from(E.values()).filter((e) => this.isIgnored(e))), T.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == T.blockedOrIgnored) {
            let e = new Set(E),
                t = N.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            T.blockedOrIgnored = Array.from(e.values());
        }
        return T.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return m[e];
    }
    isStranger(e) {
        if (null != g[e]) return g[e].expiry < Date.now() ? void delete g[e] : g[e].isStranger;
    }
}
let D = new y(r.h, {
    CONNECTION_OPEN: function (e) {
        l.clear(),
            N.clear(),
            (_ = {}),
            (d = {}),
            (u = {}),
            E.clear(),
            c.clear(),
            h.clear(),
            S(),
            (m = {}),
            (g = {}),
            e.relationships.forEach((e) => {
                O(e.id, e.type),
                    null != e.nickname && (_[e.id] = e.nickname),
                    null != e.since && (d[e.id] = e.since),
                    null != e.note && (u[e.id] = e.note),
                    e.is_spam_request && c.add(e.id),
                    null != e.origin_application_id && (m[e.id] = e.origin_application_id),
                    e.user_ignored && (E.add(e.id), e.type === o.eA$.PENDING_INCOMING && h.add(e.id));
            }),
            C();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (l.clear(), N.clear(), e.relationships)) O(t, n);
        C();
    },
    RELATIONSHIP_ADD: function (e) {
        let t = l.get(e.relationship.id);
        O(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (_ = { ..._, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (d = { ...d, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.note && (u = { ...u, [e.relationship.id]: e.relationship.note }),
            null != e.relationship.originApplicationId &&
                (m = { ...m, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? c.add(e.relationship.id) : c.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (E.add(e.relationship.id),
                  e.relationship.type === o.eA$.PENDING_INCOMING
                      ? h.add(e.relationship.id)
                      : e.relationship.type === o.eA$.FRIEND && h.delete(e.relationship.id))
                : (E.delete(e.relationship.id), h.delete(e.relationship.id)),
            C(),
            e.relationship.type === o.eA$.FRIEND &&
                t === o.eA$.PENDING_OUTGOING &&
                r.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
    },
    RELATIONSHIP_REMOVE: function (e) {
        R(e.relationship.id),
            null != _[e.relationship.id] && ((_ = { ..._ }), delete _[e.relationship.id]),
            null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
            null != u[e.relationship.id] && ((u = { ...u }), delete u[e.relationship.id]),
            null != m[e.relationship.id] && ((m = { ...m }), delete m[e.relationship.id]),
            e.relationship.userIgnored || E.delete(e.relationship.id),
            h.delete(e.relationship.id),
            c.delete(e.relationship.id),
            C();
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        O(t.id, t.type),
            null == t.since ? delete d[t.id] : (d[t.id] = t.since),
            null == t.nickname ? delete _[t.id] : (_[t.id] = t.nickname),
            null == t.note ? delete u[t.id] : (u[t.id] = t.note),
            t.isSpamRequest ? c.add(t.id) : c.delete(t.id),
            null != g[t.id] && delete g[t.id],
            null == t.originApplicationId ? delete m[t.id] : (m[t.id] = t.originApplicationId),
            t.userIgnored
                ? (E.add(t.id), t.type === o.eA$.PENDING_INCOMING && h.add(t.id))
                : (E.delete(t.id), h.delete(t.id)),
            C();
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of l.keys()) l.get(e) === o.eA$.PENDING_INCOMING && (R(e), c.delete(e), h.delete(e), delete g[e]);
        C();
    },
    UPDATE_STRANGER_STATUS: function (e) {
        g[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
