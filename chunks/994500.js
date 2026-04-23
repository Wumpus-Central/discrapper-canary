"use strict";
n.d(t, { A: () => y });
var i = n(17928),
    r = n(228366),
    s = n(383233),
    a = n(287809),
    o = n(652215);
let l = new Map(),
    d = {},
    _ = {},
    u = new Set(),
    c = new Set(),
    E = new Set(),
    h = {},
    m = 0,
    f = {},
    g = 0,
    p = 0,
    A = 0,
    I = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 };
function T() {
    (I.friends = void 0), (I.blocked = void 0), (I.ignored = void 0), (I.blockedOrIgnored = void 0);
}
let S = new Map();
function N(e, t) {
    let n = l.get(e);
    if (n === t) return;
    null != n && S.get(n)?.delete(e), l.set(e, t);
    let i = S.get(t);
    null != i ? i.add(e) : S.set(t, new Set([e])), T();
}
function C(e) {
    let t = l.get(e);
    null != t && (l.delete(e), S.get(t)?.delete(e), T());
}
function R() {
    (p = u.size), (A = E.size), (g = Math.max((S.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - p - A, 0)), m++;
}
class O extends i.Ay.Store {
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
        return null != e && l.get(e) !== o.eA$.BLOCKED && c.has(e);
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
        return p;
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
        return m;
    }
    isSpam(e) {
        return u.has(e);
    }
    getRelationshipType(e) {
        let t = l.get(e);
        return null != t ? t : o.eA$.NONE;
    }
    getNickname(e) {
        return d[e];
    }
    getSince(e) {
        return _[e];
    }
    getSinces() {
        return _;
    }
    getFriendIDs() {
        return null == I.friends && (I.friends = Array.from(S.get(o.eA$.FRIEND) ?? [])), I.friends;
    }
    getBlockedIDs() {
        return null == I.blocked && (I.blocked = Array.from(S.get(o.eA$.BLOCKED) ?? [])), I.blocked;
    }
    getIgnoredIDs() {
        return null == I.ignored && (I.ignored = Array.from(c.values()).filter((e) => this.isIgnored(e))), I.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == I.blockedOrIgnored) {
            let e = new Set(c),
                t = S.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            I.blockedOrIgnored = Array.from(e.values());
        }
        return I.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return h[e];
    }
    isStranger(e) {
        if (null != f[e]) return f[e].expiry < Date.now() ? void delete f[e] : f[e].isStranger;
    }
}
let y = new O(r.h, {
    CONNECTION_OPEN: function (e) {
        l.clear(),
            S.clear(),
            (d = {}),
            (_ = {}),
            c.clear(),
            u.clear(),
            E.clear(),
            T(),
            (h = {}),
            (f = {}),
            e.relationships.forEach((e) => {
                N(e.id, e.type),
                    null != e.nickname && (d[e.id] = e.nickname),
                    null != e.since && (_[e.id] = e.since),
                    e.is_spam_request && u.add(e.id),
                    null != e.origin_application_id && (h[e.id] = e.origin_application_id),
                    e.user_ignored && (c.add(e.id), e.type === o.eA$.PENDING_INCOMING && E.add(e.id));
            }),
            R();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (l.clear(), S.clear(), e.relationships)) N(t, n);
        R();
    },
    RELATIONSHIP_ADD: function (e) {
        let t = l.get(e.relationship.id);
        N(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (d = { ...d, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (_ = { ..._, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.originApplicationId &&
                (h = { ...h, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? u.add(e.relationship.id) : u.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (c.add(e.relationship.id),
                  e.relationship.type === o.eA$.PENDING_INCOMING
                      ? E.add(e.relationship.id)
                      : e.relationship.type === o.eA$.FRIEND && E.delete(e.relationship.id))
                : (c.delete(e.relationship.id), E.delete(e.relationship.id)),
            R(),
            e.relationship.type === o.eA$.FRIEND &&
                t === o.eA$.PENDING_OUTGOING &&
                r.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
    },
    RELATIONSHIP_REMOVE: function (e) {
        C(e.relationship.id),
            null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
            null != _[e.relationship.id] && ((_ = { ..._ }), delete _[e.relationship.id]),
            null != h[e.relationship.id] && ((h = { ...h }), delete h[e.relationship.id]),
            e.relationship.userIgnored || c.delete(e.relationship.id),
            E.delete(e.relationship.id),
            u.delete(e.relationship.id),
            R();
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        N(t.id, t.type),
            null == t.since ? delete _[t.id] : (_[t.id] = t.since),
            null == t.nickname ? delete d[t.id] : (d[t.id] = t.nickname),
            t.isSpamRequest ? u.add(t.id) : u.delete(t.id),
            null != f[t.id] && delete f[t.id],
            null == t.originApplicationId ? delete h[t.id] : (h[t.id] = t.originApplicationId),
            t.userIgnored
                ? (c.add(t.id), t.type === o.eA$.PENDING_INCOMING && E.add(t.id))
                : (c.delete(t.id), E.delete(t.id)),
            R();
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of l.keys()) l.get(e) === o.eA$.PENDING_INCOMING && (C(e), u.delete(e), E.delete(e), delete f[e]);
        R();
    },
    UPDATE_STRANGER_STATUS: function (e) {
        f[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
