n.d(t, { Z: () => a });
var r = n(570140),
    i = n(607802);
let a = {
    addSearchHistoryItem: function (e, t) {
        let n = (0, i.BX)(e);
        null != n &&
            r.Z.dispatch({
                type: "SEARCH_HISTORY_WEB_ADD_ITEM",
                id: n,
                query: t,
            });
    },
    removeSearchHistoryItem: function (e, t) {
        let n = (0, i.BX)(e);
        null != n &&
            r.Z.dispatch({
                type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
                id: n,
                query: t,
            });
    },
    clearSearchHistory: function (e) {
        let t = (0, i.BX)(e);
        null != t &&
            r.Z.dispatch({
                type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
                id: t,
                autocompleteStateId: (0, i.Tm)(e),
            });
    },
    updateSearchEditorState: function (e, t) {
        let n = (0, i.Tm)(e);
        r.Z.dispatch({
            type: "SEARCH_EDITOR_STATE_CHANGE",
            id: n,
            editorState: t,
        });
    },
    clearSearchEditorState: function (e) {
        let t = (0, i.Tm)(e);
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "SEARCH_EDITOR_STATE_CLEAR",
                id: t,
            }),
        );
    },
    setShowBlockedResults: function (e, t) {
        let n = (0, i.Tm)(e);
        r.Z.dispatch({
            type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
            id: n,
            showBlocked: t,
        });
    },
    setShowNoResultsAlt: function (e) {
        let t = (0, i.Tm)(e);
        r.Z.dispatch({
            type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
            id: t,
        });
    },
    updateSearchResultsQuery: function (e, t, n, a) {
        let o = (0, i.Tm)(e);
        r.Z.dispatch({
            type: "SEARCH_RESULTS_QUERY_UPDATE",
            id: o,
            queryString: t,
            query: n,
            offset: a,
        });
    },
    updateSearchMode: function (e, t) {
        let n = (0, i.Tm)(e);
        r.Z.dispatch({
            type: "SEARCH_SEARCH_MODE_UPDATE",
            id: n,
            searchMode: t,
        });
    },
};
