n.d(t, { Z: () => h }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(911969),
    s = n(739754),
    l = n(970184),
    c = n(197653),
    u = n(987106),
    d = n(568248),
    f = n(515067);
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
function m(e) {
    switch (e.type) {
        case o.re.BUTTON:
            return (0, r.jsx)(u.Z, _({}, e));
        case o.re.THUMBNAIL:
            return (0, r.jsx)(d.Z, _({}, e));
    }
}
function h(e) {
    let { components: t, accessory: n, renderComponents: i } = e,
        { message: u } = (0, l.CJ)(),
        [d, p] = (0, c.e4)(),
        _ = (0, c.$Y)(p),
        h = n.type === o.re.BUTTON;
    return (0, r.jsxs)("div", {
        className: f.section,
        ref: d,
        children: [
            (0, r.jsxs)("div", {
                className: f.children,
                children: [
                    (0, r.jsx)("div", {
                        className: a()(f.textChildren, { [f.verticallyCenterAlign]: h }),
                        children: i(t),
                    }),
                    (0, r.jsx)("div", {
                        className: a()(f.accessory, { [f.restrictWidth]: _ }),
                        children: m(n),
                    }),
                ],
            }),
            null != u
                ? (0, r.jsx)(s.ZP, {
                      message: u,
                      component: e,
                  })
                : null,
        ],
    });
}
