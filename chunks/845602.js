(n.d(t, {
    E: () => y,
    Z: () => C
}),
    n(388685));
var r = n(255367),
    a = n(73800),
    o = n(120356),
    l = n.n(o),
    s = n(866442),
    i = n(481060),
    c = n(957537),
    d = n(839008),
    u = n(797967),
    p = n(755641),
    m = n(742409),
    f = n(369509),
    g = n(101017),
    b = n(141006),
    _ = n(981631),
    h = n(131085),
    x = n(388032),
    j = n(606217),
    v = n(183375);
function C() {
    var e;
    let t = a.useMemo(() => Math.floor(Math.random() * b.tl.length), []),
        [n, o] = a.useState({
            primary_color: b.tl[t].start,
            secondary_color: b.tl[t].end
        }),
        { gradientStyle: d, gradientClassname: p } = (0, i.Icv)({
            primaryColor: (0, s.Rf)(n.primary_color),
            secondaryColor: (0, s.Rf)(n.secondary_color),
            tertiaryColor: void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)('div', {
                className: j.messageContainer,
                children: (0, r.jsx)(m.l, {
                    avatar: c.Z,
                    username: 'Cherry',
                    usernameStyle: d,
                    usernameClassName: l()(p, v.animateGradient),
                    message: x.intl.string(x.t['6OSasb'])
                })
            }),
            (0, r.jsx)(u.default, {
                defaultColor: _.p6O,
                colors: b.tl,
                value: n.primary_color,
                secondaryValue: null != (e = n.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var t, r;
                    return o(
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, n)),
                        (r = r = { primary_color: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t)
                    );
                },
                onChangeGradientColors: (e) =>
                    o({
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    }),
                isGradient: !0
            })
        ]
    });
}
function y(e) {
    let { guildId: t } = e,
        [n, o] = a.useState(h.x_.HEART),
        l = (0, g.Z)(),
        s = a.useMemo(
            () => ({
                unlockedBadges: l.unlockedBadges.slice(0, 10),
                lockedBadges: []
            }),
            [l]
        );
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)('div', {
                className: j.messageContainer,
                children: (0, r.jsx)(m.l, {
                    avatar: d.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: x.intl.string(x.t['6OSasb']),
                    decorations: (0, r.jsx)(f.S, {
                        guildId: t,
                        tag: 'GGEZ',
                        badge: n
                    })
                })
            }),
            (0, r.jsx)(p.g, {
                selectedBadge: n,
                onBadgeClicked: o,
                badgeCollection: s
            })
        ]
    });
}
