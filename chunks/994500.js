var i = n(855986),
    r = n(73153),
    a = n(518782),
    s = n(383233),
    l = n(287809),
    o = n(652215);
let d = new Map(),
    c = {},
    u = {},
    _ = {},
    E = new Set(),
    A = new Set(),
    f = new Set(),
    h = {},
    I = 0,
    p = {},
    m = 0,
    T = 0,
    g = 0,
    S = { friends: void 0, blocked: void 0, ignored: void 0, blockedOrIgnored: void 0 },
    N = new Set();
function C(e) {
    e === o.eA$.FRIEND
        ? N.add("friends")
        : e === o.eA$.BLOCKED && (N.add("blocked"), N.add("ignored"), N.add("blockedOrIgnored"));
}
function O() {
    (N.add("ignored"), N.add("blockedOrIgnored"));
}
function R() {
    (N.add("friends"), N.add("blocked"), N.add("ignored"), N.add("blockedOrIgnored"));
}
function L() {
    for (let e of N) S[e] = void 0;
    N.clear();
}
function y(e) {
    A.has(e) || (A.add(e), O());
}
function D(e) {
    A.delete(e) && O();
}
let b = new Map();
function v(e, t) {
    let n = d.get(e);
    if (n === t) return;
    (null != n && b.get(n)?.delete(e), d.set(e, t));
    let i = b.get(t);
    (null != i ? i.add(e) : b.set(t, new Set([e])), C(n), C(t));
}
function P(e) {
    let t = d.get(e);
    null != t && (d.delete(e), b.get(t)?.delete(e), C(t));
}
function M() {
    ((T = E.size), (g = f.size), (m = Math.max((b.get(o.eA$.PENDING_INCOMING)?.size ?? 0) - T - g, 0)), I++);
}
class U extends i.Ay.Store {
    static displayName = "RelationshipStore";
    initialize() {
        this.waitFor(l.default);
    }
    isFriend(e) {
        return null != e && d.get(e) === o.eA$.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && d.get(e) === o.eA$.BLOCKED;
    }
    isBlockedForMessage(e) {
        if (null != e.author && d.get(e.author.id) === o.eA$.BLOCKED) return !0;
        if (e instanceof s.Ay) {
            if (this.isBlocked(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isBlocked(e.interaction_metadata?.user?.id)) return !0;
        let t = e instanceof s.Ay ? e.guildSpaceData?.leaderboard : e.guild_space_data?.leaderboard;
        return null != t && (0, a.e7)(t).some((e) => this.isBlocked(e));
    }
    isIgnored(e) {
        return null != e && d.get(e) !== o.eA$.BLOCKED && A.has(e);
    }
    isIgnoredForMessage(e) {
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof s.Ay) {
            if (this.isIgnored(e.interactionMetadata?.user?.id)) return !0;
        } else if (this.isIgnored(e.interaction_metadata?.user?.id)) return !0;
        let t = e instanceof s.Ay ? e.guildSpaceData?.leaderboard : e.guild_space_data?.leaderboard;
        return null != t && (0, a.e7)(t).some((e) => this.isIgnored(e));
    }
    isUnfilteredPendingIncoming(e) {
        return d.get(e) === o.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return m;
    }
    getSpamCount() {
        return T;
    }
    getPendingIgnoredCount() {
        return g;
    }
    getOutgoingCount() {
        return b.get(o.eA$.PENDING_OUTGOING)?.size ?? 0;
    }
    getFriendCount() {
        return b.get(o.eA$.FRIEND)?.size ?? 0;
    }
    getRelationshipCount() {
        return d.size;
    }
    getMutableRelationships() {
        return d;
    }
    getVersion() {
        return I;
    }
    isSpam(e) {
        return E.has(e);
    }
    getRelationshipType(e) {
        let t = d.get(e);
        return null != t ? t : o.eA$.NONE;
    }
    getNickname(e) {
        return c[e];
    }
    getSince(e) {
        return u[e];
    }
    getSinces() {
        return u;
    }
    getNote(e) {
        return _[e];
    }
    getFriendIDs() {
        return (null == S.friends && (S.friends = Array.from(b.get(o.eA$.FRIEND) ?? [])), S.friends);
    }
    getBlockedIDs() {
        return (null == S.blocked && (S.blocked = Array.from(b.get(o.eA$.BLOCKED) ?? [])), S.blocked);
    }
    getIgnoredIDs() {
        return (null == S.ignored && (S.ignored = Array.from(A.values()).filter((e) => this.isIgnored(e))), S.ignored);
    }
    getBlockedOrIgnoredIDs() {
        if (null == S.blockedOrIgnored) {
            let e = new Set(A),
                t = b.get(o.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            S.blockedOrIgnored = e;
        }
        return S.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return h[e];
    }
    isStranger(e) {
        if (null != p[e]) return p[e].expiry < Date.now() ? void delete p[e] : p[e].isStranger;
    }
}
let w = new U(r.h, {
    CONNECTION_OPEN: function (e) {
        (d.clear(),
            b.clear(),
            (c = {}),
            (u = {}),
            (_ = {}),
            A.clear(),
            E.clear(),
            f.clear(),
            R(),
            (h = {}),
            (p = {}),
            e.relationships.forEach((e) => {
                (v(e.id, e.type),
                    null != e.nickname && (c[e.id] = e.nickname),
                    null != e.since && (u[e.id] = e.since),
                    null != e.note && (_[e.id] = e.note),
                    e.is_spam_request && E.add(e.id),
                    null != e.origin_application_id && (h[e.id] = e.origin_application_id),
                    e.user_ignored && (y(e.id), e.type === o.eA$.PENDING_INCOMING && f.add(e.id)));
            }),
            L(),
            M());
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let [t, n] of (d.clear(), b.clear(), R(), e.relationships)) v(t, n);
        (L(), M());
    },
    RELATIONSHIP_ADD: function (e) {
        let t = d.get(e.relationship.id);
        (v(e.relationship.id, e.relationship.type),
            null != e.relationship.nickname && (c = { ...c, [e.relationship.id]: e.relationship.nickname }),
            null != e.relationship.since && (u = { ...u, [e.relationship.id]: e.relationship.since }),
            null != e.relationship.note && (_ = { ..._, [e.relationship.id]: e.relationship.note }),
            null != e.relationship.originApplicationId &&
                (h = { ...h, [e.relationship.id]: e.relationship.originApplicationId }),
            e.relationship.isSpamRequest ? E.add(e.relationship.id) : E.delete(e.relationship.id),
            e.relationship.userIgnored
                ? (y(e.relationship.id),
                  e.relationship.type === o.eA$.PENDING_INCOMING
                      ? f.add(e.relationship.id)
                      : e.relationship.type === o.eA$.FRIEND && f.delete(e.relationship.id))
                : (D(e.relationship.id), f.delete(e.relationship.id)),
            L(),
            M(),
            e.relationship.type === o.eA$.FRIEND &&
                t === o.eA$.PENDING_OUTGOING &&
                r.h.dispatch({ type: "FRIEND_REQUEST_ACCEPTED", user: e.relationship.user }));
    },
    RELATIONSHIP_REMOVE: function (e) {
        (P(e.relationship.id),
            null != c[e.relationship.id] && ((c = { ...c }), delete c[e.relationship.id]),
            null != u[e.relationship.id] && ((u = { ...u }), delete u[e.relationship.id]),
            null != _[e.relationship.id] && ((_ = { ..._ }), delete _[e.relationship.id]),
            null != h[e.relationship.id] && ((h = { ...h }), delete h[e.relationship.id]),
            e.relationship.userIgnored || D(e.relationship.id),
            f.delete(e.relationship.id),
            E.delete(e.relationship.id),
            L(),
            M());
    },
    RELATIONSHIP_UPDATE: function (e) {
        let { relationship: t } = e;
        (v(t.id, t.type),
            null == t.since ? delete u[t.id] : (u[t.id] = t.since),
            null == t.nickname ? delete c[t.id] : (c[t.id] = t.nickname),
            null == t.note ? delete _[t.id] : (_[t.id] = t.note),
            t.isSpamRequest ? E.add(t.id) : E.delete(t.id),
            null != p[t.id] && delete p[t.id],
            null == t.originApplicationId ? delete h[t.id] : (h[t.id] = t.originApplicationId),
            t.userIgnored ? (y(t.id), t.type === o.eA$.PENDING_INCOMING && f.add(t.id)) : (D(t.id), f.delete(t.id)),
            L(),
            M());
    },
    RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
        for (let e of d.keys()) d.get(e) === o.eA$.PENDING_INCOMING && (P(e), E.delete(e), f.delete(e), delete p[e]);
        (L(), M());
    },
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t } = e;
        (y(t), d.get(t) === o.eA$.PENDING_INCOMING && f.add(t), L(), M());
    },
    RELATIONSHIP_UNIGNORE_USER_SUCCESS: function (e) {
        let { userId: t } = e;
        (D(t), f.delete(t), L(), M());
    },
    UPDATE_STRANGER_STATUS: function (e) {
        p[e.userId] = { expiry: Date.now() + 3e5, isStranger: e.isStranger };
    },
});
n.d(t, {}, { A: w });
