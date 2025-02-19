r.d(t, { Z: () => O }), r(47120);
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(911969),
    a = r(739754),
    c = r(970184),
    s = r(197653),
    u = r(987106),
    d = r(861529),
    p = r(568248),
    b = r(266363);
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
function O(e) {
    let { components: t, accessory: r } = e,
        { message: l } = (0, c.CJ)(),
        [O, y] = (0, s.e4)(),
        m = (0, s.$Y)(y),
        j = r.type === o.re.BUTTON;
    return (0, n.jsxs)('div', {
        className: b.section,
        ref: O,
        children: [
            (0, n.jsxs)('div', {
                className: b.children,
                children: [
                    (0, n.jsx)('div', {
                        className: i()(b.textChildren, { [b.centerAlign]: j }),
                        children: t.map((e) => (0, n.jsx)(d.Z, f({}, e), e.id))
                    }),
                    (0, n.jsx)('div', {
                        className: i()(b.accessory, { [b.restrictWidth]: m }),
                        children: (function (e) {
                            switch (e.type) {
                                case o.re.BUTTON:
                                    return (0, n.jsx)(u.Z, f({}, e));
                                case o.re.THUMBNAIL:
                                    return (0, n.jsx)(p.Z, f({}, e));
                            }
                        })(r)
                    })
                ]
            }),
            null != l
                ? (0, n.jsx)(a.ZP, {
                      message: l,
                      component: e
                  })
                : null
        ]
    });
}
