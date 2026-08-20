n.d(t, { A: () => c });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(932793),
    u = n(763075);
function c(e) {
    let { onPageChange: t, offset: n, totalCount: a, pageSize: c, renderPageWrapper: o, className: d } = e,
        f = Math.floor(n / c) + 1,
        h = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, r.jsx)("div", {
        className: s()(u.k, d),
        children: (0, r.jsx)(i.m, {
            currentPage: f,
            totalCount: a,
            pageSize: c,
            onPageChange: h,
            maxVisiblePages: 5,
            renderPageWrapper: o,
        }),
    });
}
