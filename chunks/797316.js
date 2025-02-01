let i;
n.d(t, { Z: () => q }), n(47120);
var r,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    l = n(570140),
    u = n(177523),
    c = n(353926),
    d = n(768419),
    f = n(314897),
    _ = n(662594),
    p = n(433355),
    h = n(592125),
    m = n(486472),
    g = n(271383),
    E = n(430824),
    v = n(19780),
    y = n(699516),
    I = n(944486),
    T = n(914010),
    b = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let A = new u.ZP((e) => {
    for (let t in e) null != E.Z.getGuild(t) || m.Z.isUnavailable(t) || delete e[t];
    l.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function N(e, t) {
    let n = {};
    A.forEach((r) => {
        var a;
        r !== T.Z.getGuildId() && r !== v.Z.getGuildId() && r !== (null === (a = h.Z.getChannel(I.Z.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && (null == i || i.guildId !== r) && (A.clearWithoutFlushing(r, e), t && (n[r] = A.get(r)));
    }),
        s().isEmpty(n) ||
            l.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: n
            });
}
function C(e, t) {
    return A.subscribeToGuild(e), null != t && p.ZP.getSection(t) === b.ULH.MEMBERS && R(e, t, u.KV);
}
function R(e, t, n) {
    if (t === _.oL) return A.subscribeChannel(e, t, n);
    let i = h.Z.getChannel(t);
    if (null == i) return !1;
    let r = i.getGuildId();
    return (r !== e && e === b.I_8 && A.subscribeToGuild(r), null != i && i.isThread()) ? (i.type === b.d4z.ANNOUNCEMENT_THREAD ? A.subscribeChannel(r, i.parent_id, n) : !!i.isActiveThread() && A.subscribeThreadMemberList(r, t, I.Z.getChannelId())) : A.subscribeChannel(r, t, n);
}
function O(e) {
    let { type: t } = e;
    'CONNECTION_OPEN' === t && N(!0, !1);
    let n = T.Z.getGuildId();
    null != n && C(n, I.Z.getChannelId(n));
    let i = {};
    A.forEach((e) => {
        null == E.Z.getGuild(e) ? A.clearWithoutFlushing(e, !0) : (i[e] = A.get(e));
    }),
        s().isEmpty(i) ||
            l.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: i
            });
}
function D() {
    N(!1, !1);
}
function x(e) {
    let { idle: t } = e;
    if (!t) return !1;
    N(!1, !0);
}
function L() {
    A.reset();
}
function P(e) {
    let { guild: t } = e;
    t.id === T.Z.getGuildId() && j();
}
function w(e) {
    let { guild: t } = e;
    A.clearWithoutFlushing(t.id, !0);
}
function M(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            e !== f.default.getId() && A.subscribeUser(t, e);
        }),
        !1
    );
}
function k(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            A.unsubscribeUser(t, e);
        }),
        !1
    );
}
function U(e) {
    let { guildId: t } = e;
    A.subscribeToMemberUpdates(t);
}
function G(e) {
    let { guildId: t } = e;
    A.unsubscribeFromMemberUpdates(t);
}
function B(e) {
    let { guildId: t } = e;
    return A.subscribeToGuild(t);
}
function Z(e) {
    let { guildId: t, channelId: n, ranges: i } = e;
    return R(t, n, i);
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    return C(t, n);
}
function V(e) {
    let { guildId: t, channelId: n } = e;
    return !m.Z.isUnavailable(t) && C(t, n);
}
function j() {
    return C(T.Z.getGuildId(), I.Z.getChannelId());
}
function H(e) {
    let { channel: t } = e;
    return t.isArchivedThread() ? A.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && I.Z.getChannelId() === t.id && void A.subscribeThreadMemberList(t.guild_id, t.id, I.Z.getChannelId());
}
function Y(e) {
    let { channel: t } = e;
    return A.unsubscribeThreadMemberList(t.guild_id, t.id);
}
function W() {
    let e = d.Z.getSyncingWith();
    if (null == e) null != i && (A.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: t } = e;
        if ((null != i && i.userId === t) || y.Z.isFriend(t)) return !1;
        let n = g.ZP.memberOf(t);
        if (0 === n.length) return !1;
        let [r] = n;
        (i = {
            guildId: r,
            userId: t
        }),
            A.subscribeUser(r, t);
    }
    return !1;
}
function K(e) {
    let { guildIds: t } = e;
    for (let e of t) null != e && A.subscribeToGuild(e);
    return !1;
}
class z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, E.Z, T.Z, I.Z, v.Z, f.default, p.ZP, c.Z), this.syncWith([d.Z], W), this.syncWith([p.ZP], j);
    }
    getSubscribedThreadIds() {
        return A.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return A.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return A.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return A.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = A.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
S(z, 'displayName', 'GuildSubscriptionsStore');
let q = new z(l.Z, {
    CONNECTION_OPEN: O,
    CONNECTION_RESUMED: O,
    CONNECTION_CLOSED: D,
    IDLE: x,
    LOGOUT: L,
    VOICE_CHANNEL_SELECT: V,
    CHANNEL_SELECT: V,
    GUILD_CREATE: P,
    GUILD_DELETE: w,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: M,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: k,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: U,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: G,
    GUILD_SUBSCRIPTIONS_CHANNEL: Z,
    GUILD_SUBSCRIPTIONS: B,
    CHANNEL_PRELOAD: F,
    INBOX_OPEN: K,
    THREAD_UPDATE: H,
    THREAD_DELETE: Y,
    THREAD_LIST_SYNC: j
});
