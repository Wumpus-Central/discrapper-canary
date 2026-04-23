"use strict";
n.d(t, { A: () => v, a: () => E }), n(321073);
var i,
    r = n(635377),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(390248),
    d = n(320095),
    _ = n(734057),
    u = n(232835),
    c = n(652215),
    E =
        (((i = {})[(i.LOADED = 0)] = "LOADED"),
        (i[(i.NOT_LOADED = 1)] = "NOT_LOADED"),
        (i[(i.DELETED = 2)] = "DELETED"),
        i);
let h = Object.freeze({ state: 1 }),
    m = new Set();
class f {
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
        null == i && ((i = new f()), this._channelCaches.set(e, i)), i.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return null != t && !!t.has(e.id) && (t.set(e.id, { state: 0, message: (0, d.rh)(e) }), !0);
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
let p = new g();
function A(e) {
    let t = !1;
    if ((p.updateExistingMessageIfCached(e) && (t = !0), c.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let i = n.message_id;
        if (null == i) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (p.set(t.channel_id, t.id, { state: 0, message: (0, d.rh)(t) }),
                  e.type === c.lAJ.THREAD_STARTER_MESSAGE && A(t))
                : p.set(e.channel_id, i, { state: 2 });
        } else {
            let e = u.A.getMessage(n.channel_id, i);
            null != e ? p.set(n.channel_id, i, { state: 0, message: e }) : p.set(n.channel_id, i, h);
        }
        t = !0;
    }
    return t;
}
function I(e, t) {
    let n = !1;
    for (let i of e) n = !1 !== t(i) || n;
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
function N(e) {
    return p.deleteChannelCache(e.channel.id);
}
function C(e, t) {
    if (!p.has(e, t)) return !1;
    p.set(e, t, { state: 2 });
}
function R() {
    p.clear();
}
function O(e) {
    let { firstMessages: t } = e;
    return null != t && I(t, (e) => A(e));
}
class y extends a.Ay.Store {
    static displayName = "ReferencedMessageStore";
    initialize() {
        this.waitFor(u.A, _.A);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = p.get(e.channel_id, e.message_id)), t ?? h;
    }
    getMessage(e, t) {
        return p.get(e, t) ?? h;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = p.getCachedMessageIdsForChannel(e)), t ?? m;
    }
}
let v = new y(o.h, {
    CACHE_LOADED: function (e) {
        let { messages: t } = e;
        return I(Object.values(t), (e) => I(Object.values(e), (e) => A(e)));
    },
    LOCAL_MESSAGES_LOADED: T,
    LOAD_MESSAGES_SUCCESS: T,
    LOAD_MESSAGES_AROUND_SUCCESS: T,
    SEARCH_MESSAGES_SUCCESS: S,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: S,
    LOAD_THREADS_SUCCESS: O,
    LOAD_ARCHIVED_THREADS_SUCCESS: O,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e;
        if (!p.has(n, t)) return !1;
        let i = p.get(n, t);
        if (null == i || 0 !== i.state) return !1;
        p.set(n, t, { state: 0, message: (0, l.Td)(i.message) });
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
        return !!u.A.getMessages(t.channel_id).ready && A(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.id,
            i = t.channel_id;
        if (!p.has(i, n)) return !1;
        let r = p.get(i, n);
        if (null == r || 0 !== r.state) return !1;
        p.set(i, n, { state: 0, message: (0, d.IU)(r.message, t) });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return C(n, t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        return I(t, (e) => C(n, e));
    },
    CREATE_PENDING_REPLY: function (e) {
        let { message: t } = e;
        p.set(t.channel_id, t.id, { state: 0, message: t });
    },
    CHANNEL_DELETE: N,
    THREAD_DELETE: N,
    GUILD_DELETE: function () {
        if (0 === p.retainWhere((e) => null != _.A.getChannel(e))) return !1;
    },
    CONNECTION_OPEN: R,
    LOGOUT: R,
});
