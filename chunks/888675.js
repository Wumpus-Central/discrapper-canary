t.d(s, { A: () => m });
var a = t(627968);
t(64700);
var n = t(503698),
    l = t.n(n),
    i = t(349288),
    r = t(449859),
    o = t(632194);
function c(e) {
    let {
        icon: s,
        iconNode: t,
        timestamp: n,
        timestampFormat: i,
        className: c,
        children: m,
        contentClassName: d,
        iconClassName: u,
        iconContainerClassName: h,
        timestampClassName: g,
        compact: x = !1,
        additionalContent: A,
    } = e;
    return (0, a.jsxs)("div", {
        className: l()(c, { [o.kL]: !0, [o.oE]: x, [o.E]: !x }),
        children: [
            null != t && (0, a.jsx)("div", { className: l()(o.zc, h), children: t }),
            null != s &&
                (0, a.jsx)("div", {
                    className: o.zc,
                    children: (0, a.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: l()(o.Kk, o.RK, u),
                        style: { backgroundImage: `url('${s}')` },
                    }),
                }),
            (0, a.jsxs)("div", {
                className: l()(d, o.Qs),
                children: [
                    (0, a.jsxs)("div", {
                        children: [m, null != n && (0, a.jsx)(r.A, { timestamp: n, timestampFormat: i, className: g })],
                    }),
                    A,
                ],
            }),
        ],
    });
}
c.Action = (e) => {
    let { onClick: s, children: t } = e;
    return (0, a.jsxs)("span", {
        className: o.XI,
        children: ["—", (0, a.jsx)(i.Anchor, { onClick: s, className: o.si, children: t })],
    });
};
let m = c;
