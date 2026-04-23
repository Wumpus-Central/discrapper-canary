"use strict";
n.d(t, { A: () => R, a: () => f }), n(321073);
var r,
    i = n(635377),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = n(390248),
    u = n(141468),
    c = n(734057),
    d = n(320501),
    _ = n(652215),
    f =
        (((r = {})[(r.LOADED = 0)] = "LOADED"),
        (r[(r.NOT_LOADED = 1)] = "NOT_LOADED"),
        (r[(r.DELETED = 2)] = "DELETED"),
        r);
let p = Object.freeze({ state: 1 }),
    h = new Set();
class E {
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
class m {
    _channelCaches = new Map();
    has(e, t) {
        return this._channelCaches.get(e)?.has(t) ?? !1;
    }
    get(e, t) {
        return this._channelCaches.get(e)?.get(t);
    }
    set(e, t, n) {
        let r = this._channelCaches.get(e);
        null == r && ((r = new E()), this._channelCaches.set(e, r)), r.set(t, n);
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
let g = new m();
function A(e) {
    let t = !1;
    if ((g.updateExistingMessageIfCached(e) && (t = !0), _.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let r = n.message_id;
        if (null == r) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (g.set(t.channel_id, t.id, { state: 0, message: (0, u.rh)(t) }),
                  e.type === _.lAJ.THREAD_STARTER_MESSAGE && A(t))
                : g.set(e.channel_id, r, { state: 2 });
        } else {
            let e = d.A.getMessage(n.channel_id, r);
            null != e ? g.set(n.channel_id, r, { state: 0, message: e }) : g.set(n.channel_id, r, p);
        }
        t = !0;
    }
    return t;
}
function I(e, t) {
    let n = !1;
    for (let r of e) n = !1 !== t(r) || n;
    return n;
}
function T(e) {
    let { messages: t } = e;
    return I(t, (e) => A(e));
}
function S(e) {
    let { data: t } = e;
    return I(t, (e) => {
        let { messages: t } = e;
        return I(t, (e) => I(e, (e) => A(e)));
    });
}
function y(e) {
    return g.deleteChannelCache(e.channel.id);
}
function N(e, t) {
    if (!g.has(e, t)) return !1;
    g.set(e, t, { state: 2 });
}
function v() {
    g.clear();
}
function C(e) {
    let { firstMessages: t } = e;
    return null != t && I(t, (e) => A(e));
}
class O extends a.Ay.Store {
    static displayName = "ReferencedMessageStore";
    initialize() {
        this.waitFor(d.A, c.A);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = g.get(e.channel_id, e.message_id)), t ?? p;
    }
    getMessage(e, t) {
        return g.get(e, t) ?? p;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = g.getCachedMessageIdsForChannel(e)), t ?? h;
    }
}
let R = new O(o.h, {
    CACHE_LOADED: function (e) {
        let { messages: t } = e;
        return I(Object.values(t), (e) => I(Object.values(e), (e) => A(e)));
    },
    LOCAL_MESSAGES_LOADED: T,
    LOAD_MESSAGES_SUCCESS: T,
    LOAD_MESSAGES_AROUND_SUCCESS: T,
    SEARCH_MESSAGES_SUCCESS: S,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: S,
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e;
        if (!g.has(n, t)) return !1;
        let r = g.get(n, t);
        if (null == r || 0 !== r.state) return !1;
        g.set(n, t, { state: 0, message: (0, l.Td)(r.message) });
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        return I(Object.values(t), (e) => {
            let { first_message: t } = e;
            return null != t && A(t);
        });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return !!d.A.getMessages(t.channel_id).ready && A(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.id,
            r = t.channel_id;
        if (!g.has(r, n)) return !1;
        let i = g.get(r, n);
        if (null == i || 0 !== i.state) return !1;
        g.set(r, n, { state: 0, message: (0, u.IU)(i.message, t) });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return N(n, t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        return I(t, (e) => N(n, e));
    },
    CREATE_PENDING_REPLY: function (e) {
        let { message: t } = e;
        g.set(t.channel_id, t.id, { state: 0, message: t });
    },
    CHANNEL_DELETE: y,
    THREAD_DELETE: y,
    GUILD_DELETE: function () {
        if (0 === g.retainWhere((e) => null != c.A.getChannel(e))) return !1;
    },
    CONNECTION_OPEN: v,
    LOGOUT: v,
});
