n.d(t, { _: () => s });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(36353);
function s(e) {
    let {
        bannerIcon: t,
        bannerHeader: n,
        bannerSubtext: l,
        textStyles: s,
        headerStyles: o,
        containerStyles: c,
        children: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: i()(a.Ew, c),
        children: [
            (0, r.jsxs)("div", {
                className: i()(a.lt, s),
                children: [
                    null != t &&
                        ("string" == typeof t
                            ? (0, r.jsx)("img", {
                                  src: t,
                                  alt: "",
                                  className: a.q3,
                              })
                            : t),
                    (0, r.jsxs)("div", {
                        className: a._M,
                        children: [
                            (0, r.jsx)("div", {
                                className: i()(a.U_, o),
                                children: n,
                            }),
                            null != l &&
                                (0, r.jsx)("div", {
                                    className: a.mi,
                                    children: l,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a.uu,
                children: u,
            }),
        ],
    });
}
