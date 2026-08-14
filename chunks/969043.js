"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(320095),
    s = n(63238),
    l = n(287809),
    o = n(935208);
let d = {};
function c(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t) d[e.id] = { loaded: !0, firstMessage: null };
    for (let e of n) u(e.channel_id, e);
}
function u(e, t) {
    let n = null == t ? null : (0, a.rh)(t);
    d[e] = { loaded: !0, firstMessage: n };
}
function _(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, optimistic: s, reactionType: o } = e,
        c = d[n];
    if (null == c || null == c.firstMessage || i !== c.firstMessage.id) return !1;
    let u = l.default.getCurrentUser(),
        _ = null != u && u.id === r;
    if (s && !_) return !1;
    (d[n] = { ...c }),
        "MESSAGE_REACTION_ADD" === t
            ? (d[n].firstMessage = c.firstMessage.addReaction(a, _, { colors: e.colors, reactionType: o }))
            : (d[n].firstMessage = c.firstMessage.removeReaction(a, _, o));
}
class E extends i.Ay.Store {
    static displayName = "ForumPostMessagesStore";
    initialize() {
        this.waitFor(s.A, l.default);
    }
    isLoading(e) {
        return d[e]?.loaded !== !0;
    }
    getMessage(e) {
        return e in d || (d[e] = { loaded: !1, firstMessage: null }), d[e];
    }
}
let A = new E(r.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || e.message.id !== o.default.castChannelIdAsMessageId(e.message.channel_id))
            return !1;
        u(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        if (e.message.id !== e.message.channel_id) return !1;
        let t = d[o.default.castMessageIdAsChannelId(e.message.id)];
        if (null == t || null == t.firstMessage) return !1;
        d[o.default.castMessageIdAsChannelId(e.message.id)] = {
            ...t,
            firstMessage: (0, a.IU)(t.firstMessage, e.message),
        };
    },
    MESSAGE_DELETE: function (e) {
        if (e.id !== o.default.castChannelIdAsMessageId(e.channelId)) return !1;
        d[e.channelId] = { loaded: !0, firstMessage: null };
    },
    THREAD_CREATE: function (e) {
        if (null != d[e.channel.id] || !s.A.isSubscribedToThreads(e.channel.guild_id)) return !1;
        d[e.channel.id] = { loaded: !0, firstMessage: null };
    },
    MESSAGE_REACTION_ADD: _,
    MESSAGE_REACTION_REMOVE: _,
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
        let a = l.default.getCurrentUser(),
            s = r.firstMessage.addReactionBatch(i, a?.id);
        d[t] = { ...r, firstMessage: s };
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) u(e, t[e].first_message);
    },
    LOAD_THREADS_SUCCESS: c,
    LOAD_ARCHIVED_THREADS_SUCCESS: c,
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e,
            i = n[n.length - 1];
        null != i &&
            i.id === o.default.castChannelIdAsMessageId(t) &&
            (d[t] = { loaded: !0, firstMessage: (0, a.rh)(i) });
    },
});
