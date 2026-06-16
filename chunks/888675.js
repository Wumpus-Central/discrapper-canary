t.d(s, { A: () => m });
var l = t(627968);
t(64700);
var n = t(503698),
    a = t.n(n),
    i = t(349288),
    r = t(606049),
    o = t(632194);
function c(e) {
    let {
        icon: s,
        iconNode: t,
        timestamp: n,
        timestampFormat: i,
        className: c,
        children: m,
        contentClassName: u,
        iconClassName: d,
        iconContainerClassName: h,
        timestampClassName: x,
        compact: N = !1,
        additionalContent: C,
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(c, { [o.kL]: !0, [o.oE]: N, [o.E]: !N }),
        children: [
            null != t && (0, l.jsx)("div", { className: a()(o.zc, h), children: t }),
            null != s &&
                (0, l.jsx)("div", {
                    className: o.zc,
                    children: (0, l.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: a()(o.Kk, o.RK, d),
                        style: { backgroundImage: `url('${s}')` },
                    }),
                }),
            (0, l.jsxs)("div", {
                className: a()(u, o.Qs),
                children: [
                    (0, l.jsxs)("div", {
                        children: [m, null != n && (0, l.jsx)(r.A, { timestamp: n, timestampFormat: i, className: x })],
                    }),
                    C,
                ],
            }),
        ],
    });
}
c.Action = (e) => {
    let { onClick: s, children: t } = e;
    return (0, l.jsxs)("span", {
        className: o.XI,
        children: ["\u2014", (0, l.jsx)(i.Anchor, { onClick: s, className: o.si, children: t })],
    });
};
let m = c;
