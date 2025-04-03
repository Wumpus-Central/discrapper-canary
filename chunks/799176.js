n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(642128),
    c = n(481060),
    l = n(100527),
    u = n(906732),
    d = n(284539),
    f = n(406561),
    p = n(814322),
    m = n(178043),
    g = n(477839),
    b = n(499152);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let h = {
    [g.Vx.DEFAULT]: b.cursorDefault,
    [g.Vx.CAT]: b.cursorCat,
    [g.Vx.SWORD]: b.cursorSword,
    [g.Vx.PIZZA]: b.cursorPizza
};
function x(e) {
    var t;
    let [n, o] = (0, s.useState)(!1),
        x = (0, s.useCallback)((e) => o(e), []);
    (0, f.Z)(x);
    let { analyticsLocations: N } = (0, u.ZP)(l.Z.CLICKER_GAME),
        [v] = (0, d.Z)(g.yN.CURSORS),
        O = null != (t = v.selectedCursor) ? t : g.Vx.DEFAULT,
        j = (0, c.Yzy)(n, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: i.config.gentle
        });
    return (0, r.jsx)(u.Gt, {
        value: N,
        children: (0, r.jsxs)('div', {
            className: a()(b.container, h[O]),
            children: [
                (0, r.jsx)('div', {
                    className: b.background,
                    children: (0, r.jsx)('div', { className: b.backgroundGradient })
                }),
                j((t, n) =>
                    (0, r.jsx)(i.animated.div, {
                        style: t,
                        className: b.animationContainer,
                        children: n ? (0, r.jsx)(m.Z, y({}, e)) : (0, r.jsx)(p.Z, y({}, e))
                    })
                )
            ]
        })
    });
}
