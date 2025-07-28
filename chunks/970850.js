(n.d(t, { Z: () => c }), n(388685), n(49124));
var r = n(73800),
    i = n(442837),
    l = n(518944),
    a = n(607802),
    o = n(981631);
function c(e) {
    let { searchId: t } = e,
        [n, c] = r.useState(o.QIO.NEWEST),
        s = (0, i.e7)([l.Z], () => l.Z.getSearchResultsQuery(t)),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            JSON.stringify(u.current) !== JSON.stringify(s) &&
                (c(
                    (0, a.Vj)({
                        sort_by: null == s ? void 0 : s.sort_by,
                        sort_order: null == s ? void 0 : s.sort_order
                    })
                ),
                (u.current = s));
        }, [s]),
        {
            searchMode: n,
            setSearchMode: c
        }
    );
}
