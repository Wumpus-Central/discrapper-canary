n.d(t, { Z: () => I }), n(388685);
var r = n(392711),
    i = n.n(r),
    l = n(570140),
    a = n(603263),
    o = n(952537),
    s = n(405656),
    c = n(700366),
    u = n(903488),
    d = n(621365),
    p = n(416638),
    m = n(654427),
    f = n(298337),
    h = n(862825),
    g = n(981631);
function _(e) {
    let { searchContext: t, searchTabs: n, searchQueryString: r, getLimit: a, onFetchMessagesStart: h, onFetchMessagesSuccess: g } = e,
        _ = (0, p.jj)(t, n[0], r);
    if (u.Z.getIsFetching(_)) return !1;
    let b = s.kG(r),
        E = s.$G(b),
        y = (0, p.s5)(t);
    null != y && s.jW(E, y);
    let x = c.Z.getSearchTabFetcher(t, E, r, n, a),
        v = d.Z.getState(t, (e) => e.hasUserAddedTags());
    m.Z.incrementSearchCount(t, v), v && (0, f.ZT)({ searchContext: t });
    let O = n.map((e) => (0, p.jj)(t, e, r));
    return (
        l.Z.dispatch({
            type: 'SEARCH_MESSAGES_START',
            ids: O
        }),
        null == h ||
            h({
                searchContext: t,
                searchQueryString: r,
                searchQuery: E
            }),
        x.fetch(
            (e) => {
                let { body: n } = e,
                    a = Object.entries(n.tabs);
                l.Z.dispatch({
                    type: 'SEARCH_MESSAGES_SUCCESS',
                    guildId: y,
                    data: a.map((e) => {
                        var l, a, s;
                        let [c, u] = e,
                            d = (0, p.jj)(t, c, r),
                            m = u.cursor;
                        return {
                            id: d,
                            analyticsId: n.analytics_id,
                            totalResults: u.total_results,
                            cursor: null != m && i().isEmpty(m) ? null : m,
                            messages: u.messages,
                            channels: null != (l = u.channels) ? l : [],
                            threads: null != (a = u.threads) ? a : [],
                            members: (null != (s = u.members) ? s : []).map((e) => (0, o.Z)(e)),
                            doingHistoricalIndex: n.doing_deep_historical_index,
                            documentsIndexed: n.documents_indexed
                        };
                    })
                }),
                    a.forEach((e) => {
                        var r, i;
                        let [a, s] = e;
                        l.Z.dispatch({
                            type: 'SEARCH_FINISH',
                            searchId: (0, p.WJ)(t),
                            guildId: (0, p.s5)(t),
                            analyticsId: n.analytics_id,
                            totalResults: s.total_results,
                            channels: s.channels,
                            messages: s.messages,
                            threads: null != (r = s.threads) ? r : [],
                            members: (null != (i = s.members) ? i : []).map((e) => (0, o.Z)(e)),
                            hasError: !1,
                            doingHistoricalIndex: n.doing_deep_historical_index,
                            documentsIndexed: n.documents_indexed
                        });
                    }),
                    a.every((e) => {
                        let [t, n] = e;
                        return 0 === n.total_results || null == n.total_results;
                    }) && (0, f.Qb)({ searchContext: t }),
                    null == g || g();
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
}
function b(e) {
    return Math.min(e, h.sF);
}
function E(e) {
    return b(h.m$[e]);
}
function y(e) {
    return b(2 * h.m$[e]);
}
function x() {
    l.Z.dispatch({ type: 'SEARCH_MESSAGES_CLEAR_ALL' });
}
function v(e) {
    let { searchContext: t, searchQueryString: n } = e;
    d.Z.setState(t, (e) => e.setSearchResultsQuery(n));
}
function O(e) {
    if (e.type === g.aib.THREAD) return;
    x(), c.Z.cancelInFlightRequests(e), (0, f.tI)({ searchContext: e });
    let t = d.Z.getState(e, (e) => e.getQueryString()),
        n = d.Z.getState(e, (e) => e.isInitialSearchQuery())
            ? (function (e) {
                  switch (e.type) {
                      case g.aib.GUILD_CHANNEL:
                      case g.aib.CHANNEL:
                          return h.MD;
                      default:
                          return h.Mc;
                  }
              })(e)
            : h._$;
    _({
        searchContext: e,
        searchTabs: n,
        searchQueryString: t,
        getLimit: E,
        onFetchMessagesStart: v
    });
}
let C = i().debounce(O, 500);
function j(e) {
    let t = (0, p.WJ)(e),
        n = d.Z.getState(e, (e) => e.getQueryString(!0)),
        r = s.kG(n),
        i = s.g9(r, n.length - 1, n.length - 1);
    (0, a.u$)(t, r, i);
}
let S = i().debounce(j, 500),
    I = {
        clearSearchRecentMessages: function () {
            l.Z.dispatch({ type: 'SEARCH_RECENT_MESSAGES_CLEAR' });
        },
        fetchInitialMessages: O,
        fetchInitialMessagesDebounced: C,
        fetchNextMessages: function (e, t, n) {
            let r = d.Z.getState(e, (e) => e.getQueryString()),
                i = (0, p.jj)(e, t, r),
                l = u.Z.getHasNextPage(i),
                a = u.Z.getIsInitialFetchComplete(i);
            return (
                !!l &&
                !!a &&
                _({
                    searchContext: e,
                    searchTabs: [t],
                    searchQueryString: r,
                    getLimit: y,
                    onFetchMessagesStart: v,
                    onFetchMessagesSuccess: n
                })
            );
        },
        fetchMessages: _,
        syncAutocomplete: j,
        syncAutocompleteDebounced: S,
        clearSearch: x,
        addSearchHistoryItem: function (e, t) {
            if (e.type !== g.aib.DMS && e.type !== g.aib.GUILD) return;
            let n = (0, p.Tm)(e);
            l.Z.dispatch({
                type: 'SEARCH_HISTORY_ADD_ITEM',
                id: n,
                item: t
            });
        },
        removeSearchHistoryItem: function (e, t) {
            let n = (0, p.Tm)(e);
            l.Z.dispatch({
                type: 'SEARCH_HISTORY_REMOVE_ITEM',
                id: n,
                item: t
            });
        },
        clearSearchHistory: function (e) {
            let t = (0, p.Tm)(e);
            l.Z.dispatch({
                type: 'SEARCH_HISTORY_CLEAR_ITEMS',
                id: t
            });
        },
        openSearchScreen: function (e) {
            let t = (0, p.WJ)(e);
            l.Z.dispatch({
                type: 'SEARCH_SCREEN_OPEN',
                searchId: t
            });
        }
    };
