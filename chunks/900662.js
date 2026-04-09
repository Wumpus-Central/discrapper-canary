"use strict";
n.d(t, { A: () => m, N: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(827734),
    a = n(397927),
    o = n(854378),
    c = n(235986),
    d = n(652215),
    u = n(985018),
    h = n(86711),
    _ = n(435115),
    p = n(885106);
function g(e) {
    let { text: t, buttonCta: s, onClick: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o._V, { src: n(431979) }),
            (0, i.jsx)(o.hE, { className: r()(p.QX, p.QB, _.tR), children: u.intl.string(u.t.eL5z0i) }),
            (0, i.jsx)(o.tK, { className: p.C2, children: u.intl.string(u.t.poAv63) }),
            (0, i.jsxs)(a.ZpM, {
                className: h.Nr,
                type: a.ZpM.Types.CUSTOM,
                children: [
                    (0, i.jsx)("img", { alt: "", className: h.q8, src: n(133531) }),
                    (0, i.jsx)("img", { alt: "", className: h.dw, src: n(610925) }),
                    (0, i.jsxs)(c.A, {
                        className: h.p_,
                        direction: c.A.Direction.VERTICAL,
                        align: c.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, i.jsx)(a.Text, {
                                tag: "strong",
                                className: h.p8,
                                variant: "text-md/normal",
                                style: { color: l.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, i.jsx)("div", {
                                className: h.x6,
                                children: (0, i.jsx)(a.Button, { text: s, fullWidth: !0, onClick: d }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { text: t, buttonCta: n, theme: s = d.NJ8.DARK, onClick: r } = e;
    return (0, i.jsx)(o.Ay, { theme: s, children: (0, i.jsx)(g, { text: t, buttonCta: n, onClick: r }) });
}
