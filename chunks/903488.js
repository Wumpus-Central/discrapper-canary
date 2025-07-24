(n.d(t, { Z: () => L }), n(388685), n(539854));
var r,
    i = n(442837),
    a = n(570140),
    o = n(881052),
    s = n(786761),
    l = n(995774),
    c = n(314897),
    u = n(699516);
function d(e, t, n) {
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
class _ {
    handleSearchStart() {
        ((this.isFetching = !0), (this.isIndexing = !1), (this.analyticsId = null), (this.error = null));
    }
    handleSearchIndexing() {
        ((this.isInitialFetchComplete = !0), (this.isIndexing = !0), (this.isHistoricalIndexing = !0), (this.isFetching = !1), (this.error = null));
    }
    handleSearchFailure(e) {
        ((this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = !1), (this.error = new o.Hx(e)), (this.analyticsId = null), (this.documentsIndexed = 0));
    }
    handleSearchSuccess(e, t, n) {
        var r;
        let { analyticsId: i, cursor: a, totalResults: o, doingHistoricalIndex: s, documentsIndexed: l } = e;
        ((this.analyticsId = i), (this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = s), (this.error = null), (this.documentsIndexed = l), (this.cursor = a), (this.rawMessages = n));
        let c = [...(null != (r = this.messages) ? r : [])],
            u = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), c.push(e), u.push(e));
            }),
            (this.messages = c),
            (this.hasNextPage = null != this.cursor),
            (this.totalResults = o),
            u
        );
    }
    constructor() {
        (d(this, 'isIndexing', !1), d(this, 'isHistoricalIndexing', !1), d(this, 'isFetching', !1), d(this, 'analyticsId', null), d(this, 'error', null), d(this, 'rawMessages', null), d(this, 'messages', null), d(this, 'documentsIndexed', 0), d(this, 'totalResults', null), d(this, 'hasNextPage', !1), d(this, 'messageIds', new Set()), d(this, 'isInitialFetchComplete', !1), d(this, 'cursor', null));
    }
}
let f = new Map(),
    p = new Map(),
    h = new Map();
function m(e) {
    var t;
    return null != (t = f.get(e)) ? t : new _();
}
function g(e) {
    let t = m(e);
    return (f.set(e, t), t);
}
function E(e, t) {
    let n = p.get(e);
    if (null == n) return !1;
    let r = t(n);
    return (p.set(e, r), !0);
}
function b(e, t) {
    return t(m(e));
}
function y() {
    ((f = new Map()), (p = new Map()), (h = new Map()));
}
function O(e) {
    e.ids.forEach((e) => {
        g(e).handleSearchStart();
    });
}
function v(e) {
    e.data.forEach((e) => {
        let t = g(e.id),
            n = e.messages.map((e) => {
                let [t] = e;
                return (0, s.e5)(t);
            });
        t.handleSearchSuccess(e, n, e.messages).forEach((e) => {
            var t;
            p.set(e.id, e);
            let n = null != (t = h.get(e.id)) ? t : 0;
            h.set(e.id, n + 1);
        });
    });
}
function I(e) {
    let t = e.message.id;
    if (null == t) return !1;
    let n = p.get(t);
    if (null == n) return !1;
    let r = (0, s.wi)(n, e.message);
    p.set(t, r);
}
function T(e) {
    let { type: t, messageId: n, userId: r, emoji: i } = e;
    if (!(0, l.sm)(e)) return !1;
    let a = c.default.getId() === r;
    return E(n, (n) => {
        let { reactionType: r } = e;
        return 'MESSAGE_REACTION_ADD' === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r);
    });
}
function S(e) {
    let { messageId: t, reactions: n } = e,
        r = c.default.getId();
    return E(t, (e) => e.addReactionBatch(n, r));
}
function A(e) {
    let { messageId: t } = e;
    return E(t, (e) => e.set('reactions', []));
}
function N(e) {
    let { messageId: t, emoji: n } = e;
    return E(t, (e) => e.removeReactionsForEmoji(n));
}
function C(e) {
    e.ids.forEach((e) => {
        g(e).handleSearchIndexing();
    });
}
function R(e) {
    e.ids.forEach((t) => {
        g(t).handleSearchFailure(e.error);
    });
}
function P(e) {
    let t = f.get(e.id);
    if (null == t) return !1;
    (t.messageIds.forEach((e) => {
        var t;
        let n = null != (t = h.get(e)) ? t : 0;
        n <= 1 ? (p.delete(e), h.delete(e)) : h.set(e, n - 1);
    }),
        f.delete(e.id));
}
function w(e) {
    ((f = new Map()), (p = new Map()), (h = new Map()));
}
class D extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getMessage(e) {
        return p.get(e);
    }
    getTotalCount(e) {
        return b(e, (e) => e.totalResults);
    }
    getIsInitialFetchComplete(e) {
        return b(e, (e) => e.isInitialFetchComplete);
    }
    getIsIndexing(e) {
        return b(e, (e) => e.isIndexing);
    }
    getIsHistoricalIndexing(e) {
        return b(e, (e) => e.isHistoricalIndexing);
    }
    getDocumentsIndexed(e) {
        return b(e, (e) => e.documentsIndexed);
    }
    getIsFetching(e) {
        return b(e, (e) => e.isFetching);
    }
    getHasNextPage(e) {
        return b(e, (e) => e.hasNextPage);
    }
    getError(e) {
        return b(e, (e) => e.error);
    }
    getMessages(e) {
        return b(e, (e) => e.messages);
    }
    getCursor(e) {
        return b(e, (e) => e.cursor);
    }
    getAnalyticsId(e) {
        return b(e, (e) => e.analyticsId);
    }
    getRawMessages(e) {
        return b(e, (e) => e.rawMessages);
    }
    hasSearchState(e) {
        return f.has(e);
    }
}
d(D, 'displayName', 'SearchMessageStore');
let L = new D(a.Z, {
    SEARCH_MESSAGES_START: O,
    SEARCH_MESSAGES_SUCCESS: v,
    SEARCH_MESSAGES_INDEXING: C,
    SEARCH_MESSAGES_FAILURE: R,
    SEARCH_MESSAGES_CLEAR: P,
    SEARCH_MESSAGES_CLEAR_ALL: w,
    MESSAGE_UPDATE: I,
    MESSAGE_REACTION_ADD: T,
    MESSAGE_REACTION_ADD_MANY: S,
    MESSAGE_REACTION_REMOVE: T,
    MESSAGE_REACTION_REMOVE_ALL: A,
    MESSAGE_REACTION_REMOVE_EMOJI: N,
    CONNECTION_OPEN: y
});
