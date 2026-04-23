n.d(t, { A: () => _ });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(155718),
    s = n(594808),
    o = n(207963),
    d = n(953756),
    c = n(292366),
    u = n(324877),
    m = n(746544);
function _(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: _ } = (0, o.jc)(),
        [p, h] = (0, d.zn)(),
        A = (0, d.Hq)(h),
        C = n.type === i.I5.BUTTON;
    return (0, a.jsxs)("div", {
        className: m.uW,
        ref: p,
        children: [
            (0, a.jsxs)("div", {
                className: m.Y_,
                children: [
                    (0, a.jsx)("div", { className: r()(m.zt, { [m.uf]: C }), children: l(t) }),
                    (0, a.jsx)("div", {
                        className: r()(m.LP, { [m.HQ]: A }),
                        children: (function (e) {
                            switch (e.type) {
                                case i.I5.BUTTON:
                                    return (0, a.jsx)(c.A, { ...e });
                                case i.I5.THUMBNAIL:
                                    return (0, a.jsx)(u.A, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != _ ? (0, a.jsx)(s.Ay, { message: _, component: e }) : null,
        ],
    });
}
