n.d(t, {
    A: () => V,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(383233),
    o = n(287809),
    l = n(652215);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 3e5,
    _ = new Map(),
    h = {},
    m = {},
    g = new Set(),
    E = new Set(),
    b = new Set(),
    y = {},
    O = 0,
    A = {},
    v = 0,
    S = 0,
    I = 0,
    T = {
        friends: void 0,
        blocked: void 0,
        ignored: void 0,
        blockedOrIgnored: void 0,
    };

function C() {
    (T.friends = void 0), (T.blocked = void 0), (T.ignored = void 0), (T.blockedOrIgnored = void 0);
}
let N = new Map();

function R(e, t) {
    let n = _.get(e);
    if (n === t) return;
    if (null != n) {
        var r;
        null == (r = N.get(n)) || r.delete(e);
    }
    _.set(e, t);
    let i = N.get(t);
    null != i ? i.add(e) : N.set(t, new Set([e])), C();
}

function w(e) {
    var t;
    let n = _.get(e);
    null != n && (_.delete(e), null == (t = N.get(n)) || t.delete(e), C());
}

function P() {
    var e, t;
    (S = g.size),
        (I = b.size),
        (v = Math.max(
            (null != (e = null == (t = N.get(l.eA$.PENDING_INCOMING)) ? void 0 : t.size) ? e : 0) - S - I,
            0,
        )),
        O++;
}

function D(e) {
    _.clear(),
        N.clear(),
        (h = {}),
        (m = {}),
        E.clear(),
        g.clear(),
        b.clear(),
        C(),
        (y = {}),
        (A = {}),
        e.relationships.forEach((e) => {
            R(e.id, e.type),
                null != e.nickname && (h[e.id] = e.nickname),
                null != e.since && (m[e.id] = e.since),
                e.is_spam_request && g.add(e.id),
                null != e.origin_application_id && (y[e.id] = e.origin_application_id),
                e.user_ignored && (E.add(e.id), e.type === l.eA$.PENDING_INCOMING && b.add(e.id));
        }),
        P();
}

function x(e) {
    for (let [t, n] of (_.clear(), N.clear(), e.relationships)) R(t, n);
    P();
}

function L(e) {
    let t = _.get(e.relationship.id);
    R(e.relationship.id, e.relationship.type),
        null != e.relationship.nickname &&
            (h = f(u({}, h), {
                [e.relationship.id]: e.relationship.nickname,
            })),
        null != e.relationship.since &&
            (m = f(u({}, m), {
                [e.relationship.id]: e.relationship.since,
            })),
        null != e.relationship.originApplicationId &&
            (y = f(u({}, y), {
                [e.relationship.id]: e.relationship.originApplicationId,
            })),
        e.relationship.isSpamRequest ? g.add(e.relationship.id) : g.delete(e.relationship.id),
        e.relationship.userIgnored
            ? (E.add(e.relationship.id),
              e.relationship.type === l.eA$.PENDING_INCOMING
                  ? b.add(e.relationship.id)
                  : e.relationship.type === l.eA$.FRIEND && b.delete(e.relationship.id))
            : (E.delete(e.relationship.id), b.delete(e.relationship.id)),
        P(),
        e.relationship.type === l.eA$.FRIEND &&
            t === l.eA$.PENDING_OUTGOING &&
            a.h.dispatch({
                type: "FRIEND_REQUEST_ACCEPTED",
                user: e.relationship.user,
            });
}

function j(e) {
    w(e.relationship.id),
        null != h[e.relationship.id] && ((h = u({}, h)), delete h[e.relationship.id]),
        null != m[e.relationship.id] && ((m = u({}, m)), delete m[e.relationship.id]),
        null != y[e.relationship.id] && ((y = u({}, y)), delete y[e.relationship.id]),
        e.relationship.userIgnored || E.delete(e.relationship.id),
        b.delete(e.relationship.id),
        g.delete(e.relationship.id),
        P();
}

function M(e) {
    let { relationship: t } = e;
    R(t.id, t.type),
        null == t.since ? delete m[t.id] : (m[t.id] = t.since),
        null == t.nickname ? delete h[t.id] : (h[t.id] = t.nickname),
        t.isSpamRequest ? g.add(t.id) : g.delete(t.id),
        null != A[t.id] && delete A[t.id],
        null == t.originApplicationId ? delete y[t.id] : (y[t.id] = t.originApplicationId),
        t.userIgnored
            ? (E.add(t.id), t.type === l.eA$.PENDING_INCOMING && b.add(t.id))
            : (E.delete(t.id), b.delete(t.id)),
        P();
}

function k(e) {
    for (let e of _.keys()) _.get(e) === l.eA$.PENDING_INCOMING && (w(e), g.delete(e), b.delete(e), delete A[e]);
    P();
}

function U(e) {
    A[e.userId] = {
        expiry: Date.now() + p,
        isStranger: e.isStranger,
    };
}
class G extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    isFriend(e) {
        return null != e && _.get(e) === l.eA$.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && _.get(e) === l.eA$.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && _.get(e.author.id) === l.eA$.BLOCKED) return !0;
        if (e instanceof s.Ay) {
            if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id))
            return !0;
        return !1;
    }
    isIgnored(e) {
        return null != e && _.get(e) !== l.eA$.BLOCKED && E.has(e);
    }
    isIgnoredForMessage(e) {
        var t, n, r, i;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof s.Ay) {
            if (this.isIgnored(null == (i = e.interactionMetadata) || null == (r = i.user) ? void 0 : r.id)) return !0;
        } else if (this.isIgnored(null == (n = e.interaction_metadata) || null == (t = n.user) ? void 0 : t.id))
            return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return _.get(e) === l.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return v;
    }
    getSpamCount() {
        return S;
    }
    getPendingIgnoredCount() {
        return I;
    }
    getOutgoingCount() {
        var e, t;
        return null != (e = null == (t = N.get(l.eA$.PENDING_OUTGOING)) ? void 0 : t.size) ? e : 0;
    }
    getFriendCount() {
        var e, t;
        return null != (e = null == (t = N.get(l.eA$.FRIEND)) ? void 0 : t.size) ? e : 0;
    }
    getRelationshipCount() {
        return _.size;
    }
    getMutableRelationships() {
        return _;
    }
    getVersion() {
        return O;
    }
    isSpam(e) {
        return g.has(e);
    }
    getRelationshipType(e) {
        let t = _.get(e);
        return null != t ? t : l.eA$.NONE;
    }
    getNickname(e) {
        return h[e];
    }
    getSince(e) {
        return m[e];
    }
    getSinces() {
        return m;
    }
    getFriendIDs() {
        if (null == T.friends) {
            var e;
            T.friends = Array.from(null != (e = N.get(l.eA$.FRIEND)) ? e : []);
        }
        return T.friends;
    }
    getBlockedIDs() {
        if (null == T.blocked) {
            var e;
            T.blocked = Array.from(null != (e = N.get(l.eA$.BLOCKED)) ? e : []);
        }
        return T.blocked;
    }
    getIgnoredIDs() {
        return null == T.ignored && (T.ignored = Array.from(E.values()).filter((e) => this.isIgnored(e))), T.ignored;
    }
    getBlockedOrIgnoredIDs() {
        if (null == T.blockedOrIgnored) {
            let e = new Set(E),
                t = N.get(l.eA$.BLOCKED);
            if (null != t) for (let n of t) e.add(n);
            T.blockedOrIgnored = Array.from(e.values());
        }
        return T.blockedOrIgnored;
    }
    getOriginApplicationId(e) {
        return y[e];
    }
    isStranger(e) {
        if (null != A[e]) return A[e].expiry < Date.now() ? void delete A[e] : A[e].isStranger;
    }
}
c(G, "displayName", "RelationshipStore");
let V = new G(a.h, {
    CONNECTION_OPEN: D,
    OVERLAY_INITIALIZE: x,
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_REMOVE: j,
    RELATIONSHIP_UPDATE: M,
    RELATIONSHIP_PENDING_INCOMING_REMOVED: k,
    UPDATE_STRANGER_STATUS: U,
});
