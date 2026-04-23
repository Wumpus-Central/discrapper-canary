let i;
n.d(t, { A: () => U });
var r = n(735438),
    l = n.n(r),
    a = n(17928),
    s = n(228366),
    o = n(323176),
    d = n(736056),
    u = n(655116),
    c = n(495544),
    h = n(963307),
    E = n(761640),
    _ = n(734057),
    p = n(919638),
    A = n(696451),
    f = n(71393),
    g = n(763827),
    I = n(994500),
    T = n(309010),
    S = n(967198),
    m = n(652215);
let O = new o.Ay((e) => {
    for (let t in e) null != f.A.getGuild(t) || p.A.isUnavailable(t) || delete e[t];
    s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function C(e, t) {
    let n = {};
    O.forEach((r) => {
        r !== S.A.getGuildId() &&
            r !== g.A.getGuildId() &&
            r !== _.A.getChannel(T.A.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== r) &&
            (O.clearWithoutFlushing(r, e), t && (n[r] = O.get(r)));
    }),
        l().isEmpty(n) || s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n });
}
function N(e, t) {
    return O.subscribeToGuild(e), null != t && E.Ay.getSection(t) === m.YvQ.MEMBERS && y(e, t, o.LD);
}
function y(e, t, n) {
    if (t === h.sN) return O.subscribeChannel(e, t, n);
    let i = _.A.getChannel(t);
    if (null == i) return !1;
    let r = i.getGuildId();
    return (r !== e && e === m.YYv && O.subscribeToGuild(r), i?.isThread())
        ? i.type === m.rbe.ANNOUNCEMENT_THREAD
            ? O.subscribeChannel(r, i.parent_id, n)
            : !!i.isActiveThread() && O.subscribeThreadMemberList(r, t, T.A.getChannelId())
        : O.subscribeChannel(r, t, n);
}
function R(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && C(!0, !1);
    let n = S.A.getGuildId();
    null != n && N(n, T.A.getChannelId(n));
    let i = {};
    O.forEach((e) => {
        null == f.A.getGuild(e) ? O.clearWithoutFlushing(e, !0) : (i[e] = O.get(e));
    }),
        l().isEmpty(i) || s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: i });
}
function L(e) {
    let { guildId: t, channelId: n } = e;
    return !p.A.isUnavailable(t) && N(t, n);
}
function v() {
    return N(S.A.getGuildId(), T.A.getChannelId());
}
function D() {
    let e = u.A.getSyncingWith();
    if (null == e) null != i && (O.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: t } = e;
        if ((null != i && i.userId === t) || I.A.isFriend(t)) return !1;
        let n = A.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [r] = n;
        (i = { guildId: r, userId: t }), O.subscribeUser(r, t);
    }
    return !1;
}
class b extends a.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        this.waitFor(c.default, E.Ay, _.A, d.A, p.A, A.Ay, f.A, g.A, I.A, T.A, S.A, u.A),
            this.syncWith([u.A], D),
            this.syncWith([E.Ay], v);
    }
    getSubscribedThreadIds() {
        return O.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return O.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return O.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return O.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = O.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let U = new b(s.h, {
    CONNECTION_OPEN: R,
    CONNECTION_RESUMED: R,
    CONNECTION_CLOSED: function () {
        C(!1, !1);
    },
    IDLE: function (e) {
        let { idle: t } = e;
        if (!t) return !1;
        C(!1, !0);
    },
    LOGOUT: function () {
        O.reset();
    },
    VOICE_CHANNEL_SELECT: L,
    CHANNEL_SELECT: L,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.id === S.A.getGuildId() && v();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        O.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                e !== c.default.getId() && O.subscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                O.unsubscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        O.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        O.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let { guildId: t, channelId: n, ranges: i } = e;
        return y(t, n, i);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let { guildId: t } = e;
        return O.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let { guildId: t, channelId: n } = e;
        return N(t, n);
    },
    INBOX_OPEN: function (e) {
        let { guildIds: t } = e;
        for (let e of t) null != e && O.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return t.isArchivedThread()
            ? O.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                  T.A.getChannelId() === t.id &&
                  void O.subscribeThreadMemberList(t.guild_id, t.id, T.A.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return O.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: v,
});
