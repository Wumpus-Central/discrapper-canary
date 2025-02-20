let r;
n.d(t, { Z: () => q }), n(47120);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    l = n(570140),
    c = n(177523),
    u = n(353926),
    d = n(768419),
    f = n(314897),
    p = n(662594),
    _ = n(433355),
    h = n(592125),
    m = n(486472),
    g = n(271383),
    E = n(430824),
    v = n(19780),
    b = n(699516),
    y = n(944486),
    O = n(914010),
    S = n(981631);
function I(e, t, n) {
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
let T = new c.ZP((e) => {
    for (let t in e) null != E.Z.getGuild(t) || m.Z.isUnavailable(t) || delete e[t];
    l.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function N(e, t) {
    let n = {};
    T.forEach((i) => {
        var o;
        i !== O.Z.getGuildId() && i !== v.Z.getGuildId() && i !== (null === (o = h.Z.getChannel(y.Z.getChannelId())) || void 0 === o ? void 0 : o.getGuildId()) && (null == r || r.guildId !== i) && (T.clearWithoutFlushing(i, e), t && (n[i] = T.get(i)));
    }),
        a().isEmpty(n) ||
            l.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: n
            });
}
function A(e, t) {
    return T.subscribeToGuild(e), null != t && _.ZP.getSection(t) === S.ULH.MEMBERS && C(e, t, c.KV);
}
function C(e, t, n) {
    if (t === p.oL) return T.subscribeChannel(e, t, n);
    let r = h.Z.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === S.I_8 && T.subscribeToGuild(i), null != r && r.isThread()) ? (r.type === S.d4z.ANNOUNCEMENT_THREAD ? T.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && T.subscribeThreadMemberList(i, t, y.Z.getChannelId())) : T.subscribeChannel(i, t, n);
}
function R(e) {
    let { type: t } = e;
    'CONNECTION_OPEN' === t && N(!0, !1);
    let n = O.Z.getGuildId();
    null != n && A(n, y.Z.getChannelId(n));
    let r = {};
    T.forEach((e) => {
        null == E.Z.getGuild(e) ? T.clearWithoutFlushing(e, !0) : (r[e] = T.get(e));
    }),
        a().isEmpty(r) ||
            l.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: r
            });
}
function P() {
    N(!1, !1);
}
function w(e) {
    let { idle: t } = e;
    if (!t) return !1;
    N(!1, !0);
}
function D() {
    T.reset();
}
function x(e) {
    let { guild: t } = e;
    t.id === O.Z.getGuildId() && V();
}
function L(e) {
    let { guild: t } = e;
    T.clearWithoutFlushing(t.id, !0);
}
function M(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            e !== f.default.getId() && T.subscribeUser(t, e);
        }),
        !1
    );
}
function k(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            T.unsubscribeUser(t, e);
        }),
        !1
    );
}
function j(e) {
    let { guildId: t } = e;
    T.subscribeToMemberUpdates(t);
}
function U(e) {
    let { guildId: t } = e;
    T.unsubscribeFromMemberUpdates(t);
}
function G(e) {
    let { guildId: t } = e;
    return T.subscribeToGuild(t);
}
function B(e) {
    let { guildId: t, channelId: n, ranges: r } = e;
    return C(t, n, r);
}
function Z(e) {
    let { guildId: t, channelId: n } = e;
    return A(t, n);
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    return !m.Z.isUnavailable(t) && A(t, n);
}
function V() {
    return A(O.Z.getGuildId(), y.Z.getChannelId());
}
function H(e) {
    let { channel: t } = e;
    return t.isArchivedThread() ? T.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && y.Z.getChannelId() === t.id && void T.subscribeThreadMemberList(t.guild_id, t.id, y.Z.getChannelId());
}
function W(e) {
    let { channel: t } = e;
    return T.unsubscribeThreadMemberList(t.guild_id, t.id);
}
function Y() {
    let e = d.Z.getSyncingWith();
    if (null == e) null != r && (T.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || b.Z.isFriend(t)) return !1;
        let n = g.ZP.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        (r = {
            guildId: i,
            userId: t
        }),
            T.subscribeUser(i, t);
    }
    return !1;
}
function K(e) {
    let { guildIds: t } = e;
    for (let e of t) null != e && T.subscribeToGuild(e);
    return !1;
}
class z extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, E.Z, O.Z, y.Z, v.Z, f.default, _.ZP, u.Z), this.syncWith([d.Z], Y), this.syncWith([_.ZP], V);
    }
    getSubscribedThreadIds() {
        return T.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return T.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return T.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return T.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = T.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
I(z, 'displayName', 'GuildSubscriptionsStore');
let q = new z(l.Z, {
    CONNECTION_OPEN: R,
    CONNECTION_RESUMED: R,
    CONNECTION_CLOSED: P,
    IDLE: w,
    LOGOUT: D,
    VOICE_CHANNEL_SELECT: F,
    CHANNEL_SELECT: F,
    GUILD_CREATE: x,
    GUILD_DELETE: L,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: M,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: k,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: j,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
    GUILD_SUBSCRIPTIONS_CHANNEL: B,
    GUILD_SUBSCRIPTIONS: G,
    CHANNEL_PRELOAD: Z,
    INBOX_OPEN: K,
    THREAD_UPDATE: H,
    THREAD_DELETE: W,
    THREAD_LIST_SYNC: V
});
