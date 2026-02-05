n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(985018),
    o = n(38824);
function c(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Heading, { variant: "text-md/medium", className: o.Vf, children: t }), n],
    });
}
function d(e) {
    let {
        children: t,
        className: n,
        layoutClassName: s,
        profilePreview: a,
        profilePreviewTitle: d,
        nameplatePreview: u,
    } = e;
    return (0, i.jsx)("div", {
        className: r()(o.UA, n),
        children: (0, i.jsxs)("div", {
            className: r()(o.yt, s),
            children: [
                (0, i.jsx)("div", {
                    className: o.Fp,
                    children: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c, { title: d ?? l.intl.string(l.t.Zb06yP), children: a }),
                            null != u ? (0, i.jsx)(c, { title: l.intl.string(l.t["7KRt6R"]), children: u }) : null,
                        ],
                    }),
                }),
                (0, i.jsx)("div", { className: o.oB, children: t }),
            ],
        }),
    });
}
