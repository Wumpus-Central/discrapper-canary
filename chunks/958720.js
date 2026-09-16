(n.d(t, { A: () => P }), n(321073));
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(320095),
    o = n(280450),
    d = n(734057),
    c = n(994500),
    u = n(309010),
    _ = n(287809),
    E = n(403362),
    A = n(935208),
    h = n(624044),
    I = n(256331),
    f = n(161204),
    p = n(575279);
let T = new (r())({ max: 10, dispose: v }),
    m = new Map();
function g(e, t) {
    let n = m.get(e);
    return null != n && !!n.has(t) && (n.delete(t), 0 === n.size && m.delete(e), !0);
}
let S = new Map();
function N(e, t) {
    let n = S.get(e);
    null != n && (n.delete(t), 0 === n.size && S.delete(e));
}
function C(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        a = T.peek(e);
    if (null == a) return;
    let s = a.conversationMetadataById.get(t);
    null != s &&
        (0, h.ep)({
            meta: s,
            messages: n,
            fullyHydrated: i,
            messageReferences: r,
            upsertMessage: (e) => {
                let n = a.messageMetadataByMessageId.get(e.id);
                null != n
                    ? ((n.conversationId = t), (n.message = e))
                    : a.messageMetadataByMessageId.set(e.id, { conversationId: t, moderationLabel: null, message: e });
            },
            upsertReference: (e) => {
                a.messageMetadataByMessageId.has(e.id) ||
                    a.messageMetadataByMessageId.set(e.id, { conversationId: null, moderationLabel: null, message: e });
            },
        });
}
function O(e, t) {
    return null == t.conversationId ? null : (e.conversationMetadataById.get(t.conversationId) ?? null);
}
function R(e, t, n) {
    let i = T.peek(e);
    if (null == i) return !1;
    let r = i.messageMetadataByMessageId.get(t);
    if (r?.message == null) return !1;
    let a = n(r.message);
    return null != a && ((r.message = a), (0, h.V)(O(i, r), t, a), !0);
}
function L(e) {
    return R(e.channelId, e.messageId, (t) => (0, h.y4)(e, t));
}
function y() {
    let e = !1;
    return (
        T.forEach((t) => {
            t.messageMetadataByMessageId.forEach((n, i) => {
                if (null == n.message) return;
                let r = (0, h.a)(n.message);
                null != r && ((e = !0), (n.message = r), (0, h.V)(O(t, n), i, r));
            });
        }),
        e
    );
}
function D(e, t) {
    let n = T.peek(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t),
        r = null != i ? O(n, i) : null;
    return ((0, h.rO)(r, t), n.messageMetadataByMessageId.delete(t));
}
function v(e) {
    return m.delete(e);
}
function b(e) {
    let t = T.has(e);
    T.del(e);
    let n = v(e);
    return t || n;
}
class M extends a.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(o.default, d.A, I.A, c.A, u.Ay, _.default);
    }
    hasChannelData(e) {
        return T.has(e);
    }
    getChannelConversations(e) {
        let t = T.peek(e);
        return null == t ? null : t.conversations;
    }
    getConversationForMessage(e, t) {
        return T.peek(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return T.peek(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getMessage(e, t) {
        return this.getMessageMetadata(e, t)?.message ?? null;
    }
    getConversationMetadata(e, t) {
        return T.peek(e)?.conversationMetadataById.get(t) ?? null;
    }
    getEdgeMarker(e, t) {
        let n = T.peek(e);
        return null == n ? null : "before" === t ? n.reachedOldest : n.reachedNewest;
    }
    isPendingFetch(e) {
        return m.has(e);
    }
    isListFetchPending(e, t) {
        return m.get(e)?.has(t) ?? !1;
    }
    getSelectedConversationId(e) {
        return T.peek(e)?.selectedConversationId ?? null;
    }
    getSelectedConversation(e) {
        let t = T.peek(e),
            n = t?.selectedConversationId;
        return null == n ? null : (t?.conversationMetadataById.get(n)?.conversation ?? null);
    }
    getConversationColor(e, t) {
        let n = T.peek(e);
        return null == n ? null : (n.conversationMetadataById.get(t)?.color ?? null);
    }
    isFullyHydrated(e, t) {
        return T.peek(e)?.conversationMetadataById.get(t)?.fullyHydrated === !0;
    }
    getHydratedMessages(e, t) {
        return T.peek(e)?.conversationMetadataById.get(t)?.hydratedMessages ?? null;
    }
    getHydratedMessageById(e, t) {
        return T.peek(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e, t) {
        let n = S.get(e);
        return null != n && 0 !== n.size && (!0 !== t || n.has("full"));
    }
    getConversationFeedbackRating(e, t) {
        return T.peek(e)?.recentFeedbackRatingsByConversationId.get(t) ?? null;
    }
}
let P = new M(s.h, {
    CONVERSATION_FETCH_START: function (e) {
        var t;
        let n,
            { conversationId: i, full: r, isStandalone: a } = e;
        if (!0 === a) return !1;
        ((t = r ? "full" : "preview"), null != (n = S.get(i)) ? n.add(t) : S.set(i, new Set([t])));
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversationId: n,
            messages: i,
            messageReferences: r,
            fullyHydrated: a,
            isStandalone: s,
        } = e;
        if (!0 === s) return !1;
        (N(n, a ? "full" : "preview"), C(t, n, i, a, r));
    },
    CONVERSATION_FETCH_FAILURE: function (e) {
        let { conversationId: t, full: n, isStandalone: i } = e;
        if (!0 === i) return !1;
        N(t, n ? "full" : "preview");
    },
    CONVERSATIONS_FETCH_START: function (e) {
        let t,
            { channelId: n, requestKey: i, isJump: r } = e;
        (r && m.delete(n), null == (t = m.get(n)) && ((t = new Set()), m.set(n, t)), t.add(i));
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let t,
            {
                channelId: n,
                rawConversations: i,
                direction: a,
                anchor: s,
                isJump: l,
                requestKey: o,
                fullyHydrated: c,
            } = e;
        if (!g(n, o)) return !1;
        let u = i.map(f.a).filter(E.Vq),
            _ = T.peek(n);
        if (l) {
            let e = _?.selectedConversationId,
                n = null != e ? _?.conversationMetadataById.get(e)?.conversation : null;
            t = null != n ? [n] : [];
        } else t = _?.conversations ?? [];
        let h = l ? null : (_?.reachedOldest ?? null),
            I = l ? null : (_?.reachedNewest ?? null),
            m = new Set(t.map((e) => e.id));
        if (
            (u.some((e) => !m.has(e.id)) ||
                null == s ||
                ("before" === a ? (h = Date.now()) : "after" === a && (I = Date.now())),
            "before" === a && null == s && (I = Date.now()),
            (u = (function (e, t) {
                let n = new Map();
                for (let t of e) n.set(t.id, t);
                for (let e of t) n.set(e.id, e);
                let i = Array.from(n.values());
                return (i.sort((e, t) => A.default.compare(e.startMessageId, t.startMessageId)), i);
            })(t, u)).length > 50)
        )
            if ("after" === a) ((u = u.slice(u.length - 50)), (h = null));
            else if ("before" === a) ((u = u.slice(0, 50)), (I = null));
            else {
                let e = (function (e, t) {
                    if (null == t) return 0;
                    let n = e.findIndex((e) => A.default.compare(e.startMessageId, t) >= 0);
                    return (-1 === n && (n = e.length), Math.max(0, Math.min(n - Math.floor(25), e.length - 50)));
                })(u, s);
                (e > 0 && (h = null), e + 50 < u.length && (I = null), (u = u.slice(e, e + 50)));
            }
        let S = (function (e, t, n) {
            let i = n?.guildId ?? t[0]?.guildId ?? d.A.getChannel(e)?.guild_id ?? null,
                a = new Map(),
                s = new Map(),
                l = n?.colorIndex ?? 0;
            for (let e of t) {
                let t = n?.conversationMetadataById.get(e.id),
                    i = t?.color ?? p.J9[l++ % p.J9.length],
                    r = t?.hydratedMessages ?? null,
                    o = null != r && !!t?.fullyHydrated;
                a.set(e.id, { conversation: e, color: i, hydratedMessages: r, fullyHydrated: o });
                let d = null;
                if (null != e.moderation)
                    for (let t of ((d = new Map()), e.moderation.flaggedMessageDetails)) {
                        let e = d.get(t.messageId);
                        null != e ? e.push(t) : d.set(t.messageId, [t]);
                    }
                for (let t of e.messageIds) {
                    let i = n?.messageMetadataByMessageId.get(t),
                        r = null;
                    (i?.moderationLabel == null &&
                        null != e.moderation &&
                        e.moderation.flaggedMessageIds.includes(t) &&
                        null != d &&
                        (r = (function (e) {
                            let t = e[0],
                                n = e.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                i = t?.severity ?? null,
                                r = t?.confidence ?? null,
                                a = [null != i ? `${i} severity` : null, null != r ? `${r} confidence` : null]
                                    .filter(Boolean)
                                    .join(", "),
                                s = [n.length > 0 ? n.join(", ") : null, a.length > 0 ? a : null]
                                    .filter(Boolean)
                                    .join(" \xb7 ");
                            return s.length > 0 ? s : "Moderation Failed";
                        })(d.get(t) ?? [])),
                        s.set(t, {
                            conversationId: e.id,
                            moderationLabel: i?.moderationLabel ?? r,
                            message: i?.message ?? null,
                        }));
                    let a = i?.message?.messageReference?.message_id;
                    if (null != a) {
                        let e = n?.messageMetadataByMessageId.get(a);
                        e?.message == null || s.has(a) || s.set(a, e);
                    }
                }
            }
            let o = n?.recentFeedbackRatingsByConversationId ?? new (r())({ max: 10 }),
                c = n?.selectedConversationId ?? null,
                u = null != c && t.some((e) => e.id === c) ? c : null;
            return {
                guildId: i,
                conversations: t,
                conversationMetadataById: a,
                messageMetadataByMessageId: s,
                recentFeedbackRatingsByConversationId: o,
                reachedOldest: n?.reachedOldest ?? null,
                reachedNewest: n?.reachedNewest ?? null,
                selectedConversationId: u,
                colorIndex: l,
            };
        })(n, u, _);
        for (let e of ((S.reachedOldest = h), (S.reachedNewest = I), null != _ ? Object.assign(_, S) : T.set(n, S), i))
            null != e.messages && C(n, e.id, e.messages, c);
        return !0;
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t, requestKey: n } = e;
        return g(t, n);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (null != t && T.has(t) && T.get(t), !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return b(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let e of T.keys()) T.peek(e)?.guildId === t.id && b(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        if (null == n || u.Ay.getChannelId() !== t) return !1;
        let i = T.peek(t);
        return null != i && ((i.reachedOldest = null), (i.reachedNewest = null), !0);
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (null == t) return !1;
        let i = T.peek(t);
        return null != i && ((i.selectedConversationId = n), !0);
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
        let { channelId: t, conversationId: n } = e,
            i = T.peek(t);
        if (null == i) return !1;
        let r = i.selectedConversationId;
        return null != r && (null == n || r === n) && ((i.selectedConversationId = null), !0);
    },
    SET_CONVERSATION_FEEDBACK_RATING: function (e) {
        let { channelId: t, conversationId: n, rating: i } = e,
            r = T.peek(t);
        return null != r && (r.recentFeedbackRatingsByConversationId.set(n, i), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        return null != n && null != i && R(n, i, (e) => (0, l.IU)(e, t));
    },
    MESSAGE_REACTION_ADD: L,
    MESSAGE_REACTION_REMOVE: L,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e;
        return R(t, n, (e) => e.addReactionBatch(i, o.default.getId()));
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e;
        return R(t, n, (e) => e.set("reactions", []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e;
        return R(t, n, (e) => e.removeReactionsForEmoji(i));
    },
    MESSAGE_DELETE: function (e) {
        let { channelId: t, id: n } = e;
        return D(t, n);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = !1;
        for (let e of n) D(t, e) && (i = !0);
        return i;
    },
    RELATIONSHIP_ADD: y,
    RELATIONSHIP_UPDATE: y,
    RELATIONSHIP_REMOVE: y,
    LOGOUT: function () {
        (T.reset(), m.clear(), S.clear());
    },
});
