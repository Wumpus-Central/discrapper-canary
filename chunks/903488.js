n.d(t, { Z: () => E }), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    a = n(881052),
    o = n(786761),
    s = n(995774),
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
class p {
    handleSearchStart() {
        (this.isFetching = !0), (this.isIndexing = !1), (this.analyticsId = null), (this.showBlockedResults = !1), (this.error = null);
    }
    handleSearchIndexing() {
        (this.isInitialFetchComplete = !0), (this.isIndexing = !0), (this.isHistoricalIndexing = !0), (this.isFetching = !1), (this.error = null);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = !1), (this.error = new a.Hx(e)), (this.analyticsId = null), (this.documentsIndexed = 0), (this.showNoResultsAlt = 0.05 > Math.random());
    }
    handleSearchSuccess(e, t) {
        var n;
        let { analyticsId: r, cursor: i, totalResults: l, doingHistoricalIndex: a, documentsIndexed: o } = e;
        (this.analyticsId = r), (this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = a), (this.error = null), (this.documentsIndexed = o), (this.showNoResultsAlt = 0.05 > Math.random()), (this.cursor = i);
        let s = this.dedupMessages(t),
            c = this.filterBlockedMessages(s);
        (this.messages = [...(null != (n = this.messages) ? n : []), ...c]), (this.hasNextPage = null != this.cursor), (this.totalResults = l);
    }
    filterBlockedMessages(e) {
        return e;
    }
    dedupMessages(e) {
        return e.filter((e) => !this.messageIds.has(e.id) && (this.messageIds.add(e.id), !0));
    }
    constructor() {
        d(this, 'isIndexing', !1), d(this, 'isHistoricalIndexing', !1), d(this, 'isFetching', !1), d(this, 'analyticsId', null), d(this, 'error', null), d(this, 'messages', null), d(this, 'documentsIndexed', 0), d(this, 'totalResults', null), d(this, 'resultsBlocked', 0), d(this, 'showBlockedResults', !1), d(this, 'showNoResultsAlt', !1), d(this, 'hasNextPage', !1), d(this, 'messageIds', new Set()), d(this, 'isInitialFetchComplete', !1), d(this, 'cursor', null);
    }
}
let m = new Map(),
    f = new Map(),
    h = null;
function g(e) {
    var t;
    return null != (t = m.get(e)) ? t : new p();
}
function _(e) {
    let t = g(e);
    return m.set(e, t), t;
}
function b(e, t) {
    let n = f.get(e);
    if (null == n) return !1;
    let r = t(n);
    return f.set(e, r), !0;
}
function x(e) {
    let { type: t, messageId: n, userId: r, emoji: i } = e;
    if (!(0, s.sm)(e)) return !1;
    let l = c.default.getId() === r;
    return b(n, (n) => {
        let { reactionType: r } = e;
        return 'MESSAGE_REACTION_ADD' === t ? n.addReaction(i, l, e.colors, r) : n.removeReaction(i, l, r);
    });
}
class y extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getMessage(e) {
        return f.get(e);
    }
    getTotalCount(e) {
        return g(e).totalResults;
    }
    getIsInitialFetchComplete(e) {
        return g(e).isInitialFetchComplete;
    }
    getIsIndexing(e) {
        return g(e).isIndexing;
    }
    getIsHistoricalIndexing(e) {
        return g(e).isHistoricalIndexing;
    }
    getDocumentsIndexed(e) {
        return g(e).documentsIndexed;
    }
    getIsFetching(e) {
        return g(e).isFetching;
    }
    getHasNextPage(e) {
        return g(e).hasNextPage;
    }
    getError(e) {
        return g(e).error;
    }
    getMessages(e) {
        return g(e).messages;
    }
    getCursor(e) {
        return g(e).cursor;
    }
    getShowNoResultsAlt(e) {
        return g(e).showNoResultsAlt;
    }
    getLastSearchAnalyticsId() {
        return h;
    }
}
d(y, 'displayName', 'SearchMessageStore');
let E = new y(l.Z, {
    SEARCH_MESSAGES_START: function (e) {
        e.ids.forEach((e) => {
            _(e).handleSearchStart();
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        var t;
        (h = null == (t = e.data[0]) ? void 0 : t.analyticsId),
            e.data.forEach((e) => {
                let t = _(e.id),
                    n = e.messages.map((e) => {
                        let [t] = e;
                        return (0, o.e5)(t);
                    });
                t.handleSearchSuccess(e, n), n.forEach((e) => f.set(e.id, e));
            });
    },
    SEARCH_MESSAGES_INDEXING: function (e) {
        e.ids.forEach((e) => {
            _(e).handleSearchIndexing();
        });
    },
    SEARCH_MESSAGES_FAILURE: function (e) {
        e.ids.forEach((t) => {
            _(t).handleSearchFailure(e.error);
        });
    },
    SEARCH_MESSAGES_CLEAR_ALL: function (e) {
        (m = new Map()), (f = new Map());
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t) return !1;
        let n = f.get(t);
        if (null == n) return !1;
        let r = (0, o.wi)(n, e.message);
        f.set(t, r);
    },
    MESSAGE_REACTION_ADD: x,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            r = c.default.getId();
        return b(t, (e) => e.addReactionBatch(n, r));
    },
    MESSAGE_REACTION_REMOVE: x,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e;
        return b(t, (e) => e.set('reactions', []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e;
        return b(t, (e) => e.removeReactionsForEmoji(n));
    },
    CONNECTION_OPEN: function () {
        (m = new Map()), (f = new Map());
    }
});
