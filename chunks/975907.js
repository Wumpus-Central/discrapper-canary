n.d(t, { M: () => d });
var r = n(192379),
    i = n(31569),
    a = n(493646),
    l = n(881294),
    s = n(258971),
    o = n(133743),
    c = n(981631);
function d(e) {
    let { initialQuery: t = '' } = e,
        n = i.Z.useField('query');
    r.useEffect(() => i.Z.setState({ query: t }), [t]);
    let d = r.useCallback((e) => {
            i.Z.setState({ query: e });
        }, []),
        u = r.useCallback(() => {
            i.Z.setState({ query: '' });
        }, []),
        p = r.useCallback(() => {
            let e = (0, a.K)();
            (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: n,
                category: e.name,
                current_page: s.m_.HOME,
                category_id: e.id
            }),
                (0, o.pR)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: p
    };
}
