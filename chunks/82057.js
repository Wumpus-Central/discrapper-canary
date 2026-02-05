"use strict";
let r;
n.d(t, { A: () => z });
var i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(432703),
    u = n(49463),
    c = n(655116),
    d = n(961350),
    _ = n(963307),
    f = n(761640),
    p = n(734057),
    h = n(919638),
    m = n(696451),
    g = n(71393),
    E = n(383501),
    A = n(994500),
    I = n(309010),
    T = n(967198),
    y = n(652215);
let S = new l.Ay((e) => {
    for (let t in e) null != g.A.getGuild(t) || h.A.isUnavailable(t) || delete e[t];
    o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function v(e, t) {
    let n = {};
    S.forEach((i) => {
        i !== T.A.getGuildId() &&
            i !== E.A.getGuildId() &&
            i !== p.A.getChannel(I.A.getChannelId())?.getGuildId() &&
            (null == r || r.guildId !== i) &&
            (S.clearWithoutFlushing(i, e), t && (n[i] = S.get(i)));
    }),
        a().isEmpty(n) || o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n });
}
function C(e, t) {
    return S.subscribeToGuild(e), null != t && f.Ay.getSection(t) === y.YvQ.MEMBERS && b(e, t, l.LD);
}
function b(e, t, n) {
    if (t === _.sN) return S.subscribeChannel(e, t, n);
    let r = p.A.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === y.YYv && S.subscribeToGuild(i), r?.isThread())
        ? r.type === y.rbe.ANNOUNCEMENT_THREAD
            ? S.subscribeChannel(i, r.parent_id, n)
            : !!r.isActiveThread() && S.subscribeThreadMemberList(i, t, I.A.getChannelId())
        : S.subscribeChannel(i, t, n);
}
function N(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && v(!0, !1);
    let n = T.A.getGuildId();
    null != n && C(n, I.A.getChannelId(n));
    let r = {};
    S.forEach((e) => {
        null == g.A.getGuild(e) ? S.clearWithoutFlushing(e, !0) : (r[e] = S.get(e));
    }),
        a().isEmpty(r) || o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: r });
}
function R() {
    v(!1, !1);
}
function O(e) {
    let { idle: t } = e;
    if (!t) return !1;
    v(!1, !0);
}
function D() {
    S.reset();
}
function L(e) {
    let { guild: t } = e;
    t.id === T.A.getGuildId() && B();
}
function w(e) {
    let { guild: t } = e;
    S.clearWithoutFlushing(t.id, !0);
}
function x(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            e !== d.default.getId() && S.subscribeUser(t, e);
        }),
        !1
    );
}
function P(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            S.unsubscribeUser(t, e);
        }),
        !1
    );
}
function M(e) {
    let { guildId: t } = e;
    S.subscribeToMemberUpdates(t);
}
function k(e) {
    let { guildId: t } = e;
    S.unsubscribeFromMemberUpdates(t);
}
function U(e) {
    let { guildId: t } = e;
    return S.subscribeToGuild(t);
}
function G(e) {
    let { guildId: t, channelId: n, ranges: r } = e;
    return b(t, n, r);
}
function V(e) {
    let { guildId: t, channelId: n } = e;
    return C(t, n);
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    return !h.A.isUnavailable(t) && C(t, n);
}
function B() {
    return C(T.A.getGuildId(), I.A.getChannelId());
}
function j(e) {
    let { channel: t } = e;
    return t.isArchivedThread()
        ? S.unsubscribeThreadMemberList(t.guild_id, t.id)
        : !!t.isActiveThread() &&
              I.A.getChannelId() === t.id &&
              void S.subscribeThreadMemberList(t.guild_id, t.id, I.A.getChannelId());
}
function H(e) {
    let { channel: t } = e;
    return S.unsubscribeThreadMemberList(t.guild_id, t.id);
}
function Y() {
    let e = c.A.getSyncingWith();
    if (null == e) null != r && (S.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || A.A.isFriend(t)) return !1;
        let n = m.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        (r = { guildId: i, userId: t }), S.subscribeUser(i, t);
    }
    return !1;
}
function W(e) {
    let { guildIds: t } = e;
    for (let e of t) null != e && S.subscribeToGuild(e);
    return !1;
}
class K extends s.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        this.waitFor(d.default, f.Ay, p.A, u.A, h.A, m.Ay, g.A, E.A, A.A, I.A, T.A, c.A),
            this.syncWith([c.A], Y),
            this.syncWith([f.Ay], B);
    }
    getSubscribedThreadIds() {
        return S.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return S.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return S.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return S.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = S.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let z = new K(o.h, {
    CONNECTION_OPEN: N,
    CONNECTION_RESUMED: N,
    CONNECTION_CLOSED: R,
    IDLE: O,
    LOGOUT: D,
    VOICE_CHANNEL_SELECT: F,
    CHANNEL_SELECT: F,
    GUILD_CREATE: L,
    GUILD_DELETE: w,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: x,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: P,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: M,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: k,
    GUILD_SUBSCRIPTIONS_CHANNEL: G,
    GUILD_SUBSCRIPTIONS: U,
    CHANNEL_PRELOAD: V,
    INBOX_OPEN: W,
    THREAD_UPDATE: j,
    THREAD_DELETE: H,
    THREAD_LIST_SYNC: B,
});
