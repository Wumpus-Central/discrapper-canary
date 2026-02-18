"use strict";
n.d(t, { A: () => ea }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(323073),
    l = n(95701),
    u = n(734057),
    c = n(71393),
    d = n(222823),
    _ = n(309010),
    f = n(661191),
    p = n(970278),
    h = n(152007),
    m = n(826767),
    E = n(746080);
let g = {},
    A = {},
    I = {},
    T = {},
    S = {},
    y = {},
    v = null,
    N = {};
function C() {
    for (let e in ((g = {}), (S = {}), (A = {}), (I = {}), (T = {}), (v = _.A.getChannelId()), N)) clearTimeout(N[e]);
    (N = {}),
        p.A.forEachGuild((e) => {
            R(e);
        }),
        O();
}
function b(e) {
    for (let t in (delete g[e], delete S[e], delete A[e], delete I[e], delete T[e], R(e), I[e])) L(e, t);
}
function R(e) {
    let t = p.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            q(n);
            let e = u.A.getChannel(n);
            if (null == e) continue;
            let t = h.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: r, isRelevant: i, isTimedRelevant: s } = K(e);
                Z(g, e, n, !1), Z(S, e, i ? n : null, !1), Z(A, e, r ? n : null, !1), s && z(e, !0);
            } else {
                Z(I, e, e, !1);
                let t = d.Ay.isForumPostUnread(e.id);
                Z(T, e, t ? e : null, !1);
            }
        }
}
function O() {
    for (let e in ((y = {}), I)) for (let t in I[e]) L(e, t);
}
function D(e) {
    let t = u.A.getBasicChannel(e);
    null != t && l.wE.has(t.type) && L(t.guild_id, t.id);
}
function L(e, t) {
    let n = u.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == y[e] && (y[e] = {}), (y[e][t] = 0), null == I[e] || null == I[e][t])
    )
        return;
    let r = c.A.getGuild(e);
    if (null == r) return;
    let i = d.Ay.getTrackedAckMessageId(t);
    if (null == i) {
        let e = Date.now();
        null != r.joinedAt &&
            (r.joinedAt instanceof Date
                ? (e = r.joinedAt.getTime())
                : "string" == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())),
            (i = f.default.fromTimestamp(e));
    }
    for (let n in I[e][t])
        t === v
            ? d.Ay.isNewForumThread(n, t, r) && y[e][t]++
            : f.default.compare(n, i) > 0 && !d.Ay.hasOpenedThread(n) && y[e][t]++;
}
function w(e, t, n) {
    if (null == t) return !1;
    let r = u.A.getChannel(n),
        i = h.A.joinTimestamp(n);
    if (null != r && p.A.isActive(e, t, n)) {
        if (null != i) {
            let e = { channel: r, joinTimestamp: i.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: s } = K(r);
            Z(g, r, e, !0),
                Z(S, r, n ? e : null, !0),
                Z(A, r, t ? e : null, !0),
                Z(I, r, null, !0),
                Z(T, r, null, !0),
                z(r, s);
        } else {
            let e = d.Ay.isForumPostUnread(r.id);
            Z(g, r, null, !0), Z(A, r, null, !0), Z(S, r, null, !0), Z(I, r, r, !0), Z(T, r, e ? r : null, !0), q(r.id);
        }
        L(e, t);
    } else X(g, e, t, n), X(S, e, t, n), X(A, e, t, n), X(I, e, t, n), X(T, e, t, n), q(n), L(e, t);
}
function x(e) {
    return w(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function M(e) {
    let { channels: t } = e;
    for (let e of t) if ((0, o.qR)(e) !== k(e.guild_id, e.parent_id)) return void C();
    return !1;
}
function P(e) {
    let { channelId: t } = e,
        n = u.A.getChannel(t);
    return !!(null != n && n.isThread()) && w(n.guild_id, n.parent_id, n.id);
}
function k(e, t) {
    if (null == t) return !1;
    let n = g[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if ((0, o.qR)(r[e].channel)) return !0;
    }
    let i = I[e],
        s = null == i ? null : i[t];
    if (null != s) {
        for (let e in s) if ((0, o.qR)(s[e])) return !0;
    }
    return !1;
}
function U(e) {
    let { channel: t } = e,
        n = !1;
    return (
        null != t.guild_id &&
            null != t.parent_id &&
            (t.guild_id in g && t.parent_id in g[t.guild_id] && (delete g[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in S &&
                t.parent_id in S[t.guild_id] &&
                (f.default.keys(S[t.guild_id][t.parent_id]).forEach(q), delete S[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
            n && L(t.guild_id, t.parent_id)),
        n
    );
}
function G(e) {
    let t = u.A.getChannel(e.id);
    return null != t && !!p.A.isActive(e.guildId, t.parent_id, e.id) && w(t.guild_id, t.parent_id, t.id);
}
function F(e) {
    let t = u.A.getChannel(e.channelId);
    if (null == t) V();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!l.Le.has(t.type))
            if (Number(y[e]?.[t.id]) > 0) return L(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (Q(g, t)) {
            let { isUnread: r, isRelevant: i, isTimedRelevant: s } = K(t);
            z(t, s);
            let a = Q(A, t),
                o = Q(S, t);
            if (r === a && i === o) return !1;
            let l = g[e][n][t.id],
                u = r ? l : null,
                c = i ? l : null;
            Z(A, t, u, !0), Z(S, t, c, !0), L(e, n);
        } else {
            let e = Q(T, t),
                n = d.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            Z(T, t, n ? t : null, !0);
        }
    }
}
function V() {
    for (let e in ((A = {}), (S = {}), g))
        for (let t in g[e])
            for (let n in g[e][t]) {
                let r = g[e][t][n],
                    { isUnread: i, isRelevant: s, isTimedRelevant: a } = K(r.channel);
                i && Z(A, r.channel, r, !1), s && Z(S, r.channel, r, !1), z(r.channel, a);
            }
    for (let e in ((T = {}), I))
        for (let t in I[e])
            for (let n in I[e][t]) {
                let r = I[e][t][n];
                d.Ay.isForumPostUnread(n) && Z(T, r, r, !1);
            }
    O();
}
function B(e) {
    if (e.channels.length > 0) return b(e.guildId);
}
function H(e) {
    let { guild: t } = e;
    return b(t.id);
}
function j(e) {
    let { guildId: t } = e;
    return b(t);
}
function Y(e) {
    F(e), W();
}
function W() {
    let e = v;
    if ((v = _.A.getChannelId()) === e) return !1;
    D(e), D(v);
}
function K(e) {
    let t = d.Ay.getMentionCount(e.id) > 0,
        n = d.Ay.hasUnread(e.id) && !h.A.isMuted(e.id),
        r = e.hasFlag(E.lx.PINNED),
        i = e.isActiveThread(),
        s = i && (0, m.A)(e) > Date.now();
    return { isUnread: ((i || r) && n) || t, isRelevant: s || r || n || t, isTimedRelevant: s };
}
function z(e, t) {
    q(e.id), t && $(e);
}
function $(e) {
    N[e.id] = setTimeout(
        () => {
            let t = u.A.getChannel(e.id);
            null != t && a.h.dispatch({ type: "THREAD_UPDATE", channel: t });
        },
        (0, m.A)(e) - Date.now() + 1,
    );
}
function q(e) {
    e in N && (clearTimeout(N[e]), delete N[e]);
}
function Z(e, t, n, r) {
    let { guild_id: s, parent_id: a, id: o } = t;
    null != s &&
        null != a &&
        null != o &&
        (s in e || (e[s] = {}),
        a in e[s] || (e[s][a] = {}),
        r && (e[s] = { ...e[s], [a]: { ...e[s][a] } }),
        null === n ? (delete e[s][a][o], i().isEmpty(e[s][a]) && delete e[s][a]) : (e[s][a][o] = n));
}
function X(e, t, n, r) {
    null == t ||
        null == n ||
        null == r ||
        (J(e, t, n, r) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][r], i().isEmpty(e[t][n]) && delete e[t][n]));
}
function Q(e, t) {
    return J(e, t.guild_id, t.parent_id, t.id);
}
function J(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let ee = {},
    et = {},
    en = {},
    er = {},
    ei = {};
class es extends s.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(p.A, u.A, c.A, h.A, d.Ay, _.A), this.syncWith([_.A], W);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in A && t in A[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in I ? (I[e][t] ?? er) : er;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in g ? (g[e][t] ?? en) : en;
    }
    getAllActiveJoinedThreads() {
        return g;
    }
    getActiveJoinedThreadsForGuild(e) {
        return g[e] ?? ee;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return A[e] ?? ee;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? en;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return S[e] ?? ee;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? en;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return I[e] ?? et;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        return T[e] ?? ee;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        return this.getActiveUnjoinedUnreadThreadsForGuild(e)[t] ?? en;
    }
    getNewThreadCountsForGuild(e) {
        return y[e] ?? ei;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in g)
            if (n === e || null == e) for (let e in g[n]) for (let r in g[n][e]) t.push(g[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        return y[e]?.[t] ?? 0;
    }
    getActiveThreadCount(e, t) {
        return i().size(g[e]?.[t] ?? {}) + i().size(I[e]?.[t] ?? {});
    }
}
let ea = new es(a.h, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    THREAD_LIST_SYNC: j,
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    SEARCH_MESSAGES_SUCCESS: C,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: C,
    GUILD_CREATE: H,
    GUILD_DELETE: C,
    CURRENT_USER_UPDATE: C,
    THREAD_CREATE: x,
    THREAD_UPDATE: x,
    THREAD_DELETE: x,
    CHANNEL_UPDATES: M,
    CHANNEL_DELETE: U,
    THREAD_MEMBER_UPDATE: G,
    THREAD_MEMBERS_UPDATE: G,
    LOAD_MESSAGES_SUCCESS: F,
    MESSAGE_CREATE: F,
    MESSAGE_DELETE: F,
    MESSAGE_DELETE_BULK: F,
    MESSAGE_ACK: F,
    CHANNEL_ACK: F,
    CHANNEL_LOCAL_ACK: F,
    CHANNEL_SELECT: Y,
    PASSIVE_UPDATE_V2: B,
    WINDOW_FOCUS: V,
    UPDATE_CHANNEL_DIMENSIONS: P,
    TRY_ACK: V,
    BULK_ACK: V,
});
