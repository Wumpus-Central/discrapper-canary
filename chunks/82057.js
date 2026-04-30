let i;
n.d(t, { A: () => P });
var l = n(735438),
    a = n.n(l),
    r = n(17928),
    s = n(228366),
    o = n(323176),
    d = n(736056),
    u = n(655116),
    c = n(495544),
    h = n(963307),
    E = n(761640),
    A = n(734057),
    _ = n(919638),
    p = n(696451),
    g = n(71393),
    f = n(763827),
    I = n(994500),
    S = n(309010),
    T = n(967198),
    m = n(652215);
let C = new o.Ay((e) => {
    for (let t in e) null != g.A.getGuild(t) || _.A.isUnavailable(t) || delete e[t];
    s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function O(e, t) {
    let n = {};
    C.forEach((l) => {
        l !== T.A.getGuildId() &&
            l !== f.A.getGuildId() &&
            l !== A.A.getChannel(S.A.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== l) &&
            (C.clearWithoutFlushing(l, e), t && (n[l] = C.get(l)));
    }),
        a().isEmpty(n) || s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n });
}
function N(e, t) {
    return C.subscribeToGuild(e), null != t && E.Ay.getSection(t) === m.YvQ.MEMBERS && y(e, t, o.LD);
}
function y(e, t, n) {
    if (t === h.sN) return C.subscribeChannel(e, t, n);
    let i = A.A.getChannel(t);
    if (null == i) return !1;
    let l = i.getGuildId();
    return (l !== e && e === m.YYv && C.subscribeToGuild(l), i?.isThread())
        ? i.type === m.rbe.ANNOUNCEMENT_THREAD
            ? C.subscribeChannel(l, i.parent_id, n)
            : !!i.isActiveThread() && C.subscribeThreadMemberList(l, t, S.A.getChannelId())
        : C.subscribeChannel(l, t, n);
}
function R(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && O(!0, !1);
    let n = T.A.getGuildId();
    null != n && N(n, S.A.getChannelId(n));
    let i = {};
    C.forEach((e) => {
        null == g.A.getGuild(e) ? C.clearWithoutFlushing(e, !0) : (i[e] = C.get(e));
    }),
        a().isEmpty(i) || s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: i });
}
function L(e) {
    let { guildId: t, channelId: n } = e;
    return !_.A.isUnavailable(t) && N(t, n);
}
function v() {
    return N(T.A.getGuildId(), S.A.getChannelId());
}
function D() {
    let e = u.A.getSyncingWith();
    if (null == e) null != i && (C.unsubscribeUser(i.guildId, i.userId), (i = null));
    else {
        let { userId: t } = e;
        if ((null != i && i.userId === t) || I.A.isFriend(t)) return !1;
        let n = p.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [l] = n;
        (i = { guildId: l, userId: t }), C.subscribeUser(l, t);
    }
    return !1;
}
class U extends r.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        this.waitFor(c.default, E.Ay, A.A, d.A, _.A, p.Ay, g.A, f.A, I.A, S.A, T.A, u.A),
            this.syncWith([u.A], D),
            this.syncWith([E.Ay], v);
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
        let t = C.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let P = new U(s.h, {
    CONNECTION_OPEN: R,
    CONNECTION_RESUMED: R,
    CONNECTION_CLOSED: function () {
        O(!1, !1);
    },
    IDLE: function (e) {
        let { idle: t } = e;
        if (!t) return !1;
        O(!1, !0);
    },
    LOGOUT: function () {
        C.reset();
    },
    VOICE_CHANNEL_SELECT: L,
    CHANNEL_SELECT: L,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.id === T.A.getGuildId() && v();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        C.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                e !== c.default.getId() && C.subscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                C.unsubscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        C.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        C.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let { guildId: t, channelId: n, ranges: i } = e;
        return y(t, n, i);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let { guildId: t } = e;
        return C.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let { guildId: t, channelId: n } = e;
        return N(t, n);
    },
    INBOX_OPEN: function (e) {
        let { guildIds: t } = e;
        for (let e of t) null != e && C.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return t.isArchivedThread()
            ? C.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                  S.A.getChannelId() === t.id &&
                  void C.subscribeThreadMemberList(t.guild_id, t.id, S.A.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return C.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: v,
});
