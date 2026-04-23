n.d(t, { A: () => i });
var a = n(627968),
    r = n(64700),
    l = n(158142),
    s = n(42754);
function i(e) {
    let { onPageChange: t, offset: n, totalCount: i, pageSize: u, renderPageWrapper: o } = e,
        c = Math.floor(n / u) + 1,
        d = r.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, a.jsx)("div", {
        className: s.k,
        children: (0, a.jsx)(l.m, {
            currentPage: c,
            totalCount: i,
            pageSize: u,
            onPageChange: d,
            maxVisiblePages: 5,
            renderPageWrapper: o,
        }),
    });
}
