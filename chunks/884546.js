n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(397927),
    r = n(985018),
    o = n(851834);
function c(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.Heading, { variant: "text-md/medium", className: o.Vf, children: t }), n],
    });
}
function d(e) {
    let {
        children: t,
        className: n,
        layoutClassName: s,
        profilePreview: l,
        profilePreviewTitle: d,
        nameplatePreview: u,
    } = e;
    return (0, i.jsx)("div", {
        className: a()(o.UA, n),
        children: (0, i.jsxs)("div", {
            className: a()(o.yt, s),
            children: [
                (0, i.jsx)("div", {
                    className: o.Fp,
                    children: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c, { title: d ?? r.intl.string(r.t.Zb06yP), children: l }),
                            null != u ? (0, i.jsx)(c, { title: r.intl.string(r.t.x5CoXR), children: u }) : null,
                        ],
                    }),
                }),
                (0, i.jsx)("div", { className: o.oB, children: t }),
            ],
        }),
    });
}
