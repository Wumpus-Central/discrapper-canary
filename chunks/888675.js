n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(349288),
    r = n(606049),
    o = n(49418);
function c(e) {
    let {
        icon: t,
        iconNode: n,
        timestamp: s,
        timestampFormat: a,
        className: c,
        children: d,
        contentClassName: u,
        iconClassName: m,
        iconContainerClassName: x,
        timestampClassName: h,
        compact: g = !1,
        additionalContent: f,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(c, { [o.kL]: !0, [o.oE]: g, [o.E]: !g }),
        children: [
            null != n && (0, i.jsx)("div", { className: l()(o.zc, x), children: n }),
            null != t &&
                (0, i.jsx)("div", {
                    className: o.zc,
                    children: (0, i.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: l()(o.Kk, o.RK, m),
                        style: { backgroundImage: `url('${t}')` },
                    }),
                }),
            (0, i.jsxs)("div", {
                className: l()(u, o.Qs),
                children: [
                    (0, i.jsxs)("div", {
                        children: [d, null != s && (0, i.jsx)(r.A, { timestamp: s, timestampFormat: a, className: h })],
                    }),
                    f,
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
