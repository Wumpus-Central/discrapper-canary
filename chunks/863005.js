"use strict";
n.d(t, { A: () => X }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(323073),
    o = n(95701),
    d = n(734057),
    c = n(71393),
    u = n(568548),
    _ = n(309010),
    E = n(935208),
    A = n(970278),
    h = n(152007),
    I = n(826767),
    f = n(746080);
let p = {},
    T = {},
    m = {},
    g = {},
    S = {},
    N = {},
    C = null,
    O = {};
function R() {
    for (let e in ((p = {}), (S = {}), (T = {}), (m = {}), (g = {}), (C = _.Ay.getChannelId()), O)) clearTimeout(O[e]);
    (O = {}),
        A.A.forEachGuild((e) => {
            D(e);
        }),
        y();
}
function L(e) {
    for (let t in (delete p[e], delete S[e], delete T[e], delete m[e], delete g[e], D(e), m[e])) b(e, t);
}
function D(e) {
    let t = A.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            V(n);
            let e = d.A.getChannel(n);
            if (null == e) continue;
            let t = h.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: i, isRelevant: r, isTimedRelevant: a } = k(e);
                B(p, e, n, !1), B(S, e, r ? n : null, !1), B(T, e, i ? n : null, !1), a && F(e, !0);
            } else {
                B(m, e, e, !1);
                let t = u.Ay.isForumPostUnread(e.id);
                B(g, e, t ? e : null, !1);
            }
        }
}
function y() {
    for (let e in ((N = {}), m)) for (let t in m[e]) b(e, t);
}
function v(e) {
    let t = d.A.getBasicChannel(e);
    null != t && o.wE.has(t.type) && b(t.guild_id, t.id);
}
function b(e, t) {
    let n = d.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == N[e] && (N[e] = {}), (N[e][t] = 0), null == m[e] || null == m[e][t])
    )
        return;
    let i = c.A.getGuild(e);
    if (null == i) return;
    let r = u.Ay.getTrackedAckMessageId(t);
    if (null == r) {
        let e = Date.now();
        null != i.joinedAt &&
            (i.joinedAt instanceof Date
                ? (e = i.joinedAt.getTime())
                : "string" == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())),
            (r = E.default.fromTimestamp(e));
    }
    for (let n in m[e][t])
        t === C
            ? u.Ay.isNewForumThread(n, t, i) && N[e][t]++
            : E.default.compare(n, r) > 0 && !u.Ay.hasOpenedThread(n) && N[e][t]++;
}
function M(e, t, n) {
    if (null == t) return !1;
    let i = d.A.getChannel(n),
        r = h.A.joinTimestamp(n);
    if (null != i && A.A.isActive(e, t, n)) {
        if (null != r) {
            let e = { channel: i, joinTimestamp: r.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = k(i);
            B(p, i, e, !0),
                B(S, i, n ? e : null, !0),
                B(T, i, t ? e : null, !0),
                B(m, i, null, !0),
                B(g, i, null, !0),
                F(i, a);
        } else {
            let e = u.Ay.isForumPostUnread(i.id);
            B(p, i, null, !0), B(T, i, null, !0), B(S, i, null, !0), B(m, i, i, !0), B(g, i, e ? i : null, !0), V(i.id);
        }
        b(e, t);
    } else H(p, e, t, n), H(S, e, t, n), H(T, e, t, n), H(m, e, t, n), H(g, e, t, n), V(n), b(e, t);
}
function P(e) {
    return M(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function U(e) {
    let t = d.A.getChannel(e.id);
    return null != t && !!A.A.isActive(e.guildId, t.parent_id, e.id) && M(t.guild_id, t.parent_id, t.id);
}
function w(e) {
    let t = d.A.getChannel(e.channelId);
    if (null == t) G();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!o.Le.has(t.type))
            if (Number(N[e]?.[t.id]) > 0) return b(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (j(p, t)) {
            let { isUnread: i, isRelevant: r, isTimedRelevant: a } = k(t);
            F(t, a);
            let s = j(T, t),
                l = j(S, t);
            if (i === s && r === l) return !1;
            let o = p[e][n][t.id],
                d = i ? o : null,
                c = r ? o : null;
            B(T, t, d, !0), B(S, t, c, !0), b(e, n);
        } else {
            let e = j(g, t),
                n = u.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            B(g, t, n ? t : null, !0);
        }
    }
}
function G() {
    for (let e in ((T = {}), (S = {}), p))
        for (let t in p[e])
            for (let n in p[e][t]) {
                let i = p[e][t][n],
                    { isUnread: r, isRelevant: a, isTimedRelevant: s } = k(i.channel);
                r && B(T, i.channel, i, !1), a && B(S, i.channel, i, !1), F(i.channel, s);
            }
    for (let e in ((g = {}), m))
        for (let t in m[e])
            for (let n in m[e][t]) {
                let i = m[e][t][n];
                u.Ay.isForumPostUnread(n) && B(g, i, i, !1);
            }
    y();
}
function x() {
    let e = C;
    if ((C = _.Ay.getChannelId()) === e) return !1;
    v(e), v(C);
}
function k(e) {
    let t = u.Ay.getMentionCount(e.id) > 0,
        n = u.Ay.hasUnread(e.id) && !h.A.isMuted(e.id),
        i = e.hasFlag(f.lx.PINNED),
        r = e.isActiveThread(),
        a = r && (0, I.A)(e) > Date.now(),
        s = _.Ay.getVoiceChannelId() === e.id;
    return { isUnread: ((r || i) && n) || t, isRelevant: a || i || n || t || s, isTimedRelevant: a };
}
function F(e, t) {
    var n;
    V(e.id),
        t &&
            (O[(n = e).id] = setTimeout(
                () => {
                    let e = d.A.getChannel(n.id);
                    null != e && s.h.dispatch({ type: "THREAD_UPDATE", channel: e });
                },
                (0, I.A)(n) - Date.now() + 1,
            ));
}
function V(e) {
    e in O && (clearTimeout(O[e]), delete O[e]);
}
function B(e, t, n, i) {
    let { guild_id: a, parent_id: s, id: l } = t;
    null != a &&
        null != s &&
        null != l &&
        (a in e || (e[a] = {}),
        s in e[a] || (e[a][s] = {}),
        i && (e[a] = { ...e[a], [s]: { ...e[a][s] } }),
        null === n ? (delete e[a][s][l], r().isEmpty(e[a][s]) && delete e[a][s]) : (e[a][s][l] = n));
}
function H(e, t, n, i) {
    null == t ||
        null == n ||
        null == i ||
        (W(e, t, n, i) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][i], r().isEmpty(e[t][n]) && delete e[t][n]));
}
function j(e, t) {
    return W(e, t.guild_id, t.parent_id, t.id);
}
function W(e, t, n, i) {
    return t in e && n in e[t] && i in e[t][n];
}
let Y = {},
    K = {},
    $ = {},
    z = {},
    q = {};
