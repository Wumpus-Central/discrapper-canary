n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(155718),
    s = n(594808),
    o = n(207963),
    c = n(953756),
    u = n(292366),
    d = n(324877),
    m = n(996017);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function p(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: p } = (0, o.jc)(),
        [h, b] = (0, c.zn)(),
        g = (0, c.Hq)(b),
        x = n.type === i.I5.BUTTON;
    return (0, r.jsxs)("div", {
        className: m.uW,
        ref: h,
        children: [
            (0, r.jsxs)("div", {
                className: m.Y_,
                children: [
                    (0, r.jsx)("div", {
                        className: a()(m.zt, {
                            [m.uf]: x,
                        }),
                        children: l(t),
                    }),
                    (0, r.jsx)("div", {
                        className: a()(m.LP, {
                            [m.HQ]: g,
                        }),
                        children: (function (e) {
                            switch (e.type) {
                                case i.I5.BUTTON:
                                    return (0, r.jsx)(u.A, f({}, e));
                                case i.I5.THUMBNAIL:
                                    return (0, r.jsx)(d.A, f({}, e));
                            }
                        })(n),
                    }),
                ],
            }),
            null != p
                ? (0, r.jsx)(s.Ay, {
                      message: p,
                      component: e,
                  })
                : null,
        ],
    });
}
