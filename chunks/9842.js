"use strict";
n.d(t, { A: () => b, a: () => f }), n(321073);
var i,
    r = n(635377),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(958720),
    u = n(390248),
    c = n(320095),
    d = n(734057),
    _ = n(232835),
    h = n(652215),
    f =
        (((i = {})[(i.LOADED = 0)] = "LOADED"),
        (i[(i.NOT_LOADED = 1)] = "NOT_LOADED"),
        (i[(i.DELETED = 2)] = "DELETED"),
        i);
let p = Object.freeze({ state: 1 }),
    E = new Set();
class m {
    _cachedMessages = new (s())({ max: 100, dispose: (e, t) => this.handleCacheDisposed(e, t) });
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
class g {
    _channelCaches = new Map();
    has(e, t) {
        return this._channelCaches.get(e)?.has(t) ?? !1;
    }
    get(e, t) {
        return this._channelCaches.get(e)?.get(t);
    }
    set(e, t, n) {
        let i = this._channelCaches.get(e);
        null == i && ((i = new m()), this._channelCaches.set(e, i)), i.set(t, n);
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
let A = new g();
function I(e) {
    let t = !1;
    if ((A.updateExistingMessageIfCached(e) && (t = !0), h.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let i = n.message_id;
        if (null == i) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (A.set(t.channel_id, t.id, { state: 0, message: (0, c.rh)(t) }),
                  e.type === h.lAJ.THREAD_STARTER_MESSAGE && I(t))
                : A.set(e.channel_id, i, { state: 2 });
        } else {
            let e = _.A.getMessage(n.channel_id, i) ?? l.A.getMessage(n.channel_id, i);
            null != e ? A.set(n.channel_id, i, { state: 0, message: e }) : A.set(n.channel_id, i, p);
        }
        t = !0;
    }
    return t;
}
function T(e, t) {
    let n = !1;
    for (let i of e) n = !1 !== t(i) || n;
    return n;
}
function S(e) {
    let { messages: t } = e;
    return T(t, (e) => I(e));
}
function y(e) {
    let { data: t } = e;
    return T(t, (e) => {
        let { messages: t } = e;
        return T(t, (e) => T(e, (e) => I(e)));
    });
}
function N(e) {
    return A.deleteChannelCache(e.channel.id);
}
function v(e, t) {
    if (!A.has(e, t)) return !1;
    A.set(e, t, { state: 2 });
}
function C() {
    A.clear();
}
function R(e) {
    let { firstMessages: t } = e;
    return null != t && T(t, (e) => I(e));
}
class O extends a.Ay.Store {
    static displayName = "ReferencedMessageStore";
    initialize() {
        this.waitFor(_.A, d.A, l.A);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = A.get(e.channel_id, e.message_id)), t ?? p;
    }
    getMessage(e, t) {
        return A.get(e, t) ?? p;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = A.getCachedMessageIdsForChannel(e)), t ?? E;
    }
}
let b = new O(o.h, {
    CACHE_LOADED: function (e) {
        let { messages: t } = e;
        return T(Object.values(t), (e) => T(Object.values(e), (e) => I(e)));
    },
    LOCAL_MESSAGES_LOADED: S,
    LOAD_MESSAGES_SUCCESS: S,
    LOAD_MESSAGES_AROUND_SUCCESS: S,
    SEARCH_MESSAGES_SUCCESS: y,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: y,
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { messages: t } = e;
        return T(t, (e) => I(e));
    },
    LOAD_THREADS_SUCCESS: R,
    LOAD_ARCHIVED_THREADS_SUCCESS: R,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e;
        if (!A.has(n, t)) return !1;
        let i = A.get(n, t);
        if (null == i || 0 !== i.state) return !1;
        A.set(n, t, { state: 0, message: (0, u.Td)(i.message) });
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        return T(Object.values(t), (e) => {
            let { first_message: t } = e;
            return null != t && I(t);
        });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return !!_.A.getMessages(t.channel_id).ready && I(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.id,
            i = t.channel_id;
        if (!A.has(i, n)) return !1;
        let r = A.get(i, n);
        if (null == r || 0 !== r.state) return !1;
        A.set(i, n, { state: 0, message: (0, c.IU)(r.message, t) });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return v(n, t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        return T(t, (e) => v(n, e));
    },
    CREATE_PENDING_REPLY: function (e) {
        let { message: t } = e;
        A.set(t.channel_id, t.id, { state: 0, message: t });
    },
    CHANNEL_DELETE: N,
    THREAD_DELETE: N,
    GUILD_DELETE: function () {
        if (0 === A.retainWhere((e) => null != d.A.getChannel(e))) return !1;
    },
    CONNECTION_OPEN: C,
    LOGOUT: C,
});
