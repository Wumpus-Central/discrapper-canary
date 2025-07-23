(r.d(t, {
    E: () => C,
    Z: () => v
}),
    r(388685));
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    s = r(866442),
    l = r(481060),
    c = r(957537),
    u = r(839008),
    d = r(797967),
    p = r(755641),
    m = r(742409),
    f = r(369509),
    _ = r(141006),
    b = r(981631),
    g = r(131085),
    j = r(388032),
    x = r(606217),
    y = r(183375);
function v() {
    var e;
    let t = o.useMemo(() => Math.floor(Math.random() * _.tl.length), []),
        [r, a] = o.useState({
            primary_color: _.tl[t].start,
            secondary_color: _.tl[t].end
        }),
        { gradientStyle: u, gradientClassname: p } = (0, l.Icv)({
            primaryColor: (0, s.Rf)(r.primary_color),
            secondaryColor: (0, s.Rf)(r.secondary_color),
            tertiaryColor: void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, n.jsxs)('div', {
        className: x.container,
        children: [
            (0, n.jsx)('div', {
                className: x.messageContainer,
                children: (0, n.jsx)(m.l, {
                    avatar: c.Z,
                    username: 'Cherry',
                    usernameStyle: u,
                    usernameClassName: i()(p, y.animateGradient),
                    message: j.intl.string(j.t['6OSasb'])
                })
            }),
            (0, n.jsx)(d.default, {
                defaultColor: b.p6O,
                colors: _.tl,
                value: r.primary_color,
                secondaryValue: null != (e = r.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var t, n;
                    return a(
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
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
function C(e) {
    let { guildId: t } = e,
        [r, a] = o.useState(g.x_.HEART);
    return (0, n.jsxs)('div', {
        className: x.container,
        children: [
            (0, n.jsx)('div', {
                className: x.messageContainer,
                children: (0, n.jsx)(m.l, {
                    avatar: u.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: j.intl.string(j.t['6OSasb']),
                    decorations: (0, n.jsx)(f.S, {
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
