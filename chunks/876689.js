n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    u = n(932793),
    i = n(790978);
function c(e) {
    let { onPageChange: t, offset: n, totalCount: s, pageSize: c, renderPageWrapper: o, className: d } = e,
        f = Math.floor(n / c) + 1,
        h = l.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, r.jsx)("div", {
        className: a()(i.k, d),
        children: (0, r.jsx)(u.m, {
            currentPage: f,
            totalCount: s,
            pageSize: c,
            onPageChange: h,
            maxVisiblePages: 5,
            renderPageWrapper: o,
        }),
    });
}
