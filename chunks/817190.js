n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = 0.05,
    l = new Map(),
    c = !1;
function u(e) {
    var t;
    let n =
        null != (t = l.get(e))
            ? t
            : {
                  editorState: null,
                  showBlockedResults: !1,
                  showNoResultsAlt: !1,
                  searchResultsQueryString: null,
                  searchResultsQuery: null,
                  searchResultsOffset: null,
              };
    return l.set(e, n), n;
}
function d(e, t) {
    let n = l.get(e);
    return null == n ? null : t(n);
}
function f(e) {
    let { id: t, editorState: n } = e;
    u(t).editorState = n;
}
function _(e) {
    let { id: t } = e;
    u(t);
}
function p(e) {
    let { id: t } = e;
    return l.delete(t);
}
function h(e) {
    let { id: t, showBlocked: n } = e;
    u(t).showBlockedResults = n;
}
function m(e) {
    let { id: t } = e;
    u(t).showNoResultsAlt = Math.random() < s;
}
function g(e) {
    let { id: t, queryString: n, query: r, offset: i } = e,
        a = u(t);
    (a.searchResultsQueryString = n), (a.searchResultsQuery = r), (a.searchResultsOffset = null != i ? i : 0);
}
function E() {
    c = !0;
}
class b extends (r = i.ZP.Store) {
    getEditorState(e) {
        return d(e, (e) => e.editorState);
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = d(e, (e) => e.showBlockedResults)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = d(e, (e) => e.showNoResultsAlt)) && t;
    }
    getSearchResultsQueryString(e) {
        return d(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return d(e, (e) => e.searchResultsQuery);
    }
    getSearchResultsOffset(e) {
        return d(e, (e) => e.searchResultsOffset);
    }
    getIsSearchTokensInitialized() {
        return c;
    }
}
o(b, "displayName", "SearchQueryStore");
let y = new b(a.Z, {
    SEARCH_RESULTS_QUERY_UPDATE: g,
    SEARCH_EDITOR_STATE_CLEAR: p,
    SEARCH_ENSURE_SEARCH_STATE: _,
    SEARCH_EDITOR_STATE_CHANGE: f,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: h,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: m,
    SEARCH_TOKENS_REFRESHED: E,
});
