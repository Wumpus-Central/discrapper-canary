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
        let { searchContext: t, searchTabs: n, searchQueryString: r, pagination: h, trackExactTotalHits: p, getLimit: f, onFetchStart: g, onFetchSuccess: m, searchMode: S = d.QIO.NEWEST } = e,
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
            _ = (0, u.s5)(t);
        null != _ && o.jW(x, _);
        let E = c.Z.getSearchTabFetcher({
                searchContext: t,
                searchQuery: x,
                searchTabs: n,
                getLimit: f,
                pagination: h,
                trackExactTotalHits: p
            }),
            v = n.map((e) => (0, u.jj)(t, e, r));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: v
            }),
            null == g ||
                g({
                    searchContext: t,
                    searchQueryString: r,
                    searchQuery: x
                }),
            E.fetch(
                (e) => {
                    let { body: n } = e,
                        a = Object.entries(n.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: _,
                        data: a.map((e) => {
                            var l, a, o;
                            let [c, d] = e,
                                h = (0, u.jj)(t, c, r),
                                p = d.cursor;
                            return {
                                id: h,
                                analyticsId: n.analytics_id,
                                totalResults: d.total_results,
                                cursor: null != p && s().isEmpty(p) ? null : p,
                                messages: d.messages,
                                channels: null != (l = d.channels) ? l : [],
                                threads: null != (a = d.threads) ? a : [],
                                members: (null != (o = d.members) ? o : []).map((e) => (0, i.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        a.forEach((e) => {
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
                        null == m ||
                            m({
                                searchContext: t,
                                tabEntries: a
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
    clearSearch: function () {
        l.Z.dispatch({ type: 'SEARCH_MESSAGES_CLEAR_ALL' });
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
