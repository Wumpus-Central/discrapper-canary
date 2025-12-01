let r;
n.d(t, { Z: () => q }), n(388685);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    c = n(177523),
    u = n(353926),
    d = n(768419),
    f = n(314897),
    p = n(439170),
    _ = n(433355),
    m = n(592125),
    h = n(486472),
    g = n(271383),
    E = n(430824),
    b = n(19780),
    y = n(699516),
    O = n(944486),
    v = n(914010),
    S = n(981631);
function I(e, t, n) {
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
let T = new c.ZP((e) => {
    for (let t in e) null != E.Z.getGuild(t) || h.Z.isUnavailable(t) || delete e[t];
    l.Z.dispatch({
        type: "GUILD_SUBSCRIPTIONS_FLUSH",
        subscriptions: e,
    });
});
function A(e, t) {
    let n = {};
    T.forEach((i) => {
        var a;
        i !== v.Z.getGuildId() &&
            i !== b.Z.getGuildId() &&
            i !== (null == (a = m.Z.getChannel(O.Z.getChannelId())) ? void 0 : a.getGuildId()) &&
            (null == r || r.guildId !== i) &&
            (T.clearWithoutFlushing(i, e), t && (n[i] = T.get(i)));
    }),
        o().isEmpty(n) ||
            l.Z.dispatch({
                type: "GUILD_SUBSCRIPTIONS_FLUSH",
                subscriptions: n,
            });
}
function C(e, t) {
    return T.subscribeToGuild(e), null != t && _.ZP.getSection(t) === S.ULH.MEMBERS && N(e, t, c.KV);
}
function N(e, t, n) {
    if (t === p.oL) return T.subscribeChannel(e, t, n);
    let r = m.Z.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === S.I_8 && T.subscribeToGuild(i), null != r && r.isThread())
        ? r.type === S.d4z.ANNOUNCEMENT_THREAD
            ? T.subscribeChannel(i, r.parent_id, n)
            : !!r.isActiveThread() && T.subscribeThreadMemberList(i, t, O.Z.getChannelId())
        : T.subscribeChannel(i, t, n);
}
function P(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && A(!0, !1);
    let n = v.Z.getGuildId();
    null != n && C(n, O.Z.getChannelId(n));
    let r = {};
    T.forEach((e) => {
        null == E.Z.getGuild(e) ? T.clearWithoutFlushing(e, !0) : (r[e] = T.get(e));
    }),
        o().isEmpty(r) ||
            l.Z.dispatch({
                type: "GUILD_SUBSCRIPTIONS_FLUSH",
                subscriptions: r,
            });
}
function R() {
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
function x(e) {
    let { guild: t } = e;
    t.id === v.Z.getGuildId() && V();
}
function L(e) {
    let { guild: t } = e;
    T.clearWithoutFlushing(t.id, !0);
}
function j(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            e !== f.default.getId() && T.subscribeUser(t, e);
        }),
        !1
    );
}
function M(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            T.unsubscribeUser(t, e);
        }),
        !1
    );
}
function k(e) {
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
function Z(e) {
    let { guildId: t, channelId: n, ranges: r } = e;
    return N(t, n, r);
}
function B(e) {
    let { guildId: t, channelId: n } = e;
    return C(t, n);
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    return !h.Z.isUnavailable(t) && C(t, n);
}
function V() {
    return C(v.Z.getGuildId(), O.Z.getChannelId());
}
function H(e) {
    let { channel: t } = e;
    return t.isArchivedThread()
        ? T.unsubscribeThreadMemberList(t.guild_id, t.id)
        : !!t.isActiveThread() &&
              O.Z.getChannelId() === t.id &&
              void T.subscribeThreadMemberList(t.guild_id, t.id, O.Z.getChannelId());
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
            userId: t,
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
        this.waitFor(f.default, _.ZP, m.Z, u.Z, h.Z, g.ZP, E.Z, b.Z, y.Z, O.Z, v.Z, d.Z),
            this.syncWith([d.Z], W),
            this.syncWith([_.ZP], V);
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
I(z, "displayName", "GuildSubscriptionsStore");
let q = new z(l.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_RESUMED: P,
    CONNECTION_CLOSED: R,
    IDLE: w,
    LOGOUT: D,
    VOICE_CHANNEL_SELECT: F,
    CHANNEL_SELECT: F,
    GUILD_CREATE: x,
    GUILD_DELETE: L,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: j,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: M,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: k,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
    GUILD_SUBSCRIPTIONS_CHANNEL: Z,
    GUILD_SUBSCRIPTIONS: G,
    CHANNEL_PRELOAD: B,
    INBOX_OPEN: K,
    THREAD_UPDATE: H,
    THREAD_DELETE: Y,
    THREAD_LIST_SYNC: V,
});
