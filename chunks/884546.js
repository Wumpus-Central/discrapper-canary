n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(534514),
    r = n(985018),
    o = n(233641);
function d(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.D, { variant: "text-md/medium", className: o.Vf, children: t }), n],
    });
}
function u(e) {
    let {
        children: t,
        className: n,
        layoutClassName: s,
        profilePreview: a,
        profilePreviewTitle: u,
        nameplatePreview: c,
        stickyPreview: g = !0,
    } = e;
    return (0, i.jsx)("div", {
        className: l()(o.UA, n),
        children: (0, i.jsxs)("div", {
            className: l()(o.yt, s),
            children: [
                (0, i.jsx)("div", {
                    className: l()(o.Fp, g && o.Oz),
                    children: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d, { title: u ?? r.intl.string(r.t.Zb06yP), children: a }),
                            null != c ? (0, i.jsx)(d, { title: r.intl.string(r.t.x5CoXR), children: c }) : null,
                        ],
                    }),
                }),
                (0, i.jsx)("div", { className: o.oB, children: t }),
            ],
        }),
    });
}
