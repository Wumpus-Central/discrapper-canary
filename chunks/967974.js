n.d(t, { Z: () => s }), n(388685), n(49124);
var r = n(647438),
    i = n(442837),
    l = n(607802),
    a = n(817190),
    o = n(981631);
function s(e) {
    let { searchContext: t } = e,
        [n, s] = r.useState(o.QIO.NEWEST),
        c = (0, i.e7)([a.Z], () => {
            let e = (0, l.Tm)(t);
            return a.Z.getSearchResultsQuery(e);
        }),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            JSON.stringify(u.current) !== JSON.stringify(c) &&
                (s(
                    (0, l.Vj)({
                        sort_by: null == c ? void 0 : c.sort_by,
                        sort_order: null == c ? void 0 : c.sort_order,
                    }),
                ),
                (u.current = c));
        }, [c]),
        {
            searchMode: n,
            setSearchMode: s,
        }
    );
}
