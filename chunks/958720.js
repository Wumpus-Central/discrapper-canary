"use strict";
n.d(t, { A: () => D }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(320095),
    a = n(495544),
    o = n(734057),
    l = n(994500),
    _ = n(309010),
    d = n(967198),
    u = n(287809),
    c = n(935208),
    E = n(256331),
    h = n(705448);
let m = new Map(),
    f = new Set(),
    g = new Map(),
    A = new Map(),
    I = null,
    p = null,
    T = null,
    S = !1,
    N = new Set(),
    O = 0;
function R(e, t) {
    let n = m.get(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t);
    if (null != i) {
        let e = n.conversationMetadataById.get(i.conversationId);
        e?.hydratedMessages != null && (e.hydratedMessages = e.hydratedMessages.filter((e) => e.id !== t));
    }
    return n.messageMetadataByMessageId.delete(t);
}
function C(e) {
    let t = m.delete(e);
    return (
        f.delete(e) && (t = !0),
        g.delete(e) && (t = !0),
        A.delete(e) && (t = !0),
        I === e && (I = null),
        p?.channelId === e && ((p = null), (t = !0)),
        t
    );
}
class y extends i.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(a.default, o.A, E.A, l.A, _.A, d.A, u.default);
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
                  return { conversation: e, color: n?.color ?? h.J["0"] };
              });
    }
    getConversationForMessage(e, t) {
        return m.get(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return m.get(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getConversationMetadata(e, t) {
        return m.get(e)?.conversationMetadataById.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return p?.channelId === e ? { conversationId: p.conversationId, seq: p.seq } : null;
    }
    hasMoreConversations(e, t) {
        return !!m.has(e) && ("before" === t ? !g.get(e) : !A.get(e));
    }
    isPendingFetch(e) {
        return f.has(e);
    }
    getSelectedConversation(e) {
        return null == T ? null : (m.get(e)?.conversationMetadataById.get(T)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        return null == T ? null : (m.get(e)?.conversationMetadataById.get(T)?.color ?? null);
    }
    getHydratedMessages(e, t) {
        let n = m.get(e)?.conversationMetadataById.get(t)?.hydratedMessages;
        return null != n && n.length > 0 ? n : null;
    }
    getHydratedMessageById(e, t) {
        return m.get(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e) {
        return N.has(e);
    }
    isConversationExpanded() {
        return S;
    }
}
let D = new y(r.h, {
    CONVERSATION_FETCH_START: function (e) {
        let { conversationId: t } = e;
        N.add(t);
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, conversationId: n, conversation: i, messages: r } = e;
        N.delete(n);
        let a = m.get(t);
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
        N.delete(t);
    },
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        f.add(t);
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
        f.delete(t);
        let l = m.get(t)?.conversations ?? [];
        a &&
            (l = (function (e, t) {
                if (0 === t.length) return e;
                let n = new Set(t.map((e) => e.id)),
                    i = Math.min(...t.map((e) => c.default.extractTimestamp(e.startMessageId))),
                    r = Math.max(...t.map((e) => c.default.extractTimestamp(e.startMessageId)));
                return e.filter((e) => {
                    let t = c.default.extractTimestamp(e.startMessageId);
                    return t < i || t > r || n.has(e.id);
                });
            })(l, n)),
            r && ("before" === i || "around" === i) && g.set(t, !0),
            s && ("after" === i || "around" === i) && A.set(t, !0);
        let _ = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let i = Array.from(n.values());
            return i.sort((e, t) => c.default.compare(e.startMessageId, t.startMessageId)), i;
        })(l, n);
        m.set(
            t,
            (function (e, t, n) {
                let i = n?.guildId ?? t[0]?.guildId ?? o.A.getChannel(e)?.guild_id ?? null,
                    r = new Map(),
                    s = new Map();
                for (let e of t) {
                    let t = n?.conversationMetadataById.get(e.id),
                        i = t?.color ?? h.J[O++ % h.J.length];
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
            })(t, _, m.get(t)),
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        f.delete(t);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (I === t) return !1;
        (T = null), (S = !1), (I = t ?? null);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let [e, i] of m) i.guildId === t.id && C(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        return null != n && _.A.getChannelId() === t && (g.delete(t), A.delete(t), !0);
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (
            T !== n &&
            ((T = n),
            (S = !1),
            null != t && null != n && (p = { channelId: t, conversationId: n, seq: (p?.seq ?? 0) + 1 }),
            !0)
        );
    },
    SET_CONVERSATION_EXPANDED: function (e) {
        let { expanded: t } = e;
        return S !== t && ((S = t), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        if (null == n || null == i) return !1;
        let r = m.get(n),
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
        m.clear(), f.clear(), g.clear(), A.clear(), N.clear(), (I = null), (T = null), (S = !1), (p = null), (O = 0);
    },
});
