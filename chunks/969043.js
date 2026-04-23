"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(320095),
    a = n(82057),
    o = n(287809),
    l = n(935208);
let d = {};
function _(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t) d[e.id] = { loaded: !0, firstMessage: null };
    for (let e of n) u(e.channel_id, e);
}
function u(e, t) {
    let n = null == t ? null : (0, s.rh)(t);
    d[e] = { loaded: !0, firstMessage: n };
}
function c(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: s, optimistic: a, reactionType: l } = e,
        _ = d[n];
    if (null == _ || null == _.firstMessage || i !== _.firstMessage.id) return !1;
    let u = o.default.getCurrentUser(),
        c = null != u && u.id === r;
    if (a && !c) return !1;
    (d[n] = { ..._ }),
        "MESSAGE_REACTION_ADD" === t
            ? (d[n].firstMessage = _.firstMessage.addReaction(s, c, e.colors, l))
            : (d[n].firstMessage = _.firstMessage.removeReaction(s, c, l));
}
class E extends i.Ay.Store {
    static displayName = "ForumPostMessagesStore";
    initialize() {
        this.waitFor(a.A, o.default);
    }
    isLoading(e) {
        return d[e]?.loaded !== !0;
    }
    getMessage(e) {
        return e in d || (d[e] = { loaded: !1, firstMessage: null }), d[e];
    }
}
let h = new E(r.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || e.message.id !== l.default.castChannelIdAsMessageId(e.message.channel_id))
            return !1;
        u(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        if (e.message.id !== e.message.channel_id) return !1;
        let t = d[l.default.castMessageIdAsChannelId(e.message.id)];
        if (null == t || null == t.firstMessage) return !1;
        d[l.default.castMessageIdAsChannelId(e.message.id)] = {
            ...t,
            firstMessage: (0, s.IU)(t.firstMessage, e.message),
        };
    },
    MESSAGE_DELETE: function (e) {
        if (e.id !== l.default.castChannelIdAsMessageId(e.channelId)) return !1;
        d[e.channelId] = { loaded: !0, firstMessage: null };
    },
    THREAD_CREATE: function (e) {
        if (null != d[e.channel.id] || !a.A.isSubscribedToThreads(e.channel.guild_id)) return !1;
        d[e.channel.id] = { loaded: !0, firstMessage: null };
    },
    MESSAGE_REACTION_ADD: c,
    MESSAGE_REACTION_REMOVE: c,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = d[t];
        if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
        d[t] = { ...i, firstMessage: i.firstMessage.set("reactions", []) };
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            r = d[t];
        if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
        d[t] = { ...r, firstMessage: r.firstMessage.removeReactionsForEmoji(i) };
    },
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e,
            r = d[t];
        if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
        let s = o.default.getCurrentUser(),
            a = r.firstMessage.addReactionBatch(i, s?.id);
        d[t] = { ...r, firstMessage: a };
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) u(e, t[e].first_message);
    },
    LOAD_THREADS_SUCCESS: _,
    LOAD_ARCHIVED_THREADS_SUCCESS: _,
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e,
            i = n[n.length - 1];
        null != i &&
            i.id === l.default.castChannelIdAsMessageId(t) &&
            (d[t] = { loaded: !0, firstMessage: (0, s.rh)(i) });
    },
});
