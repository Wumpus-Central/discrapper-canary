"use strict";
n.d(t, { A: () => es }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
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
    g = n(746080);
let E = {},
    A = {},
    I = {},
    T = {},
    y = {},
    S = {},
    v = null,
    C = {};
function b() {
    for (let e in ((E = {}), (y = {}), (A = {}), (I = {}), (T = {}), (v = _.A.getChannelId()), C)) clearTimeout(C[e]);
    (C = {}),
        p.A.forEachGuild((e) => {
            R(e);
        }),
        O();
}
function N(e) {
    for (let t in (delete E[e], delete y[e], delete A[e], delete I[e], delete T[e], R(e), I[e])) L(e, t);
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
                    { isUnread: r, isRelevant: i, isTimedRelevant: a } = K(e);
                Z(E, e, n, !1), Z(y, e, i ? n : null, !1), Z(A, e, r ? n : null, !1), a && z(e, !0);
            } else {
                Z(I, e, e, !1);
                let t = d.Ay.isForumPostUnread(e.id);
                Z(T, e, t ? e : null, !1);
            }
        }
}
function O() {
    for (let e in ((S = {}), I)) for (let t in I[e]) L(e, t);
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
        (null == S[e] && (S[e] = {}), (S[e][t] = 0), null == I[e] || null == I[e][t])
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
            ? d.Ay.isNewForumThread(n, t, r) && S[e][t]++
            : f.default.compare(n, i) > 0 && !d.Ay.hasOpenedThread(n) && S[e][t]++;
}
function w(e, t, n) {
    if (null == t) return !1;
    let r = u.A.getChannel(n),
        i = h.A.joinTimestamp(n);
    if (null != r && p.A.isActive(e, t, n)) {
        if (null != i) {
            let e = { channel: r, joinTimestamp: i.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = K(r);
            Z(E, r, e, !0),
                Z(y, r, n ? e : null, !0),
                Z(A, r, t ? e : null, !0),
                Z(I, r, null, !0),
                Z(T, r, null, !0),
                z(r, a);
        } else {
            let e = d.Ay.isForumPostUnread(r.id);
            Z(E, r, null, !0), Z(A, r, null, !0), Z(y, r, null, !0), Z(I, r, r, !0), Z(T, r, e ? r : null, !0), q(r.id);
        }
        L(e, t);
    } else Q(E, e, t, n), Q(y, e, t, n), Q(A, e, t, n), Q(I, e, t, n), Q(T, e, t, n), q(n), L(e, t);
}
function x(e) {
    return w(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function P(e) {
    let { channels: t } = e;
    for (let e of t) if ((0, o.qR)(e) !== k(e.guild_id, e.parent_id)) return void b();
    return !1;
}
function M(e) {
    let { channelId: t } = e,
        n = u.A.getChannel(t);
    return !!(null != n && n.isThread()) && w(n.guild_id, n.parent_id, n.id);
}
function k(e, t) {
    if (null == t) return !1;
    let n = E[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if ((0, o.qR)(r[e].channel)) return !0;
    }
    let i = I[e],
        a = null == i ? null : i[t];
    if (null != a) {
        for (let e in a) if ((0, o.qR)(a[e])) return !0;
    }
    return !1;
}
function U(e) {
    let { channel: t } = e,
        n = !1;
    return (
        null != t.guild_id &&
            null != t.parent_id &&
            (t.guild_id in E && t.parent_id in E[t.guild_id] && (delete E[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in y &&
                t.parent_id in y[t.guild_id] &&
                (f.default.keys(y[t.guild_id][t.parent_id]).forEach(q), delete y[t.guild_id][t.parent_id], (n = !0)),
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
function V(e) {
    let t = u.A.getChannel(e.channelId);
    if (null == t) F();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!l.Le.has(t.type))
            if (Number(S[e]?.[t.id]) > 0) return L(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (X(E, t)) {
            let { isUnread: r, isRelevant: i, isTimedRelevant: a } = K(t);
            z(t, a);
            let s = X(A, t),
                o = X(y, t);
            if (r === s && i === o) return !1;
            let l = E[e][n][t.id],
                u = r ? l : null,
                c = i ? l : null;
            Z(A, t, u, !0), Z(y, t, c, !0), L(e, n);
        } else {
            let e = X(T, t),
                n = d.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            Z(T, t, n ? t : null, !0);
        }
    }
}
function F() {
    for (let e in ((A = {}), (y = {}), E))
        for (let t in E[e])
            for (let n in E[e][t]) {
                let r = E[e][t][n],
                    { isUnread: i, isRelevant: a, isTimedRelevant: s } = K(r.channel);
                i && Z(A, r.channel, r, !1), a && Z(y, r.channel, r, !1), z(r.channel, s);
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
    if (e.channels.length > 0) return N(e.guildId);
}
function j(e) {
    let { guild: t } = e;
    return N(t.id);
}
function H(e) {
    let { guildId: t } = e;
    return N(t);
}
function Y(e) {
    V(e), W();
}
function W() {
    let e = v;
    if ((v = _.A.getChannelId()) === e) return !1;
    D(e), D(v);
}
function K(e) {
    let t = d.Ay.getMentionCount(e.id) > 0,
        n = d.Ay.hasUnread(e.id) && !h.A.isMuted(e.id),
        r = e.hasFlag(g.lx.PINNED),
        i = e.isActiveThread(),
        a = i && (0, m.A)(e) > Date.now();
    return { isUnread: ((i || r) && n) || t, isRelevant: a || r || n || t, isTimedRelevant: a };
}
function z(e, t) {
    q(e.id), t && $(e);
}
function $(e) {
    C[e.id] = setTimeout(
        () => {
            let t = u.A.getChannel(e.id);
            null != t && s.h.dispatch({ type: "THREAD_UPDATE", channel: t });
        },
        (0, m.A)(e) - Date.now() + 1,
    );
}
function q(e) {
    e in C && (clearTimeout(C[e]), delete C[e]);
}
function Z(e, t, n, r) {
    let { guild_id: a, parent_id: s, id: o } = t;
    null != a &&
        null != s &&
        null != o &&
        (a in e || (e[a] = {}),
        s in e[a] || (e[a][s] = {}),
        r && (e[a] = { ...e[a], [s]: { ...e[a][s] } }),
        null === n ? (delete e[a][s][o], i().isEmpty(e[a][s]) && delete e[a][s]) : (e[a][s][o] = n));
}
function Q(e, t, n, r) {
    null == t ||
        null == n ||
        null == r ||
        (J(e, t, n, r) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][r], i().isEmpty(e[t][n]) && delete e[t][n]));
}
function X(e, t) {
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
class ea extends a.Ay.Store {
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
        return e in E ? (E[e][t] ?? en) : en;
    }
    getAllActiveJoinedThreads() {
        return E;
    }
    getActiveJoinedThreadsForGuild(e) {
        return E[e] ?? ee;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return A[e] ?? ee;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? en;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return y[e] ?? ee;
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
        return S[e] ?? ei;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in E)
            if (n === e || null == e) for (let e in E[n]) for (let r in E[n][e]) t.push(E[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        return S[e]?.[t] ?? 0;
    }
    getActiveThreadCount(e, t) {
        return i().size(E[e]?.[t] ?? {}) + i().size(I[e]?.[t] ?? {});
    }
}
let es = new ea(s.h, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: b,
    THREAD_LIST_SYNC: H,
    LOAD_THREADS_SUCCESS: b,
    LOAD_ARCHIVED_THREADS_SUCCESS: b,
    SEARCH_MESSAGES_SUCCESS: b,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: b,
    GUILD_CREATE: j,
    GUILD_DELETE: b,
    CURRENT_USER_UPDATE: b,
    THREAD_CREATE: x,
    THREAD_UPDATE: x,
    THREAD_DELETE: x,
    CHANNEL_UPDATES: P,
    CHANNEL_DELETE: U,
    THREAD_MEMBER_UPDATE: G,
    THREAD_MEMBERS_UPDATE: G,
    LOAD_MESSAGES_SUCCESS: V,
    MESSAGE_CREATE: V,
    MESSAGE_DELETE: V,
    MESSAGE_DELETE_BULK: V,
    MESSAGE_ACK: V,
    CHANNEL_ACK: V,
    CHANNEL_LOCAL_ACK: V,
    CHANNEL_SELECT: Y,
    PASSIVE_UPDATE_V2: B,
    WINDOW_FOCUS: F,
    UPDATE_CHANNEL_DIMENSIONS: M,
    TRY_ACK: F,
    BULK_ACK: F,
});
