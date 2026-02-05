"use strict";
n.d(t, { A: () => M });
var r = n(311907),
    i = n(73153),
    a = n(383233),
    s = n(287809),
    o = n(652215);
let l = 3e5,
    u = new Map(),
    c = {},
    d = {},
    _ = new Set(),
    f = new Set(),
    p = new Set(),
    h = {},
    m = 0,
    g = {},
    E = 0,
    A = 0,
    I = 0,
    T = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 };
function y() {
    (T.friends = void 0), (T.blocked = void 0), (T.ignored = void 0), (T.blockedOrIgnored = void 0);
}
let S = new Map();
function v(e, t) {
    let n = u.get(e);
    if (n === t) return;
    null != n && S.get(n)?.delete(e), u.set(e, t);
    let r = S.get(t);
    null != r ? r.add(e) : S.set(t, new Set([e])), y();
}
function C(e) {
    let t = u.get(e);
    null != t && (u.delete(e), S.get(t)?.delete(e), y());
}
function b() {
    (A = _.size), (I = p.size), (E = Math.max((S.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - A - I, 0)), m++;
}
function N(e) {
    u.clear(),
        S.clear(),
        (c = {}),
        (d = {}),
        f.clear(),
        _.clear(),
        p.clear(),
        y(),
        (h = {}),
        (g = {}),
        e.relationships.forEach((e) => {
            v(e.id, e.type),
                null != e.nickname && (c[e.id] = e.nickname),
                null != e.since && (d[e.id] = e.since),
                e.is_spam_request && _.add(e.id),
                null != e.origin_application_id && (h[e.id] = e.origin_application_id),
                e.user_ignored && (f.add(e.id), e.type === o.eA$.PENDING_INCOMING && p.add(e.id));
        }),
        b();
}
function R(e) {
    for (let [t, n] of (u.clear(), S.clear(), e.relationships)) v(t, n);
    b();
}
function O(e) {
    let t = u.get(e.relationship.id);
    v(e.relationship.id, e.relationship.type),
        null != e.relationship.nickname && (c = { ...c, [e.relationship.id]: e.relationship.nickname }),
        null != e.relationship.since && (d = { ...d, [e.relationship.id]: e.relationship.since }),
        null != e.relationship.originApplicationId &&
            (h = { ...h, [e.relationship.id]: e.relationship.originApplicationId }),
        e.relationship.isSpamRequest ? _.add(e.relationship.id) : _.delete(e.relationship.id),
        e.relationship.userIgnored
            ? (f.add(e.relationship.id),
              e.relationship.type === o.eA$.PENDING_INCOMING
                  ? p.add(e.relationship.id)
                  : e.relationship.type === o.eA$.FRIEND && p.delete(e.relationship.id))
            : (f.delete(e.relationship.id), p.delete(e.relationship.id)),
        b(),
        e.relationship.type === o.eA$.FRIEND &&
            t === o.eA$.PENDING_OUTGOING &&
            i.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
}
function D(e) {
    C(e.relationship.id),
        null != c[e.relationship.id] && ((c = { ...c }), delete c[e.relationship.id]),
        null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
        null != h[e.relationship.id] && ((h = { ...h }), delete h[e.relationship.id]),
        e.relationship.userIgnored || f.delete(e.relationship.id),
        p.delete(e.relationship.id),
        _.delete(e.relationship.id),
        b();
}
function L(e) {
    let { relationship: t } = e;
    v(t.id, t.type),
        null == t.since ? delete d[t.id] : (d[t.id] = t.since),
        null == t.nickname ? delete c[t.id] : (c[t.id] = t.nickname),
        t.isSpamRequest ? _.add(t.id) : _.delete(t.id),
        null != g[t.id] && delete g[t.id],
        null == t.originApplicationId ? delete h[t.id] : (h[t.id] = t.originApplicationId),
        t.userIgnored
            ? (f.add(t.id), t.type === o.eA$.PENDING_INCOMING && p.add(t.id))
            : (f.delete(t.id), p.delete(t.id)),
        b();
}
function w(e) {
    for (let e of u.keys()) u.get(e) === o.eA$.PENDING_INCOMING && (C(e), _.delete(e), p.delete(e), delete g[e]);
    b();
}
function x(e) {
    g[e.userId] = { expiry: Date.now() + l, isStranger: e.isStranger };
}
class P extends r.Ay.Store {
    static displayName = "RelationshipStore";
    initialize() {
        this.waitFor(s.default);
    }
    isFriend(e) {
        return null != e && u.get(e) === o.eA$.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && u.get(e) === o.eA$.BLOCKED;
    }
    isBlockedForMessage(e) {
        if (null != e.author && u.get(e.author.id) === o.eA$.BLOCKED) return !0;
        if (e instanceof a.Ay) {
            if (this.isBlocked(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isBlocked(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && u.get(e) !== o.eA$.BLOCKED && f.has(e);
    }
    isIgnoredForMessage(e) {
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof a.Ay) {
            if (this.isIgnored(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isIgnored(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return u.get(e) === o.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return E;
    }
    getSpamCount() {
        return A;
    }
    getPendingIgnoredCount() {
        return I;
    }
    getOutgoingCount() {
        return S.get(o.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return S.get(o.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return u.size;
    }
    getMutableRelationships() {
        return u;
    }
    getVersion() {
        return m;
    }
    isSpam(e) {
        return _.has(e);
    }
    getRelationshipType(e) {
        let t = u.get(e);
        return null != t ? t : o.eA$.NONE;
    }
    getNickname(e) {
        return c[e];
    }
    getSince(e) {
        return d[e];
    }
    getSinces() {
        return d;
    }
    getFriendIDs() {
        return null == T.friends && (T.friends = Array.from(S.get(o.eA$.FRIEND) ?? [])), T.friends;
    }
    getBlockedIDs() {
        return null == T.blocked && (T.blocked = Array.from(S.get(o.eA$.BLOCKED) ?? [])), T.blocked;
    }
    getIgnoredIDs() {
        return null == T.ignored && (T.ignored = Array.from(f.values()).filter((e) => this.isIgnored(e))), T.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == T.blockedOrIgnored) {
            let e = new Set(f),
                t = S.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            T.blockedOrIgnored = Array.from(e.values());
        }
        return T.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return h[e];
    }
    isStranger(e) {
        if (null != g[e]) return g[e].expiry < Date.now() ? void delete g[e] : g[e].isStranger;
    }
}
let M = new P(i.h, {
    CONNECTION_OPEN: N,
    OVERLAY_INITIALIZE: R,
    RELATIONSHIP_ADD: O,
    RELATIONSHIP_REMOVE: D,
    RELATIONSHIP_UPDATE: L,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: w,
    UPDATE_STRANGER_STATUS: x,
});
