(n.d(t, { Z: () => _ }), n(388685));
var r,
    s = n(442837),
    l = n(570140),
    a = n(881052),
    i = n(786761),
    o = n(995774),
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
class h {
    handleSearchStart() {
        ((this.isFetching = !0), (this.isIndexing = !1), (this.analyticsId = null), (this.showBlockedResults = !1), (this.error = null));
    }
    handleSearchIndexing() {
        ((this.isInitialFetchComplete = !0), (this.isIndexing = !0), (this.isHistoricalIndexing = !0), (this.isFetching = !1), (this.error = null));
    }
    handleSearchFailure(e) {
        ((this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = !1), (this.error = new a.Hx(e)), (this.analyticsId = null), (this.documentsIndexed = 0), (this.showNoResultsAlt = 0.05 > Math.random()));
    }
    handleSearchSuccess(e, t) {
        var n;
        let { analyticsId: r, cursor: s, totalResults: l, doingHistoricalIndex: a, documentsIndexed: i } = e;
        ((this.analyticsId = r), (this.isFetching = !1), (this.isIndexing = !1), (this.isInitialFetchComplete = !0), (this.isHistoricalIndexing = a), (this.error = null), (this.documentsIndexed = i), (this.showNoResultsAlt = 0.05 > Math.random()), (this.cursor = s));
        let o = this.dedupMessages(t),
            c = this.filterBlockedMessages(o);
        ((this.messages = [...(null != (n = this.messages) ? n : []), ...c]), (this.hasNextPage = null != this.cursor), (this.totalResults = l));
    }
    filterBlockedMessages(e) {
        return e;
    }
    dedupMessages(e) {
        return e.filter((e) => !this.messageIds.has(e.id) && (this.messageIds.add(e.id), !0));
    }
    constructor() {
        (d(this, 'isIndexing', !1), d(this, 'isHistoricalIndexing', !1), d(this, 'isFetching', !1), d(this, 'analyticsId', null), d(this, 'error', null), d(this, 'messages', null), d(this, 'documentsIndexed', 0), d(this, 'totalResults', null), d(this, 'resultsBlocked', 0), d(this, 'showBlockedResults', !1), d(this, 'showNoResultsAlt', !1), d(this, 'hasNextPage', !1), d(this, 'messageIds', new Set()), d(this, 'isInitialFetchComplete', !1), d(this, 'cursor', null));
    }
}
let p = new Map(),
    f = new Map(),
    g = null;
function m(e) {
    var t;
    return null != (t = p.get(e)) ? t : new h();
}
function S(e) {
    let t = m(e);
    return (p.set(e, t), t);
}
function y(e, t) {
    let n = f.get(e);
    if (null == n) return !1;
    let r = t(n);
    return (f.set(e, r), !0);
}
function b(e) {
    let { type: t, messageId: n, userId: r, emoji: s } = e;
    if (!(0, o.sm)(e)) return !1;
    let l = c.default.getId() === r;
    return y(n, (n) => {
        let { reactionType: r } = e;
        return 'MESSAGE_REACTION_ADD' === t ? n.addReaction(s, l, e.colors, r) : n.removeReaction(s, l, r);
    });
}
class x extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getMessage(e) {
        return f.get(e);
    }
    getTotalCount(e) {
        return m(e).totalResults;
    }
    getIsInitialFetchComplete(e) {
        return m(e).isInitialFetchComplete;
    }
    getIsIndexing(e) {
        return m(e).isIndexing;
    }
    getIsHistoricalIndexing(e) {
        return m(e).isHistoricalIndexing;
    }
    getDocumentsIndexed(e) {
        return m(e).documentsIndexed;
    }
    getIsFetching(e) {
        return m(e).isFetching;
    }
    getHasNextPage(e) {
        return m(e).hasNextPage;
    }
    getError(e) {
        return m(e).error;
    }
    getMessages(e) {
        return m(e).messages;
    }
    getCursor(e) {
        return m(e).cursor;
    }
    getShowNoResultsAlt(e) {
        return m(e).showNoResultsAlt;
    }
    getLastSearchAnalyticsId() {
        return g;
    }
}
d(x, 'displayName', 'SearchMessageStore');
let _ = new x(l.Z, {
    SEARCH_MESSAGES_START: function (e) {
        e.ids.forEach((e) => {
            S(e).handleSearchStart();
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        var t;
        ((g = null == (t = e.data[0]) ? void 0 : t.analyticsId),
            e.data.forEach((e) => {
                let t = S(e.id),
                    n = e.messages.map((e) => {
                        let [t] = e;
                        return (0, i.e5)(t);
                    });
                (t.handleSearchSuccess(e, n), n.forEach((e) => f.set(e.id, e)));
            }));
    },
    SEARCH_MESSAGES_INDEXING: function (e) {
        e.ids.forEach((e) => {
            S(e).handleSearchIndexing();
        });
    },
    SEARCH_MESSAGES_FAILURE: function (e) {
        e.ids.forEach((t) => {
            S(t).handleSearchFailure(e.error);
        });
    },
    SEARCH_MESSAGES_CLEAR_ALL: function (e) {
        ((p = new Map()), (f = new Map()));
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t) return !1;
        let n = f.get(t);
        if (null == n) return !1;
        let r = (0, i.wi)(n, e.message);
        f.set(t, r);
    },
    MESSAGE_REACTION_ADD: b,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            r = c.default.getId();
        return y(t, (e) => e.addReactionBatch(n, r));
    },
    MESSAGE_REACTION_REMOVE: b,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e;
        return y(t, (e) => e.set('reactions', []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e;
        return y(t, (e) => e.removeReactionsForEmoji(n));
    },
    CONNECTION_OPEN: function () {
        ((p = new Map()), (f = new Map()));
    }
});
