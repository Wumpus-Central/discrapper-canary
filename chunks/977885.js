(n.d(t, { Z: () => d }), n(388685));
var r = n(392711),
    s = n.n(r),
    l = n(570140),
    a = n(952537),
    i = n(405656),
    o = n(700366),
    c = n(416638),
    u = n(981631);
let d = {
    fetchMessages: function (e) {
        let { searchContext: t, searchTabs: n, searchQueryString: r, pagination: u, trackExactTotalHits: d, getLimit: h, onFetchStart: p, onFetchSuccess: f } = e,
            g = i.kG(r),
            m = i.$G(g),
            S = (0, c.s5)(t);
        null != S && i.jW(m, S);
        let y = o.Z.getSearchTabFetcher({
                searchContext: t,
                searchQuery: m,
                searchTabs: n,
                getLimit: h,
                pagination: u,
                trackExactTotalHits: d
            }),
            b = n.map((e) => (0, c.jj)(t, e, r));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: b
            }),
            null == p ||
                p({
                    searchContext: t,
                    searchQueryString: r,
                    searchQuery: m
                }),
            y.fetch(
                (e) => {
                    let { body: n } = e,
                        i = Object.entries(n.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: S,
                        data: i.map((e) => {
                            var l, i, o;
                            let [u, d] = e,
                                h = (0, c.jj)(t, u, r),
                                p = d.cursor;
                            return {
                                id: h,
                                analyticsId: n.analytics_id,
                                totalResults: d.total_results,
                                cursor: null != p && s().isEmpty(p) ? null : p,
                                messages: d.messages,
                                channels: null != (l = d.channels) ? l : [],
                                threads: null != (i = d.threads) ? i : [],
                                members: (null != (o = d.members) ? o : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        i.forEach((e) => {
                            var r, s;
                            let [i, o] = e;
                            l.Z.dispatch({
                                type: 'SEARCH_FINISH',
                                searchId: (0, c.WJ)(t),
                                guildId: (0, c.s5)(t),
                                analyticsId: n.analytics_id,
                                totalResults: o.total_results,
                                channels: o.channels,
                                messages: o.messages,
                                threads: null != (r = o.threads) ? r : [],
                                members: (null != (s = o.members) ? s : []).map((e) => (0, a.Z)(e)),
                                hasError: !1,
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            });
                        }),
                        null == f ||
                            f({
                                searchContext: t,
                                tabEntries: i
                            }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: b
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: b,
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
        if (e.type !== u.aib.DMS && e.type !== u.aib.GUILD) return;
        let n = (0, c.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_ADD_ITEM',
            id: n,
            item: t
        });
    },
    removeSearchHistoryItem: function (e, t) {
        let n = (0, c.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_REMOVE_ITEM',
            id: n,
            item: t
        });
    },
    clearSearchHistory: function (e) {
        let t = (0, c.Tm)(e);
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_CLEAR_ITEMS',
            id: t
        });
    },
    openSearchScreen: function (e) {
        let t = (0, c.WJ)(e);
        l.Z.dispatch({
            type: 'SEARCH_SCREEN_OPEN',
            searchId: t
        });
    }
};
