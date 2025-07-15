(r.d(t, { Z: () => h }), r(388685));
var n = r(392711),
    s = r.n(n),
    l = r(570140),
    a = r(603263),
    o = r(952537),
    i = r(405656),
    c = r(700366),
    u = r(416638),
    d = r(981631);
let h = {
    fetchMessages: function (e) {
        let { searchContext: t, searchTabs: r, searchQueryString: n, pagination: h, trackExactTotalHits: p, getId: f, getLimit: g, onFetchStart: m, onFetchSuccess: b, searchMode: y = d.QIO.NEWEST } = e,
            S = i.kG(n),
            x = i.$G(S);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(x);
        let O = (function (e) {
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
            })({}, x, (0, a.zH)(y)),
            j = (0, u.s5)(t);
        null != j && i.jW(O, j);
        let v = c.Z.getSearchTabFetcher({
                searchContext: t,
                searchQuery: O,
                searchTabs: r,
                getLimit: g,
                pagination: h,
                trackExactTotalHits: p
            }),
            _ = r.map((e) => f(e));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: _
            }),
            null == m ||
                m({
                    searchContext: t,
                    searchQueryString: n,
                    searchQuery: O
                }),
            v.fetch(
                (e) => {
                    let { body: r } = e,
                        n = Object.entries(r.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: j,
                        data: n.map((e) => {
                            var t, n, l;
                            let [a, i] = e,
                                c = f(a),
                                u = i.cursor;
                            return {
                                id: c,
                                analyticsId: r.analytics_id,
                                totalResults: i.total_results,
                                cursor: null != u && s().isEmpty(u) ? null : u,
                                messages: i.messages,
                                channels: null != (t = i.channels) ? t : [],
                                threads: null != (n = i.threads) ? n : [],
                                members: (null != (l = i.members) ? l : []).map((e) => (0, o.Z)(e)),
                                doingHistoricalIndex: r.doing_deep_historical_index,
                                documentsIndexed: r.documents_indexed
                            };
                        })
                    }),
                        n.forEach((e) => {
                            var n, s;
                            let [a, i] = e;
                            l.Z.dispatch({
                                type: 'SEARCH_FINISH',
                                searchId: (0, u.WJ)(t),
                                guildId: (0, u.s5)(t),
                                analyticsId: r.analytics_id,
                                totalResults: i.total_results,
                                channels: i.channels,
                                messages: i.messages,
                                threads: null != (n = i.threads) ? n : [],
                                members: (null != (s = i.members) ? s : []).map((e) => (0, o.Z)(e)),
                                hasError: !1,
                                doingHistoricalIndex: r.doing_deep_historical_index,
                                documentsIndexed: r.documents_indexed
                            });
                        }),
                        null == b ||
                            b({
                                searchContext: t,
                                tabEntries: n
                            }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: _
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: _,
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
