r.d(t, {
    E: () => x,
    Z: () => C
}),
    r(388685);
var n = r(200651),
    o = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(866442),
    s = r(481060),
    c = r(957537),
    u = r(839008),
    d = r(797967),
    p = r(755641),
    f = r(742409),
    g = r(369509),
    b = r(141006),
    m = r(981631),
    _ = r(116175),
    j = r(680278),
    y = r(388032),
    O = r(606217),
    h = r(183375);
function C() {
    let e = o.useMemo(() => Math.floor(Math.random() * b.tl.length), []),
        [t, r] = o.useState({
            primary_color: b.tl[e].start,
            secondary_color: b.tl[e].end
        }),
        a = (0, s.Icv)((0, l.Rf)(t.primary_color), (0, l.Rf)(t.secondary_color), void 0, 'username');
    return (0, n.jsxs)('div', {
        className: O.container,
        children: [
            (0, n.jsx)('div', {
                className: O.messageContainer,
                children: (0, n.jsx)(f.l, {
                    avatar: c.Z,
                    username: 'Cherry',
                    usernameStyle: a.text.gradientStyle,
                    usernameClassName: i()(a.text.gradientClassName, a.gradient.gradientClassName, h.gradientAlwaysAnimate),
                    message: y.NW.string(j.Z.eTHkQU)
                })
            }),
            (0, n.jsx)(d.default, {
                defaultColor: m.p6O,
                colors: b.tl,
                value: t.primary_color,
                secondaryValue: t.secondary_color,
                onChange: (e) => {
                    var n, o;
                    return r(
                        ((n = (function (e) {
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
                        })({}, t)),
                        (o = o = { primary_color: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        n)
                    );
                },
                onChangeGradientColors: (e) =>
                    r({
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    }),
                isGradient: !0
            })
        ]
    });
}
function x(e) {
    let { guildId: t } = e,
        [r, a] = o.useState(_.ZD.HEART);
    return (0, n.jsxs)('div', {
        className: O.container,
        children: [
            (0, n.jsx)('div', {
                className: O.messageContainer,
                children: (0, n.jsx)(f.l, {
                    avatar: u.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: y.NW.string(j.Z.eTHkQU),
                    decorations: (0, n.jsx)(g.S, {
                        guildId: t,
                        tag: 'GGEZ',
                        badge: r
                    })
                })
            }),
            (0, n.jsx)(p.g, {
                selectedBadge: r,
                onBadgeClicked: a
            })
        ]
    });
}
