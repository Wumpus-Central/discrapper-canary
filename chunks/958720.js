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
    h = n(287809),
    f = n(935208),
    p = n(256331),
    E = n(575279);
let m = new Map(),
    g = new Set(),
    A = new Map(),
    I = new Map(),
    T = null,
    S = new Map(),
    y = new Map(),
    N = 0,
    v = new Map();
function C(e, t) {
    let n = v.get(e);
    null != n && (n.delete(t), 0 === n.size && v.delete(e));
}
function R(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: s, reactionType: a } = e,
        o = m.get(n);
    if (null == o) return !1;
    let c = o.messageMetadataByMessageId.get(i);
    if (c?.message == null || !(0, l.vp)(e)) return !1;
    let d = u.default.getId() === r,
        _ = "MESSAGE_REACTION_ADD" === t ? c.message.addReaction(s, d, e.colors, a) : c.message.removeReaction(s, d, a);
    c.message = _;
    let h = o.conversationMetadataById.get(c.conversationId);
    if (h?.hydratedMessages != null) {
        let e = h.hydratedMessages.findIndex((e) => e.id === i);
        -1 !== e && (h.hydratedMessages[e] = _);
    }
    return !0;
}
function O(e, t) {
    let n = m.get(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t);
    if (null != i) {
        let e = n.conversationMetadataById.get(i.conversationId);
        e?.hydratedMessages != null && (e.hydratedMessages = e.hydratedMessages.filter((e) => e.id !== t));
    }
    return n.messageMetadataByMessageId.delete(t);
}
function b(e) {
    let t = m.delete(e);
    return (
        g.delete(e) && (t = !0),
        A.delete(e) && (t = !0),
        I.delete(e) && (t = !0),
        S.delete(e) && (t = !0),
        y.delete(e) && (t = !0),
        T?.channelId === e && ((T = null), (t = !0)),
        t
    );
}
class D extends s.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(u.default, c.A, p.A, d.A, _.A, h.default);
    }
    hasChannelData(e) {
        return m.has(e);
    }
    getChannelConversations(e) {
        let t = m.get(e);
        return null == t
            ? []
            : t.conversations.map((e) => {
                  let n = t.conversationMetadataById.get(e.id);
                  return { conversation: e, color: n?.color ?? E.J["0"] };
              });
    }
    getConversationForMessage(e, t) {
        return m.get(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return m.get(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getMessage(e, t) {
        return this.getMessageMetadata(e, t)?.message ?? null;
    }
    getConversationMetadata(e, t) {
        return m.get(e)?.conversationMetadataById.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return T?.channelId === e ? { conversationId: T.conversationId, seq: T.seq } : null;
    }
    hasMoreConversations(e, t) {
        return !!m.has(e) && ("before" === t ? !A.get(e) : !I.get(e));
    }
    isPendingFetch(e) {
        return g.has(e);
    }
    getSelectedConversationId(e) {
        return S.get(e) ?? null;
    }
    getSelectedConversation(e) {
        let t = S.get(e);
        return null == t ? null : (m.get(e)?.conversationMetadataById.get(t)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        let t = S.get(e);
        return null == t ? null : (m.get(e)?.conversationMetadataById.get(t)?.color ?? null);
    }
    getHydratedMessages(e, t) {
        return m.get(e)?.conversationMetadataById.get(t)?.hydratedMessages ?? null;
    }
    getHydratedMessageById(e, t) {
        return m.get(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e, t) {
        let n = v.get(e);
        return null != n && 0 !== n.size && (!0 !== t || n.has("full"));
    }
    getSelectionSeq(e) {
        return y.get(e) ?? 0;
    }
    getConversationFeedbackRating(e, t) {
        return m.get(e)?.recentFeedbackRatingsByConversationId.get(t) ?? null;
    }
}
let L = new D(a.h, {
    CONVERSATION_FETCH_START: function (e) {
        var t;
        let n,
            { conversationId: i, full: r } = e;
        (t = r ? "full" : "preview"), null != (n = v.get(i)) ? n.add(t) : v.set(i, new Set([t]));
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, conversationId: n, messages: i, fullyHydrated: r } = e;
        C(n, r ? "full" : "preview");
        let s = m.get(t);
        if (null == s) return;
        let a = s.conversationMetadataById.get(n);
        if (null == a || (!r && a.fullyHydrated)) return;
        let l = i.map((e) => (0, o.rh)(e));
        for (let e of l) {
            let t = s.messageMetadataByMessageId.get(e.id);
            null != t
                ? (t.message = e)
                : s.messageMetadataByMessageId.set(e.id, { conversationId: n, moderationLabel: null, message: e });
        }
        (a.hydratedMessages = l), (a.fullyHydrated = r);
    },
    CONVERSATION_FETCH_FAILURE: function (e) {
        let { conversationId: t, full: n } = e;
        C(t, n ? "full" : "preview");
    },
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        g.add(t);
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
        g.delete(t);
        let l = m.get(t)?.conversations ?? [];
        o &&
            (l = (function (e, t) {
                if (0 === t.length) return e;
                let n = new Set(t.map((e) => e.id)),
                    i = Math.min(...t.map((e) => f.default.extractTimestamp(e.startMessageId))),
                    r = Math.max(...t.map((e) => f.default.extractTimestamp(e.startMessageId)));
                return e.filter((e) => {
                    let t = f.default.extractTimestamp(e.startMessageId);
                    return t < i || t > r || n.has(e.id);
                });
            })(l, n)),
            s && ("before" === i || "around" === i) && A.set(t, !0),
            a && ("after" === i || "around" === i) && I.set(t, !0);
        let u = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let i = Array.from(n.values());
            return i.sort((e, t) => f.default.compare(e.startMessageId, t.startMessageId)), i;
        })(l, n);
        m.set(
            t,
            (function (e, t, n) {
                let i = n?.guildId ?? t[0]?.guildId ?? c.A.getChannel(e)?.guild_id ?? null,
                    s = new Map(),
                    a = new Map();
                for (let e of t) {
                    let t = n?.conversationMetadataById.get(e.id),
                        i = t?.color ?? E.J[N++ % E.J.length],
                        r = t?.hydratedMessages ?? null,
                        o = null != r && !!t?.fullyHydrated;
                    s.set(e.id, { conversation: e, color: i, hydratedMessages: r, fullyHydrated: o });
                    let l = null;
                    if (null != e.moderation)
                        for (let t of ((l = new Map()), e.moderation.flaggedMessageDetails)) {
                            let e = l.get(t.messageId);
                            null != e ? e.push(t) : l.set(t.messageId, [t]);
                        }
                    for (let t of e.messageIds) {
                        let i = null;
                        null != e.moderation &&
                            e.moderation.flaggedMessageIds.includes(t) &&
                            null != l &&
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
                            })(l.get(t) ?? []));
                        let r = n?.messageMetadataByMessageId.get(t)?.message ?? null;
                        a.set(t, { conversationId: e.id, moderationLabel: i, message: r });
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
            })(t, u, m.get(t)),
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        g.delete(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return b(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let [e, i] of m) i.guildId === t.id && b(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        return null != n && _.A.getChannelId() === t && (A.delete(t), I.delete(t), !0);
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (
            null != t &&
            (S.set(t, n),
            y.set(t, (y.get(t) ?? 0) + 1),
            null != n && (T = { channelId: t, conversationId: n, seq: (T?.seq ?? 0) + 1 }),
            !0)
        );
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
        let { channelId: t, conversationId: n } = e,
            i = S.get(t);
        return null != i && (null == n || i === n) && (S.set(t, null), y.set(t, (y.get(t) ?? 0) + 1), !0);
    },
    SET_CONVERSATION_FEEDBACK_RATING: function (e) {
        let { channelId: t, conversationId: n, rating: i } = e,
            r = m.get(t);
        return null != r && (r.recentFeedbackRatingsByConversationId.set(n, i), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        if (null == n || null == i) return !1;
        let r = m.get(n),
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
    MESSAGE_REACTION_ADD: R,
    MESSAGE_REACTION_REMOVE: R,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e,
            r = m.get(t);
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
            i = m.get(t);
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
            r = m.get(t);
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
        return O(t, n);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = !1;
        for (let e of n) O(t, e) && (i = !0);
        return i;
    },
    LOGOUT: function () {
        m.clear(), g.clear(), A.clear(), I.clear(), v.clear(), S.clear(), y.clear(), (T = null), (N = 0);
    },
});
