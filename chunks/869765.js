n.d(t, {
    Y: () => p,
    Z: () => G
}),
    n(47120),
    n(653041);
var i,
    r = n(31775),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(247206),
    u = n(786761),
    c = n(592125),
    d = n(375954),
    f = n(981631);
function _(e, t, n) {
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
var p = (function (e) {
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
        _(
            this,
            '_cachedMessages',
            new (a())({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t)
            })
        ),
            _(this, '_cachedMessageIds', new Set());
    }
}
class E {
    has(e, t) {
        var n, i;
        return null !== (i = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== i && i;
    }
    get(e, t) {
        var n;
        return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
    set(e, t, n) {
        let i = this._channelCaches.get(e);
        null == i && ((i = new g()), this._channelCaches.set(e, i)), i.set(t, n);
    }
    updateExistingMessageIfCached(e) {
        let t = this._channelCaches.get(e.channel_id);
        return (
            !!(null != t && t.has(e.id)) &&
            (t.set(e.id, {
                state: 0,
                message: (0, u.e5)(e)
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
        _(this, '_channelCaches', new Map());
    }
}
let v = new E();
function y(e) {
    let t = !1;
    if ((v.updateExistingMessageIfCached(e) && (t = !0), f.OBS.has(e.type))) {
        let n = e.message_reference;
        if (null == n) return t;
        let i = n.message_id;
        if (null == i) return t;
        if ('referenced_message' in e) {
            let t = e.referenced_message;
            null != t
                ? (v.set(t.channel_id, t.id, {
                      state: 0,
                      message: (0, u.e5)(t)
                  }),
                  e.type === f.uaV.THREAD_STARTER_MESSAGE && y(t))
                : v.set(e.channel_id, i, { state: 2 });
        } else {
            let e = d.Z.getMessage(n.channel_id, i);
            null != e
                ? v.set(n.channel_id, i, {
                      state: 0,
                      message: e
                  })
                : v.set(n.channel_id, i, h);
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
    return I(t, (e) => y(e));
}
function b(e) {
    let { messages: t } = e;
    return I(Object.values(t), (e) => I(Object.values(e), (e) => y(e)));
}
function S(e) {
    let { messages: t } = e;
    return I(t, (e) => I(e, (e) => y(e)));
}
function A(e) {
    let { message: t } = e;
    return !!d.Z.getMessages(t.channel_id).ready && y(t);
}
function N(e) {
    let { messageId: t, channelId: n } = e;
    if (!v.has(n, t)) return !1;
    let i = v.get(n, t);
    if (null == i || 0 !== i.state) return !1;
    v.set(n, t, {
        state: 0,
        message: (0, l.Cm)(i.message)
    });
}
function C(e) {
    let { message: t } = e,
        n = t.id,
        i = t.channel_id;
    if (!v.has(i, n)) return !1;
    let r = v.get(i, n);
    if (null == r || 0 !== r.state) return !1;
    v.set(i, n, {
        state: 0,
        message: (0, u.wi)(r.message, t)
    });
}
function R(e) {
    return v.deleteChannelCache(e.channel.id);
}
function O() {
    if (0 === v.retainWhere((e) => null != c.Z.getChannel(e))) return !1;
}
function D(e, t) {
    if (!v.has(e, t)) return !1;
    v.set(e, t, { state: 2 });
}
function x(e) {
    let { id: t, channelId: n } = e;
    return D(n, t);
}
function L(e) {
    let { ids: t, channelId: n } = e;
    return I(t, (e) => D(n, e));
}
function P(e) {
    let { message: t } = e;
    v.set(t.channel_id, t.id, {
        state: 0,
        message: t
    });
}
function w() {
    v.clear();
}
function M(e) {
    let { firstMessages: t } = e;
    return null != t && I(t, (e) => y(e));
}
function k(e) {
    let { threads: t } = e;
    return I(Object.values(t), (e) => {
        let { first_message: t } = e;
        return null != t && y(t);
    });
}
class U extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
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
_(U, 'displayName', 'ReferencedMessageStore');
let G = new U(o.Z, {
    CACHE_LOADED: b,
    LOCAL_MESSAGES_LOADED: T,
    LOAD_MESSAGES_SUCCESS: T,
    LOAD_MESSAGES_AROUND_SUCCESS: T,
    SEARCH_FINISH: S,
    MOD_VIEW_SEARCH_FINISH: S,
    LOAD_THREADS_SUCCESS: M,
    LOAD_ARCHIVED_THREADS_SUCCESS: M,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: N,
    LOAD_FORUM_POSTS: k,
    MESSAGE_CREATE: A,
    MESSAGE_UPDATE: C,
    MESSAGE_DELETE: x,
    MESSAGE_DELETE_BULK: L,
    CREATE_PENDING_REPLY: P,
    CHANNEL_DELETE: R,
    THREAD_DELETE: R,
    GUILD_DELETE: O,
    CONNECTION_OPEN: w,
    LOGOUT: w
});
