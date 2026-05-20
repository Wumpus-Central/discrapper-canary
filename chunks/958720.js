"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(320095),
    a = n(815807),
    o = n(495544),
    l = n(734057),
    u = n(994500),
    c = n(309010),
    d = n(967198),
    _ = n(287809),
    f = n(935208),
    h = n(256331),
    p = n(705448);
let E = new Map(),
    m = new Set(),
    g = new Map(),
    A = new Map(),
    I = null,
    T = new Map(),
    S = new Map(),
    N = 0,
    y = new Set();
function C(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: s, reactionType: l } = e,
        u = E.get(n);
    if (null == u) return !1;
    let c = u.messageMetadataByMessageId.get(i);
    if (c?.message == null || !(0, a.vp)(e)) return !1;
    let d = o.default.getId() === r,
        _ = "MESSAGE_REACTION_ADD" === t ? c.message.addReaction(s, d, e.colors, l) : c.message.removeReaction(s, d, l);
    c.message = _;
    let f = u.conversationMetadataById.get(c.conversationId);
    if (f?.hydratedMessages != null) {
        let e = f.hydratedMessages.findIndex((e) => e.id === i);
        -1 !== e && (f.hydratedMessages[e] = _);
    }
    return !0;
}
function v(e, t) {
    let n = E.get(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t);
    if (null != i) {
        let e = n.conversationMetadataById.get(i.conversationId);
        e?.hydratedMessages != null && (e.hydratedMessages = e.hydratedMessages.filter((e) => e.id !== t));
    }
    return n.messageMetadataByMessageId.delete(t);
}
function O(e) {
    let t = E.delete(e);
    return (
        m.delete(e) && (t = !0),
        g.delete(e) && (t = !0),
        A.delete(e) && (t = !0),
        T.delete(e) && (t = !0),
        S.delete(e) && (t = !0),
        I?.channelId === e && ((I = null), (t = !0)),
        t
    );
}
class R extends i.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(o.default, l.A, h.A, u.A, c.A, d.A, _.default);
    }
    hasChannelData(e) {
        return E.has(e);
    }
    getChannelConversations(e) {
        let t = E.get(e);
        return null == t
            ? []
            : t.conversations.map((e) => {
                  let n = t.conversationMetadataById.get(e.id);
                  return { conversation: e, color: n?.color ?? p.J["0"] };
              });
    }
    getConversationForMessage(e, t) {
        return E.get(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return E.get(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getConversationMetadata(e, t) {
        return E.get(e)?.conversationMetadataById.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return I?.channelId === e ? { conversationId: I.conversationId, seq: I.seq } : null;
    }
    hasMoreConversations(e, t) {
        return !!E.has(e) && ("before" === t ? !g.get(e) : !A.get(e));
    }
    isPendingFetch(e) {
        return m.has(e);
    }
    getSelectedConversationId(e) {
        return T.get(e) ?? null;
    }
    getSelectedConversation(e) {
        let t = T.get(e);
        return null == t ? null : (E.get(e)?.conversationMetadataById.get(t)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        let t = T.get(e);
        return null == t ? null : (E.get(e)?.conversationMetadataById.get(t)?.color ?? null);
    }
    getHydratedMessages(e, t) {
        return E.get(e)?.conversationMetadataById.get(t)?.hydratedMessages ?? null;
    }
    getHydratedMessageById(e, t) {
        return E.get(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e) {
        return y.has(e);
    }
    getSelectionSeq(e) {
        return S.get(e) ?? 0;
    }
}
let b = new R(r.h, {
    CONVERSATION_FETCH_START: function (e) {
        let { conversationId: t } = e;
        y.add(t);
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, conversationId: n, conversation: i, messages: r } = e;
        y.delete(n);
        let a = E.get(t);
        if (null == a) return;
        let o = a.conversationMetadataById.get(n);
        null != o && (o.conversation = i);
        let l = r.map((e) => (0, s.rh)(e));
        for (let e of l) {
            let t = a.messageMetadataByMessageId.get(e.id);
            null != t
                ? (t.message = e)
                : a.messageMetadataByMessageId.set(e.id, { conversationId: n, moderationLabel: null, message: e });
        }
        null != o && (o.hydratedMessages = l);
    },
    CONVERSATION_FETCH_FAILURE: function (e) {
        let { conversationId: t } = e;
        y.delete(t);
    },
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        m.add(t);
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversations: n,
            direction: i,
            beforeShortCircuited: r,
            afterShortCircuited: s,
            isStaleRefresh: a,
        } = e;
        m.delete(t);
        let o = E.get(t)?.conversations ?? [];
        a &&
            (o = (function (e, t) {
                if (0 === t.length) return e;
                let n = new Set(t.map((e) => e.id)),
                    i = Math.min(...t.map((e) => f.default.extractTimestamp(e.startMessageId))),
                    r = Math.max(...t.map((e) => f.default.extractTimestamp(e.startMessageId)));
                return e.filter((e) => {
                    let t = f.default.extractTimestamp(e.startMessageId);
                    return t < i || t > r || n.has(e.id);
                });
            })(o, n)),
            r && ("before" === i || "around" === i) && g.set(t, !0),
            s && ("after" === i || "around" === i) && A.set(t, !0);
        let u = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let i = Array.from(n.values());
            return i.sort((e, t) => f.default.compare(e.startMessageId, t.startMessageId)), i;
        })(o, n);
        E.set(
            t,
            (function (e, t, n) {
                let i = n?.guildId ?? t[0]?.guildId ?? l.A.getChannel(e)?.guild_id ?? null,
                    r = new Map(),
                    s = new Map();
                for (let e of t) {
                    let t = n?.conversationMetadataById.get(e.id),
                        i = t?.color ?? p.J[N++ % p.J.length];
                    r.set(e.id, { conversation: e, color: i, hydratedMessages: t?.hydratedMessages ?? null });
                    let a = null;
                    if (null != e.moderation)
                        for (let t of ((a = new Map()), e.moderation.flaggedMessageDetails)) {
                            let e = a.get(t.messageId);
                            null != e ? e.push(t) : a.set(t.messageId, [t]);
                        }
                    for (let t of e.messageIds) {
                        let i = null;
                        null != e.moderation &&
                            e.moderation.flaggedMessageIds.includes(t) &&
                            null != a &&
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
                            })(a.get(t) ?? []));
                        let r = n?.messageMetadataByMessageId.get(t)?.message ?? null;
                        s.set(t, { conversationId: e.id, moderationLabel: i, message: r });
                    }
                }
                return { guildId: i, conversations: t, conversationMetadataById: r, messageMetadataByMessageId: s };
            })(t, u, E.get(t)),
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        m.delete(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return O(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let [e, i] of E) i.guildId === t.id && O(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        return null != n && c.A.getChannelId() === t && (g.delete(t), A.delete(t), !0);
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (
            null != t &&
            n !== T.get(t) &&
            (T.set(t, n),
            S.set(t, (S.get(t) ?? 0) + 1),
            null != n && (I = { channelId: t, conversationId: n, seq: (I?.seq ?? 0) + 1 }),
            !0)
        );
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
        let { channelId: t, conversationId: n } = e,
            i = T.get(t);
        return null != i && (null == n || i === n) && (T.set(t, null), S.set(t, (S.get(t) ?? 0) + 1), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        if (null == n || null == i) return !1;
        let r = E.get(n),
            a = r?.messageMetadataByMessageId.get(i);
        if (a?.message == null) return !1;
        let o = (0, s.IU)(a.message, t);
        a.message = o;
        let l = r?.conversationMetadataById.get(a.conversationId);
        if (l?.hydratedMessages != null) {
            let e = l.hydratedMessages.findIndex((e) => e.id === i);
            -1 !== e && (l.hydratedMessages[e] = o);
        }
        return !0;
    },
    MESSAGE_REACTION_ADD: C,
    MESSAGE_REACTION_REMOVE: C,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e,
            r = E.get(t);
        if (null == r) return !1;
        let s = r.messageMetadataByMessageId.get(n);
        if (s?.message == null) return !1;
        let a = s.message.addReactionBatch(i, o.default.getId());
        s.message = a;
        let l = r.conversationMetadataById.get(s.conversationId);
        if (l?.hydratedMessages != null) {
            let e = l.hydratedMessages.findIndex((e) => e.id === n);
            -1 !== e && (l.hydratedMessages[e] = a);
        }
        return !0;
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = E.get(t);
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
            r = E.get(t);
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
        return v(t, n);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = !1;
        for (let e of n) v(t, e) && (i = !0);
        return i;
    },
    LOGOUT: function () {
        E.clear(), m.clear(), g.clear(), A.clear(), y.clear(), T.clear(), S.clear(), (I = null), (N = 0);
    },
});
