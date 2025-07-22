(n.d(t, { Z: () => h }), n(388685));
var r = n(392711),
    s = n.n(r),
    l = n(570140),
    a = n(603263),
    i = n(952537),
    o = n(405656),
    c = n(700366),
    u = n(416638),
    d = n(981631);
let h = {
    fetchMessages: function (e) {
        let { searchContext: t, searchTabs: n, searchQueryString: r, pagination: h, trackExactTotalHits: p, getId: f, getLimit: g, onFetchStart: m, onFetchSuccess: _, searchMode: S = d.QIO.NEWEST } = e,
            y = o.kG(r),
            b = o.$G(y);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(b);
        let x = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, b, (0, a.zH)(S)),
            E = (0, u.s5)(t);
        null != E && o.jW(x, E);
        let C = c.Z.getSearchTabFetcher({
                searchContext: t,
                searchQuery: x,
                searchTabs: n,
                getLimit: g,
                pagination: h,
                trackExactTotalHits: p
            }),
            O = n.map((e) => f(e));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: O
            }),
            null == m ||
                m({
                    searchContext: t,
                    searchQueryString: r,
                    searchQuery: x
                }),
            C.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: E,
                        data: r.map((e) => {
                            var t, r, l;
                            let [a, o] = e,
                                c = f(a),
                                u = o.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: o.total_results,
                                cursor: null != u && s().isEmpty(u) ? null : u,
                                messages: o.messages,
                                channels: null != (t = o.channels) ? t : [],
                                threads: null != (r = o.threads) ? r : [],
                                members: (null != (l = o.members) ? l : []).map((e) => (0, i.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        r.forEach((e) => {
                            var r, s;
                            let [a, o] = e;
                            l.Z.dispatch({
                                type: 'SEARCH_FINISH',
                                searchId: (0, u.WJ)(t),
                                guildId: (0, u.s5)(t),
                                analyticsId: n.analytics_id,
                                totalResults: o.total_results,
                                channels: o.channels,
                                messages: o.messages,
                                threads: null != (r = o.threads) ? r : [],
                                members: (null != (s = o.members) ? s : []).map((e) => (0, i.Z)(e)),
                                hasError: !1,
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            });
                        }),
                        null == _ ||
                            _({
                                searchContext: t,
                                tabEntries: r
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
        let n = (0, u.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_ADD_ITEM',
            id: n,
            item: t
        });
    },
    removeSearchHistoryItem: function (e, t) {
        let n = (0, u.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_REMOVE_ITEM',
            id: n,
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
