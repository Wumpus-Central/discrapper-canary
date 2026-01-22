n.d(t, {
    A: () => U,
    a: () => _,
}),
    n(896048),
    n(321073);
var r,
    i = n(635377),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(390248),
    c = n(141468),
    u = n(734057),
    d = n(320501),
    f = n(652215);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var _ = (function (e) {
    return (e[(e.LOADED = 0)] = "LOADED"), (e[(e.NOT_LOADED = 1)] = "NOT_LOADED"), (e[(e.DELETED = 2)] = "DELETED"), e;
})({});
let h = Object.freeze({
        state: 1,
    }),
    m = new Set();
class g {
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
    constructor() {
        p(
            this,
            "_cachedMessages",
            new (a())({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t),
            }),
        ),
            p(this, "_cachedMessageIds", new Set());
    }
}
class E {
    has(e, t) {
        var n, r;
        return null != (n = null == (r = this._channelCaches.get(e)) ? void 0 : r.has(t)) && n;
    }
    get(e, t) {
        var n;
        return null == (n = this._channelCaches.get(e)) ? void 0 : n.get(t);
    }
    set(e, t, n) {
        let r = this._channelCaches.get(e);
        null == r && ((r = new g()), this._channelCaches.set(e, r)), r.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return (
            null != t &&
            !!t.has(e.id) &&
            (t.set(e.id, {
                state: 0,
                message: (0, c.rh)(e),
            }),
            !0)
        );
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
    constructor() {
        p(this, "_channelCaches", new Map());
    }
}
let b = new E();

function y(e) {
    let t = !1;
    if ((b.updateExistingMessageIfCached(e) && (t = !0), f.sl8.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let r = n.message_id;
        if (null == r) return t;
        if ("referenced_message" in e) {
            let t = e.referenced_message;
            null != t
                ? (b.set(t.channel_id, t.id, {
                      state: 0,
                      message: (0, c.rh)(t),
                  }),
                  e.type === f.lAJ.THREAD_STARTER_MESSAGE && y(t))
                : b.set(e.channel_id, r, {
                      state: 2,
                  });
        } else {
            let e = d.A.getMessage(n.channel_id, r);
            null != e
                ? b.set(n.channel_id, r, {
                      state: 0,
                      message: e,
                  })
                : b.set(n.channel_id, r, h);
        }
        t = !0;
    }
    return t;
}

function O(e, t) {
    let n = !1;
    for (let r of e) n = !1 !== t(r) || n;
    return n;
}

function A(e) {
    let { messages: t } = e;
    return O(t, (e) => y(e));
}

function v(e) {
    let { messages: t } = e;
    return O(Object.values(t), (e) => O(Object.values(e), (e) => y(e)));
}

function S(e) {
    let { data: t } = e;
    return O(t, (e) => {
        let { messages: t } = e;
        return O(t, (e) => O(e, (e) => y(e)));
    });
}

function I(e) {
    let { message: t } = e;
    return !!d.A.getMessages(t.channel_id).ready && y(t);
}

function T(e) {
    let { messageId: t, channelId: n } = e;
    if (!b.has(n, t)) return !1;
    let r = b.get(n, t);
    if (null == r || 0 !== r.state) return !1;
    b.set(n, t, {
        state: 0,
        message: (0, l.Td)(r.message),
    });
}

function C(e) {
    let { message: t } = e,
        n = t.id,
        r = t.channel_id;
    if (!b.has(r, n)) return !1;
    let i = b.get(r, n);
    if (null == i || 0 !== i.state) return !1;
    b.set(r, n, {
        state: 0,
        message: (0, c.IU)(i.message, t),
    });
}

function N(e) {
    return b.deleteChannelCache(e.channel.id);
}

function R() {
    if (0 === b.retainWhere((e) => null != u.A.getChannel(e))) return !1;
}

function w(e, t) {
    if (!b.has(e, t)) return !1;
    b.set(e, t, {
        state: 2,
    });
}

function P(e) {
    let { id: t, channelId: n } = e;
    return w(n, t);
}

function D(e) {
    let { ids: t, channelId: n } = e;
    return O(t, (e) => w(n, e));
}

function x(e) {
    let { message: t } = e;
    b.set(t.channel_id, t.id, {
        state: 0,
        message: t,
    });
}

function L() {
    b.clear();
}

function j(e) {
    let { firstMessages: t } = e;
    return null != t && O(t, (e) => y(e));
}

function M(e) {
    let { threads: t } = e;
    return O(Object.values(t), (e) => {
        let { first_message: t } = e;
        return null != t && y(t);
    });
}
class k extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(d.A, u.A);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = b.get(e.channel_id, e.message_id)), null != t ? t : h;
    }
    getMessage(e, t) {
        var n;
        return null != (n = b.get(e, t)) ? n : h;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = b.getCachedMessageIdsForChannel(e)), null != t ? t : m;
    }
}
p(k, "displayName", "ReferencedMessageStore");
let U = new k(o.h, {
    CACHE_LOADED: v,
    LOCAL_MESSAGES_LOADED: A,
    LOAD_MESSAGES_SUCCESS: A,
    LOAD_MESSAGES_AROUND_SUCCESS: A,
    SEARCH_MESSAGES_SUCCESS: S,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: S,
    LOAD_THREADS_SUCCESS: j,
    LOAD_ARCHIVED_THREADS_SUCCESS: j,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: T,
    LOAD_FORUM_POSTS: M,
    MESSAGE_CREATE: I,
    MESSAGE_UPDATE: C,
    MESSAGE_DELETE: P,
    MESSAGE_DELETE_BULK: D,
    CREATE_PENDING_REPLY: x,
    CHANNEL_DELETE: N,
    THREAD_DELETE: N,
    GUILD_DELETE: R,
    CONNECTION_OPEN: L,
    LOGOUT: L,
});
