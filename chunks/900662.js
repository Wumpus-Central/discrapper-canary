"use strict";
n.d(t, { A: () => f, N: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(827734),
    a = n(359778),
    o = n(834730),
    c = n(821609),
    d = n(854378),
    u = n(235986),
    _ = n(652215),
    h = n(985018),
    m = n(592743),
    g = n(653307),
    p = n(818050);
function A(e) {
    let { text: t, buttonCta: s, onClick: _ } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d._V, { src: n(431979) }),
            (0, i.jsx)(d.hE, { className: r()(p.QX, p.QB, g.tR), children: h.intl.string(h.t.eL5z0i) }),
            (0, i.jsx)(d.tK, { className: p.C2, children: h.intl.string(h.t.poAv63) }),
            (0, i.jsxs)(a.Z, {
                className: m.Nr,
                type: a.Z.Types.CUSTOM,
                children: [
                    (0, i.jsx)("img", { alt: "", className: m.q8, src: n(133531) }),
                    (0, i.jsx)("img", { alt: "", className: m.dw, src: n(610925) }),
                    (0, i.jsxs)(u.A, {
                        className: m.p_,
                        direction: u.A.Direction.VERTICAL,
                        align: u.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, i.jsx)(o.E, {
                                tag: "strong",
                                className: m.p8,
                                variant: "text-md/normal",
                                style: { color: l.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, i.jsx)("div", {
                                className: m.x6,
                                children: (0, i.jsx)(c.$, { text: s, fullWidth: !0, onClick: _ }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { text: t, buttonCta: n, theme: s = _.NJ8.DARK, onClick: r } = e;
    return (0, i.jsx)(d.Ay, { theme: s, children: (0, i.jsx)(A, { text: t, buttonCta: n, onClick: r }) });
}
