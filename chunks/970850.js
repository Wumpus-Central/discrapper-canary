(n.d(t, { Z: () => l }), n(388685), n(49124));
var r = n(73800),
    i = n(442837),
    a = n(518944),
    o = n(607802),
    s = n(981631);
function l(e) {
    let { searchId: t } = e,
        [n, l] = r.useState(s.QIO.NEWEST),
        c = (0, i.e7)([a.Z], () => a.Z.getSearchResultsQuery(t)),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            JSON.stringify(u.current) !== JSON.stringify(c) &&
                (l(
                    (0, o.Vj)({
                        sort_by: null == c ? void 0 : c.sort_by,
                        sort_order: null == c ? void 0 : c.sort_order
                    })
                ),
                (u.current = c));
        }, [c]),
        {
            searchMode: n,
            setSearchMode: l
        }
    );
}
