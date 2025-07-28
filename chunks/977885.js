(r.d(t, { Z: () => p }), r(388685), r(415506));
var n = r(392711),
    s = r.n(n),
    l = r(570140),
    a = r(603263),
    i = r(952537),
    o = r(405656),
    c = r(961216),
    u = r(416638),
    h = r(981631);
function d() {
    return !1;
}
let p = {
    fetchMessages: function (e) {
        let { searchContext: t, searchTabs: r, searchQueryString: n, pagination: d, trackExactTotalHits: p, getId: f, getLimit: g, onFetchStart: m, onFetchSuccess: S, searchMode: _ = h.QIO.NEWEST } = e,
            y = o.kG(n),
            b = o.$G(y);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(b);
        let x = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            ((n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n));
                        }));
                }
                return e;
            })({}, b, (0, a.zH)(_)),
            E = (0, u.s5)(t);
        null != E && o.jW(x, E);
        let O = c.Z.create({
            id: (0, u.Tm)(t),
            searchContext: t,
            searchQuery: x,
            searchTabs: r,
            getLimit: g,
            pagination: d,
            trackExactTotalHits: p
        });
        null == m ||
            m({
                searchContext: t,
                searchQueryString: n,
                searchQuery: x
            });
        let v = r.map((e) => f(e));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: v
            }),
            O.fetch(
                (e) => {
                    let { body: r } = e,
                        n = Object.entries(r.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: E,
                        data: n.map((e) => {
                            var t, n, l;
                            let [a, o] = e,
                                c = f(a),
                                u = o.cursor;
                            return {
                                id: c,
                                analyticsId: r.analytics_id,
                                totalResults: o.total_results,
                                cursor: null != u && s().isEmpty(u) ? null : u,
                                messages: o.messages,
                                channels: null != (t = o.channels) ? t : [],
                                threads: null != (n = o.threads) ? n : [],
                                members: (null != (l = o.members) ? l : []).map((e) => (0, i.Z)(e)),
                                doingHistoricalIndex: r.doing_deep_historical_index,
                                documentsIndexed: r.documents_indexed
                            };
                        })
                    }),
                        n.forEach((e) => {
                            var n, s;
                            let [a, o] = e;
                            l.Z.dispatch({
                                type: 'SEARCH_FINISH',
                                searchId: (0, u.WJ)(t),
                                guildId: (0, u.s5)(t),
                                analyticsId: r.analytics_id,
                                totalResults: o.total_results,
                                channels: o.channels,
                                messages: o.messages,
                                threads: null != (n = o.threads) ? n : [],
                                members: (null != (s = o.members) ? s : []).map((e) => (0, i.Z)(e)),
                                hasError: !1,
                                doingHistoricalIndex: r.doing_deep_historical_index,
                                documentsIndexed: r.documents_indexed
                            });
                        }),
                        null == S ||
                            S({
                                searchContext: t,
                                tabEntries: n
                            }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: v
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: v,
                        error: e
                    });
                }
            ),
            !0
        );
    },
    clearSearchRecentMessages: function () {
        l.Z.dispatch({ type: 'SEARCH_RECENT_MESSAGES_CLEAR' });
    },
    clearAllSearchMesssages: function () {
        l.Z.dispatch({ type: 'SEARCH_MESSAGES_CLEAR_ALL' });
    },
    clearSearchMessages: function (e) {
        l.Z.dispatch({
            type: 'SEARCH_MESSAGES_CLEAR',
            id: e
        });
    },
    addNativeSearchHistoryItem: function (e, t) {
        1;
    },
    removeNativeSearchHistoryItem: function (e, t) {
        1;
    },
    clearNativeSearchHistory: function (e) {
        1;
    },
    openSearchScreen: function (e) {
        let t = (0, u.WJ)(e);
        l.Z.dispatch({
            type: 'SEARCH_SCREEN_OPEN',
            searchId: t
        });
    }
};
