n.d(t, { M: () => c }), n(388685);
var r = n(647438),
    i = n(619864),
    l = n(672041),
    a = n(981631);
let o = i.vU + a.vpv,
    s = i.vU / a.vpv;
function c(e) {
    let { totalResults: t, isSearching: n } = e,
        [c, u] = r.useState(t);
    r.useEffect(() => {
        n || u(t);
    }, [t, n]);
    let d = c > i.vU + a.vpv,
        p = (0, l.t)({ location: "useSearchResultsPagination" });
    return {
        isPaginationTotalCountLimited: d && p,
        paginationTotalCount: Math.min(c, o),
        paginationMaxIndex: s,
    };
}
