n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(28863),
    r = n(606049),
    o = n(224929);
function c(e) {
    let {
        icon: t,
        iconNode: n,
        timestamp: l,
        timestampFormat: a,
        className: c,
        children: d,
        contentClassName: u,
        iconClassName: m,
        iconContainerClassName: h,
        timestampClassName: g,
        compact: A = !1,
        additionalContent: p,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(c, { [o.kL]: !0, [o.oE]: A, [o.E]: !A }),
        children: [
            null != n && (0, i.jsx)("div", { className: s()(o.zc, h), children: n }),
            null != t &&
                (0, i.jsx)("div", {
                    className: o.zc,
                    children: (0, i.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: s()(o.Kk, o.RK, m),
                        style: { backgroundImage: `url('${t}')` },
                    }),
                }),
            (0, i.jsxs)("div", {
                className: s()(u, o.Qs),
                children: [
                    (0, i.jsxs)("div", {
                        children: [d, null != l && (0, i.jsx)(r.A, { timestamp: l, timestampFormat: a, className: g })],
                    }),
                    p,
                ],
            }),
        ],
    });
}
c.Action = function (e) {
    let { onClick: t, children: n } = e;
    return (0, i.jsxs)("span", {
        className: o.XI,
        children: ["\u2014", (0, i.jsx)(a.Anchor, { onClick: t, className: o.si, children: n })],
    });
};
let d = c;
