n.d(t, { M: () => c }), n(388685);
var r = n(473749),
    i = n(619864),
    l = n(154579),
    a = n(981631);
let s = i.vU + a.vpv,
    o = i.vU / a.vpv;
function c(e) {
    let { totalResults: t, isSearching: n } = e,
        [c, d] = r.useState(t);
    r.useEffect(() => {
        n || d(t);
    }, [t, n]);
    let u = c > i.vU + a.vpv,
        p = (0, l.nd)({ location: "useSearchResultsPagination" });
    return {
        isPaginationTotalCountLimited: u && !p,
        paginationTotalCount: Math.min(c, s),
        paginationMaxIndex: o,
    };
}
