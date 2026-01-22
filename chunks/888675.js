n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(449859),
    l = n(256883);

function c(e) {
    let {
        icon: t,
        iconNode: n,
        timestamp: i,
        timestampFormat: s,
        className: c,
        children: u,
        contentClassName: d,
        iconClassName: f,
        iconContainerClassName: p,
        timestampClassName: _,
        compact: h = !1,
        additionalContent: m,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c, {
            [l.kL]: !0,
            [l.oE]: h,
            [l.E]: !h,
        }),
        children: [
            null != n &&
                (0, r.jsx)("div", {
                    className: a()(l.zc, p),
                    children: n,
                }),
            null != t &&
                (0, r.jsx)("div", {
                    className: l.zc,
                    children: (0, r.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: a()(l.Kk, l.RK, f),
                        style: {
                            backgroundImage: "url('".concat(t, "')"),
                        },
                    }),
                }),
            (0, r.jsxs)("div", {
                className: a()(d, l.Qs),
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            u,
                            null != i &&
                                (0, r.jsx)(o.A, {
                                    timestamp: i,
                                    timestampFormat: s,
                                    className: _,
                                }),
                        ],
                    }),
                    m,
                ],
            }),
        ],
    });
}
c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, r.jsxs)("span", {
        className: l.XI,
        children: [
            "—",
            (0, r.jsx)(s.MzZ, {
                onClick: t,
                className: l.si,
                children: n,
            }),
        ],
    });
};
let u = c;
