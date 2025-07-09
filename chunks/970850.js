(n.d(t, { Z: () => s }), n(388685), n(49124));
var r = n(73800),
    i = n(442837),
    l = n(603263),
    a = n(768119),
    o = n(981631);
function s(e) {
    let { searchId: t } = e,
        [n, s] = r.useState(o.QIO.NEWEST),
        c = (0, i.e7)([a.Z], () => a.Z.getQuery(t)),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            JSON.stringify(u.current) !== JSON.stringify(c) &&
                (s(
                    l.Vj({
                        sort_by: null == c ? void 0 : c.sort_by,
                        sort_order: null == c ? void 0 : c.sort_order
                    })
                ),
                (u.current = c));
        }, [c]),
        {
            searchMode: n,
            setSearchMode: s
        }
    );
}
