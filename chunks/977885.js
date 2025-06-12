n.d(t, { Z: () => d }), n(388685);
var r = n(392711),
    i = n.n(r),
    l = n(570140),
    a = n(952537),
    o = n(405656),
    s = n(700366),
    c = n(416638),
    u = n(981631);
let d = {
    fetchMessages: function (e) {
        let { searchContext: t, searchTabs: n, searchQueryString: r, getLimit: u, onFetchStart: d, onFetchSuccess: p } = e,
            m = o.kG(r),
            f = o.$G(m),
            h = (0, c.s5)(t);
        null != h && o.jW(f, h);
        let g = s.Z.getSearchTabFetcher(t, f, r, n, u),
            _ = n.map((e) => (0, c.jj)(t, e, r));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: _
            }),
            null == d ||
                d({
                    searchContext: t,
                    searchQueryString: r,
                    searchQuery: f
                }),
            g.fetch(
                (e) => {
                    let { body: n } = e,
                        o = Object.entries(n.tabs);
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: h,
                        data: o.map((e) => {
                            var l, o, s;
                            let [u, d] = e,
                                p = (0, c.jj)(t, u, r),
                                m = d.cursor;
                            return {
                                id: p,
                                analyticsId: n.analytics_id,
                                totalResults: d.total_results,
                                cursor: null != m && i().isEmpty(m) ? null : m,
                                messages: d.messages,
                                channels: null != (l = d.channels) ? l : [],
                                threads: null != (o = d.threads) ? o : [],
                                members: (null != (s = d.members) ? s : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        o.forEach((e) => {
                            var r, i;
                            let [o, s] = e;
                            l.Z.dispatch({
                                type: 'SEARCH_FINISH',
                                searchId: (0, c.WJ)(t),
                                guildId: (0, c.s5)(t),
                                analyticsId: n.analytics_id,
                                totalResults: s.total_results,
                                channels: s.channels,
                                messages: s.messages,
                                threads: null != (r = s.threads) ? r : [],
                                members: (null != (i = s.members) ? i : []).map((e) => (0, a.Z)(e)),
                                hasError: !1,
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            });
                        }),
                        null == p ||
                            p({
                                searchContext: t,
                                tabEntries: o
                            });
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
