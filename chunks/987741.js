n.d(t, { A: () => O });
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(320095),
    o = n(280450),
    d = n(734057),
    c = n(994500),
    u = n(287809),
    _ = n(624044),
    E = n(161204);
n(575279);
let A = new (r())({ max: 10, dispose: f }),
    h = new Map(),
    I = new Map();
function f(e) {
    for (let [t, n] of h) n === e && h.delete(t);
}
function p(e, t) {
    let n = I.get(e);
    null != n && (n.delete(t), 0 === n.size && I.delete(e));
}
function T(e, t) {
    let n = h.get(e);
    if (null == n) return !1;
    let i = A.peek(n);
    if (null == i) return !1;
    let r = i.messageByMessageId.get(e);
    if (null == r) return !1;
    let a = t(r);
    return null != a && (i.messageByMessageId.set(e, a), (0, _.V)(i, e, a), !0);
}
function m(e) {
    return T(e.messageId, (t) => (0, _.y4)(e, t));
}
function g() {
    let e = !1;
    return (
        A.forEach((t) => {
            t.messageByMessageId.forEach((n, i) => {
                let r = (0, _.a)(n);
                null != r && ((e = !0), t.messageByMessageId.set(i, r), (0, _.V)(t, i, r));
            });
        }),
        e
    );
}
function S(e) {
    let t = h.get(e);
    if (null == t) return !1;
    let n = A.peek(t);
    if (null == n) return !1;
    (0, _.rO)(n, e);
    let i = n.messageByMessageId.delete(e);
    return (h.delete(e), i);
}
function N(e) {
    let t = !1;
    for (let n of A.keys()) {
        let i = A.peek(n)?.conversation;
        null != i && e(i) && (A.del(n), (t = !0));
    }
    return t;
}
class C extends a.Ay.Store {
    static displayName = "ConversationPreviewStore";
    initialize() {
        this.waitFor(o.default, d.A, c.A, u.default);
    }
    touchConversation(e) {
        return null != A.get(e);
    }
    getConversation(e) {
        return A.peek(e)?.conversation ?? null;
    }
    isFullyHydrated(e) {
        return A.peek(e)?.fullyHydrated === !0;
    }
    getHydratedMessages(e) {
        return A.peek(e)?.hydratedMessages ?? null;
    }
    getMessage(e) {
        let t = h.get(e);
        return null == t ? null : (A.peek(t)?.messageByMessageId.get(e) ?? null);
    }
    isConversationFetchPending(e, t) {
        let n = I.get(e);
        return null != n && 0 !== n.size && (!0 !== t || n.has("full"));
    }
}
let O = new C(s.h, {
    CONVERSATION_GET_SUCCESS: function (e) {
        let { rawConversation: t } = e,
            n = (0, E.a)(t);
        if (null == n) return !1;
        let i = A.peek(n.id);
        return (
            null != i
                ? (i.conversation = n)
                : A.set(n.id, {
                      conversation: n,
                      hydratedMessages: null,
                      fullyHydrated: !1,
                      messageByMessageId: new Map(),
                  }),
            !0
        );
    },
    CONVERSATION_FETCH_START: function (e) {
        var t;
        let n,
            { conversationId: i, full: r, isStandalone: a } = e;
        if (!0 !== a) return !1;
        ((t = r ? "full" : "preview"), null != (n = I.get(i)) ? n.add(t) : I.set(i, new Set([t])));
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { conversationId: t, messages: n, messageReferences: i, fullyHydrated: r, isStandalone: a } = e;
        if (!0 !== a) return !1;
        p(t, r ? "full" : "preview");
        let s = A.peek(t);
        return (
            null == s ||
            ((0, _.ep)({
                meta: s,
                messages: n,
                fullyHydrated: r,
                messageReferences: i,
                upsertMessage: (e) => s.messageByMessageId.set(e.id, e),
                upsertReference: (e) => {
                    s.messageByMessageId.has(e.id) || s.messageByMessageId.set(e.id, e);
                },
            }) &&
                (function (e, t) {
                    for (let n of (f(e), t.messageByMessageId.keys())) h.set(n, e);
                })(t, s),
            !0)
        );
    },
    CONVERSATION_FETCH_FAILURE: function (e) {
        let { conversationId: t, full: n, isStandalone: i } = e;
        if (!0 !== i) return !1;
        p(t, n ? "full" : "preview");
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return N((e) => e.channelId === t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return (!("unavailable" in t) || !0 !== t.unavailable) && N((e) => e.guildId === t.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.id;
        return null != n && T(n, (e) => (0, l.IU)(e, t));
    },
    MESSAGE_REACTION_ADD: m,
    MESSAGE_REACTION_REMOVE: m,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e;
        return T(t, (e) => e.addReactionBatch(n, o.default.getId()));
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e;
        return T(t, (e) => e.set("reactions", []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e;
        return T(t, (e) => e.removeReactionsForEmoji(n));
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        return S(t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e,
            n = !1;
        for (let e of t) S(e) && (n = !0);
        return n;
    },
    RELATIONSHIP_ADD: g,
    RELATIONSHIP_UPDATE: g,
    RELATIONSHIP_REMOVE: g,
    LOGOUT: function () {
        (A.reset(), h.clear(), I.clear());
    },
});
