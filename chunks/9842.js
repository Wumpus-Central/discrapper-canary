"use strict";
n.d(t, { A: () => y, a: () => A }), n(321073);
var i,
    r = n(635377),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(619065),
    d = n(390248),
    c = n(320095),
    u = n(734057),
    _ = n(232835),
    E = n(652215),
    A =
        (((i = {})[(i.LOADED = 0)] = "LOADED"),
        (i[(i.NOT_LOADED = 1)] = "NOT_LOADED"),
        (i[(i.DELETED = 2)] = "DELETED"),
        i);
let h = Object.freeze({ state: 1 }),
    I = new Set();
class f {
    _cachedMessages = new (a())({ max: 100, dispose: (e, t) => this.handleCacheDisposed(e, t) });
    _cachedMessageIds = new Set();
    handleCacheDisposed(e, t) {
        this._cachedMessageIds.has(e) &&
            ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.delete(e));
    }
    set(e, t) {
        this._cachedMessages.set(e, t),
            this._cachedMessageIds.has(e) ||
                ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.add(e));
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
class p {
    _channelCaches = new Map();
    has(e, t) {
        return this._channelCaches.get(e)?.has(t) ?? !1;
    }
    get(e, t) {
        return this._channelCaches.get(e)?.get(t);
    }
    set(e, t, n) {
        let i = this._channelCaches.get(e);
        null == i && ((i = new f()), this._channelCaches.set(e, i)), i.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return null != t && !!t.has(e.id) && (t.set(e.id, { state: 0, message: (0, c.rh)(e) }), !0);
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
let T = new p();
function m(e) {
    let t = !1;
    if ((T.updateExistingMessageIfCached(e) && (t = !0), E.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let i = n.message_id;
        if (null == i) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (T.set(t.channel_id, t.id, { state: 0, message: (0, c.rh)(t) }),
                  e.type === E.lAJ.THREAD_STARTER_MESSAGE && m(t))
                : T.set(e.channel_id, i, { state: 2 });
        } else {
            let e = _.A.getMessage(n.channel_id, i) ?? o.A.getMessage(n.channel_id, i);
            null != e ? T.set(n.channel_id, i, { state: 0, message: e }) : T.set(n.channel_id, i, h);
        }
        t = !0;
    }
    return t;
}
function g(e, t) {
    let n = !1;
    for (let i of e) n = !1 !== t(i) || n;
    return n;
}
function S(e) {
    let { messages: t } = e;
    return g(t, (e) => m(e));
}
function N(e) {
    let { data: t } = e;
    return g(t, (e) => {
        let { messages: t } = e;
        return g(t, (e) => g(e, (e) => m(e)));
    });
}
function C(e) {
    return T.deleteChannelCache(e.channel.id);
}
function R(e, t) {
    if (!T.has(e, t)) return !1;
    T.set(e, t, { state: 2 });
}
function O() {
    T.clear();
}
function L(e) {
    let { firstMessages: t } = e;
    return null != t && g(t, (e) => m(e));
}
class D extends s.Ay.Store {
    static displayName = "ReferencedMessageStore";
    initialize() {
        this.waitFor(_.A, u.A, o.A);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = T.get(e.channel_id, e.message_id)), t ?? h;
    }
    getMessage(e, t) {
        return T.get(e, t) ?? h;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = T.getCachedMessageIdsForChannel(e)), t ?? I;
    }
}
let y = new D(l.h, {
    CACHE_LOADED: function (e) {
        let { messages: t } = e;
        return g(Object.values(t), (e) => g(Object.values(e), (e) => m(e)));
    },
    LOCAL_MESSAGES_LOADED: S,
    LOAD_MESSAGES_SUCCESS: S,
    LOAD_MESSAGES_AROUND_SUCCESS: S,
    SEARCH_MESSAGES_SUCCESS: N,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { messages: t } = e;
        return g(t, (e) => m(e));
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let { rawConversations: t } = e;
        return g(t, (e) => {
            let { messages: t } = e;
            return g(t ?? [], (e) => m(e));
        });
    },
    LOAD_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e;
        if (!T.has(n, t)) return !1;
        let i = T.get(n, t);
        if (null == i || 0 !== i.state) return !1;
        T.set(n, t, { state: 0, message: (0, d.Td)(i.message) });
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        return g(Object.values(t), (e) => {
            let { first_message: t } = e;
            return null != t && m(t);
        });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return !!_.A.getMessages(t.channel_id).ready && m(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.id,
            i = t.channel_id;
        if (!T.has(i, n)) return !1;
        let r = T.get(i, n);
        if (null == r || 0 !== r.state) return !1;
        T.set(i, n, { state: 0, message: (0, c.IU)(r.message, t) });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return R(n, t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        return g(t, (e) => R(n, e));
    },
    CREATE_PENDING_REPLY: function (e) {
        let { message: t } = e;
        T.set(t.channel_id, t.id, { state: 0, message: t });
    },
    CHANNEL_DELETE: C,
    THREAD_DELETE: C,
    GUILD_DELETE: function () {
        if (0 === T.retainWhere((e) => null != u.A.getChannel(e))) return !1;
    },
    CONNECTION_OPEN: O,
    LOGOUT: O,
});
