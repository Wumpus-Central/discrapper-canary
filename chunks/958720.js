"use strict";
n.d(t, { A: () => L }), n(321073);
var i = n(635377),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(320095),
    l = n(815807),
    u = n(495544),
    c = n(734057),
    d = n(994500),
    _ = n(309010),
    f = n(967198),
    h = n(287809),
    p = n(935208),
    E = n(256331),
    m = n(575279);
let g = new Map(),
    A = new Set(),
    I = new Map(),
    T = new Map(),
    S = null,
    N = new Map(),
    y = new Map(),
    C = 0,
    v = new Set();
function O(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: s, reactionType: a } = e,
        o = g.get(n);
    if (null == o) return !1;
    let c = o.messageMetadataByMessageId.get(i);
    if (c?.message == null || !(0, l.vp)(e)) return !1;
    let d = u.default.getId() === r,
        _ = "MESSAGE_REACTION_ADD" === t ? c.message.addReaction(s, d, e.colors, a) : c.message.removeReaction(s, d, a);
    c.message = _;
    let f = o.conversationMetadataById.get(c.conversationId);
    if (f?.hydratedMessages != null) {
        let e = f.hydratedMessages.findIndex((e) => e.id === i);
        -1 !== e && (f.hydratedMessages[e] = _);
    }
    return !0;
}
function R(e, t) {
    let n = g.get(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t);
    if (null != i) {
        let e = n.conversationMetadataById.get(i.conversationId);
        e?.hydratedMessages != null && (e.hydratedMessages = e.hydratedMessages.filter((e) => e.id !== t));
    }
    return n.messageMetadataByMessageId.delete(t);
}
function b(e) {
    let t = g.delete(e);
    return (
        A.delete(e) && (t = !0),
        I.delete(e) && (t = !0),
        T.delete(e) && (t = !0),
        N.delete(e) && (t = !0),
        y.delete(e) && (t = !0),
        S?.channelId === e && ((S = null), (t = !0)),
        t
    );
}
class D extends s.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(u.default, c.A, E.A, d.A, _.A, f.A, h.default);
    }
    hasChannelData(e) {
        return g.has(e);
    }
    getChannelConversations(e) {
        let t = g.get(e);
        return null == t
            ? []
            : t.conversations.map((e) => {
                  let n = t.conversationMetadataById.get(e.id);
                  return { conversation: e, color: n?.color ?? m.J["0"] };
              });
    }
    getConversationForMessage(e, t) {
        return g.get(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return g.get(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getMessage(e, t) {
        return this.getMessageMetadata(e, t)?.message ?? null;
    }
    getConversationMetadata(e, t) {
        return g.get(e)?.conversationMetadataById.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return S?.channelId === e ? { conversationId: S.conversationId, seq: S.seq } : null;
    }
    hasMoreConversations(e, t) {
        return !!g.has(e) && ("before" === t ? !I.get(e) : !T.get(e));
    }
    isPendingFetch(e) {
        return A.has(e);
    }
    getSelectedConversationId(e) {
        return N.get(e) ?? null;
    }
    getSelectedConversation(e) {
        let t = N.get(e);
        return null == t ? null : (g.get(e)?.conversationMetadataById.get(t)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        let t = N.get(e);
        return null == t ? null : (g.get(e)?.conversationMetadataById.get(t)?.color ?? null);
    }
    getHydratedMessages(e, t) {
        return g.get(e)?.conversationMetadataById.get(t)?.hydratedMessages ?? null;
    }
    getHydratedMessageById(e, t) {
        return g.get(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e) {
        return v.has(e);
    }
    getSelectionSeq(e) {
        return y.get(e) ?? 0;
    }
    getConversationFeedbackRating(e, t) {
        return g.get(e)?.recentFeedbackRatingsByConversationId.get(t) ?? null;
    }
}
let L = new D(a.h, {
    CONVERSATION_FETCH_START: function (e) {
        let { conversationId: t } = e;
        v.add(t);
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, conversationId: n, conversation: i, messages: r } = e;
        v.delete(n);
        let s = g.get(t);
        if (null == s) return;
        let a = s.conversationMetadataById.get(n);
        null != a && (a.conversation = i);
        let l = r.map((e) => (0, o.rh)(e));
        for (let e of l) {
            let t = s.messageMetadataByMessageId.get(e.id);
            null != t
                ? (t.message = e)
                : s.messageMetadataByMessageId.set(e.id, { conversationId: n, moderationLabel: null, message: e });
        }
        null != a && (a.hydratedMessages = l);
    },
    CONVERSATION_FETCH_FAILURE: function (e) {
        let { conversationId: t } = e;
        v.delete(t);
    },
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        A.add(t);
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversations: n,
            direction: i,
            beforeShortCircuited: s,
            afterShortCircuited: a,
            isStaleRefresh: o,
        } = e;
        A.delete(t);
        let l = g.get(t)?.conversations ?? [];
        o &&
            (l = (function (e, t) {
                if (0 === t.length) return e;
                let n = new Set(t.map((e) => e.id)),
                    i = Math.min(...t.map((e) => p.default.extractTimestamp(e.startMessageId))),
                    r = Math.max(...t.map((e) => p.default.extractTimestamp(e.startMessageId)));
                return e.filter((e) => {
                    let t = p.default.extractTimestamp(e.startMessageId);
                    return t < i || t > r || n.has(e.id);
                });
            })(l, n)),
            s && ("before" === i || "around" === i) && I.set(t, !0),
            a && ("after" === i || "around" === i) && T.set(t, !0);
        let u = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let i = Array.from(n.values());
            return i.sort((e, t) => p.default.compare(e.startMessageId, t.startMessageId)), i;
        })(l, n);
        g.set(
            t,
            (function (e, t, n) {
                let i = n?.guildId ?? t[0]?.guildId ?? c.A.getChannel(e)?.guild_id ?? null,
                    s = new Map(),
                    a = new Map();
                for (let e of t) {
                    let t = n?.conversationMetadataById.get(e.id),
                        i = t?.color ?? m.J[C++ % m.J.length];
                    s.set(e.id, { conversation: e, color: i, hydratedMessages: t?.hydratedMessages ?? null });
                    let r = null;
                    if (null != e.moderation)
                        for (let t of ((r = new Map()), e.moderation.flaggedMessageDetails)) {
                            let e = r.get(t.messageId);
                            null != e ? e.push(t) : r.set(t.messageId, [t]);
                        }
                    for (let t of e.messageIds) {
                        let i = null;
                        null != e.moderation &&
                            e.moderation.flaggedMessageIds.includes(t) &&
                            null != r &&
                            (i = (function (e) {
                                let t = e[0],
                                    n = e.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                    i = t?.severity ?? null,
                                    r = t?.confidence ?? null,
                                    s = [null != i ? `${i} severity` : null, null != r ? `${r} confidence` : null]
                                        .filter(Boolean)
                                        .join(", "),
                                    a = [n.length > 0 ? n.join(", ") : null, s.length > 0 ? s : null]
                                        .filter(Boolean)
                                        .join(" \xb7 ");
                                return a.length > 0 ? a : "Moderation Failed";
                            })(r.get(t) ?? []));
                        let s = n?.messageMetadataByMessageId.get(t)?.message ?? null;
                        a.set(t, { conversationId: e.id, moderationLabel: i, message: s });
                    }
                }
                return {
                    guildId: i,
                    conversations: t,
                    conversationMetadataById: s,
                    messageMetadataByMessageId: a,
                    recentFeedbackRatingsByConversationId:
                        n?.recentFeedbackRatingsByConversationId ?? new (r())({ max: 10 }),
                };
            })(t, u, g.get(t)),
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        A.delete(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return b(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let [e, i] of g) i.guildId === t.id && b(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        return null != n && _.A.getChannelId() === t && (I.delete(t), T.delete(t), !0);
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (
            null != t &&
            (N.set(t, n),
            y.set(t, (y.get(t) ?? 0) + 1),
            null != n && (S = { channelId: t, conversationId: n, seq: (S?.seq ?? 0) + 1 }),
            !0)
        );
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
        let { channelId: t, conversationId: n } = e,
            i = N.get(t);
        return null != i && (null == n || i === n) && (N.set(t, null), y.set(t, (y.get(t) ?? 0) + 1), !0);
    },
    SET_CONVERSATION_FEEDBACK_RATING: function (e) {
        let { channelId: t, conversationId: n, rating: i } = e,
            r = g.get(t);
        return null != r && (r.recentFeedbackRatingsByConversationId.set(n, i), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        if (null == n || null == i) return !1;
        let r = g.get(n),
            s = r?.messageMetadataByMessageId.get(i);
        if (s?.message == null) return !1;
        let a = (0, o.IU)(s.message, t);
        s.message = a;
        let l = r?.conversationMetadataById.get(s.conversationId);
        if (l?.hydratedMessages != null) {
            let e = l.hydratedMessages.findIndex((e) => e.id === i);
            -1 !== e && (l.hydratedMessages[e] = a);
        }
        return !0;
    },
    MESSAGE_REACTION_ADD: O,
    MESSAGE_REACTION_REMOVE: O,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e,
            r = g.get(t);
        if (null == r) return !1;
        let s = r.messageMetadataByMessageId.get(n);
        if (s?.message == null) return !1;
        let a = s.message.addReactionBatch(i, u.default.getId());
        s.message = a;
        let o = r.conversationMetadataById.get(s.conversationId);
        if (o?.hydratedMessages != null) {
            let e = o.hydratedMessages.findIndex((e) => e.id === n);
            -1 !== e && (o.hydratedMessages[e] = a);
        }
        return !0;
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = g.get(t);
        if (null == i) return !1;
        let r = i.messageMetadataByMessageId.get(n);
        if (r?.message == null) return !1;
        let s = r.message.set("reactions", []);
        r.message = s;
        let a = i.conversationMetadataById.get(r.conversationId);
        if (a?.hydratedMessages != null) {
            let e = a.hydratedMessages.findIndex((e) => e.id === n);
            -1 !== e && (a.hydratedMessages[e] = s);
        }
        return !0;
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            r = g.get(t);
        if (null == r) return !1;
        let s = r.messageMetadataByMessageId.get(n);
        if (s?.message == null) return !1;
        let a = s.message.removeReactionsForEmoji(i);
        s.message = a;
        let o = r.conversationMetadataById.get(s.conversationId);
        if (o?.hydratedMessages != null) {
            let e = o.hydratedMessages.findIndex((e) => e.id === n);
            -1 !== e && (o.hydratedMessages[e] = a);
        }
        return !0;
    },
    MESSAGE_DELETE: function (e) {
        let { channelId: t, id: n } = e;
        return R(t, n);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = !1;
        for (let e of n) R(t, e) && (i = !0);
        return i;
    },
    LOGOUT: function () {
        g.clear(), A.clear(), I.clear(), T.clear(), v.clear(), N.clear(), y.clear(), (S = null), (C = 0);
    },
});
