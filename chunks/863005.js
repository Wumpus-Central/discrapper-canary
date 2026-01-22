n.d(t, { A: () => eu }), n(896048), n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(323073),
    c = n(95701),
    u = n(734057),
    d = n(71393),
    f = n(222823),
    p = n(309010),
    _ = n(661191),
    h = n(970278),
    m = n(152007),
    g = n(826767),
    E = n(746080);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = {},
    S = {},
    I = {},
    T = {},
    C = {},
    N = {},
    R = null,
    w = {};
function P() {
    for (let e in ((v = {}), (C = {}), (S = {}), (I = {}), (T = {}), (R = p.A.getChannelId()), w)) clearTimeout(w[e]);
    (w = {}),
        h.A.forEachGuild((e) => {
            x(e);
        }),
        L();
}
function D(e) {
    for (let t in (delete v[e], delete C[e], delete S[e], delete I[e], delete T[e], x(e), I[e])) M(e, t);
}
function x(e) {
    let t = h.A.getThreadsForGuild(e);
    for (let e in t)
        for (let n in t[e]) {
            J(n);
            let e = u.A.getChannel(n);
            if (null == e) continue;
            let t = m.A.joinTimestamp(n);
            if (null != t) {
                let n = {
                        channel: e,
                        joinTimestamp: t.getTime(),
                    },
                    { isUnread: r, isRelevant: i, isTimedRelevant: a } = Z(e);
                ee(v, e, n, !1), ee(C, e, i ? n : null, !1), ee(S, e, r ? n : null, !1), a && Q(e, !0);
            } else {
                ee(I, e, e, !1);
                let t = f.Ay.isForumPostUnread(e.id);
                ee(T, e, t ? e : null, !1);
            }
        }
}
function L() {
    for (let e in ((N = {}), I)) for (let t in I[e]) M(e, t);
}
function j(e) {
    let t = u.A.getBasicChannel(e);
    null != t && c.wE.has(t.type) && M(t.guild_id, t.id);
}
function M(e, t) {
    let n = u.A.getChannel(t);
    if (
        null == n ||
        !n.isForumLikeChannel() ||
        (null == N[e] && (N[e] = {}), (N[e][t] = 0), null == I[e] || null == I[e][t])
    )
        return;
    let r = d.A.getGuild(e);
    if (null == r) return;
    let i = f.Ay.getTrackedAckMessageId(t);
    if (null == i) {
        let e = Date.now();
        null != r.joinedAt &&
            (r.joinedAt instanceof Date
                ? (e = r.joinedAt.getTime())
                : "string" == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())),
            (i = _.default.fromTimestamp(e));
    }
    for (let n in I[e][t])
        t === R
            ? f.Ay.isNewForumThread(n, t, r) && N[e][t]++
            : _.default.compare(n, i) > 0 && !f.Ay.hasOpenedThread(n) && N[e][t]++;
}
function k(e, t, n) {
    if (null == t) return !1;
    let r = u.A.getChannel(n),
        i = m.A.joinTimestamp(n);
    if (null != r && h.A.isActive(e, t, n)) {
        if (null != i) {
            let e = {
                    channel: r,
                    joinTimestamp: i.getTime(),
                },
                { isUnread: t, isRelevant: n, isTimedRelevant: a } = Z(r);
            ee(v, r, e, !0),
                ee(C, r, n ? e : null, !0),
                ee(S, r, t ? e : null, !0),
                ee(I, r, null, !0),
                ee(T, r, null, !0),
                Q(r, a);
        } else {
            let e = f.Ay.isForumPostUnread(r.id);
            ee(v, r, null, !0),
                ee(S, r, null, !0),
                ee(C, r, null, !0),
                ee(I, r, r, !0),
                ee(T, r, e ? r : null, !0),
                J(r.id);
        }
        M(e, t);
    } else et(v, e, t, n), et(C, e, t, n), et(S, e, t, n), et(I, e, t, n), et(T, e, t, n), J(n), M(e, t);
}
function U(e) {
    return k(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function G(e) {
    let { channels: t } = e;
    for (let e of t) if ((0, l.qR)(e) !== V(e.guild_id, e.parent_id)) return void P();
    return !1;
}
function V(e, t) {
    if (null == t) return !1;
    let n = v[e],
        r = null == n ? null : n[t];
    if (null != r) {
        for (let e in r) if ((0, l.qR)(r[e].channel)) return !0;
    }
    let i = I[e],
        a = null == i ? null : i[t];
    if (null != a) {
        for (let e in a) if ((0, l.qR)(a[e])) return !0;
    }
    return !1;
}
function F(e) {
    let { channel: t } = e,
        n = !1;
    return (
        null != t.guild_id &&
            null != t.parent_id &&
            (t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in C &&
                t.parent_id in C[t.guild_id] &&
                (_.default.keys(C[t.guild_id][t.parent_id]).forEach(J), delete C[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in I && t.parent_id in I[t.guild_id] && (delete I[t.guild_id][t.parent_id], (n = !0)),
            t.guild_id in T && t.parent_id in T[t.guild_id] && (delete T[t.guild_id][t.parent_id], (n = !0)),
            n && M(t.guild_id, t.parent_id)),
        n
    );
}
function B(e) {
    let t = u.A.getChannel(e.id);
    return null != t && !!h.A.isActive(e.guildId, t.parent_id, e.id) && k(t.guild_id, t.parent_id, t.id);
}
function H(e) {
    let t = u.A.getChannel(e.channelId);
    if (null == t) Y();
    else {
        let { guild_id: e, parent_id: r } = t;
        if (!c.Le.has(t.type)) {
            var n;
            return Number(null == (n = N[e]) ? void 0 : n[t.id]) > 0 && (M(e, t.id), !0);
        }
        if (null == r) return !1;
        if (en(v, t)) {
            let { isUnread: n, isRelevant: i, isTimedRelevant: a } = Z(t);
            Q(t, a);
            let s = en(S, t),
                o = en(C, t);
            if (n === s && i === o) return !1;
            let l = v[e][r][t.id],
                c = n ? l : null,
                u = i ? l : null;
            ee(S, t, c, !0), ee(C, t, u, !0), M(e, r);
        } else {
            let e = en(T, t),
                n = f.Ay.isForumPostUnread(t.id);
            if (n === e) return !1;
            ee(T, t, n ? t : null, !0);
        }
    }
}
function Y() {
    for (let e in ((S = {}), (C = {}), v))
        for (let t in v[e])
            for (let n in v[e][t]) {
                let r = v[e][t][n],
                    { isUnread: i, isRelevant: a, isTimedRelevant: s } = Z(r.channel);
                i && ee(S, r.channel, r, !1), a && ee(C, r.channel, r, !1), Q(r.channel, s);
            }
    for (let e in ((T = {}), I))
        for (let t in I[e])
            for (let n in I[e][t]) {
                let r = I[e][t][n];
                f.Ay.isForumPostUnread(n) && ee(T, r, r, !1);
            }
    L();
}
function W(e) {
    if (e.channels.length > 0) return D(e.guildId);
}
function K(e) {
    let { guild: t } = e;
    return D(t.id);
}
function z(e) {
    let { guildId: t } = e;
    return D(t);
}
function q(e) {
    H(e), X();
}
function X() {
    let e = R;
    if ((R = p.A.getChannelId()) === e) return !1;
    j(e), j(R);
}
function Z(e) {
    let t = f.Ay.getMentionCount(e.id) > 0,
        n = f.Ay.hasUnread(e.id) && !m.A.isMuted(e.id),
        r = e.hasFlag(E.lx.PINNED),
        i = e.isActiveThread(),
        a = i && (0, g.A)(e) > Date.now();
    return {
        isUnread: ((i || r) && n) || t,
        isRelevant: a || r || n || t,
        isTimedRelevant: a,
    };
}
function Q(e, t) {
    J(e.id), t && $(e);
}
function $(e) {
    w[e.id] = setTimeout(
        () => {
            let t = u.A.getChannel(e.id);
            null != t &&
                o.h.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t,
                });
        },
        (0, g.A)(e) - Date.now() + 1,
    );
}
function J(e) {
    e in w && (clearTimeout(w[e]), delete w[e]);
}
function ee(e, t, n, r) {
    let { guild_id: i, parent_id: s, id: o } = t;
    null != i &&
        null != s &&
        null != o &&
        (i in e || (e[i] = {}),
        s in e[i] || (e[i][s] = {}),
        r && (e[i] = A(y({}, e[i]), { [s]: y({}, e[i][s]) })),
        null === n ? (delete e[i][s][o], a().isEmpty(e[i][s]) && delete e[i][s]) : (e[i][s][o] = n));
}
function et(e, t, n, r) {
    null == t ||
        null == n ||
        null == r ||
        (er(e, t, n, r) &&
            ((e[t] = A(y({}, e[t]), { [n]: y({}, e[t][n]) })),
            delete e[t][n][r],
            a().isEmpty(e[t][n]) && delete e[t][n]));
}
function en(e, t) {
    return er(e, t.guild_id, t.parent_id, t.id);
}
function er(e, t, n, r) {
    return t in e && n in e[t] && r in e[t][n];
}
let ei = {},
    ea = {},
    es = {},
    eo = {},
    el = {};
class ec extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(h.A, u.A, d.A, m.A, f.Ay, p.A), this.syncWith([p.A], X);
    }
    hasActiveJoinedUnreadThreads(e, t) {
        return e in S && t in S[e];
    }
    getActiveUnjoinedThreadsForParent(e, t) {
        var n;
        return e in I && null != (n = I[e][t]) ? n : eo;
    }
    getActiveJoinedThreadsForParent(e, t) {
        var n;
        return e in v && null != (n = v[e][t]) ? n : es;
    }
    getAllActiveJoinedThreads() {
        return v;
    }
    getActiveJoinedThreadsForGuild(e) {
        var t;
        return null != (t = v[e]) ? t : ei;
    }
    getActiveJoinedUnreadThreadsForGuild(e) {
        var t;
        return null != (t = S[e]) ? t : ei;
    }
    getActiveJoinedUnreadThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) ? n : es;
    }
    getActiveJoinedRelevantThreadsForGuild(e) {
        var t;
        return null != (t = C[e]) ? t : ei;
    }
    getActiveJoinedRelevantThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) ? n : es;
    }
    getActiveUnjoinedThreadsForGuild(e) {
        var t;
        return null != (t = I[e]) ? t : ea;
    }
    getActiveUnjoinedUnreadThreadsForGuild(e) {
        var t;
        return null != (t = T[e]) ? t : ei;
    }
    getActiveUnjoinedUnreadThreadsForParent(e, t) {
        var n;
        return null != (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) ? n : es;
    }
    getNewThreadCountsForGuild(e) {
        var t;
        return null != (t = N[e]) ? t : el;
    }
    computeAllActiveJoinedThreads(e) {
        let t = [];
        for (let n in v)
            if (n === e || null == e) for (let e in v[n]) for (let r in v[n][e]) t.push(v[n][e][r].channel);
        return t;
    }
    getNewThreadCount(e, t) {
        var n, r;
        return null != (n = null == (r = N[e]) ? void 0 : r[t]) ? n : 0;
    }
    getActiveThreadCount(e, t) {
        var n, r, i, s;
        return (
            a().size(null != (n = null == (i = v[e]) ? void 0 : i[t]) ? n : {}) +
            a().size(null != (r = null == (s = I[e]) ? void 0 : s[t]) ? r : {})
        );
    }
}
b(ec, "displayName", "ActiveJoinedThreadsStore");
let eu = new ec(o.h, {
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    THREAD_LIST_SYNC: z,
    LOAD_THREADS_SUCCESS: P,
    LOAD_ARCHIVED_THREADS_SUCCESS: P,
    SEARCH_MESSAGES_SUCCESS: P,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: P,
    GUILD_CREATE: K,
    GUILD_DELETE: P,
    CURRENT_USER_UPDATE: P,
    THREAD_CREATE: U,
    THREAD_UPDATE: U,
    THREAD_DELETE: U,
    CHANNEL_UPDATES: G,
    CHANNEL_DELETE: F,
    THREAD_MEMBER_UPDATE: B,
    THREAD_MEMBERS_UPDATE: B,
    LOAD_MESSAGES_SUCCESS: H,
    MESSAGE_CREATE: H,
    MESSAGE_DELETE: H,
    MESSAGE_DELETE_BULK: H,
    MESSAGE_ACK: H,
    CHANNEL_ACK: H,
    CHANNEL_LOCAL_ACK: H,
    CHANNEL_SELECT: q,
    PASSIVE_UPDATE_V2: W,
    WINDOW_FOCUS: Y,
    UPDATE_CHANNEL_DIMENSIONS: Y,
    TRY_ACK: Y,
    BULK_ACK: Y,
});
