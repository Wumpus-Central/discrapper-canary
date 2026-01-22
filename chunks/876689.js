n.d(t, {
    A: () => s,
});
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(876989);

function s(e) {
    let { onPageChange: t, offset: n, totalCount: s, pageSize: o, renderPageWrapper: c } = e,
        u = Math.floor(n / o) + 1,
        E = r.useCallback(
            (e) => {
                t(e - 1);
            },
            [t],
        );
    return (0, l.jsx)("div", {
        className: i.k,
        children: (0, l.jsx)(a.mgR, {
            currentPage: u,
            totalCount: s,
            pageSize: o,
            onPageChange: E,
            maxVisiblePages: 5,
            renderPageWrapper: c,
        }),
    });
}
