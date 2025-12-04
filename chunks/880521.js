n.d(t, { Y: () => s }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(117995),
    o = n(325380);
function s(e) {
    let { message: t, type: n } = e,
        s = null == t || 0 === t.length || null == n,
        [l, c] = i.useState(null != n ? n : "info"),
        [u, d] = i.useState(null != t ? t : "");
    return (
        i.useEffect(() => {
            null != n && c(n), null != t && d(t);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: s ? o.sectionHidden : o.section,
            children: (0, r.jsx)(a.M, {
                type: l,
                hidden: s,
                children: u,
            }),
        })
    );
}
