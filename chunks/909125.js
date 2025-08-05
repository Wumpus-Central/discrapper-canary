(n.d(t, { M: () => c }), n(388685));
var r = n(73800),
    i = n(619864),
    a = n(672041),
    o = n(981631);
let s = i.v + o.vpv,
    l = i.v / o.vpv;
function c(e) {
    let { totalResults: t, isSearching: n } = e,
        [c, u] = r.useState(t);
    r.useEffect(() => {
        n || u(t);
    }, [t, n]);
    let d = c > i.v + o.vpv,
        f = (0, a.t)({ location: 'useSearchResultsPagination' });
    return {
        isPaginationTotalCountLimited: d && f,
        paginationTotalCount: Math.min(c, s),
        paginationMaxIndex: l
    };
}
