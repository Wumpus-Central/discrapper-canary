n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(985018),
    o = n(38824);

function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "text-md/medium",
                className: o.Vf,
                children: t,
            }),
            n,
        ],
    });
}

function d(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: d,
        nameplatePreview: u,
    } = e;
    return (0, r.jsx)("div", {
        className: l()(o.UA, n),
        children: (0, r.jsxs)("div", {
            className: l()(o.yt, i),
            children: [
                (0, r.jsx)("div", {
                    className: o.Fp,
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(c, {
                                title: null != d ? d : a.intl.string(a.t.Zb06yP),
                                children: s,
                            }),
                            null != u
                                ? (0, r.jsx)(c, {
                                      title: a.intl.string(a.t["7KRt6R"]),
                                      children: u,
                                  })
                                : null,
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o.oB,
                    children: t,
                }),
            ],
        }),
    });
}
