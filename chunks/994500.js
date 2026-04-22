"use strict";
n.d(t, { A: () => v });
var r = n(311907),
    i = n(73153),
    s = n(383233),
    a = n(287809),
    o = n(652215);
let l = new Map(),
    u = {},
    d = {},
    c = new Set(),
    _ = new Set(),
    f = new Set(),
    E = {},
    h = 0,
    p = {},
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
function O() {
    (g = c.size), (A = f.size), (m = Math.max((S.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - g - A, 0)), h++;
}
class R extends r.Ay.Store {
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
        return c.has(e);
    }
    getRelationshipType(e) {
        let t = l.get(e);
        return null != t ? t : o.eA$.NONE;
    }
    getNickname(e) {
        return u[e];
    }
    getSince(e) {
        return d[e];
    }
    getSinces() {
        return d;
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
        return E[e];
    }
    isStranger(e) {
        if (null != p[e]) return p[e].expiry < Date.now() ? void delete p[e] : p[e].isStranger;
    }
}
let v = new R(i.h, {
    CONNECTION_OPEN: function (e) {
        l.clear(),
            S.clear(),
            (u = {}),
            (d = {}),
            _.clear(),
            c.clear(),
            f.clear(),
            T(),
            (E = {}),
            (p = {}),
            e.relationships.forEach((e) => {
                y(e.id, e.type),
                    null != e.nickname && (u[e.id] = e.nickname),
                    null != e.since && (d[e.id] = e.since),
                    e.is_spam_request && c.add(e.id),
                    null != e.origin_application_id && (E[e.id] = e.origin_application_id),
                    e.user_ignored && (_.add(e.id), e.type === o.eA$.PENDING_INCOMING && f.add(e.id));
            }),
            O();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (l.clear(), S.clear(), e.relationships)) y(t, n);
        O();
    },
    RELATIONSHIP_ADD: function (e) {
        let t = l.get(e.relationship.id);
        y(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (u = { ...u, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (d = { ...d, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.originApplicationId &&
                (E = { ...E, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? c.add(e.relationship.id) : c.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (_.add(e.relationship.id),
                  e.relationship.type === o.eA$.PENDING_INCOMING
                      ? f.add(e.relationship.id)
                      : e.relationship.type === o.eA$.FRIEND && f.delete(e.relationship.id))
                : (_.delete(e.relationship.id), f.delete(e.relationship.id)),
            O(),
            e.relationship.type === o.eA$.FRIEND &&
                t === o.eA$.PENDING_OUTGOING &&
                i.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user });
    },
    RELATIONSHIP_REMOVE: function (e) {
        N(e.relationship.id),
            null != u[e.relationship.id] && ((u = { ...u }), delete u[e.relationship.id]),
            null != d[e.relationship.id] && ((d = { ...d }), delete d[e.relationship.id]),
            null != E[e.relationship.id] && ((E = { ...E }), delete E[e.relationship.id]),
            e.relationship.userIgnored || _.delete(e.relationship.id),
            f.delete(e.relationship.id),
            c.delete(e.relationship.id),
            O();
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        y(t.id, t.type),
            null == t.since ? delete d[t.id] : (d[t.id] = t.since),
            null == t.nickname ? delete u[t.id] : (u[t.id] = t.nickname),
            t.isSpamRequest ? c.add(t.id) : c.delete(t.id),
            null != p[t.id] && delete p[t.id],
            null == t.originApplicationId ? delete E[t.id] : (E[t.id] = t.originApplicationId),
            t.userIgnored
                ? (_.add(t.id), t.type === o.eA$.PENDING_INCOMING && f.add(t.id))
                : (_.delete(t.id), f.delete(t.id)),
            O();
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of l.keys()) l.get(e) === o.eA$.PENDING_INCOMING && (N(e), c.delete(e), f.delete(e), delete p[e]);
        O();
    },
    UPDATE_STRANGER_STATUS: function (e) {
        p[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
