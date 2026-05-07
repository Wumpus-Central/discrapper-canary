t.d(s, { A: () => m });
var n = t(627968);
t(64700);
var a = t(503698),
    l = t.n(a),
    i = t(349288),
    r = t(606049),
    o = t(632194);
function c(e) {
    let {
        icon: s,
        iconNode: t,
        timestamp: a,
        timestampFormat: i,
        className: c,
        children: m,
        contentClassName: u,
        iconClassName: d,
        iconContainerClassName: h,
        timestampClassName: g,
        compact: x = !1,
        additionalContent: N,
    } = e;
    return (0, n.jsxs)("div", {
        className: l()(c, { [o.kL]: !0, [o.oE]: x, [o.E]: !x }),
        children: [
            null != t && (0, n.jsx)("div", { className: l()(o.zc, h), children: t }),
            null != s &&
                (0, n.jsx)("div", {
                    className: o.zc,
                    children: (0, n.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: l()(o.Kk, o.RK, d),
                        style: { backgroundImage: `url('${s}')` },
                    }),
                }),
            (0, n.jsxs)("div", {
                className: l()(u, o.Qs),
                children: [
                    (0, n.jsxs)("div", {
                        children: [m, null != a && (0, n.jsx)(r.A, { timestamp: a, timestampFormat: i, className: g })],
                    }),
                    N,
                ],
            }),
        ],
    });
}
c.Action = (e) => {
    let { onClick: s, children: t } = e;
    return (0, n.jsxs)("span", {
        className: o.XI,
        children: ["\u2014", (0, n.jsx)(i.Anchor, { onClick: s, className: o.si, children: t })],
    });
};
let m = c;
