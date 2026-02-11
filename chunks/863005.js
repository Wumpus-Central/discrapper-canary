"use strict";
n.d(t, { A: () => eo }), n(321073);
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
    h = n(970278),
    p = n(152007),
    g = n(826767),
    E = n(746080);
let A = {},
    I = {},
    T = {},
    y = {},
    S = {},
    v = {},
    C = null,
    b = {};
function N() {
    for (let e in ((A = {}), (S = {}), (I = {}), (T = {}), (y = {}), (C = _.A.getChannelId()), b)) clearTimeout(b[e]);
    (b = {}),
        h.A.forEachGuild((e) => {
            O(e);
        }),
        D();
}
function R(e) {
    for (let t in (delete A[e], delete S[e], delete I[e], delete T[e], delete y[e], O(e), T[e])) w(e, t);
}
function O(e) {
    let t = h.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            X(n);
            let e = u.A.getChannel(n);
            if (null == e) continue;
            let t = p.A.joinTimestamp(n);
            if (null != t) {
                let n = { channel: e, joinTimestamp: t.getTime() },
                    { isUnread: r, isRelevant: i, isTimedRelevant: a } = $(e);
                Z(A, e, n, !1), Z(S, e, i ? n : null, !1), Z(I, e, r ? n : null, !1), a && z(e, !0);
            } else {
                Z(T, e, e, !1);
                let t = d.Ay.isForumPostUnread(e.id);
                Z(y, e, t ? e : null, !1);
            }
        }
}
function D() {
    for (let e in ((v = {}), T)) for (let t in T[e]) w(e, t);
}
function L(e) {
    let t = u.A.getBasicChannel(e);
    null != t && l.wE.has(t.type) && w(t.guild_id, t.id);
}
function w(e, t) {
    let n = u.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == v[e] && (v[e] = {}), (v[e][t] = 0), null == T[e] || null == T[e][t])
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
    for (let n in T[e][t])
        t === C
            ? d.Ay.isNewForumThread(n, t, r) && v[e][t]++
            : f.default.compare(n, i) > 0 && !d.Ay.hasOpenedThread(n) && v[e][t]++;
}
function x(e, t, n) {
    if (null == t) return !1;
    let r = u.A.getChannel(n),
        i = p.A.joinTimestamp(n);
    if (null != r && h.A.isActive(e, t, n)) {
        if (null != i) {
            let e = { channel: r, joinTimestamp: i.getTime() },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = $(r);
            Z(A, r, e, !0),
                Z(S, r, n ? e : null, !0),
                Z(I, r, t ? e : null, !0),
                Z(T, r, null, !0),
                Z(y, r, null, !0),
                z(r, a);
        } else {
            let e = d.Ay.isForumPostUnread(r.id);
            Z(A, r, null, !0), Z(I, r, null, !0), Z(S, r, null, !0), Z(T, r, r, !0), Z(y, r, e ? r : null, !0), X(r.id);
        }
        w(e, t);
    } else Q(A, e, t, n), Q(S, e, t, n), Q(I, e, t, n), Q(T, e, t, n), Q(y, e, t, n), X(n), w(e, t);
}
function P(e) {
    return x(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function M(e) {
    let { channels: t } = e;
    for (let e of t) if ((0, o.qR)(e) !== U(e.guild_id, e.parent_id)) return void N();
    return !1;
}
function k(e) {
    let { channelId: t } = e,
        n = u.A.getChannel(t);
    return !!(null != n && n.isThread()) && x(n.guild_id, n.parent_id, n.id);
}
function U(e, t) {
    if (null == t) return !1;
    let n = A[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if ((0, o.qR)(r[e].channel)) return !0;
    }
    let i = T[e],
        a = null == i ? null : i[t];
    if (null != a) {
        for (let e in a) if ((0, o.qR)(a[e])) return !0;
    }
    return !1;
}
function G(e) {
    let { channel: t } = e,
        n = !1;
    return (
        null != t.guild_id &&
            null != t.parent_id &&
            (t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in S &&
                t.parent_id in S[t.guild_id] &&
                (f.default.keys(S[t.guild_id][t.parent_id]).forEach(X), delete S[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in y && t.parent_id in y[t.guild_id] && (delete y[t.guild_id][t.parent_id], (n = !0)),
            n && w(t.guild_id, t.parent_id)),
        n
    );
}
function F(e) {
    let t = u.A.getChannel(e.id);
    return null != t && !!h.A.isActive(e.guildId, t.parent_id, e.id) && x(t.guild_id, t.parent_id, t.id);
}
function V(e) {
    let t = u.A.getChannel(e.channelId);
    if (null == t) B();
    else {
        let { guild_id: e, parent_id: n } = t;
        if (!l.Le.has(t.type))
            if (Number(v[e]?.[t.id]) > 0) return w(e, t.id), !0;
            else return !1;
        if (null == n) return !1;
        if (J(A, t)) {
            let { isUnread: r, isRelevant: i, isTimedRelevant: a } = $(t);
            z(t, a);
            let s = J(I, t),
                o = J(S, t);
            if (r === s && i === o) return !1;
            let l = A[e][n][t.id],
                u = r ? l : null,
                c = i ? l : null;
            Z(I, t, u, !0), Z(S, t, c, !0), w(e, n);
        } else {
            let e = J(y, t),
                n = d.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            Z(y, t, n ? t : null, !0);
        }
    }
}
function B() {
    for (let e in ((I = {}), (S = {}), A))
        for (let t in A[e])
            for (let n in A[e][t]) {
                let r = A[e][t][n],
                    { isUnread: i, isRelevant: a, isTimedRelevant: s } = $(r.channel);
                i && Z(I, r.channel, r, !1), a && Z(S, r.channel, r, !1), z(r.channel, s);
            }
    for (let e in ((y = {}), T))
        for (let t in T[e])
            for (let n in T[e][t]) {
                let r = T[e][t][n];
                d.Ay.isForumPostUnread(n) && Z(y, r, r, !1);
            }
    D();
}
function j(e) {
    if (e.channels.length > 0) return R(e.guildId);
}
function H(e) {
    let { guild: t } = e;
    return R(t.id);
}
function Y(e) {
    let { guildId: t } = e;
    return R(t);
}
function W(e) {
    V(e), K();
}
function K() {
    let e = C;
    if ((C = _.A.getChannelId()) === e) return !1;
    L(e), L(C);
}
function $(e) {
    let t = d.Ay.getMentionCount(e.id) > 0,
        n = d.Ay.hasUnread(e.id) && !p.A.isMuted(e.id),
        r = e.hasFlag(E.lx.PINNED),
        i = e.isActiveThread(),
        a = i && (0, g.A)(e) > Date.now();
    return { isUnread: ((i || r) && n) || t, isRelevant: a || r || n || t, isTimedRelevant: a };
}
function z(e, t) {
    X(e.id), t && q(e);
}
function q(e) {
    b[e.id] = setTimeout(
        () => {
            let t = u.A.getChannel(e.id);
            null != t && s.h.dispatch({ type: "THREAD_UPDATE", channel: t });
        },
        (0, g.A)(e) - Date.now() + 1,
    );
}
function X(e) {
    e in b && (clearTimeout(b[e]), delete b[e]);
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
        (ee(e, t, n, r) &&
            ((e[t] = { ...e[t], [n]: { ...e[t][n] } }), delete e[t][n][r], i().isEmpty(e[t][n]) && delete e[t][n]));
}
function J(e, t) {
    return ee(e, t.guild_id, t.parent_id, t.id);
}
function ee(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let et = {},
    en = {},
    er = {},
    ei = {},
    ea = {};
class es extends a.Ay.Store {
    static displayName = "ActiveJoinedThreadsStore";
    initialize() {
        this.waitFor(h.A, u.A, c.A, p.A, d.Ay, _.A), this.syncWith([_.A], K);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in I && t in I[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        return e in T ? (T[e][t] ?? ei) : ei;
    }
    getActiveJoinedThreadsForParent(e, t) {
        return e in A ? (A[e][t] ?? er) : er;
    }
    getAllActiveJoinedThreads() {
        return A;
    }
    getActiveJoinedThreadsForGuild(e) {
        return A[e] ?? et;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        return I[e] ?? et;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        return this.getActiveJoinedUnreadThreadsForGuild(e)[t] ?? er;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        return S[e] ?? et;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        return this.getActiveJoinedRelevantThreadsForGuild(e)[t] ?? er;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        return T[e] ?? en;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        return y[e] ?? et;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        return this.getActiveUnjoinedUnreadThreadsForGuild(e)[t] ?? er;
    }
    getNewThreadCountsForGuild(e) {
        return v[e] ?? ea;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in A)
            if (n === e || null == e) for (let e in A[n]) for (let r in A[n][e]) t.push(A[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        return v[e]?.[t] ?? 0;
    }
    getActiveThreadCount(e, t) {
        return i().size(A[e]?.[t] ?? {}) + i().size(T[e]?.[t] ?? {});
    }
}
let eo = new es(s.h, {
    CONNECTION_OPEN: N,
    OVERLAY_INITIALIZE: N,
    THREAD_LIST_SYNC: Y,
    LOAD_THREADS_SUCCESS: N,
    LOAD_ARCHIVED_THREADS_SUCCESS: N,
    SEARCH_MESSAGES_SUCCESS: N,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
    GUILD_CREATE: H,
    GUILD_DELETE: N,
    CURRENT_USER_UPDATE: N,
    THREAD_CREATE: P,
    THREAD_UPDATE: P,
    THREAD_DELETE: P,
    CHANNEL_UPDATES: M,
    CHANNEL_DELETE: G,
    THREAD_MEMBER_UPDATE: F,
    THREAD_MEMBERS_UPDATE: F,
    LOAD_MESSAGES_SUCCESS: V,
    MESSAGE_CREATE: V,
    MESSAGE_DELETE: V,
    MESSAGE_DELETE_BULK: V,
    MESSAGE_ACK: V,
    CHANNEL_ACK: V,
    CHANNEL_LOCAL_ACK: V,
    CHANNEL_SELECT: W,
    PASSIVE_UPDATE_V2: j,
    WINDOW_FOCUS: B,
    UPDATE_CHANNEL_DIMENSIONS: k,
    TRY_ACK: B,
    BULK_ACK: B,
});
