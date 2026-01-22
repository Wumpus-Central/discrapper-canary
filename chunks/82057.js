let r;
n.d(t, {
    A: () => X,
}),
    n(896048);
var i,
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    c = n(432703),
    u = n(49463),
    d = n(655116),
    f = n(961350),
    p = n(963307),
    _ = n(761640),
    h = n(734057),
    m = n(919638),
    g = n(696451),
    E = n(71393),
    b = n(383501),
    y = n(994500),
    O = n(309010),
    A = n(967198),
    v = n(652215);

function S(e, t, n) {
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
let I = new c.Ay((e) => {
    for (let t in e) null != E.A.getGuild(t) || m.A.isUnavailable(t) || delete e[t];
    l.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_FLUSH",
        subscriptions: e,
    });
});

function T(e, t) {
    let n = {};
    I.forEach((i) => {
        var a;
        i !== A.A.getGuildId() &&
            i !== b.A.getGuildId() &&
            i !== (null == (a = h.A.getChannel(O.A.getChannelId())) ? void 0 : a.getGuildId()) &&
            (null == r || r.guildId !== i) &&
            (I.clearWithoutFlushing(i, e), t && (n[i] = I.get(i)));
    }),
        s().isEmpty(n) ||
            l.h.dispatch({
                type: "GUILD_SUBSCRIPTIONS_FLUSH",
                subscriptions: n,
            });
}

function C(e, t) {
    return I.subscribeToGuild(e), null != t && _.Ay.getSection(t) === v.YvQ.MEMBERS && N(e, t, c.LD);
}

function N(e, t, n) {
    if (t === p.sN) return I.subscribeChannel(e, t, n);
    let r = h.A.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === v.YYv && I.subscribeToGuild(i), null != r && r.isThread())
        ? r.type === v.rbe.ANNOUNCEMENT_THREAD
            ? I.subscribeChannel(i, r.parent_id, n)
            : !!r.isActiveThread() && I.subscribeThreadMemberList(i, t, O.A.getChannelId())
        : I.subscribeChannel(i, t, n);
}

function R(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && T(!0, !1);
    let n = A.A.getGuildId();
    null != n && C(n, O.A.getChannelId(n));
    let r = {};
    I.forEach((e) => {
        null == E.A.getGuild(e) ? I.clearWithoutFlushing(e, !0) : (r[e] = I.get(e));
    }),
        s().isEmpty(r) ||
            l.h.dispatch({
                type: "GUILD_SUBSCRIPTIONS_FLUSH",
                subscriptions: r,
            });
}

function w() {
    T(!1, !1);
}

function P(e) {
    let { idle: t } = e;
    if (!t) return !1;
    T(!1, !0);
}

function D() {
    I.reset();
}

function x(e) {
    let { guild: t } = e;
    t.id === A.A.getGuildId() && H();
}

function L(e) {
    let { guild: t } = e;
    I.clearWithoutFlushing(t.id, !0);
}

function j(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            e !== f.default.getId() && I.subscribeUser(t, e);
        }),
        !1
    );
}

function M(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            I.unsubscribeUser(t, e);
        }),
        !1
    );
}

function k(e) {
    let { guildId: t } = e;
    I.subscribeToMemberUpdates(t);
}

function U(e) {
    let { guildId: t } = e;
    I.unsubscribeFromMemberUpdates(t);
}

function G(e) {
    let { guildId: t } = e;
    return I.subscribeToGuild(t);
}

function V(e) {
    let { guildId: t, channelId: n, ranges: r } = e;
    return N(t, n, r);
}

function F(e) {
    let { guildId: t, channelId: n } = e;
    return C(t, n);
}

function B(e) {
    let { guildId: t, channelId: n } = e;
    return !m.A.isUnavailable(t) && C(t, n);
}

function H() {
    return C(A.A.getGuildId(), O.A.getChannelId());
}

function Y(e) {
    let { channel: t } = e;
    return t.isArchivedThread()
        ? I.unsubscribeThreadMemberList(t.guild_id, t.id)
        : !!t.isActiveThread() &&
              O.A.getChannelId() === t.id &&
              void I.subscribeThreadMemberList(t.guild_id, t.id, O.A.getChannelId());
}

function W(e) {
    let { channel: t } = e;
    return I.unsubscribeThreadMemberList(t.guild_id, t.id);
}

function K() {
    let e = d.A.getSyncingWith();
    if (null == e) null != r && (I.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || y.A.isFriend(t)) return !1;
        let n = g.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        (r = {
            guildId: i,
            userId: t,
        }),
            I.subscribeUser(i, t);
    }
    return !1;
}

function z(e) {
    let { guildIds: t } = e;
    for (let e of t) null != e && I.subscribeToGuild(e);
    return !1;
}
class q extends (i = o.Ay.Store) {
    initialize() {
        this.waitFor(f.default, _.Ay, h.A, u.A, m.A, g.Ay, E.A, b.A, y.A, O.A, A.A, d.A),
            this.syncWith([d.A], K),
            this.syncWith([_.Ay], H);
    }
    getSubscribedThreadIds() {
        return I.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return I.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return I.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return I.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = I.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
S(q, "displayName", "GuildSubscriptionsStore");
let X = new q(l.h, {
    CONNECTION_OPEN: R,
    CONNECTION_RESUMED: R,
    CONNECTION_CLOSED: w,
    IDLE: P,
    LOGOUT: D,
    VOICE_CHANNEL_SELECT: B,
    CHANNEL_SELECT: B,
    GUILD_CREATE: x,
    GUILD_DELETE: L,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: j,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: M,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: k,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
    GUILD_SUBSCRIPTIONS_CHANNEL: V,
    GUILD_SUBSCRIPTIONS: G,
    CHANNEL_PRELOAD: F,
    INBOX_OPEN: z,
    THREAD_UPDATE: Y,
    THREAD_DELETE: W,
    THREAD_LIST_SYNC: H,
});
