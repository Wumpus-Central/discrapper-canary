(n.d(t, { Z: () => x }), n(388685), n(539854));
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
    handleSearchSuccess(e, t) {
        var n;
        let { analyticsId: r, cursor: i, totalResults: a, doingHistoricalIndex: o, documentsIndexed: s } = e;
        ((this.analyticsId = r), (this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = o), (this.error = null), (this.documentsIndexed = s), (this.cursor = i));
        let l = [...(null != (n = this.messages) ? n : [])],
            c = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), l.push(e), c.push(e));
            }),
            (this.messages = l),
            (this.hasNextPage = null != this.cursor),
            (this.totalResults = a),
            c
        );
    }
    constructor() {
        (d(this, 'isIndexing', !1), d(this, 'isHistoricalIndexing', !1), d(this, 'isFetching', !1), d(this, 'analyticsId', null), d(this, 'error', null), d(this, 'messages', null), d(this, 'documentsIndexed', 0), d(this, 'totalResults', null), d(this, 'hasNextPage', !1), d(this, 'messageIds', new Set()), d(this, 'isInitialFetchComplete', !1), d(this, 'cursor', null));
    }
}
let f = new Map(),
    p = null,
    h = new Map(),
    m = new Map();
function g(e) {
    var t;
    return null != (t = f.get(e)) ? t : new _();
}
function E(e) {
    let t = g(e);
    return (f.set(e, t), t);
}
function b(e, t) {
    let n = h.get(e);
    if (null == n) return !1;
    let r = t(n);
    return (h.set(e, r), !0);
}
function y(e, t) {
    return t(g(e));
}
function O() {
    ((f = new Map()), (h = new Map()), (m = new Map()));
}
function v(e) {
    e.ids.forEach((e) => {
        E(e).handleSearchStart();
    });
}
function I(e) {
    var t;
    ((p = null == (t = e.data[0]) ? void 0 : t.analyticsId),
        e.data.forEach((e) => {
            let t = E(e.id),
                n = e.messages.map((e) => {
                    let [t] = e;
                    return (0, s.e5)(t);
                });
            t.handleSearchSuccess(e, n).forEach((e) => {
                var t;
                h.set(e.id, e);
                let n = null != (t = m.get(e.id)) ? t : 0;
                m.set(e.id, n + 1);
            });
        }));
}
function T(e) {
    let t = e.message.id;
    if (null == t) return !1;
    let n = h.get(t);
    if (null == n) return !1;
    let r = (0, s.wi)(n, e.message);
    h.set(t, r);
}
function S(e) {
    let { type: t, messageId: n, userId: r, emoji: i } = e;
    if (!(0, l.sm)(e)) return !1;
    let a = c.default.getId() === r;
    return b(n, (n) => {
        let { reactionType: r } = e;
        return 'MESSAGE_REACTION_ADD' === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r);
    });
}
function A(e) {
    let { messageId: t, reactions: n } = e,
        r = c.default.getId();
    return b(t, (e) => e.addReactionBatch(n, r));
}
function N(e) {
    let { messageId: t } = e;
    return b(t, (e) => e.set('reactions', []));
}
function C(e) {
    let { messageId: t, emoji: n } = e;
    return b(t, (e) => e.removeReactionsForEmoji(n));
}
function R(e) {
    e.ids.forEach((e) => {
        E(e).handleSearchIndexing();
    });
}
function P(e) {
    e.ids.forEach((t) => {
        E(t).handleSearchFailure(e.error);
    });
}
function w(e) {
    let t = f.get(e.id);
    if (null == t) return !1;
    (t.messageIds.forEach((e) => {
        var t;
        let n = null != (t = m.get(e)) ? t : 0;
        n <= 1 ? (h.delete(e), m.delete(e)) : m.set(e, n - 1);
    }),
        f.delete(e.id));
}
function D(e) {
    ((f = new Map()), (h = new Map()), (m = new Map()));
}
class L extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getMessage(e) {
        return h.get(e);
    }
    getTotalCount(e) {
        return y(e, (e) => e.totalResults);
    }
    getIsInitialFetchComplete(e) {
        return y(e, (e) => e.isInitialFetchComplete);
    }
    getIsIndexing(e) {
        return y(e, (e) => e.isIndexing);
    }
    getIsHistoricalIndexing(e) {
        return y(e, (e) => e.isHistoricalIndexing);
    }
    getDocumentsIndexed(e) {
        return y(e, (e) => e.documentsIndexed);
    }
    getIsFetching(e) {
        return y(e, (e) => e.isFetching);
    }
    getHasNextPage(e) {
        return y(e, (e) => e.hasNextPage);
    }
    getError(e) {
        return y(e, (e) => e.error);
    }
    getMessages(e) {
        return y(e, (e) => e.messages);
    }
    getCursor(e) {
        return y(e, (e) => e.cursor);
    }
    getLastSearchAnalyticsId() {
        return p;
    }
    hasSearchState(e) {
        return f.has(e);
    }
}
d(L, 'displayName', 'SearchMessageStore');
let x = new L(a.Z, {
    SEARCH_MESSAGES_START: v,
    SEARCH_MESSAGES_SUCCESS: I,
    SEARCH_MESSAGES_INDEXING: R,
    SEARCH_MESSAGES_FAILURE: P,
    SEARCH_MESSAGES_CLEAR: w,
    SEARCH_MESSAGES_CLEAR_ALL: D,
    MESSAGE_UPDATE: T,
    MESSAGE_REACTION_ADD: S,
    MESSAGE_REACTION_ADD_MANY: A,
    MESSAGE_REACTION_REMOVE: S,
    MESSAGE_REACTION_REMOVE_ALL: N,
    MESSAGE_REACTION_REMOVE_EMOJI: C,
    CONNECTION_OPEN: O
});
