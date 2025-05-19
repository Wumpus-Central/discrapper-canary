r.d(t, { Z: () => b }), r(388685);
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    o = r(911969),
    a = r(739754),
    c = r(970184),
    s = r(197653),
    u = r(987106),
    d = r(568248),
    p = r(944183);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function b(e) {
    let { components: t, accessory: r, renderComponents: l } = e,
        { message: b } = (0, c.CJ)(),
        [O, m] = (0, s.e4)(),
        y = (0, s.$Y)(m),
        j = r.type === o.re.BUTTON;
    return (0, n.jsxs)('div', {
        className: p.section,
        ref: O,
        children: [
            (0, n.jsxs)('div', {
                className: p.children,
                children: [
                    (0, n.jsx)('div', {
                        className: i()(p.textChildren, { [p.verticallyCenterAlign]: j }),
                        children: l(t)
                    }),
                    (0, n.jsx)('div', {
                        className: i()(p.accessory, { [p.restrictWidth]: y }),
                        children: (function (e) {
                            switch (e.type) {
                                case o.re.BUTTON:
                                    return (0, n.jsx)(u.Z, f({}, e));
                                case o.re.THUMBNAIL:
                                    return (0, n.jsx)(d.Z, f({}, e));
                            }
                        })(r)
                    })
                ]
            }),
            null != b
                ? (0, n.jsx)(a.ZP, {
                      message: b,
                      component: e
                  })
                : null
        ]
    });
}
