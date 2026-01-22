n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(155718),
    o = n(594808),
    l = n(207963),
    c = n(953756),
    u = n(292366),
    d = n(324877),
    f = n(996017);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e) {
    switch (e.type) {
        case s.I5.BUTTON:
            return (0, r.jsx)(u.A, _({}, e));
        case s.I5.THUMBNAIL:
            return (0, r.jsx)(d.A, _({}, e));
    }
}

function m(e) {
    let { components: t, accessory: n, renderComponents: i } = e,
        { message: u } = (0, l.jc)(),
        [d, p] = (0, c.zn)(),
        _ = (0, c.Hq)(p),
        m = n.type === s.I5.BUTTON;
    return (0, r.jsxs)("div", {
        className: f.uW,
        ref: d,
        children: [
            (0, r.jsxs)("div", {
                className: f.Y_,
                children: [
                    (0, r.jsx)("div", {
                        className: a()(f.zt, {
                            [f.uf]: m,
                        }),
                        children: i(t),
                    }),
                    (0, r.jsx)("div", {
                        className: a()(f.LP, {
                            [f.HQ]: _,
                        }),
                        children: h(n),
                    }),
                ],
            }),
            null != u
                ? (0, r.jsx)(o.Ay, {
                      message: u,
                      component: e,
                  })
                : null,
        ],
    });
}
