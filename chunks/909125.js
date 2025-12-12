n.d(t, { M: () => o }), n(388685);
var r = n(473749),
    i = n(619864),
    l = n(981631);
let a = i.vU + l.vpv,
    s = i.vU / l.vpv;
function o(e) {
    let { totalResults: t, isSearching: n } = e,
        [o, c] = r.useState(t);
    return (
        r.useEffect(() => {
            n || c(t);
        }, [t, n]),
        {
            isPaginationTotalCountLimited: o > i.vU + l.vpv,
            paginationTotalCount: Math.min(o, a),
            paginationMaxIndex: s,
        }
    );
}
