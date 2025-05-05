r.d(t, {
    E: () => x,
    Z: () => C
}),
    r(388685);
var n = r(255367),
    o = r(73800),
    a = r(120356),
    l = r.n(a),
    i = r(866442),
    s = r(481060),
    c = r(957537),
    u = r(839008),
    d = r(797967),
    p = r(755641),
    f = r(742409),
    b = r(369509),
    g = r(141006),
    m = r(981631),
    _ = r(131085),
    j = r(680278),
    O = r(388032),
    y = r(606217),
    h = r(183375);
function C() {
    var e;
    let t = o.useMemo(() => Math.floor(Math.random() * g.tl.length), []),
        [r, a] = o.useState({
            primary_color: g.tl[t].start,
            secondary_color: g.tl[t].end
        }),
        { gradientStyle: u, gradientClassname: p } = (0, s.Icv)({
            primaryColor: (0, i.Rf)(r.primary_color),
            secondaryColor: (0, i.Rf)(r.secondary_color),
            tertiaryColor: void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0
        });
    return (0, n.jsxs)('div', {
        className: y.container,
        children: [
            (0, n.jsx)('div', {
                className: y.messageContainer,
                children: (0, n.jsx)(f.l, {
                    avatar: c.Z,
                    username: 'Cherry',
                    usernameStyle: u,
                    usernameClassName: l()(p, h.animateGradient),
                    message: O.intl.string(j.default.eTHkQU)
                })
            }),
            (0, n.jsx)(d.default, {
                defaultColor: m.p6O,
                colors: g.tl,
                value: r.primary_color,
                secondaryValue: null != (e = r.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var t, n;
                    return a(
                        ((t = (function (e) {
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
                        })({}, r)),
                        (n = n = { primary_color: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                },
                onChangeGradientColors: (e) =>
                    a({
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
        [r, a] = o.useState(_.x_.HEART);
    return (0, n.jsxs)('div', {
        className: y.container,
        children: [
            (0, n.jsx)('div', {
                className: y.messageContainer,
                children: (0, n.jsx)(f.l, {
                    avatar: u.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: O.intl.string(j.default.eTHkQU),
                    decorations: (0, n.jsx)(b.S, {
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
