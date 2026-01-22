n.d(t, {
    RU: () => c,
    SQ: () => u,
    mb: () => o,
}),
    n(228524);
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(397927),
    s = n(100411);
let o = 16;

function c(e) {
    let { description: t, name: n, icon: r, onNavigate: c, className: u, missingNavIcon: E } = e;
    return (0, l.jsxs)(i.DUT, {
        onClick: c,
        className: a()(s.ol, null != c && s.xO, u),
        children: [
            null != r &&
                (0, l.jsx)("div", {
                    className: s.bl,
                    children: r,
                }),
            null != n &&
                (0, l.jsx)("div", {
                    className: s.NR,
                    children: n,
                }),
            (0, l.jsx)("div", {
                className: s.uV,
                children: t,
            }),
            null != c &&
                (0, l.jsx)("div", {
                    className: s.Rp,
                    children: (0, l.jsx)(i.uhT, {
                        size: "custom",
                        width: o,
                        height: o,
                    }),
                }),
            null == c &&
                null != E &&
                (0, l.jsx)("div", {
                    className: s.Rp,
                    children: E,
                }),
        ],
    });
}

function u(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", {
        className: s.Fz,
        children: t,
    });
}
