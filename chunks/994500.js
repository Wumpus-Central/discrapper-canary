"use strict";
n.d(t, { A: () => k });
var r = n(311907),
    i = n(73153),
    s = n(383233),
    a = n(287809),
    o = n(652215);
let l = 3e5,
    u = new Map(),
    c = {},
    d = {},
    _ = {},
    f = new Set(),
    p = new Set(),
    h = new Set(),
    m = {},
    E = 0,
    g = {},
    A = 0,
    I = 0,
    T = 0,
    S = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 };
function y() {
    (S.friends = void 0), (S.blocked = void 0), (S.ignored = void 0), (S.blockedOrIgnored = void 0);
}
let v = new Map();
function N(e, t) {
    let n = u.get(e);
    if (n === t) return;
    null != n && v.get(n)?.delete(e), u.set(e, t);
    let r = v.get(t);
    null != r ? r.add(e) : v.set(t, new Set([e])), y();
}
function C(e) {
    let t = u.get(e);
    null != t && (u.delete(e), v.get(t)?.delete(e), y());
}
function R() {
    (I = f.size), (T = h.size), (A = Math.max((v.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - I - T, 0)), E++;
}
function O(e) {
    u.clear(),
        v.clear(),
        (c = {}),
        (d = {}),
        (_ = {}),
        p.clear(),
        f.clear(),
        h.clear(),
        y(),
        (m = {}),
        (g = {}),
        e.relationships.forEach((e) => {
            N(e.id, e.type),
                null != e.nickname && (c[e.id] = e.nickname),
                null != e.since && (d[e.id] = e.since),
                null != e.note && (_[e.id] = e.note),
                e.is_spam_request && f.add(e.id),
                null != e.origin_application_id && (m[e.id] = e.origin_application_id),
                e.user_ignored && (p.add(e.id), e.type === o.eA$.PENDING_INCOMING && h.add(e.id));
        }),
        R();
}
function b(e) {
    for (let [t, n] of (u.clear(), v.clear(), e.relationships)) N(t, n);
    R();
}
function D(e) {
    let t = u.get(e.relationship.id);
    N(e.relationship.id, e.relationship.type),
        null != e.relationship.nickname && (c = { ...c, [e.relationship.id]: e.relationship.nickname }),
        null != e.relationship.since && (d = { ...d, [e.relationship.id]: e.relationship.since }),
        null != e.relationship.note && (_ = { ..._, [e.relationship.id]: e.relationship.note }),
        null != e.relationship.originApplicationId &&
            (m = { ...m, [e.relationship.id]: e.relationship.originApplicationId }),
        e.relationship.isSpamRequest ? f.add(e.relationship.id) : f.delete(e.relationship.id),
        e.relationship.userIgnored
            ? (p.add(e.relationship.id),
              e.relationship.type === o.eA$.PENDING_INCOMING
                  ? h.add(e.relationship.id)
                  : e.relationship.type === o.eA$.FRIEND && h.delete(e.relationship.id))
            : (p.delete(e.relationship.id), h.delete(e.relationship.id)),
        R(),
        e.relationship.type === o.eA$.FRIEND &&
            t === o.eA$.PENDING_OUTGOING &&
            i.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
}
function L(e) {
    C(e.relationship.id),
        null != c[e.relationship.id] && ((c = { ...c }), delete c[e.relationship.id]),
        null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
        null != _[e.relationship.id] && ((_ = { ..._ }), delete _[e.relationship.id]),
        null != m[e.relationship.id] && ((m = { ...m }), delete m[e.relationship.id]),
        e.relationship.userIgnored || p.delete(e.relationship.id),
        h.delete(e.relationship.id),
        f.delete(e.relationship.id),
        R();
}
function w(e) {
    let { relationship: t } = e;
    N(t.id, t.type),
        null == t.since ? delete d[t.id] : (d[t.id] = t.since),
        null == t.nickname ? delete c[t.id] : (c[t.id] = t.nickname),
        null == t.note ? delete _[t.id] : (_[t.id] = t.note),
        t.isSpamRequest ? f.add(t.id) : f.delete(t.id),
        null != g[t.id] && delete g[t.id],
        null == t.originApplicationId ? delete m[t.id] : (m[t.id] = t.originApplicationId),
        t.userIgnored
            ? (p.add(t.id), t.type === o.eA$.PENDING_INCOMING && h.add(t.id))
            : (p.delete(t.id), h.delete(t.id)),
        R();
}
function M(e) {
    for (let e of u.keys()) u.get(e) === o.eA$.PENDING_INCOMING && (C(e), f.delete(e), h.delete(e), delete g[e]);
    R();
}
function x(e) {
    g[e.userId] = { expiry: Date.now() + l, isStranger: e.isStranger };
}
class P extends r.Ay.Store {
    static displayName = "RelationshipStore";
    initialize() {
        this.waitFor(a.default);
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
        if (e instanceof s.Ay) {
            if (this.isBlocked(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isBlocked(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && u.get(e) !== o.eA$.BLOCKED && p.has(e);
    }
    isIgnoredForMessage(e) {
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof s.Ay) {
            if (this.isIgnored(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isIgnored(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return u.get(e) === o.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return A;
    }
    getSpamCount() {
        return I;
    }
    getPendingIgnoredCount() {
        return T;
    }
    getOutgoingCount() {
        return v.get(o.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return v.get(o.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return u.size;
    }
    getMutableRelationships() {
        return u;
    }
    getVersion() {
        return E;
    }
    isSpam(e) {
        return f.has(e);
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
    getNote(e) {
        return _[e];
    }
    getFriendIDs() {
        return null == S.friends && (S.friends = Array.from(v.get(o.eA$.FRIEND) ?? [])), S.friends;
    }
    getBlockedIDs() {
        return null == S.blocked && (S.blocked = Array.from(v.get(o.eA$.BLOCKED) ?? [])), S.blocked;
    }
    getIgnoredIDs() {
        return null == S.ignored && (S.ignored = Array.from(p.values()).filter((e) => this.isIgnored(e))), S.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == S.blockedOrIgnored) {
            let e = new Set(p),
                t = v.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            S.blockedOrIgnored = Array.from(e.values());
        }
        return S.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return m[e];
    }
    isStranger(e) {
        if (null != g[e]) return g[e].expiry < Date.now() ? void delete g[e] : g[e].isStranger;
    }
}
let k = new P(i.h, {
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: b,
    RELATIONSHIP_ADD: D,
    RELATIONSHIP_REMOVE: L,
    RELATIONSHIP_UPDATE: w,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: M,
    UPDATE_STRANGER_STATUS: x,
});
