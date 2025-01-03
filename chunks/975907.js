t.d(n, {
    M: function () {
        return d;
    }
});
var a = t(192379),
    i = t(31569),
    r = t(493646),
    l = t(881294),
    o = t(258971),
    s = t(133743),
    c = t(981631);
function d(e) {
    let { initialQuery: n = '' } = e,
        t = i.Z.useField('query');
    a.useEffect(() => i.Z.setState({ query: n }), [n]);
    let d = a.useCallback((e) => {
            i.Z.setState({ query: e });
        }, []),
        u = a.useCallback(() => {
            i.Z.setState({ query: '' });
        }, []),
        m = a.useCallback(() => {
            let e = (0, r.K)();
            (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: t,
                category: e.name,
                current_page: o.m_.HOME,
                category_id: e.id
            }),
                (0, s.pR)({ query: t });
        }, [t]);
    return {
        searchQuery: t,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: m
    };
}
