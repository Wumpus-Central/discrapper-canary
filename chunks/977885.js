(r.d(t, { Z: () => h }), r(388685));
var n = r(392711),
    s = r.n(n),
    l = r(570140),
    a = r(603263),
    i = r(952537),
    o = r(405656),
    c = r(700366),
    u = r(416638),
    d = r(981631);
let h = {
    fetchMessages: function (e) {
        let { searchContext: t, searchTabs: r, searchQueryString: n, pagination: h, trackExactTotalHits: p, getId: f, getLimit: g, onFetchStart: m, onFetchSuccess: _, searchMode: S = d.QIO.NEWEST } = e,
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
            })({}, b, (0, a.zH)(S)),
            E = (0, u.s5)(t);
        null != E && o.jW(x, E);
        let C = c.Z.getSearchTabFetcher({
                searchContext: t,
                searchQuery: x,
                searchTabs: r,
                getLimit: g,
                pagination: h,
                trackExactTotalHits: p
            }),
            O = r.map((e) => f(e));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: O
            }),
            null == m ||
                m({
                    searchContext: t,
                    searchQueryString: n,
                    searchQuery: x
                }),
            C.fetch(
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
                        null == _ ||
                            _({
                                searchContext: t,
                                tabEntries: n
                            }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: O
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: O,
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
    clearAllSearchStates: function () {
        l.Z.dispatch({ type: 'SEARCH_MESSAGES_CLEAR_ALL' });
    },
    clearSearchState: function (e) {
        l.Z.dispatch({
            type: 'SEARCH_MESSAGES_CLEAR',
            id: e
        });
    },
    addSearchHistoryItem: function (e, t) {
        if (e.type !== d.aib.DMS && e.type !== d.aib.GUILD) return;
        let r = (0, u.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_ADD_ITEM',
            id: r,
            item: t
        });
    },
    removeSearchHistoryItem: function (e, t) {
        let r = (0, u.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_REMOVE_ITEM',
            id: r,
            item: t
        });
    },
    clearSearchHistory: function (e) {
        let t = (0, u.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_CLEAR_ITEMS',
            id: t
        });
    },
    openSearchScreen: function (e) {
        let t = (0, u.WJ)(e);
        l.Z.dispatch({
            type: 'SEARCH_SCREEN_OPEN',
            searchId: t
        });
    }
};