class Z extends a.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(A.A, d.A, c.A, h.A, u.Ay, _.Ay), this.syncWith([_.Ay], x);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in T && t in T[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in m ? (m[e][t] ?? z) : z;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in p ? (p[e][t] ?? $) : $;
    }
    getAllActiveJoinedThreads() {
        return p;
    }
    getActiveJoinedThreadsForGuild(e) {
        return p[e] ?? Y;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return T[e] ?? Y;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? $;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return S[e] ?? Y;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? $;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return m[e] ?? K;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        return g[e] ?? Y;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        return this.getActiveUnjoinedUnreadThreadsForGuild(e)[t] ?? $;
    }
    getNewThreadCountsForGuild(e) {
        return N[e] ?? q;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in p)
            if (n === e || null == e) for (let e in p[n]) for (let i in p[n][e]) t.push(p[n][e][i].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        return N[e]?.[t] ?? 0;
    }
    getActiveThreadCount(e, t) {
        return r().size(p[e]?.[t] ?? {}) + r().size(m[e]?.[t] ?? {});
    }
}
let X = new Z(s.h, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: R,
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        return L(t);
    },
    LOAD_THREADS_SUCCESS: R,
    LOAD_ARCHIVED_THREADS_SUCCESS: R,
    SEARCH_MESSAGES_SUCCESS: R,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: R,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return L(t.id);
    },
    GUILD_DELETE: R,
    CURRENT_USER_UPDATE: R,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = d.A.getChannel(t);
        if (!n?.isThread()) return !1;
        M(n.guild_id, n.parent_id, n.id);
    },
    THREAD_CREATE: P,
    THREAD_UPDATE: P,
    THREAD_DELETE: P,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (
                (0, l.qR)(e) !==
                (function (e, t) {
                    if (null == t) return !1;
                    let n = p[e],
                        i = null == n ? null : n[t];
                    if (null != i) {
                        for (let e in i) if ((0, l.qR)(i[e].channel)) return !0;
                    }
                    let r = m[e],
                        a = null == r ? null : r[t];
                    if (null != a) {
                        for (let e in a) if ((0, l.qR)(a[e])) return !0;
                    }
                    return !1;
                })(e.guild_id, e.parent_id)
            )
                return void R();
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        return (
            null != t.guild_id &&
                null != t.parent_id &&
                (t.guild_id in p && t.parent_id in p[t.guild_id] && (delete p[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in S &&
                    t.parent_id in S[t.guild_id] &&
                    (E.default.keys(S[t.guild_id][t.parent_id]).forEach(V),
                    delete S[t.guild_id][t.parent_id],
                    (n = !0)),
                t.guild_id in m && t.parent_id in m[t.guild_id] && (delete m[t.guild_id][t.parent_id], (n = !0)),
                t.guild_id in g && t.parent_id in g[t.guild_id] && (delete g[t.guild_id][t.parent_id], (n = !0)),
                n && b(t.guild_id, t.parent_id)),
            n
        );
    },
    THREAD_MEMBER_UPDATE: U,
    THREAD_MEMBERS_UPDATE: U,
    LOAD_MESSAGES_SUCCESS: w,
    MESSAGE_CREATE: w,
    MESSAGE_DELETE: w,
    MESSAGE_DELETE_BULK: w,
    MESSAGE_ACK: w,
    CHANNEL_ACK: w,
    CHANNEL_LOCAL_ACK: w,
    CHANNEL_SELECT: function (e) {
        w(e), x();
    },
    PASSIVE_UPDATE_V2: function (e) {
        if (e.channels.length > 0) return L(e.guildId);
    },
    WINDOW_FOCUS: G,
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let { channelId: t } = e,
            n = d.A.getChannel(t);
        return !!(null != n && n.isThread()) && M(n.guild_id, n.parent_id, n.id);
    },
    TRY_ACK: G,
    BULK_ACK: G,
});
