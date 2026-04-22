"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(141468),
    a = n(82057),
    o = n(287809),
    l = n(661191);
let u = {};
function d(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t) u[e.id] = { loaded: !0, firstMessage: null };
    for (let e of n) c(e.channel_id, e);
}
function c(e, t) {
    let n = null == t ? null : (0, s.rh)(t);
    u[e] = { loaded: !0, firstMessage: n };
}
function _(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: s, optimistic: a, reactionType: l } = e,
        d = u[n];
    if (null == d || null == d.firstMessage || r !== d.firstMessage.id) return !1;
    let c = o.default.getCurrentUser(),
        _ = null != c && c.id === i;
    if (a && !_) return !1;
    (u[n] = { ...d }),
        "MESSAGE_REACTION_ADD" === t
            ? (u[n].firstMessage = d.firstMessage.addReaction(s, _, e.colors, l))
            : (u[n].firstMessage = d.firstMessage.removeReaction(s, _, l));
}
class f extends r.Ay.Store {
    static displayName = "ForumPostMessagesStore";
    initialize() {
        this.waitFor(a.A, o.default);
    }
    isLoading(e) {
        return u[e]?.loaded !== !0;
    }
    getMessage(e) {
        return e in u || (u[e] = { loaded: !1, firstMessage: null }), u[e];
    }
}
let E = new f(i.h, {
    CONNECTION_OPEN: function () {
        u = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || e.message.id !== l.default.castChannelIdAsMessageId(e.message.channel_id))
            return !1;
        c(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        if (e.message.id !== e.message.channel_id) return !1;
        let t = u[l.default.castMessageIdAsChannelId(e.message.id)];
        if (null == t || null == t.firstMessage) return !1;
        u[l.default.castMessageIdAsChannelId(e.message.id)] = {
            ...t,
            firstMessage: (0, s.IU)(t.firstMessage, e.message),
        };
    },
    MESSAGE_DELETE: function (e) {
        if (e.id !== l.default.castChannelIdAsMessageId(e.channelId)) return !1;
        u[e.channelId] = { loaded: !0, firstMessage: null };
    },
    THREAD_CREATE: function (e) {
        if (null != u[e.channel.id] || !a.A.isSubscribedToThreads(e.channel.guild_id)) return !1;
        u[e.channel.id] = { loaded: !0, firstMessage: null };
    },
    MESSAGE_REACTION_ADD: _,
    MESSAGE_REACTION_REMOVE: _,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            r = u[t];
        if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
        u[t] = { ...r, firstMessage: r.firstMessage.set("reactions", []) };
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: r } = e,
            i = u[t];
        if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
        u[t] = { ...i, firstMessage: i.firstMessage.removeReactionsForEmoji(r) };
    },
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: r } = e,
            i = u[t];
        if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
        let s = o.default.getCurrentUser(),
            a = i.firstMessage.addReactionBatch(r, s?.id);
        u[t] = { ...i, firstMessage: a };
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) c(e, t[e].first_message);
    },
    LOAD_THREADS_SUCCESS: d,
    LOAD_ARCHIVED_THREADS_SUCCESS: d,
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e,
            r = n[n.length - 1];
        null != r &&
            r.id === l.default.castChannelIdAsMessageId(t) &&
            (u[t] = { loaded: !0, firstMessage: (0, s.rh)(r) });
    },
});
