"use strict";
n.d(t, { A: () => v });
var r = n(311907),
    i = n(73153),
    a = n(141468),
    s = n(82057),
    o = n(287809),
    l = n(661191);
let u = {};
function c() {
    u = {};
}
function d(e) {
    let { threads: t } = e;
    for (let e in t) p(e, t[e].first_message);
}
function _(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t) u[e.id] = { loaded: !0, firstMessage: null };
    for (let e of n) p(e.channel_id, e);
}
function f(e) {
    if (e.isPushNotification || e.message.id !== l.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
    p(e.message.channel_id, e.message);
}
function p(e, t) {
    let n = null == t ? null : (0, a.rh)(t);
    u[e] = { loaded: !0, firstMessage: n };
}
function h(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let t = u[l.default.castMessageIdAsChannelId(e.message.id)];
    if (null == t || null == t.firstMessage) return !1;
    u[l.default.castMessageIdAsChannelId(e.message.id)] = { ...t, firstMessage: (0, a.IU)(t.firstMessage, e.message) };
}
function m(e) {
    if (e.id !== l.default.castChannelIdAsMessageId(e.channelId)) return !1;
    u[e.channelId] = { loaded: !0, firstMessage: null };
}
function g(e) {
    if (null != u[e.channel.id] || !s.A.isSubscribedToThreads(e.channel.guild_id)) return !1;
    u[e.channel.id] = { loaded: !0, firstMessage: null };
}
function E(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, optimistic: s, reactionType: l } = e,
        c = u[n];
    if (null == c || null == c.firstMessage || r !== c.firstMessage.id) return !1;
    let d = o.default.getCurrentUser(),
        _ = null != d && d.id === i;
    if (s && !_) return !1;
    (u[n] = { ...c }),
        "MESSAGE_REACTION_ADD" === t
            ? (u[n].firstMessage = c.firstMessage.addReaction(a, _, e.colors, l))
            : (u[n].firstMessage = c.firstMessage.removeReaction(a, _, l));
}
function A(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = u[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    let a = o.default.getCurrentUser(),
        s = i.firstMessage.addReactionBatch(r, a?.id);
    u[t] = { ...i, firstMessage: s };
}
function I(e) {
    let { channelId: t, messageId: n } = e,
        r = u[t];
    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
    u[t] = { ...r, firstMessage: r.firstMessage.set("reactions", []) };
}
function T(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = u[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    u[t] = { ...i, firstMessage: i.firstMessage.removeReactionsForEmoji(r) };
}
function y(e) {
    let { channelId: t, messages: n } = e,
        r = n[n.length - 1];
    null != r && r.id === l.default.castChannelIdAsMessageId(t) && (u[t] = { loaded: !0, firstMessage: (0, a.rh)(r) });
}
class S extends r.Ay.Store {
    static displayName = "ForumPostMessagesStore";
    initialize() {
        this.waitFor(s.A, o.default);
    }
    isLoading(e) {
        return u[e]?.loaded !== !0;
    }
    getMessage(e) {
        return e in u || (u[e] = { loaded: !1, firstMessage: null }), u[e];
    }
}
let v = new S(i.h, {
    CONNECTION_OPEN: c,
    MESSAGE_CREATE: f,
    MESSAGE_UPDATE: h,
    MESSAGE_DELETE: m,
    THREAD_CREATE: g,
    MESSAGE_REACTION_ADD: E,
    MESSAGE_REACTION_REMOVE: E,
    MESSAGE_REACTION_REMOVE_ALL: I,
    MESSAGE_REACTION_REMOVE_EMOJI: T,
    MESSAGE_REACTION_ADD_MANY: A,
    LOAD_FORUM_POSTS: d,
    LOAD_THREADS_SUCCESS: _,
    LOAD_ARCHIVED_THREADS_SUCCESS: _,
    LOAD_MESSAGES_SUCCESS: y,
});
