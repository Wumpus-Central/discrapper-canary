(n.d(t, { M: () => c }), n(388685));
var r = n(73800),
    i = n(619864),
    l = n(672041),
    a = n(981631);
let o = i.v + a.vpv,
    s = i.v / a.vpv;
function c(e) {
    let { totalResults: t, isSearching: n } = e,
        [c, u] = r.useState(t);
    r.useEffect(() => {
        n || u(t);
    }, [t, n]);
    let d = c > i.v + a.vpv,
        _ = (0, l.t)({ location: 'useSearchResultsPagination' });
    return {
        isPaginationTotalCountLimited: d && _,
        paginationTotalCount: Math.min(c, o),
        paginationMaxIndex: s
    };
}
