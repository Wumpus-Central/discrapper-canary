(n.d(t, {
    E: () => C,
    Z: () => y
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    i = n(866442),
    l = n(481060),
    c = n(957537),
    u = n(839008),
    d = n(797967),
    p = n(755641),
    f = n(742409),
    m = n(369509),
    g = n(101017),
    b = n(141006),
    _ = n(981631),
    h = n(131085),
    j = n(388032),
    x = n(606217),
    v = n(183375);
function y() {
    var e;
    let t = o.useMemo(() => Math.floor(Math.random() * b.tl.length), []),
        [n, a] = o.useState({
            primary_color: b.tl[t].start,
            secondary_color: b.tl[t].end
        }),
        { gradientStyle: u, gradientClassname: p } = (0, l.Icv)({
            primaryColor: (0, i.Rf)(n.primary_color),
            secondaryColor: (0, i.Rf)(n.secondary_color),
            tertiaryColor: void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsxs)('div', {
        className: x.container,
        children: [
            (0, r.jsx)('div', {
                className: x.messageContainer,
                children: (0, r.jsx)(f.l, {
                    avatar: c.Z,
                    username: 'Cherry',
                    usernameStyle: u,
                    usernameClassName: s()(p, v.animateGradient),
                    message: j.intl.string(j.t['6OSasb'])
                })
            }),
            (0, r.jsx)(d.default, {
                defaultColor: _.p6O,
                colors: b.tl,
                value: n.primary_color,
                secondaryValue: null != (e = n.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var t, r;
                    return a(
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
        [n, a] = o.useState(h.x_.HEART),
        s = (0, g.Z)(),
        i = o.useMemo(
            () => ({
                unlockedBadges: s.unlockedBadges.slice(0, 10),
                lockedBadges: []
            }),
            [s]
        );
    return (0, r.jsxs)('div', {
        className: x.container,
        children: [
            (0, r.jsx)('div', {
                className: x.messageContainer,
                children: (0, r.jsx)(f.l, {
                    avatar: u.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: j.intl.string(j.t['6OSasb']),
                    decorations: (0, r.jsx)(m.S, {
                        guildId: t,
                        tag: 'GGEZ',
                        badge: n
                    })
                })
            }),
            (0, r.jsx)(p.g, {
                selectedBadge: n,
                onBadgeClicked: a,
                badgeCollection: i
            })
        ]
    });
}
