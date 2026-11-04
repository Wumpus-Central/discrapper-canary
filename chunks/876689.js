var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(662203),
    u = n(763075);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onPageChange: t, offset: n, totalCount: a, pageSize: o, renderPageWrapper: c, className: d } = e,
                f = Math.floor(n / o) + 1,
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
                    pageSize: o,
                    onPageChange: h,
                    maxVisiblePages: 5,
                    renderPageWrapper: c,
                }),
            });
        },
    },
);
