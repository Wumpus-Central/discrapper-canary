let i;
var a,
    s = r(47120);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(177523),
    f = r(353926),
    _ = r(768419),
    h = r(314897),
    p = r(662594),
    m = r(433355),
    g = r(592125),
    E = r(486472),
    v = r(271383),
    I = r(430824),
    T = r(19780),
    b = r(699516),
    y = r(944486),
    S = r(914010),
    A = r(981631);
function N(e, n, r) {
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
let C = new d.ZP((e) => {
    for (let n in e) null == I.Z.getGuild(n) && !E.Z.isUnavailable(n) && delete e[n];
    c.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function R(e, n) {
    let r = {};
    C.forEach((a) => {
        var s;
        a !== S.Z.getGuildId() && a !== T.Z.getGuildId() && a !== (null === (s = g.Z.getChannel(y.Z.getChannelId())) || void 0 === s ? void 0 : s.getGuildId()) && (null == i || i.guildId !== a) && (C.clearWithoutFlushing(a, e), n && (r[a] = C.get(a)));
    }),
        !l().isEmpty(r) &&
            c.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: r
            });
}
function O(e, n) {
    return C.subscribeToGuild(e), null != n && m.ZP.getSection(n) === A.ULH.MEMBERS && D(e, n, d.KV);
}
function D(e, n, r) {
    if (n === p.oL) return C.subscribeChannel(e, n, r);
    let i = g.Z.getChannel(n);
    if (null == i) return !1;
    let a = i.getGuildId();
    return (a !== e && e === A.I_8 && C.subscribeToGuild(a), null != i && i.isThread()) ? (i.type === A.d4z.ANNOUNCEMENT_THREAD ? C.subscribeChannel(a, i.parent_id, r) : !!i.isActiveThread() && C.subscribeThreadMemberList(a, n, y.Z.getChannelId())) : C.subscribeChannel(a, n, r);
}
function L(e) {
    let { type: n } = e;
    'CONNECTION_OPEN' === n && R(!0, !1);
    let r = S.Z.getGuildId();
    null != r && O(r, y.Z.getChannelId(r));
    let i = {};
    C.forEach((e) => {
        null == I.Z.getGuild(e) ? C.clearWithoutFlushing(e, !0) : (i[e] = C.get(e));
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
    C.reset();
}
function M(e) {
    let { guild: n } = e;
    n.id === S.Z.getGuildId() && Y();
}
function k(e) {
    let { guild: n } = e;
    C.clearWithoutFlushing(n.id, !0);
}
function U(e) {
    let { guildId: n, userIds: r } = e;
    return (
        r.forEach((e) => {
            e !== h.default.getId() && C.subscribeUser(n, e);
        }),
        !1
    );
}
function B(e) {
    let { guildId: n, userIds: r } = e;
    return (
        r.forEach((e) => {
            C.unsubscribeUser(n, e);
        }),
        !1
    );
}
function G(e) {
    let { guildId: n } = e;
    C.subscribeToMemberUpdates(n);
}
function Z(e) {
    let { guildId: n } = e;
    C.unsubscribeFromMemberUpdates(n);
}
function F(e) {
    let { guildId: n } = e;
    return C.subscribeToGuild(n);
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
    return O(S.Z.getGuildId(), y.Z.getChannelId());
}
function W(e) {
    let { channel: n } = e;
    return n.isArchivedThread() ? C.unsubscribeThreadMemberList(n.guild_id, n.id) : !!n.isActiveThread() && y.Z.getChannelId() === n.id && void C.subscribeThreadMemberList(n.guild_id, n.id, y.Z.getChannelId());
}
function K(e) {
    let { channel: n } = e;
    return C.unsubscribeThreadMemberList(n.guild_id, n.id);
}
function z() {
    let e = _.Z.getSyncingWith();
    if (null == e) null != i && (C.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: n } = e;
        if ((null != i && i.userId === n) || b.Z.isFriend(n)) return !1;
        let r = v.ZP.memberOf(n);
        if (0 === r.length) return !1;
        let [a] = r;
        (i = {
            guildId: a,
            userId: n
        }),
            C.subscribeUser(a, n);
    }
    return !1;
}
function q(e) {
    let { guildIds: n } = e;
    for (let e of n) null != e && C.subscribeToGuild(e);
    return !1;
}
class Q extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, I.Z, S.Z, y.Z, T.Z, h.default, m.ZP, f.Z), this.syncWith([_.Z], z), this.syncWith([m.ZP], Y);
    }
    getSubscribedThreadIds() {
        return C.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return C.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return C.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return C.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let n = C.get(e).channels;
        return null != n && Object.keys(n).length > 0;
    }
}
N(Q, 'displayName', 'GuildSubscriptionsStore'),
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
