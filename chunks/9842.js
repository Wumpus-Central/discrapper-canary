"use strict";
n.d(t, { A: () => k, a: () => _ }), n(321073);
var r = n(635377),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(390248),
    l = n(141468),
    u = n(734057),
    c = n(320501),
    d = n(652215),
    _ = (function (e) {
        return (
            (e[(e.LOADED = 0)] = "LOADED"), (e[(e.NOT_LOADED = 1)] = "NOT_LOADED"), (e[(e.DELETED = 2)] = "DELETED"), e
        );
    })({});
let f = Object.freeze({ state: 1 }),
    p = new Set();
class h {
    _cachedMessages = new (i())({ max: 100, dispose: (e, t) => this.handleCacheDisposed(e, t) });
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
        null == r && ((r = new h()), this._channelCaches.set(e, r)), r.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return null != t && !!t.has(e.id) && (t.set(e.id, { state: 0, message: (0, l.rh)(e) }), !0);
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
function E(e) {
    let t = !1;
    if ((g.updateExistingMessageIfCached(e) && (t = !0), d.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let r = n.message_id;
        if (null == r) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (g.set(t.channel_id, t.id, { state: 0, message: (0, l.rh)(t) }),
                  e.type === d.lAJ.THREAD_STARTER_MESSAGE && E(t))
                : g.set(e.channel_id, r, { state: 2 });
        } else {
            let e = c.A.getMessage(n.channel_id, r);
            null != e ? g.set(n.channel_id, r, { state: 0, message: e }) : g.set(n.channel_id, r, f);
        }
        t = !0;
    }
    return t;
}
function A(e, t) {
    let n = !1;
    for (let r of e) n = !1 !== t(r) || n;
    return n;
}
function I(e) {
    let { messages: t } = e;
    return A(t, (e) => E(e));
}
function T(e) {
    let { messages: t } = e;
    return A(Object.values(t), (e) => A(Object.values(e), (e) => E(e)));
}
function y(e) {
    let { data: t } = e;
    return A(t, (e) => {
        let { messages: t } = e;
        return A(t, (e) => A(e, (e) => E(e)));
    });
}
function S(e) {
    let { message: t } = e;
    return !!c.A.getMessages(t.channel_id).ready && E(t);
}
function v(e) {
    let { messageId: t, channelId: n } = e;
    if (!g.has(n, t)) return !1;
    let r = g.get(n, t);
    if (null == r || 0 !== r.state) return !1;
    g.set(n, t, { state: 0, message: (0, o.Td)(r.message) });
}
function C(e) {
    let { message: t } = e,
        n = t.id,
        r = t.channel_id;
    if (!g.has(r, n)) return !1;
    let i = g.get(r, n);
    if (null == i || 0 !== i.state) return !1;
    g.set(r, n, { state: 0, message: (0, l.IU)(i.message, t) });
}
function b(e) {
    return g.deleteChannelCache(e.channel.id);
}
function N() {
    if (0 === g.retainWhere((e) => null != u.A.getChannel(e))) return !1;
}
function R(e, t) {
    if (!g.has(e, t)) return !1;
    g.set(e, t, { state: 2 });
}
function O(e) {
    let { id: t, channelId: n } = e;
    return R(n, t);
}
function D(e) {
    let { ids: t, channelId: n } = e;
    return A(t, (e) => R(n, e));
}
function L(e) {
    let { message: t } = e;
    g.set(t.channel_id, t.id, { state: 0, message: t });
}
function w() {
    g.clear();
}
function x(e) {
    let { firstMessages: t } = e;
    return null != t && A(t, (e) => E(e));
}
function P(e) {
    let { threads: t } = e;
    return A(Object.values(t), (e) => {
        let { first_message: t } = e;
        return null != t && E(t);
    });
}
class M extends a.Ay.Store {
    static displayName = "ReferencedMessageStore";
    initialize() {
        this.waitFor(c.A, u.A);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = g.get(e.channel_id, e.message_id)), t ?? f;
    }
    getMessage(e, t) {
        return g.get(e, t) ?? f;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = g.getCachedMessageIdsForChannel(e)), t ?? p;
    }
}
let k = new M(s.h, {
    CACHE_LOADED: T,
    LOCAL_MESSAGES_LOADED: I,
    LOAD_MESSAGES_SUCCESS: I,
    LOAD_MESSAGES_AROUND_SUCCESS: I,
    SEARCH_MESSAGES_SUCCESS: y,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: y,
    LOAD_THREADS_SUCCESS: x,
    LOAD_ARCHIVED_THREADS_SUCCESS: x,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: v,
    LOAD_FORUM_POSTS: P,
    MESSAGE_CREATE: S,
    MESSAGE_UPDATE: C,
    MESSAGE_DELETE: O,
    MESSAGE_DELETE_BULK: D,
    CREATE_PENDING_REPLY: L,
    CHANNEL_DELETE: b,
    THREAD_DELETE: b,
    GUILD_DELETE: N,
    CONNECTION_OPEN: w,
    LOGOUT: w,
});
