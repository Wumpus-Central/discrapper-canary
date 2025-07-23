(n.d(t, { Z: () => c }), n(388685), n(49124));
var r = n(73800),
    i = n(442837),
    l = n(603263),
    o = n(768119),
    a = n(981631);
function c(e) {
    let { searchId: t } = e,
        [n, c] = r.useState(a.QIO.NEWEST),
        s = (0, i.e7)([o.Z], () => o.Z.getQuery(t)),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            JSON.stringify(u.current) !== JSON.stringify(s) &&
                (c(
                    l.Vj({
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
