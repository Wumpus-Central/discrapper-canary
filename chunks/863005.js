"use strict";
n.d(t, { A: () => Q }), n(321073);
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
    E = n(826767),
    m = n(746080);
let g = {},
    A = {},
    I = {},
    T = {},
    S = {},
    y = {},
    N = null,
    v = {};
function C() {
    for (let e in ((g = {}), (S = {}), (A = {}), (I = {}), (T = {}), (N = _.A.getChannelId()), v)) clearTimeout(v[e]);
    (v = {}),
        p.A.forEachGuild((e) => {
            R(e);
        }),
        b();
}
function O(e) {
    for (let t in (delete g[e], delete S[e], delete A[e], delete I[e], delete T[e], R(e), I[e])) L(e, t);
}
function R(e) {
    let t = p.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            V(n);
            let e = u.A.getChannel(n);
            if (null == e) continue;
            let t = h.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: r, isRelevant: i, isTimedRelevant: s } = G(e);
                B(g, e, n, !1), B(S, e, i ? n : null, !1), B(A, e, r ? n : null, !1), s && F(e, !0);
            } else {
                B(I, e, e, !1);
                let t = d.Ay.isForumPostUnread(e.id);
                B(T, e, t ? e : null, !1);
            }
        }
}
function b() {
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
        t === N
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
                { isUnread: t, isRelevant: n, isTimedRelevant: s } = G(r);
            B(g, r, e, !0),
                B(S, r, n ? e : null, !0),
                B(A, r, t ? e : null, !0),
                B(I, r, null, !0),
                B(T, r, null, !0),
                F(r, s);
        } else {
            let e = d.Ay.isForumPostUnread(r.id);
            B(g, r, null, !0), B(A, r, null, !0), B(S, r, null, !0), B(I, r, r, !0), B(T, r, e ? r : null, !0), V(r.id);
        }
        L(e, t);
    } else H(g, e, t, n), H(S, e, t, n), H(A, e, t, n), H(I, e, t, n), H(T, e, t, n), V(n), L(e, t);
}
function M(e) {
    return w(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function P(e) {
    let t = u.A.getChannel(e.id);
    return null != t && !!p.A.isActive(e.guildId, t.parent_id, e.id) && w(t.guild_id, t.parent_id, t.id);
}
function x(e) {
    let t = u.A.getChannel(e.channelId);
    if (null == t) k();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!l.Le.has(t.type))
            if (Number(y[e]?.[t.id]) > 0) return L(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (j(g, t)) {
            let { isUnread: r, isRelevant: i, isTimedRelevant: s } = G(t);
            F(t, s);
            let a = j(A, t),
                o = j(S, t);
            if (r === a && i === o) return !1;
            let l = g[e][n][t.id],
                u = r ? l : null,
                c = i ? l : null;
            B(A, t, u, !0), B(S, t, c, !0), L(e, n);
        } else {
            let e = j(T, t),
                n = d.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            B(T, t, n ? t : null, !0);
        }
    }
}
function k() {
    for (let e in ((A = {}), (S = {}), g))
        for (let t in g[e])
            for (let n in g[e][t]) {
                let r = g[e][t][n],
                    { isUnread: i, isRelevant: s, isTimedRelevant: a } = G(r.channel);
                i && B(A, r.channel, r, !1), s && B(S, r.channel, r, !1), F(r.channel, a);
            }
    for (let e in ((T = {}), I))
        for (let t in I[e])
            for (let n in I[e][t]) {
                let r = I[e][t][n];
                d.Ay.isForumPostUnread(n) && B(T, r, r, !1);
            }
    b();
}
function U() {
    let e = N;
    if ((N = _.A.getChannelId()) === e) return !1;
    D(e), D(N);
}
function G(e) {
    let t = d.Ay.getMentionCount(e.id) > 0,
        n = d.Ay.hasUnread(e.id) && !h.A.isMuted(e.id),
        r = e.hasFlag(m.lx.PINNED),
        i = e.isActiveThread(),
        s = i && (0, E.A)(e) > Date.now();
    return { isUnread: ((i || r) && n) || t, isRelevant: s || r || n || t, isTimedRelevant: s };
}
function F(e, t) {
    var n;
    V(e.id),
        t &&
            (v[(n = e).id] = setTimeout(
                () => {
                    let e = u.A.getChannel(n.id);
                    null != e && a.h.dispatch({ type: "THREAD_UPDATE", channel: e });
                },
                (0, E.A)(n) - Date.now() + 1,
            ));
}
function V(e) {
    e in v && (clearTimeout(v[e]), delete v[e]);
}
function B(e, t, n, r) {
    let { guild_id: s, parent_id: a, id: o } = t;
    null != s &&
        null != a &&
        null != o &&
        (s in e || (e[s] = {}),
        a in e[s] || (e[s][a] = {}),
        r && (e[s] = { ...e[s], [a]: { ...e[s][a] } }),
        null === n ? (delete e[s][a][o], i().isEmpty(e[s][a]) && delete e[s][a]) : (e[s][a][o] = n));
}
function H(e, t, n, r) {
    null == t ||
        null == n ||
        null == r ||
        (Y(e, t, n, r) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][r], i().isEmpty(e[t][n]) && delete e[t][n]));
}
function j(e, t) {
    return Y(e, t.guild_id, t.parent_id, t.id);
}
function Y(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let W = {},
    K = {},
    $ = {},
    z = {},
    q = {};
class X extends s.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(p.A, u.A, c.A, h.A, d.Ay, _.A), this.syncWith([_.A], U);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in A && t in A[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in I ? (I[e][t] ?? z) : z;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in g ? (g[e][t] ?? $) : $;
    }
    getAllActiveJoinedThreads() {
        return g;
    }
    getActiveJoinedThreadsForGuild(e) {
        return g[e] ?? W;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return A[e] ?? W;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? $;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return S[e] ?? W;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? $;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return I[e] ?? K;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        return T[e] ?? W;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        return this.getActiveUnjoinedUnreadThreadsForGuild(e)[t] ?? $;
    }
    getNewThreadCountsForGuild(e) {
        return y[e] ?? q;
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
let Q = new X(a.h, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        return O(t);
    },
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    SEARCH_MESSAGES_SUCCESS: C,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: C,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return O(t.id);
    },
    GUILD_DELETE: C,
    CURRENT_USER_UPDATE: C,
    THREAD_CREATE: M,
    THREAD_UPDATE: M,
    THREAD_DELETE: M,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (
                (0, o.qR)(e) !==
                (function (e, t) {
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
                })(e.guild_id, e.parent_id)
            )
                return void C();
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        return (
            null != t.guild_id &&
                null != t.parent_id &&
                (t.guild_id in g && t.parent_id in g[t.guild_id] && (delete g[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in S &&
                    t.parent_id in S[t.guild_id] &&
                    (f.default.keys(S[t.guild_id][t.parent_id]).forEach(V),
                    delete S[t.guild_id][t.parent_id],
                    (n = !0)),
                t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
                n && L(t.guild_id, t.parent_id)),
            n
        );
    },
    THREAD_MEMBER_UPDATE: P,
    THREAD_MEMBERS_UPDATE: P,
    LOAD_MESSAGES_SUCCESS: x,
    MESSAGE_CREATE: x,
    MESSAGE_DELETE: x,
    MESSAGE_DELETE_BULK: x,
    MESSAGE_ACK: x,
    CHANNEL_ACK: x,
    CHANNEL_LOCAL_ACK: x,
    CHANNEL_SELECT: function (e) {
        x(e), U();
    },
    PASSIVE_UPDATE_V2: function (e) {
        if (e.channels.length > 0) return O(e.guildId);
    },
    WINDOW_FOCUS: k,
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t } = e,
            n = u.A.getChannel(t);
        return !!(null != n && n.isThread()) && w(n.guild_id, n.parent_id, n.id);
    },
    TRY_ACK: k,
    BULK_ACK: k,
});
