n.d(t, { Z: () => E }), n(388685);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
    l = new Map();
function c(e) {
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
function u(e, t) {
    let n = l.get(e);
    return null == n ? null : t(n);
}
function d(e) {
    let { id: t, editorState: n } = e;
    c(t).editorState = n;
}
function f(e) {
    let { id: t } = e;
    c(t);
}
function _(e) {
    let { id: t } = e;
    return l.delete(t);
}
function p(e) {
    let { id: t, showBlocked: n } = e;
    c(t).showBlockedResults = n;
}
function h(e) {
    let { id: t } = e;
    c(t).showNoResultsAlt = Math.random() < s;
}
function m(e) {
    let { id: t, queryString: n, query: r, offset: i } = e,
        o = c(t);
    (o.searchResultsQueryString = n), (o.searchResultsQuery = r), (o.searchResultsOffset = null != i ? i : 0);
}
class g extends (r = i.ZP.Store) {
    getEditorState(e) {
        return u(e, (e) => e.editorState);
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = u(e, (e) => e.showBlockedResults)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = u(e, (e) => e.showNoResultsAlt)) && t;
    }
    getSearchResultsQueryString(e) {
        return u(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return u(e, (e) => e.searchResultsQuery);
    }
    getSearchResultsOffset(e) {
        return u(e, (e) => e.searchResultsOffset);
    }
}
a(g, "displayName", "SearchQueryStore");
let E = new g(o.Z, {
    SEARCH_RESULTS_QUERY_UPDATE: m,
    SEARCH_EDITOR_STATE_CLEAR: _,
    SEARCH_ENSURE_SEARCH_STATE: f,
    SEARCH_EDITOR_STATE_CHANGE: d,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: p,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: h,
});
