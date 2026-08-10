"use strict";
n.d(t, { A: () => U });
var i = n(17928),
    r = n(228366),
    a = n(383233),
    s = n(287809),
    l = n(652215);
let o = new Map(),
    d = {},
    c = {},
    u = {},
    _ = new Set(),
    E = new Set(),
    A = new Set(),
    h = {},
    I = 0,
    f = {},
    p = 0,
    T = 0,
    m = 0,
    g = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 },
    S = new Set();
function N(e) {
    e === l.eA$.FRIEND
        ? S.add("friends")
        : e === l.eA$.BLOCKED && (S.add("blocked"), S.add("ignored"), S.add("blockedOrIgnored"));
}
function C() {
    S.add("ignored"), S.add("blockedOrIgnored");
}
function O() {
    S.add("friends"), S.add("blocked"), S.add("ignored"), S.add("blockedOrIgnored");
}
function R() {
    for (let e of S) g[e] = void 0;
    S.clear();
}
function L(e) {
    E.has(e) || (E.add(e), C());
}
function D(e) {
    E.delete(e) && C();
}
let y = new Map();
function v(e, t) {
    let n = o.get(e);
    if (n === t) return;
    null != n && y.get(n)?.delete(e), o.set(e, t);
    let i = y.get(t);
    null != i ? i.add(e) : y.set(t, new Set([e])), N(n), N(t);
}
function b(e) {
    let t = o.get(e);
    null != t && (o.delete(e), y.get(t)?.delete(e), N(t));
}
function M() {
    (T = _.size), (m = A.size), (p = Math.max((y.get(l.eA$.PENDING_INCOMING)?.size ?? 0) - T - m, 0)), I++;
}
class P extends i.Ay.Store {
    static displayName = "RelationshipStore";
    initialize() {
        this.waitFor(s.default);
    }
    isFriend(e) {
        return null != e && o.get(e) === l.eA$.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && o.get(e) === l.eA$.BLOCKED;
    }
    isBlockedForMessage(e) {
        if (null != e.author && o.get(e.author.id) === l.eA$.BLOCKED) return !0;
        if (e instanceof a.Ay) {
            if (this.isBlocked(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isBlocked(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && o.get(e) !== l.eA$.BLOCKED && E.has(e);
    }
    isIgnoredForMessage(e) {
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof a.Ay) {
            if (this.isIgnored(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isIgnored(e.interaction_metadata?.user?.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return o.get(e) === l.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return p;
    }
    getSpamCount() {
        return T;
    }
    getPendingIgnoredCount() {
        return m;
    }
    getOutgoingCount() {
        return y.get(l.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return y.get(l.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return o.size;
    }
    getMutableRelationships() {
        return o;
    }
    getVersion() {
        return I;
    }
    isSpam(e) {
        return _.has(e);
    }
    getRelationshipType(e) {
        let t = o.get(e);
        return null != t ? t : l.eA$.NONE;
    }
    getNickname(e) {
        return d[e];
    }
    getSince(e) {
        return c[e];
    }
    getSinces() {
        return c;
    }
    getNote(e) {
        return u[e];
    }
    getFriendIDs() {
        return null == g.friends && (g.friends = Array.from(y.get(l.eA$.FRIEND) ?? [])), g.friends;
    }
    getBlockedIDs() {
        return null == g.blocked && (g.blocked = Array.from(y.get(l.eA$.BLOCKED) ?? [])), g.blocked;
    }
    getIgnoredIDs() {
        return null == g.ignored && (g.ignored = Array.from(E.values()).filter((e) => this.isIgnored(e))), g.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == g.blockedOrIgnored) {
            let e = new Set(E),
                t = y.get(l.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            g.blockedOrIgnored = e;
        }
        return g.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return h[e];
    }
    isStranger(e) {
        if (null != f[e]) return f[e].expiry < Date.now() ? void delete f[e] : f[e].isStranger;
    }
}
let U = new P(r.h, {
    CONNECTION_OPEN: function (e) {
        o.clear(),
            y.clear(),
            (d = {}),
            (c = {}),
            (u = {}),
            E.clear(),
            _.clear(),
            A.clear(),
            O(),
            (h = {}),
            (f = {}),
            e.relationships.forEach((e) => {
                v(e.id, e.type),
                    null != e.nickname && (d[e.id] = e.nickname),
                    null != e.since && (c[e.id] = e.since),
                    null != e.note && (u[e.id] = e.note),
                    e.is_spam_request && _.add(e.id),
                    null != e.origin_application_id && (h[e.id] = e.origin_application_id),
                    e.user_ignored && (L(e.id), e.type === l.eA$.PENDING_INCOMING && A.add(e.id));
            }),
            R(),
            M();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (o.clear(), y.clear(), O(), e.relationships)) v(t, n);
        R(), M();
    },
    RELATIONSHIP_ADD: function (e) {
        let t = o.get(e.relationship.id);
        v(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (d = { ...d, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (c = { ...c, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.note && (u = { ...u, [e.relationship.id]: e.relationship.note }),
            null != e.relationship.originApplicationId &&
                (h = { ...h, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? _.add(e.relationship.id) : _.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (L(e.relationship.id),
                  e.relationship.type === l.eA$.PENDING_INCOMING
                      ? A.add(e.relationship.id)
                      : e.relationship.type === l.eA$.FRIEND && A.delete(e.relationship.id))
                : (D(e.relationship.id), A.delete(e.relationship.id)),
            R(),
            M(),
            e.relationship.type === l.eA$.FRIEND &&
                t === l.eA$.PENDING_OUTGOING &&
                r.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
    },
    RELATIONSHIP_REMOVE: function (e) {
        b(e.relationship.id),
            null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
            null != c[e.relationship.id] && ((c = { ...c }), delete c[e.relationship.id]),
            null != u[e.relationship.id] && ((u = { ...u }), delete u[e.relationship.id]),
            null != h[e.relationship.id] && ((h = { ...h }), delete h[e.relationship.id]),
            e.relationship.userIgnored || D(e.relationship.id),
            A.delete(e.relationship.id),
            _.delete(e.relationship.id),
            R(),
            M();
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        v(t.id, t.type),
            null == t.since ? delete c[t.id] : (c[t.id] = t.since),
            null == t.nickname ? delete d[t.id] : (d[t.id] = t.nickname),
            null == t.note ? delete u[t.id] : (u[t.id] = t.note),
            t.isSpamRequest ? _.add(t.id) : _.delete(t.id),
            null != f[t.id] && delete f[t.id],
            null == t.originApplicationId ? delete h[t.id] : (h[t.id] = t.originApplicationId),
            t.userIgnored ? (L(t.id), t.type === l.eA$.PENDING_INCOMING && A.add(t.id)) : (D(t.id), A.delete(t.id)),
            R(),
            M();
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of o.keys()) o.get(e) === l.eA$.PENDING_INCOMING && (b(e), _.delete(e), A.delete(e), delete f[e]);
        R(), M();
    },
    UPDATE_STRANGER_STATUS: function (e) {
        f[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
