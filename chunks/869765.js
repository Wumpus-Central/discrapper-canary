r.d(n, {
    Y: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(653041);
var l = r(31775),
    u = r.n(l),
    c = r(442837),
    d = r(570140),
    f = r(247206),
    p = r(786761),
    h = r(592125),
    _ = r(375954),
    m = r(981631);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.LOADED = 0)] = 'LOADED'), (e[(e.NOT_LOADED = 1)] = 'NOT_LOADED'), (e[(e.DELETED = 2)] = 'DELETED');
})(i || (i = {}));
let E = Object.freeze({ state: 1 }),
    v = new Set();
class y {
    handleCacheDisposed(e, n) {
        this._cachedMessageIds.has(e) && ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.delete(e));
    }
    set(e, n) {
        this._cachedMessages.set(e, n), !this._cachedMessageIds.has(e) && ((this._cachedMessageIds = new Set(this._cachedMessageIds)), this._cachedMessageIds.add(e));
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
        g(
            this,
            '_cachedMessages',
            new (u())({
                max: 100,
                dispose: (e, n) => this.handleCacheDisposed(e, n)
            })
        ),
            g(this, '_cachedMessageIds', new Set());
    }
}
class b {
    has(e, n) {
        var r, i;
        return null !== (i = null === (r = this._channelCaches.get(e)) || void 0 === r ? void 0 : r.has(n)) && void 0 !== i && i;
    }
    get(e, n) {
        var r;
        return null === (r = this._channelCaches.get(e)) || void 0 === r ? void 0 : r.get(n);
    }
    set(e, n, r) {
        let i = this._channelCaches.get(e);
        null == i && ((i = new y()), this._channelCaches.set(e, i)), i.set(n, r);
    }
    updateExistingMessageIfCached(e) {
        let n = this._channelCaches.get(e.channel_id);
        return (
            !!(null != n && n.has(e.id)) &&
            (n.set(e.id, {
                state: 0,
                message: (0, p.e5)(e)
            }),
            !0)
        );
    }
    deleteChannelCache(e) {
        return this._channelCaches.delete(e);
    }
    retainWhere(e) {
        let n = [];
        for (let [r] of this._channelCaches) !e(r) && n.push(r);
        for (let e of n) this.deleteChannelCache(e);
        return n.length;
    }
    getCachedMessageIdsForChannel(e) {
        let n = this._channelCaches.get(e);
        return null == n ? null : n.getCachedMessageIds();
    }
    clear() {
        this._channelCaches.clear();
    }
    constructor() {
        g(this, '_channelCaches', new Map());
    }
}
let I = new b();
function T(e) {
    let n = !1;
    if ((I.updateExistingMessageIfCached(e) && (n = !0), m.OBS.has(e.type))) {
        let r = e.message_reference;
        if (null == r) return n;
        let i = r.message_id;
        if (null == i) return n;
        if ('referenced_message' in e) {
            let n = e.referenced_message;
            null != n
                ? (I.set(n.channel_id, n.id, {
                      state: 0,
                      message: (0, p.e5)(n)
                  }),
                  e.type === m.uaV.THREAD_STARTER_MESSAGE && T(n))
                : I.set(e.channel_id, i, { state: 2 });
        } else {
            let e = _.Z.getMessage(r.channel_id, i);
            null != e
                ? I.set(r.channel_id, i, {
                      state: 0,
                      message: e
                  })
                : I.set(r.channel_id, i, E);
        }
        n = !0;
    }
    return n;
}
function S(e, n) {
    let r = !1;
    for (let i of e) r = !1 !== n(i) || r;
    return r;
}
function A(e) {
    let { messages: n } = e;
    return S(n, (e) => T(e));
}
function C(e) {
    let { messages: n } = e;
    return S(Object.values(n), (e) => S(Object.values(e), (e) => T(e)));
}
function N(e) {
    let { messages: n } = e;
    return S(n, (e) => S(e, (e) => T(e)));
}
function R(e) {
    let { message: n } = e;
    return !!_.Z.getMessages(n.channel_id).ready && T(n);
}
function O(e) {
    let { messageId: n, channelId: r } = e;
    if (!I.has(r, n)) return !1;
    let i = I.get(r, n);
    if (null == i || 0 !== i.state) return !1;
    I.set(r, n, {
        state: 0,
        message: (0, f.Cm)(i.message)
    });
}
function D(e) {
    let { message: n } = e,
        r = n.id,
        i = n.channel_id;
    if (!I.has(i, r)) return !1;
    let a = I.get(i, r);
    if (null == a || 0 !== a.state) return !1;
    I.set(i, r, {
        state: 0,
        message: (0, p.wi)(a.message, n)
    });
}
function L(e) {
    return I.deleteChannelCache(e.channel.id);
}
function x() {
    if (0 === I.retainWhere((e) => null != h.Z.getChannel(e))) return !1;
}
function w(e, n) {
    if (!I.has(e, n)) return !1;
    I.set(e, n, { state: 2 });
}
function P(e) {
    let { id: n, channelId: r } = e;
    return w(r, n);
}
function M(e) {
    let { ids: n, channelId: r } = e;
    return S(n, (e) => w(r, e));
}
function k(e) {
    let { message: n } = e;
    I.set(n.channel_id, n.id, {
        state: 0,
        message: n
    });
}
function U() {
    I.clear();
}
function B(e) {
    let { firstMessages: n } = e;
    return null != n && S(n, (e) => T(e));
}
function G(e) {
    let { threads: n } = e;
    return S(Object.values(n), (e) => {
        let { first_message: n } = e;
        return null != n && T(n);
    });
}
class Z extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, h.Z);
    }
    getMessageByReference(e) {
        let n;
        return null != e && (n = I.get(e.channel_id, e.message_id)), null != n ? n : E;
    }
    getMessage(e, n) {
        var r;
        return null !== (r = I.get(e, n)) && void 0 !== r ? r : E;
    }
    getReplyIdsForChannel(e) {
        let n;
        return null != e && (n = I.getCachedMessageIdsForChannel(e)), null != n ? n : v;
    }
}
g(Z, 'displayName', 'ReferencedMessageStore'),
    (n.Z = new Z(d.Z, {
        CACHE_LOADED: C,
        LOCAL_MESSAGES_LOADED: A,
        LOAD_MESSAGES_SUCCESS: A,
        LOAD_MESSAGES_AROUND_SUCCESS: A,
        SEARCH_FINISH: N,
        MOD_VIEW_SEARCH_FINISH: N,
        LOAD_THREADS_SUCCESS: B,
        LOAD_ARCHIVED_THREADS_SUCCESS: B,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: O,
        LOAD_FORUM_POSTS: G,
        MESSAGE_CREATE: R,
        MESSAGE_UPDATE: D,
        MESSAGE_DELETE: P,
        MESSAGE_DELETE_BULK: M,
        CREATE_PENDING_REPLY: k,
        CHANNEL_DELETE: L,
        THREAD_DELETE: L,
        GUILD_DELETE: x,
        CONNECTION_OPEN: U,
        LOGOUT: U
    }));
