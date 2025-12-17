n.d(t, { M: () => d });
var a = n(473749),
    r = n(31569),
    i = n(493646),
    l = n(881294),
    s = n(258971),
    o = n(133743),
    c = n(981631);
function d(e) {
    let { initialQuery: t = "" } = e,
        n = r.Z.useField("query");
    a.useEffect(() => r.Z.setState({ query: t }), [t]);
    let d = a.useCallback((e) => {
            r.Z.setState({ query: e });
        }, []),
        u = a.useCallback(() => {
            r.Z.setState({ query: "" });
        }, []),
        p = a.useCallback(() => {
            let e = (0, i.K)();
            (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: n,
                category: e.name,
                current_page: s.m_.HOME,
                category_id: e.id,
            }),
                (0, o.pR)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: p,
    };
}
