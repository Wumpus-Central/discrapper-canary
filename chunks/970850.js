(n.d(t, { Z: () => o }), n(388685), n(49124));
var r = n(73800),
    i = n(442837),
    l = n(518944),
    a = n(607802),
    s = n(981631);
function o(e) {
    let { searchContext: t } = e,
        [n, o] = r.useState(s.QIO.NEWEST),
        c = (0, i.e7)([l.Z], () => {
            let e = (0, a.Tm)(t);
            return l.Z.getSearchResultsQuery(e);
        }),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            JSON.stringify(u.current) !== JSON.stringify(c) &&
                (o(
                    (0, a.Vj)({
                        sort_by: null == c ? void 0 : c.sort_by,
                        sort_order: null == c ? void 0 : c.sort_order
                    })
                ),
                (u.current = c));
        }, [c]),
        {
            searchMode: n,
            setSearchMode: o
        }
    );
}
