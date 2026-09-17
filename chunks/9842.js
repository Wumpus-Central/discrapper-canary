(n.d(t, { A: () => v, a: () => h }), n(321073));
var i,
    r = n(635377),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(987741),
    d = n(958720),
    c = n(390248),
    u = n(320095),
    _ = n(734057),
    E = n(232835),
    A = n(652215),
    h =
        (((i = {})[(i.LOADED = 0)] = "LOADED"),
        (i[(i.NOT_LOADED = 1)] = "NOT_LOADED"),
        (i[(i.DELETED = 2)] = "DELETED"),
        i);
let I = Object.freeze({ state: 1 }),
    f = new Set();
class p {
    _cachedMessages = new (a())({ max: 100, dispose: (e, t) => this.handleCacheDisposed(e, t) });
    _cachedMessageIds = new Set();
    handleCacheDisposed(e, t) {
        this._cachedMessageIds.has(e) &&
            ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.delete(e));
    }
    set(e, t) {
        (this._cachedMessages.set(e, t),
            this._cachedMessageIds.has(e) ||
                ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.add(e)));
    }
    has(e) {
        return this._cachedMessageIds.has(e);
    }
    get(e) {
        return this._cachedMessages.get(e);
    }
    getCachedMessageIds() {
        return this._cachedMessageIds;
    }
}
class T {
    _channelCaches = new Map();
    has(e, t) {
        return this._channelCaches.get(e)?.has(t) ?? !1;
    }
    get(e, t) {
        return this._channelCaches.get(e)?.get(t);
    }
    set(e, t, n) {
        let i = this._channelCaches.get(e);
        (null == i && ((i = new p()), this._channelCaches.set(e, i)), i.set(t, n));
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return null != t && !!t.has(e.id) && (t.set(e.id, { state: 0, message: (0, u.rh)(e) }), !0);
    }
    deleteChannelCache(e) {
        return this._channelCaches.delete(e);
    }
    retainWhere(e) {
        let t = [];
        for (let [n] of this._channelCaches) e(n) || t.push(n);
        for (let e of t) this.deleteChannelCache(e);
        return t.length;
    }
    getCachedMessageIdsForChannel(e) {
        let t = this._channelCaches.get(e);
        return null == t ? null : t.getCachedMessageIds();
    }
    clear() {
        this._channelCaches.clear();
    }
}
let g = new T();
function m(e) {
    let t = !1;
    if ((g.updateExistingMessageIfCached(e) && (t = !0), A.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let i = n.message_id;
        if (null == i) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (g.set(t.channel_id, t.id, { state: 0, message: (0, u.rh)(t) }),
                  e.type === A.lAJ.THREAD_STARTER_MESSAGE && m(t))
                : g.set(e.channel_id, i, { state: 2 });
        } else {
            let e = E.A.getMessage(n.channel_id, i) ?? d.A.getMessage(n.channel_id, i) ?? o.A.getMessage(i);
            null != e ? g.set(n.channel_id, i, { state: 0, message: e }) : g.set(n.channel_id, i, I);
        }
        t = !0;
    }
    return t;
}
function S(e, t) {
    let n = !1;
    for (let i of e) n = !1 !== t(i) || n;
    return n;
}
function N(e) {
    let { messages: t } = e;
    return S(t, (e) => m(e));
}
function C(e) {
    let { data: t } = e;
    return S(t, (e) => {
        let { messages: t } = e;
        return S(t, (e) => S(e, (e) => m(e)));
    });
}
function O(e) {
    return g.deleteChannelCache(e.channel.id);
}
function R(e, t) {
    if (!g.has(e, t)) return !1;
    g.set(e, t, { state: 2 });
}
function L() {
    g.clear();
}
function y(e) {
    let { firstMessages: t } = e;
    return null != t && S(t, (e) => m(e));
}
class D extends s.Ay.Store {
    static displayName = "ReferencedMessageStore";
    initialize() {
        this.waitFor(E.A, _.A, d.A, o.A);
    }
    getMessageByReference(e) {
        let t;
        return (null != e && (t = g.get(e.channel_id, e.message_id)), t ?? I);
    }
    getMessage(e, t) {
        return g.get(e, t) ?? I;
    }
    getReplyIdsForChannel(e) {
        let t;
        return (null != e && (t = g.getCachedMessageIdsForChannel(e)), t ?? f);
    }
}
let v = new D(l.h, {
    CACHE_LOADED: function (e) {
        let { messages: t } = e;
        return S(Object.values(t), (e) => S(Object.values(e), (e) => m(e)));
    },
    LOCAL_MESSAGES_LOADED: N,
    LOAD_MESSAGES_SUCCESS: N,
    LOAD_MESSAGES_AROUND_SUCCESS: N,
    SEARCH_MESSAGES_SUCCESS: C,
    INTELLIGENCE_SEARCH_FETCH_SUCCESS: function (e) {
        let { messages: t } = e;
        return S(t, (e) => m(e));
    },
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: C,
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { messages: t, messageReferences: n } = e;
        return S(t.concat(n), (e) => m(e));
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let { rawConversations: t } = e;
        return S(t, (e) => {
            let { messages: t } = e;
            return S(t ?? [], (e) => m(e));
        });
    },
    LOAD_THREADS_SUCCESS: y,
    LOAD_ARCHIVED_THREADS_SUCCESS: y,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e;
        if (!g.has(n, t)) return !1;
        let i = g.get(n, t);
        if (null == i || 0 !== i.state) return !1;
        g.set(n, t, { state: 0, message: (0, c.Td)(i.message) });
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        return S(Object.values(t), (e) => {
            let { first_message: t } = e;
            return null != t && m(t);
        });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return !!E.A.getMessages(t.channel_id).ready && m(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.id,
            i = t.channel_id;
        if (!g.has(i, n)) return !1;
        let r = g.get(i, n);
        if (null == r || 0 !== r.state) return !1;
        g.set(i, n, { state: 0, message: (0, u.IU)(r.message, t) });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return R(n, t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        return S(t, (e) => R(n, e));
    },
    CREATE_PENDING_REPLY: function (e) {
        let { message: t } = e;
        g.set(t.channel_id, t.id, { state: 0, message: t });
    },
    CHANNEL_DELETE: O,
    THREAD_DELETE: O,
    GUILD_DELETE: function () {
        if (0 === g.retainWhere((e) => null != _.A.getChannel(e))) return !1;
    },
    CONNECTION_OPEN: L,
    LOGOUT: L,
});
