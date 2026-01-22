n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(985018),
    l = n(38824);

function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "text-md/medium",
                className: l.Vf,
                children: t,
            }),
            n,
        ],
    });
}

function u(e) {
    let {
            children: t,
            className: n,
            layoutClassName: i,
            profilePreview: s,
            profilePreviewTitle: u,
            nameplatePreview: d,
        } = e,
        f = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c, {
                        title: null != u ? u : o.intl.string(o.t.Zb06yP),
                        children: s,
                    }),
                    null != d
                        ? (0, r.jsx)(c, {
                              title: o.intl.string(o.t["7KRt6R"]),
                              children: d,
                          })
                        : null,
                ],
            });
    return (0, r.jsx)("div", {
        className: a()(l.UA, n),
        children: (0, r.jsxs)("div", {
            className: a()(l.yt, i),
            children: [
                (0, r.jsx)("div", {
                    className: l.Fp,
                    children: f(),
                }),
                (0, r.jsx)("div", {
                    className: l.oB,
                    children: t,
                }),
            ],
        }),
    });
}
