n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(985018),
    o = n(38824);
function d(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.Heading, { variant: "text-md/medium", className: o.Vf, children: t }), n],
    });
}
function c(e) {
    let {
        children: t,
        className: n,
        layoutClassName: s,
        profilePreview: r,
        profilePreviewTitle: c,
        nameplatePreview: u,
        stickyPreview: _ = !0,
    } = e;
    return (0, i.jsx)("div", {
        className: l()(o.UA, n),
        children: (0, i.jsxs)("div", {
            className: l()(o.yt, s),
            children: [
                (0, i.jsx)("div", {
                    className: l()(o.Fp, _ && o.Oz),
                    children: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d, { title: c ?? a.intl.string(a.t.Zb06yP), children: r }),
                            null != u ? (0, i.jsx)(d, { title: a.intl.string(a.t.x5CoXR), children: u }) : null,
                        ],
                    }),
                }),
                (0, i.jsx)("div", { className: o.oB, children: t }),
            ],
        }),
    });
}
