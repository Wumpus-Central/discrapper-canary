let r;
n.d(t, { Z: () => q }), n(388685);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    l = n(570140),
    c = n(177523),
    u = n(353926),
    d = n(768419),
    f = n(314897),
    _ = n(662594),
    p = n(433355),
    h = n(592125),
    m = n(486472),
    g = n(271383),
    E = n(430824),
    b = n(19780),
    y = n(699516),
    O = n(944486),
    v = n(914010),
    I = n(981631);
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
let T = new c.ZP((e) => {
    for (let t in e) null != E.Z.getGuild(t) || m.Z.isUnavailable(t) || delete e[t];
    l.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function A(e, t) {
    let n = {};
    T.forEach((i) => {
        var o;
        i !== v.Z.getGuildId() && i !== b.Z.getGuildId() && i !== (null == (o = h.Z.getChannel(O.Z.getChannelId())) ? void 0 : o.getGuildId()) && (null == r || r.guildId !== i) && (T.clearWithoutFlushing(i, e), t && (n[i] = T.get(i)));
    }),
        a().isEmpty(n) ||
            l.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: n
            });
}
function N(e, t) {
    return T.subscribeToGuild(e), null != t && p.ZP.getSection(t) === I.ULH.MEMBERS && C(e, t, c.KV);
}
function C(e, t, n) {
    if (t === _.oL) return T.subscribeChannel(e, t, n);
    let r = h.Z.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === I.I_8 && T.subscribeToGuild(i), null != r && r.isThread()) ? (r.type === I.d4z.ANNOUNCEMENT_THREAD ? T.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && T.subscribeThreadMemberList(i, t, O.Z.getChannelId())) : T.subscribeChannel(i, t, n);
}
function R(e) {
    let { type: t } = e;
    'CONNECTION_OPEN' === t && A(!0, !1);
    let n = v.Z.getGuildId();
    null != n && N(n, O.Z.getChannelId(n));
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
    A(!1, !1);
}
function w(e) {
    let { idle: t } = e;
    if (!t) return !1;
    A(!1, !0);
}
function D() {
    T.reset();
}
function L(e) {
    let { guild: t } = e;
    t.id === v.Z.getGuildId() && Z();
}
function x(e) {
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
function V(e) {
    let { guildId: t, channelId: n } = e;
    return N(t, n);
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    return !m.Z.isUnavailable(t) && N(t, n);
}
function Z() {
    return N(v.Z.getGuildId(), O.Z.getChannelId());
}
function H(e) {
    let { channel: t } = e;
    return t.isArchivedThread() ? T.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && O.Z.getChannelId() === t.id && void T.subscribeThreadMemberList(t.guild_id, t.id, O.Z.getChannelId());
}
function Y(e) {
    let { channel: t } = e;
    return T.unsubscribeThreadMemberList(t.guild_id, t.id);
}
function W() {
    let e = d.Z.getSyncingWith();
    if (null == e) null != r && (T.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || y.Z.isFriend(t)) return !1;
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
        this.waitFor(h.Z, E.Z, v.Z, O.Z, b.Z, f.default, p.ZP, u.Z), this.syncWith([d.Z], W), this.syncWith([p.ZP], Z);
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
S(z, 'displayName', 'GuildSubscriptionsStore');
let q = new z(l.Z, {
    CONNECTION_OPEN: R,
    CONNECTION_RESUMED: R,
    CONNECTION_CLOSED: P,
    IDLE: w,
    LOGOUT: D,
    VOICE_CHANNEL_SELECT: F,
    CHANNEL_SELECT: F,
    GUILD_CREATE: L,
    GUILD_DELETE: x,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: M,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: k,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: j,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
    GUILD_SUBSCRIPTIONS_CHANNEL: B,
    GUILD_SUBSCRIPTIONS: G,
    CHANNEL_PRELOAD: V,
    INBOX_OPEN: K,
    THREAD_UPDATE: H,
    THREAD_DELETE: Y,
    THREAD_LIST_SYNC: Z
});
