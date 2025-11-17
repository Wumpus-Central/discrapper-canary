n.d(t, { Z: () => m }), n(388685);
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
    f = n(695796);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    switch (e.type) {
        case o.re.BUTTON:
            return (0, r.jsx)(u.Z, p({}, e));
        case o.re.THUMBNAIL:
            return (0, r.jsx)(d.Z, p({}, e));
    }
}
function m(e) {
    let { components: t, accessory: n, renderComponents: i } = e,
        { message: u } = (0, l.CJ)(),
        [d, _] = (0, c.e4)(),
        p = (0, c.$Y)(_),
        m = n.type === o.re.BUTTON;
    return (0, r.jsxs)("div", {
        className: f.section,
        ref: d,
        children: [
            (0, r.jsxs)("div", {
                className: f.children,
                children: [
                    (0, r.jsx)("div", {
                        className: a()(f.textChildren, { [f.verticallyCenterAlign]: m }),
                        children: i(t),
                    }),
                    (0, r.jsx)("div", {
                        className: a()(f.accessory, { [f.restrictWidth]: p }),
                        children: h(n),
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
