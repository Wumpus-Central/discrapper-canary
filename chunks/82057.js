"use strict";
let r;
n.d(t, { A: () => w });
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = n(432703),
    u = n(49463),
    d = n(655116),
    c = n(961350),
    _ = n(963307),
    f = n(761640),
    E = n(734057),
    h = n(919638),
    p = n(696451),
    m = n(71393),
    g = n(383501),
    A = n(994500),
    I = n(309010),
    T = n(967198),
    S = n(652215);
let y = new l.Ay((e) => {
    for (let t in e) null != m.A.getGuild(t) || h.A.isUnavailable(t) || delete e[t];
    o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
});
function N(e, t) {
    let n = {};
    y.forEach((i) => {
        i !== T.A.getGuildId() &&
            i !== g.A.getGuildId() &&
            i !== E.A.getChannel(I.A.getChannelId())?.getGuildId() &&
            (null == r || r.guildId !== i) &&
            (y.clearWithoutFlushing(i, e), t && (n[i] = y.get(i)));
    }),
        s().isEmpty(n) || o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: n });
}
function O(e, t) {
    return y.subscribeToGuild(e), null != t && f.Ay.getSection(t) === S.YvQ.MEMBERS && R(e, t, l.LD);
}
function R(e, t, n) {
    if (t === _.sN) return y.subscribeChannel(e, t, n);
    let r = E.A.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === S.YYv && y.subscribeToGuild(i), r?.isThread())
        ? r.type === S.rbe.ANNOUNCEMENT_THREAD
            ? y.subscribeChannel(i, r.parent_id, n)
            : !!r.isActiveThread() && y.subscribeThreadMemberList(i, t, I.A.getChannelId())
        : y.subscribeChannel(i, t, n);
}
function v(e) {
    let { type: t } = e;
    "CONNECTION_OPEN" === t && N(!0, !1);
    let n = T.A.getGuildId();
    null != n && O(n, I.A.getChannelId(n));
    let r = {};
    y.forEach((e) => {
        null == m.A.getGuild(e) ? y.clearWithoutFlushing(e, !0) : (r[e] = y.get(e));
    }),
        s().isEmpty(r) || o.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: r });
}
function C(e) {
    let { guildId: t, channelId: n } = e;
    return !h.A.isUnavailable(t) && O(t, n);
}
function b() {
    return O(T.A.getGuildId(), I.A.getChannelId());
}
function D() {
    let e = d.A.getSyncingWith();
    if (null == e) null != r && (y.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || A.A.isFriend(t)) return !1;
        let n = p.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        (r = { guildId: i, userId: t }), y.subscribeUser(i, t);
    }
    return !1;
}
class L extends a.Ay.Store {
    static displayName = "GuildSubscriptionsStore";
    initialize() {
        this.waitFor(c.default, f.Ay, E.A, u.A, h.A, p.Ay, m.A, g.A, A.A, I.A, T.A, d.A),
            this.syncWith([d.A], D),
            this.syncWith([f.Ay], b);
    }
    getSubscribedThreadIds() {
        return y.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return y.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return y.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return y.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = y.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
let w = new L(o.h, {
    CONNECTION_OPEN: v,
    CONNECTION_RESUMED: v,
    CONNECTION_CLOSED: function () {
        N(!1, !1);
    },
    IDLE: function (e) {
        let { idle: t } = e;
        if (!t) return !1;
        N(!1, !0);
    },
    LOGOUT: function () {
        y.reset();
    },
    VOICE_CHANNEL_SELECT: C,
    CHANNEL_SELECT: C,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        t.id === T.A.getGuildId() && b();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        y.clearWithoutFlushing(t.id, !0);
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                e !== c.default.getId() && y.subscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
        let { guildId: t, userIds: n } = e;
        return (
            n.forEach((e) => {
                y.unsubscribeUser(t, e);
            }),
            !1
        );
    },
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        y.subscribeToMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
        let { guildId: t } = e;
        y.unsubscribeFromMemberUpdates(t);
    },
    GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
        let { guildId: t, channelId: n, ranges: r } = e;
        return R(t, n, r);
    },
    GUILD_SUBSCRIPTIONS: function (e) {
        let { guildId: t } = e;
        return y.subscribeToGuild(t);
    },
    CHANNEL_PRELOAD: function (e) {
        let { guildId: t, channelId: n } = e;
        return O(t, n);
    },
    INBOX_OPEN: function (e) {
        let { guildIds: t } = e;
        for (let e of t) null != e && y.subscribeToGuild(e);
        return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return t.isArchivedThread()
            ? y.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                  I.A.getChannelId() === t.id &&
                  void y.subscribeThreadMemberList(t.guild_id, t.id, I.A.getChannelId());
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return y.unsubscribeThreadMemberList(t.guild_id, t.id);
    },
    THREAD_LIST_SYNC: b,
});
