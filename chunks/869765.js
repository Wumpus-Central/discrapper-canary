n.d(t, {
    Y: () => _,
    Z: () => U
}),
    n(47120),
    n(653041);
var r,
    i = n(31775),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(247206),
    c = n(786761),
    u = n(592125),
    d = n(375954),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var _ = (function (e) {
    return (e[(e.LOADED = 0)] = 'LOADED'), (e[(e.NOT_LOADED = 1)] = 'NOT_LOADED'), (e[(e.DELETED = 2)] = 'DELETED'), e;
})({});
let h = Object.freeze({ state: 1 }),
    m = new Set();
class g {
    handleCacheDisposed(e, t) {
        this._cachedMessageIds.has(e) && ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.delete(e));
    }
    set(e, t) {
        this._cachedMessages.set(e, t), this._cachedMessageIds.has(e) || ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.add(e));
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
            '_cachedMessages',
            new (o())({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t)
            })
        ),
            p(this, '_cachedMessageIds', new Set());
    }
}
class E {
    has(e, t) {
        var n, r;
        return null !== (r = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== r && r;
    }
    get(e, t) {
        var n;
        return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
    set(e, t, n) {
        let r = this._channelCaches.get(e);
        null == r && ((r = new g()), this._channelCaches.set(e, r)), r.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return (
            !!(null != t && t.has(e.id)) &&
            (t.set(e.id, {
                state: 0,
                message: (0, c.e5)(e)
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
        p(this, '_channelCaches', new Map());
    }
}
let v = new E();
function b(e) {
    let t = !1;
    if ((v.updateExistingMessageIfCached(e) && (t = !0), f.OBS.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let r = n.message_id;
        if (null == r) return t;
        if ('referenced_message' in e) {
            let t = e.referenced_message;
            null != t
                ? (v.set(t.channel_id, t.id, {
                      state: 0,
                      message: (0, c.e5)(t)
                  }),
                  e.type === f.uaV.THREAD_STARTER_MESSAGE && b(t))
                : v.set(e.channel_id, r, { state: 2 });
        } else {
            let e = d.Z.getMessage(n.channel_id, r);
            null != e
                ? v.set(n.channel_id, r, {
                      state: 0,
                      message: e
                  })
                : v.set(n.channel_id, r, h);
        }
        t = !0;
    }
    return t;
}
function y(e, t) {
    let n = !1;
    for (let r of e) n = !1 !== t(r) || n;
    return n;
}
function O(e) {
    let { messages: t } = e;
    return y(t, (e) => b(e));
}
function S(e) {
    let { messages: t } = e;
    return y(Object.values(t), (e) => y(Object.values(e), (e) => b(e)));
}
function I(e) {
    let { messages: t } = e;
    return y(t, (e) => y(e, (e) => b(e)));
}
function T(e) {
    let { message: t } = e;
    return !!d.Z.getMessages(t.channel_id).ready && b(t);
}
function N(e) {
    let { messageId: t, channelId: n } = e;
    if (!v.has(n, t)) return !1;
    let r = v.get(n, t);
    if (null == r || 0 !== r.state) return !1;
    v.set(n, t, {
        state: 0,
        message: (0, l.Cm)(r.message)
    });
}
function A(e) {
    let { message: t } = e,
        n = t.id,
        r = t.channel_id;
    if (!v.has(r, n)) return !1;
    let i = v.get(r, n);
    if (null == i || 0 !== i.state) return !1;
    v.set(r, n, {
        state: 0,
        message: (0, c.wi)(i.message, t)
    });
}
function C(e) {
    return v.deleteChannelCache(e.channel.id);
}
function R() {
    if (0 === v.retainWhere((e) => null != u.Z.getChannel(e))) return !1;
}
function P(e, t) {
    if (!v.has(e, t)) return !1;
    v.set(e, t, { state: 2 });
}
function w(e) {
    let { id: t, channelId: n } = e;
    return P(n, t);
}
function D(e) {
    let { ids: t, channelId: n } = e;
    return y(t, (e) => P(n, e));
}
function x(e) {
    let { message: t } = e;
    v.set(t.channel_id, t.id, {
        state: 0,
        message: t
    });
}
function L() {
    v.clear();
}
function M(e) {
    let { firstMessages: t } = e;
    return null != t && y(t, (e) => b(e));
}
function k(e) {
    let { threads: t } = e;
    return y(Object.values(t), (e) => {
        let { first_message: t } = e;
        return null != t && b(t);
    });
}
class j extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z);
    }
    getMessageByReference(e) {
        let t;
        return null != e && (t = v.get(e.channel_id, e.message_id)), null != t ? t : h;
    }
    getMessage(e, t) {
        var n;
        return null !== (n = v.get(e, t)) && void 0 !== n ? n : h;
    }
    getReplyIdsForChannel(e) {
        let t;
        return null != e && (t = v.getCachedMessageIdsForChannel(e)), null != t ? t : m;
    }
}
p(j, 'displayName', 'ReferencedMessageStore');
let U = new j(s.Z, {
    CACHE_LOADED: S,
    LOCAL_MESSAGES_LOADED: O,
    LOAD_MESSAGES_SUCCESS: O,
    LOAD_MESSAGES_AROUND_SUCCESS: O,
    SEARCH_FINISH: I,
    MOD_VIEW_SEARCH_FINISH: I,
    LOAD_THREADS_SUCCESS: M,
    LOAD_ARCHIVED_THREADS_SUCCESS: M,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: N,
    LOAD_FORUM_POSTS: k,
    MESSAGE_CREATE: T,
    MESSAGE_UPDATE: A,
    MESSAGE_DELETE: w,
    MESSAGE_DELETE_BULK: D,
    CREATE_PENDING_REPLY: x,
    CHANNEL_DELETE: C,
    THREAD_DELETE: C,
    GUILD_DELETE: R,
    CONNECTION_OPEN: L,
    LOGOUT: L
});
