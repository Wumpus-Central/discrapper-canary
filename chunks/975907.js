n.d(t, {
    M: function () {
        return d;
    }
});
var i = n(192379),
    a = n(31569),
    r = n(493646),
    l = n(881294),
    o = n(258971),
    s = n(133743),
    c = n(981631);
function d(e) {
    let { initialQuery: t = '' } = e,
        n = a.Z.useField('query');
    i.useEffect(() => a.Z.setState({ query: t }), [t]);
    let d = i.useCallback((e) => {
            a.Z.setState({ query: e });
        }, []),
        u = i.useCallback(() => {
            a.Z.setState({ query: '' });
        }, []),
        m = i.useCallback(() => {
            let e = (0, r.K)();
            (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: n,
                category: e.name,
                current_page: o.m_.HOME,
                category_id: e.id
            }),
                (0, s.pR)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: m
    };
}
