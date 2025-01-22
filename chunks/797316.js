let i;
var a,
    o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(570140),
    d = r(177523),
    f = r(353926),
    p = r(768419),
    h = r(314897),
    _ = r(662594),
    m = r(433355),
    g = r(592125),
    E = r(486472),
    v = r(271383),
    y = r(430824),
    b = r(19780),
    I = r(699516),
    T = r(944486),
    S = r(914010),
    A = r(981631);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let N = new d.ZP((e) => {
    for (let n in e) null == y.Z.getGuild(n) && !E.Z.isUnavailable(n) && delete e[n];
    c.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function R(e, n) {
    let r = {};
    N.forEach((a) => {
        var o;
        a !== S.Z.getGuildId() && a !== b.Z.getGuildId() && a !== (null === (o = g.Z.getChannel(T.Z.getChannelId())) || void 0 === o ? void 0 : o.getGuildId()) && (null == i || i.guildId !== a) && (N.clearWithoutFlushing(a, e), n && (r[a] = N.get(a)));
    }),
        !l().isEmpty(r) &&
            c.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: r
            });
}
function O(e, n) {
    return N.subscribeToGuild(e), null != n && m.ZP.getSection(n) === A.ULH.MEMBERS && D(e, n, d.KV);
}
function D(e, n, r) {
    if (n === _.oL) return N.subscribeChannel(e, n, r);
    let i = g.Z.getChannel(n);
    if (null == i) return !1;
    let a = i.getGuildId();
    return (a !== e && e === A.I_8 && N.subscribeToGuild(a), null != i && i.isThread()) ? (i.type === A.d4z.ANNOUNCEMENT_THREAD ? N.subscribeChannel(a, i.parent_id, r) : !!i.isActiveThread() && N.subscribeThreadMemberList(a, n, T.Z.getChannelId())) : N.subscribeChannel(a, n, r);
}
function L(e) {
    let { type: n } = e;
    'CONNECTION_OPEN' === n && R(!0, !1);
    let r = S.Z.getGuildId();
    null != r && O(r, T.Z.getChannelId(r));
    let i = {};
    N.forEach((e) => {
        null == y.Z.getGuild(e) ? N.clearWithoutFlushing(e, !0) : (i[e] = N.get(e));
    }),
        !l().isEmpty(i) &&
            c.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: i
            });
}
function x() {
    R(!1, !1);
}
function w(e) {
    let { idle: n } = e;
    if (!n) return !1;
    R(!1, !0);
}
function P() {
    N.reset();
}
function M(e) {
    let { guild: n } = e;
    n.id === S.Z.getGuildId() && Y();
}
function k(e) {
    let { guild: n } = e;
    N.clearWithoutFlushing(n.id, !0);
}
function U(e) {
    let { guildId: n, userIds: r } = e;
    return (
        r.forEach((e) => {
            e !== h.default.getId() && N.subscribeUser(n, e);
        }),
        !1
    );
}
function B(e) {
    let { guildId: n, userIds: r } = e;
    return (
        r.forEach((e) => {
            N.unsubscribeUser(n, e);
        }),
        !1
    );
}
function G(e) {
    let { guildId: n } = e;
    N.subscribeToMemberUpdates(n);
}
function Z(e) {
    let { guildId: n } = e;
    N.unsubscribeFromMemberUpdates(n);
}
function F(e) {
    let { guildId: n } = e;
    return N.subscribeToGuild(n);
}
function V(e) {
    let { guildId: n, channelId: r, ranges: i } = e;
    return D(n, r, i);
}
function j(e) {
    let { guildId: n, channelId: r } = e;
    return O(n, r);
}
function H(e) {
    let { guildId: n, channelId: r } = e;
    return !E.Z.isUnavailable(n) && O(n, r);
}
function Y() {
    return O(S.Z.getGuildId(), T.Z.getChannelId());
}
function W(e) {
    let { channel: n } = e;
    return n.isArchivedThread() ? N.unsubscribeThreadMemberList(n.guild_id, n.id) : !!n.isActiveThread() && T.Z.getChannelId() === n.id && void N.subscribeThreadMemberList(n.guild_id, n.id, T.Z.getChannelId());
}
function K(e) {
    let { channel: n } = e;
    return N.unsubscribeThreadMemberList(n.guild_id, n.id);
}
function z() {
    let e = p.Z.getSyncingWith();
    if (null == e) null != i && (N.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: n } = e;
        if ((null != i && i.userId === n) || I.Z.isFriend(n)) return !1;
        let r = v.ZP.memberOf(n);
        if (0 === r.length) return !1;
        let [a] = r;
        (i = {
            guildId: a,
            userId: n
        }),
            N.subscribeUser(a, n);
    }
    return !1;
}
function q(e) {
    let { guildIds: n } = e;
    for (let e of n) null != e && N.subscribeToGuild(e);
    return !1;
}
class Q extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, y.Z, S.Z, T.Z, b.Z, h.default, m.ZP, f.Z), this.syncWith([p.Z], z), this.syncWith([m.ZP], Y);
    }
    getSubscribedThreadIds() {
        return N.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return N.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return N.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return N.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let n = N.get(e).channels;
        return null != n && Object.keys(n).length > 0;
    }
}
C(Q, 'displayName', 'GuildSubscriptionsStore'),
    (n.Z = new Q(c.Z, {
        CONNECTION_OPEN: L,
        CONNECTION_RESUMED: L,
        CONNECTION_CLOSED: x,
        IDLE: w,
        LOGOUT: P,
        VOICE_CHANNEL_SELECT: H,
        CHANNEL_SELECT: H,
        GUILD_CREATE: M,
        GUILD_DELETE: k,
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: U,
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: B,
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: G,
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: Z,
        GUILD_SUBSCRIPTIONS_CHANNEL: V,
        GUILD_SUBSCRIPTIONS: F,
        CHANNEL_PRELOAD: j,
        INBOX_OPEN: q,
        THREAD_UPDATE: W,
        THREAD_DELETE: K,
        THREAD_LIST_SYNC: Y
    }));
