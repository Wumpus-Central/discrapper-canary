"use strict";
n.d(t, { A: () => O });
var i = n(17928),
    r = n(228366),
    s = n(383233),
    a = n(287809),
    o = n(652215);
let l = new Map(),
    u = {},
    c = {},
    d = {},
    _ = new Set(),
    h = new Set(),
    f = new Set(),
    p = {},
    E = 0,
    m = {},
    g = 0,
    A = 0,
    I = 0,
    T = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 };
function S() {
    (T.friends = void 0), (T.blocked = void 0), (T.ignored = void 0), (T.blockedOrIgnored = void 0);
}
let y = new Map();
function N(e, t) {
    let n = l.get(e);
    if (n === t) return;
    null != n && y.get(n)?.delete(e), l.set(e, t);
    let i = y.get(t);
    null != i ? i.add(e) : y.set(t, new Set([e])), S();
}
function v(e) {
    let t = l.get(e);
    null != t && (l.delete(e), y.get(t)?.delete(e), S());
}
function C() {
    (A = _.size), (I = f.size), (g = Math.max((y.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - A - I, 0)), E++;
}
class R extends i.Ay.Store {
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
        return null != e && l.get(e) !== o.eA$.BLOCKED && h.has(e);
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
        return g;
    }
    getSpamCount() {
        return A;
    }
    getPendingIgnoredCount() {
        return I;
    }
    getOutgoingCount() {
        return y.get(o.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return y.get(o.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return l.size;
    }
    getMutableRelationships() {
        return l;
    }
    getVersion() {
        return E;
    }
    isSpam(e) {
        return _.has(e);
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
    getNote(e) {
        return d[e];
    }
    getFriendIDs() {
        return null == T.friends && (T.friends = Array.from(y.get(o.eA$.FRIEND) ?? [])), T.friends;
    }
    getBlockedIDs() {
        return null == T.blocked && (T.blocked = Array.from(y.get(o.eA$.BLOCKED) ?? [])), T.blocked;
    }
    getIgnoredIDs() {
        return null == T.ignored && (T.ignored = Array.from(h.values()).filter((e) => this.isIgnored(e))), T.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == T.blockedOrIgnored) {
            let e = new Set(h),
                t = y.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            T.blockedOrIgnored = Array.from(e.values());
        }
        return T.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return p[e];
    }
    isStranger(e) {
        if (null != m[e]) return m[e].expiry < Date.now() ? void delete m[e] : m[e].isStranger;
    }
}
let O = new R(r.h, {
    CONNECTION_OPEN: function (e) {
        l.clear(),
            y.clear(),
            (u = {}),
            (c = {}),
            (d = {}),
            h.clear(),
            _.clear(),
            f.clear(),
            S(),
            (p = {}),
            (m = {}),
            e.relationships.forEach((e) => {
                N(e.id, e.type),
                    null != e.nickname && (u[e.id] = e.nickname),
                    null != e.since && (c[e.id] = e.since),
                    null != e.note && (d[e.id] = e.note),
                    e.is_spam_request && _.add(e.id),
                    null != e.origin_application_id && (p[e.id] = e.origin_application_id),
                    e.user_ignored && (h.add(e.id), e.type === o.eA$.PENDING_INCOMING && f.add(e.id));
            }),
            C();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (l.clear(), y.clear(), e.relationships)) N(t, n);
        C();
    },
    RELATIONSHIP_ADD: function (e) {
        let t = l.get(e.relationship.id);
        N(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (u = { ...u, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (c = { ...c, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.note && (d = { ...d, [e.relationship.id]: e.relationship.note }),
            null != e.relationship.originApplicationId &&
                (p = { ...p, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? _.add(e.relationship.id) : _.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (h.add(e.relationship.id),
                  e.relationship.type === o.eA$.PENDING_INCOMING
                      ? f.add(e.relationship.id)
                      : e.relationship.type === o.eA$.FRIEND && f.delete(e.relationship.id))
                : (h.delete(e.relationship.id), f.delete(e.relationship.id)),
            C(),
            e.relationship.type === o.eA$.FRIEND &&
                t === o.eA$.PENDING_OUTGOING &&
                r.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
    },
    RELATIONSHIP_REMOVE: function (e) {
        v(e.relationship.id),
            null != u[e.relationship.id] && ((u = { ...u }), delete u[e.relationship.id]),
            null != c[e.relationship.id] && ((c = { ...c }), delete c[e.relationship.id]),
            null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
            null != p[e.relationship.id] && ((p = { ...p }), delete p[e.relationship.id]),
            e.relationship.userIgnored || h.delete(e.relationship.id),
            f.delete(e.relationship.id),
            _.delete(e.relationship.id),
            C();
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        N(t.id, t.type),
            null == t.since ? delete c[t.id] : (c[t.id] = t.since),
            null == t.nickname ? delete u[t.id] : (u[t.id] = t.nickname),
            null == t.note ? delete d[t.id] : (d[t.id] = t.note),
            t.isSpamRequest ? _.add(t.id) : _.delete(t.id),
            null != m[t.id] && delete m[t.id],
            null == t.originApplicationId ? delete p[t.id] : (p[t.id] = t.originApplicationId),
            t.userIgnored
                ? (h.add(t.id), t.type === o.eA$.PENDING_INCOMING && f.add(t.id))
                : (h.delete(t.id), f.delete(t.id)),
            C();
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of l.keys()) l.get(e) === o.eA$.PENDING_INCOMING && (v(e), _.delete(e), f.delete(e), delete m[e]);
        C();
    },
    UPDATE_STRANGER_STATUS: function (e) {
        m[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
