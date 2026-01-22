n.d(t, {
    A: () => m,
    N: () => g,
});
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(827734),
    a = n(397927),
    o = n(854378),
    c = n(235986),
    u = n(652215),
    d = n(985018),
    h = n(413700),
    f = n(20976),
    p = n(473169);
function g(e) {
    let { text: t, buttonCta: i, onClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o._V, { src: n(431979) }),
            (0, r.jsx)(o.hE, {
                className: s()(p.QX, p.QB, f.tR),
                children: d.intl.string(d.t.eL5z0i),
            }),
            (0, r.jsx)(o.tK, {
                className: p.C2,
                children: d.intl.string(d.t.poAv63),
            }),
            (0, r.jsxs)(a.ZpM, {
                className: h.Nr,
                type: a.ZpM.Types.CUSTOM,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        className: h.q8,
                        src: n(133531),
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: h.dw,
                        src: n(610925),
                    }),
                    (0, r.jsxs)(c.A, {
                        className: h.p_,
                        direction: c.A.Direction.VERTICAL,
                        align: c.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, r.jsx)(a.Text, {
                                tag: "strong",
                                className: h.p8,
                                variant: "text-md/normal",
                                style: { color: l.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, r.jsx)("div", {
                                className: h.x6,
                                children: (0, r.jsx)(a.Button, {
                                    text: i,
                                    fullWidth: !0,
                                    onClick: u,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { text: t, buttonCta: n, theme: i = u.NJ8.DARK, onClick: s } = e;
    return (0, r.jsx)(o.Ay, {
        theme: i,
        children: (0, r.jsx)(g, {
            text: t,
            buttonCta: n,
            onClick: s,
        }),
    });
}
