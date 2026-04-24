t.d(s, { A: () => m });
var a = t(627968);
t(64700);
var l = t(503698),
    n = t.n(l),
    i = t(349288),
    r = t(606049),
    o = t(632194);
function c(e) {
    let {
        icon: s,
        iconNode: t,
        timestamp: l,
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
        className: n()(c, { [o.kL]: !0, [o.oE]: x, [o.E]: !x }),
        children: [
            null != t && (0, a.jsx)("div", { className: n()(o.zc, h), children: t }),
            null != s &&
                (0, a.jsx)("div", {
                    className: o.zc,
                    children: (0, a.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: n()(o.Kk, o.RK, u),
                        style: { backgroundImage: `url('${s}')` },
                    }),
                }),
            (0, a.jsxs)("div", {
                className: n()(d, o.Qs),
                children: [
                    (0, a.jsxs)("div", {
                        children: [m, null != l && (0, a.jsx)(r.A, { timestamp: l, timestampFormat: i, className: g })],
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
